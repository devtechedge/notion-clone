# Architecture

The project keeps a deliberately thin App Router shell around the supplied
reference document.

```text
request → app/page.tsx → /reference.html → native DOM/CSS/assets → browser paint
```

`app/layout.tsx` owns document metadata and the semantic HTML shell. The root
route redirects to `public/reference.html`, preserving the captured markup and
its source-backed assets instead of translating artwork into a new component
system.

## Rendering pipeline

1. Next.js serves the static shell and public files.
2. The browser loads the captured document and its inline styles and assets.
3. Bento artwork uses native eager loading and synchronous decoding where the
   reference requires deterministic first paint.
4. Visual QA captures the same route at a fixed viewport for comparison.

This arrangement keeps the visual surface stable, auditable, and easy to
compare against the supplied source.
