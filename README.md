# Notion Homepage Clone

## Overview

A source-backed recreation of the Notion homepage. The implementation keeps
the supplied single-file HTML capture as the visual source of truth and serves
it through a minimal Next.js App Router shell.

## Features

- Notion hero navigation, headline, CTA controls, avatar rail, and artwork.
- Inline hero board artwork and company logo wall.
- AI workspace Bento cards with the supplied illustrations.
- Testimonial cards, statistics strip, CTA, and footer.
- Native image lifecycle handling for deterministic Bento rendering.
- Responsive behavior inherited from the captured reference document.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind-compatible Next.js project structure
- Self-contained HTML/CSS and inline reference assets

## Assets

The page reuses the supplied `reference.html` document, including its inline
WebP artwork, SVGs, font declarations, DOM structure, and design tokens. No
artwork is redrawn or replaced with placeholders.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Screenshots

The supplied reference screenshot is the visual QA baseline. Temporary
comparison screenshots and pixel-difference images are intentionally excluded
from version control; the reproducible QA procedure is documented in
[`docs/visual-qa.md`](docs/visual-qa.md).

## Architecture

```text
app/
├── layout.tsx       # App Router metadata and document shell
└── page.tsx         # Redirects the root route to the reference document
public/
├── favicon.ico
└── reference.html   # Supplied source-backed homepage capture
docs/
└── visual-qa.md     # Rendering and parity validation notes
```

## Future Improvements

- Add automated screenshot regression checks to CI.
- Add a controlled viewport matrix for desktop, tablet, and mobile QA.
- Replace the redirect shell with a typed route if the reference capture is
  later decomposed into maintainable React sections without changing pixels.

## Acknowledgements

Visual content and reference artifacts were supplied for this recreation.
