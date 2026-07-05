const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, '../dist/hceballos-reformas/browser');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) {
    return results;
  }
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const htmlFiles = walk(browserDir);

if (htmlFiles.length === 0) {
  console.error(`No HTML files found in ${browserDir}. Make sure the build was successful.`);
  process.exit(1);
}

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Calculate relative depth from browserDir
  const relativePath = path.relative(browserDir, filePath);
  const depth = relativePath === '' ? 0 : relativePath.split(path.sep).length - 1;
  const baseHref = depth === 0 ? './' : '../'.repeat(depth);
  
  console.log(`Processing ${relativePath} (depth: ${depth}, baseHref: ${baseHref})`);
  
  // 1. Replace base href tag with dynamic base href script
  const dynamicBaseHref = `<script>
    (function() {
      var host = window.location.hostname;
      var path = window.location.pathname;
      var base = '/';
      if (host.indexOf('googleapis.com') !== -1 || path.indexOf('/www.hceballos.com') === 0) {
        var segments = path.split('/');
        if (segments.length > 1 && segments[1]) {
          base = '/' + segments[1] + '/';
        }
      }
      document.write('<base href="' + base + '">');
    })();
  </script>`;
  content = content.replace(/<base\s+href="[^"]*">/gi, dynamicBaseHref);
  
  // 2. Replace absolute internal routes to relative index.html routes
  content = content
    .replace(/href="\/contacto"/g, 'href="contacto/index.html"')
    .replace(/href="\/contacto\/index\.html"/g, 'href="contacto/index.html"')
    .replace(/href="\/galeria"/g, 'href="galeria/index.html"')
    .replace(/href="\/galeria\/index\.html"/g, 'href="galeria/index.html"')
    .replace(/href="\/"/g, 'href="index.html"')
    .replace(/href="\/index\.html"/g, 'href="index.html"');

  // 3. Replace absolute asset paths to relative paths (remove leading slash)
  content = content
    .replace(/src="\/images\//g, 'src="images/')
    .replace(/src="\/logo-original\.png"/g, 'src="logo-original.png"')
    .replace(/href="\/favicon\.(ico|svg)"/g, 'href="favicon.$1"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Post-build processing completed successfully!');
