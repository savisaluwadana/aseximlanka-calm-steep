# A. S. Exim Lanka

Digital home for A. S. Exim Lanka, a Sri Lankan origin house focused on premium Ceylon tea, bespoke blends, private-label programs, island spices, and wellness experiences.

## Development

```bash
npm install
npm run dev
```

The local Vite server runs the React application with hot reload enabled.

## Production build

```bash
npm run build
npm run preview
```

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- GSAP for restrained motion
- Radix UI primitives where interaction requires them

## Brand direction

The interface is designed as an editorial luxury origin-house experience rather than a generic ecommerce template. The visual language uses deep Ceylon green, warm ivory, restrained brass tones, serif-led typography, large-format origin photography, generous whitespace, and minimal functional iconography.

## Structure

- `src/pages` — primary site experiences
- `src/components` — shared navigation, brand, footer, and interaction components
- `public` — product, origin, spice, wellness, favicon, and social imagery
- `src/assets` — supporting brand imagery and visual accents

## Quality checks

Before shipping changes:

```bash
npm run lint
npm run build
```

Keep imagery intentional, avoid generic UI card patterns, and prefer editorial hierarchy over decorative interface chrome.
