# Design System Strategy: The Digital Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Blueprint."** 

We are moving away from the generic "SaaS dashboard" aesthetic. Instead, we are treating the renovation app as a living architectural document. This design system bridges the gap between the precision of technical drawings and the luxury of high-end editorial magazines. By leveraging the **Manrope** typeface for headlines, we evoke a sense of geometric modernism, while **Inter** provides the utilitarian clarity required for complex renovation data. 

The layout breaks the rigid, "boxed-in" web standard through **intentional asymmetry**. We use large, expansive white spaces—reminiscent of unrolled vellum—interrupted by razor-sharp typography and structural blue accents. Elements should feel like they are "drafted" onto the screen, using layered surfaces to create depth rather than heavy outlines.

---

2. Colors
Our palette is rooted in the "Architectural Blue" and "Correctional Red."

### The Palette (Material Design Tokens)
*   **Primary (`#004ac6`):** Our structural ink. Used for primary actions and brand presence.
*   **Secondary (`#bb0112`):** Our annotation color. Reserved for critical updates, alerts, or high-priority calls-to-action.
*   **Neutral Surfaces:** From `surface-container-lowest` (`#ffffff`) to `surface-dim` (`#d9d9e5`).

### The "No-Line" Rule
**Prohibit the use of 1px solid borders for sectioning content.** Standard grids look cheap; we achieve structure through tonal shifts. Define boundaries by placing a `surface-container-low` card against a `background` (`#faf8ff`). The contrast is felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of blueprint sheets. 
*   **Base:** `background`
*   **Sections:** `surface-container-low`
*   **Cards/Primary Interaction:** `surface-container-lowest` (Pure white)
Each inner container should use a tier shift to define its importance. This "nested depth" replaces the need for dividers.

### The "Glass & Gradient" Rule
To add "soul" to the technical aesthetic, use subtle gradients on primary CTAs—transitioning from `primary` (`#004ac6`) to `primary_container` (`#2563eb`). For floating desktop panels (like toolbars), apply **Glassmorphism**: use `surface` colors at 80% opacity with a 20px backdrop-blur.

---

## 3. Typography
Typography is our primary tool for conveying authority.

*   **Display & Headlines (Manrope):** Use `display-lg` and `headline-lg` to create editorial impact. Manrope’s geometric nature should feel like a title block on a construction plan. Use `0.02em` letter spacing for headlines to increase the "premium" feel.
*   **Body & Labels (Inter):** Inter handles the heavy lifting of data. It is neutral and highly legible. Use `body-md` for standard descriptions and `label-sm` for technical annotations.
*   **The Multi-Language Toggle:** The ES/EN toggle should be treated as a structural element. Use `label-md` in all-caps with increased tracking (`0.1em`) to make it feel like a professional drafting notation.

---

## 4. Elevation & Depth
In this design system, depth is a function of light and layering, not shadows alone.

*   **The Layering Principle:** Achieve lift by stacking. A `surface-container-lowest` card sitting on a `surface-container-high` background provides a natural, sophisticated elevation.
*   **Ambient Shadows:** If an element must float (e.g., a modal or floating action button), use a shadow tinted with `on-surface` (`#191b23`) at **6% opacity** with a **32px blur**. This mimics natural ambient light on white paper.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use a "Ghost Border": the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background. No border. `md` (0.375rem) corner radius.
*   **Secondary (Annotation):** `secondary` background used sparingly for "Emergency" actions (e.g., Stop Work, Reject Quote).
*   **Tertiary:** Transparent background with `primary` text. Use for low-priority desktop actions.

### The Language Switcher (ES/EN)
A custom desktop component. A pill-shaped `surface-container-high` track with a `surface-container-lowest` "sliding" indicator. This must be positioned in the top-right "Utility Zone" of the blueprint.

### Input Fields
Avoid "boxed" inputs. Use a bottom-only `outline-variant` (the "Drafting Line") that thickens and changes to `primary` on focus. This aligns with the architectural blueprint aesthetic.

### Cards & Lists (The "No Divider" Rule)
*   **Forbid the use of divider lines.**
*   To separate list items, use **Vertical White Space** (16px–24px) or a subtle hover state shift to `surface-container-low`.
*   Cards should use `surface-container-lowest` with a "Ghost Border" to feel like high-quality paper sheets.

### Custom Component: The "Blueprint Overlay"
For photo galleries or renovation progress: Use a semi-transparent `primary` blue wash over images, with white `label-sm` text overlays, mimicking technical annotations on top of a site photo.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is 80px, try a right margin of 120px to create editorial tension.
*   **Do** use `secondary_container` (`#e02928`) for subtle highlights in progress bars or "Critical Path" items.
*   **Do** ensure the EN/ES toggle persists in the global header for constant accessibility.

### Don't:
*   **Don't** use black (`#000000`). Use `on_surface` (`#191b23`) for all text to keep the "ink" look natural.
*   **Don't** use sharp 90-degree corners. Even in an architectural app, use the `sm` (0.125rem) or `md` (0.375rem) roundedness scale to make the UI feel modern and tactile.
*   **Don't** clutter the grid. If a screen feels busy, increase the whitespace. The blueprint aesthetic thrives on "breathing room."