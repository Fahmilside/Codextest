---
name: tbs-brand-system-guardian
description: Enforce and apply The Blue Space brand system (colour + typography) when working inside a Claude Code repository on frontend code, design tokens, CSS, theme files, templates, and UI reviews. Use this skill when Claude Code needs to inspect a codebase, update colours and typography, replace off-brand values, align heading hierarchy, improve readability, add implementation-ready tokens, or prepare minimal patches that match the Blue Space visual system.
---

# The Blue Space Brand System Guardian

Use this skill inside Claude Code when editing a repository containing UI code, storefront templates, stylesheets, design tokens, component libraries, CMS-rendered pages, or theme configuration.

Convert The Blue Space colour and typography guidelines into safe, repo-aware implementation decisions. Prefer minimal, accurate changes that preserve existing architecture while bringing the codebase back to the approved brand system.

## Core operating principle

**Respect the repository first, then enforce the brand system.**

- Reuse existing token architecture, naming conventions, and styling patterns.
- Avoid introducing a second token system when one already exists.
- Do not make broad cosmetic rewrites when a targeted patch will solve the issue.
- If the repo already has approved equivalents, map to them instead of hardcoding new values.
- Keep changes implementation-ready for engineers, not aspirational design notes.

## Non-negotiable brand rules

- Treat `#071A2D` as the highest-priority purchase action colour.
- Use `#071A2D` only for primary purchase-related actions (Add to Cart, Buy Now, checkout, cart UI).
- Do not spread `#071A2D` across unrelated decorative UI.
- Use **Manrope** as the default site font. Use Arial only as a practical backup.
- Keep body copy readable, well-spaced, and high-contrast.
- Preserve heading hierarchy in order without skipping levels.
- Prefer combinations that meet at least WCAG 2.1 AA for normal text.

## Approved colour palette

### Core brand

- `brand.blue`: `#354E66`
- `brand.blue.light`: `#6989A3`
- `brand.blue.dark`: `#071A2D`

### Supporting

- `support.bluegrey.100`: `#C5D0D8`
- `support.grey.050`: `#F2F2F2`
- `support.offwhite`: `#F7F8F9`

### Secondary families (100 / 200 / 300 / 400)

- **Red:** `#F7F5F5` / `#E8E1E1` / `#A77F7A` / `#804A43`
- **Brown:** `#EFEDE8` / `#E5E1D8` / `#C1B69A` / `#685D41`
- **Green:** `#F3F4ED` / `#C7CEBF` / `#84896E` / `#3E4E46`
- **Charcoal:** `#EAF0F0` / `#C8CFD0` / `#58676E` / `#2E4853`
- **Orange:** `#F7EDE3` / `#EAC7A4` / `#B87F4A` / `#734314`

### Neutral greys

- `grey.300` `#E0E0E0` — dividers, card backgrounds, tertiary text, hints
- `grey.400` `#BDBDBD` — borders, disabled buttons, muted states
- `grey.600` `#757575` — secondary text, icons, labels
- `grey.900` `#212121` — primary text on light surfaces when needed

### Semantic state colours

| State | Dark | Main | Light |
|---|---|---|---|
| Info | `#125DA6` | `#1776D3` | `#509FEC` |
| Warning | `#C05802` | `#ED6C02` | `#FD8F35` |
| Error | `#A82424` | `#D22D2D` | `#DB5757` |
| Success | `#27682A` | `#3FAB45` | `#6AC86F` |

## Typography system

### Base

- Base size: `16px` (`1rem = 16px`)
- Primary font: `Manrope, Arial, sans-serif`
- Primary text colour: `#071A2D`
- Default body weight: `400` / bold: `700`

### Supported fonts (priority order)

1. **Manrope** — headings and body text
2. **Arial** — backup when Manrope is unavailable
3. **Times** — only for intentional editorial/secondary serif mode
4. **Shelby** — display only (logos, decorative headings); never body text

Do not introduce Times or Shelby into standard product UI unless the task explicitly calls for that variant.

### Heading hierarchy

Maintain `H1 > H2 > H3 > H4/H5` in order.

Desktop-first reference:

| Tag | Size | Weight | Line-height |
|---|---|---|---|
| `H1` | `3rem` / `48px` | `800` | `1.25` |
| `H2` | `2rem` / `32px` | `700` | `1.20` |
| `H3` | `1.5rem` / `24px` | `600` | `1.40` |
| `H4/H5` | `1.25rem` / `20px` | `500` | `1.50` |

Acceptable variants: `H2` at weight `600`; `H3` at weight `500`; `H1` uppercase or capitalised depending on house style; `H4/H5` minimum `18px`.

### Body text

Standard UI/product content:
- body: `1rem`–`1.125rem` (`16px`–`18px`)
- line-height: `1.5`–`1.6`
- consistent paragraph spacing

Long-form/blog content:
- body: `1rem`–`1.125rem`
- line-height: `1.6`–`1.8`

### Small and micro text

- **small** (captions, footnotes, legal): `0.75rem` / `12px`, weight `400`, line-height `1.4`
- **micro** (copyright only): `0.625rem` / `10px`, weight `400`, line-height `1.4`

Do not reduce product-critical information to micro text.

### Responsive typography

**≥ 992px:** H1 `48px` · H2 `32px` · H3 `24px` · H4/H5 `20px` · body `18px` · body strong/link `20px / 700` · small `12px` · micro `10px`

**< 992px:** H1 `36px` · H2 `28px` · H3 `22px` · H4/H5 `18px` · body `16px` · body strong/link `16px / 700` · small `12px` · micro `10px`

## Hover and interaction rules

Blue interaction set:
- default: `#354E66`
- hover: `#2F465C`
- active / pressed: `#2A3E50`

When exact hover values are not defined for another approved colour, darken subtly.

## Repository workflow

1. **Identify the styling system** — CSS variables, SCSS maps, Tailwind config, theme files, token JSON, typography scales, component props, utility classes, design-system packages.
2. **Search for existing definitions** before changing component files. Update the source token / shared utility if that is the established pattern.
3. **Trace each issue to the narrowest safe change.** One token instead of 20 duplicated hex values. One text primitive instead of many component overrides.
4. **Preserve semantic naming.** Do not rename stable tokens unless the task specifically requires refactoring.
5. **Patch, then verify surface impact** — hover, focus, disabled, active, contrast, heading order, body readability, cart/purchase flow.
6. **Summarise the change in repo language** — files touched, values replaced, any follow-up risk.

## Codebase decision rules

### Repo already has tokens or theme primitives
- Reuse existing naming style.
- Map existing colour/typography tokens to approved values.
- Remove off-brand hardcoded values only where safe.
- Avoid introducing duplicate aliases unless needed for backwards compatibility.

### Repo has no token system
Create a minimal one only if necessary. Prefer small, practical additions (CSS custom properties, small token object, Tailwind extension). Do not build a large design-token framework unless explicitly asked.

### Component fix
Update only the relevant component and any directly dependent styles. Keep the patch small. Preserve spacing, layout, and content unless the issue is clearly brand-system related.

### Repo-wide cleanup
Identify repeat offenders. Group by semantic misuse: purchase CTA, generic buttons, disabled UI, borders, state colours, headings, body copy, captions, links. Prefer systematic replacements. Flag ambiguous values for product or design confirmation.

## Semantic mapping

### Colour
- primary purchase action → `#071A2D`
- general brand interactive blue → `#354E66`
- hover on blue interactive → `#2F465C`
- active on blue interactive → `#2A3E50`
- informational text or links → info blue set
- warning → orange set
- error or destructive → red set
- success or confirmation → green set
- disabled or muted → neutral greys
- secondary surfaces → supporting colours and low-saturation secondary tones

### Typography
- app/storefront base font → `Manrope, Arial, sans-serif`
- main page title → `H1`
- section titles → `H2`
- subsection titles → `H3`
- minor section labels → `H4/H5`
- default body → `16px` mobile, `18px` desktop
- legal, captions, helper text → `12px`
- ultra-small metadata → `10px` only when unavoidable

## Flag and correct

- Unapproved blues used for purchase-critical CTAs
- `#071A2D` used decoratively outside purchase/cart flows
- Missing hover states on buttons or linked elements
- Disabled states using saturated colours instead of neutral greys
- State colours used with the wrong meaning
- Low-contrast text/background combinations
- Repeated hardcoded hex values where the repo already uses tokens
- Headings that skip levels or flatten hierarchy
- Body text below approved readable sizes without a strong reason
- Inconsistent line-height that harms readability
- Shelby or Times used for dense UI/body text
- Introduction of new palette or type values without a clear brand reason

## Output format

### Implementation tasks
- concise summary of what changed
- files touched
- the exact patch or code
- any accessibility or regression note

### Review tasks
- compliant
- not compliant
- exact replacements
- whether a shared token, text primitive, or theme file should be updated instead

### Migration tasks
- token mapping plan
- files likely affected
- safe rollout order
- any values needing manual review

## Example patch style

```css
:root {
  --color-brand-blue: #354E66;
  --color-brand-blue-hover: #2F465C;
  --color-brand-blue-active: #2A3E50;
  --color-purchase-primary: #071A2D;
  --color-border-muted: #BDBDBD;
  --color-text-secondary: #757575;

  --font-family-base: Manrope, Arial, sans-serif;
  --font-size-body-mobile: 1rem;
  --font-size-body-desktop: 1.125rem;
  --font-size-h1-desktop: 3rem;
  --font-size-h1-mobile: 2.25rem;
  --line-height-body: 1.5;
}
```

Or a token object:

```ts
export const theme = {
  colors: {
    brandBlue: '#354E66',
    brandBlueHover: '#2F465C',
    brandBlueActive: '#2A3E50',
    purchasePrimary: '#071A2D',
  },
  typography: {
    fontFamilyBase: 'Manrope, Arial, sans-serif',
    h1: { desktop: '3rem', mobile: '2.25rem', weight: 800, lineHeight: 1.25 },
    h2: { desktop: '2rem', mobile: '1.75rem', weight: 700, lineHeight: 1.2 },
    body: { desktop: '1.125rem', mobile: '1rem', weight: 400, lineHeight: 1.5 },
    small: { size: '0.75rem', weight: 400, lineHeight: 1.4 },
  },
};
```

Adapt naming to the repository's conventions.

## Final checklist

- [ ] Purchase-critical actions use the correct primary colour
- [ ] Cart and checkout remain tied to the primary blue system
- [ ] Hover states exist and are visible
- [ ] Disabled states are neutral and readable
- [ ] Semantic state colours match intent
- [ ] Text contrast is acceptable
- [ ] Manrope is the primary UI font with a safe fallback
- [ ] Heading hierarchy is preserved
- [ ] Body sizes and line-height are readable at each breakpoint
- [ ] No unnecessary architecture churn
- [ ] Patch is small, safe, and implementation-ready

## Response style

Be direct, repository-aware, and decisive.

- Prefer exact replacements over theory.
- Explain tradeoffs only when they affect implementation.
- Recommend one default approach.
- Keep notes short enough for an engineer to apply immediately.
