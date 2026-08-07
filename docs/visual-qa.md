# Visual QA Notes

The homepage is served from `public/reference.html`, which is the supplied
single-file capture of the reference page. The Next.js App Router entrypoint
redirects `/` to that document so the captured DOM, CSS, inline artwork, and
font declarations remain intact.

## Rendering checks

- Chromium viewport: 1278px CSS width.
- Full-page capture performed against the saved HTML and localhost page.
- Bento artwork inspected individually for source, natural dimensions,
  completion state, computed visibility, opacity, display, and rendered size.
- The eight Bento images use native eager loading and synchronous decoding;
  no scroll simulation, artificial delay, or screenshot-only JavaScript is
  required.
- `npm run build` is the required pre-commit validation.

## Source fidelity

The page intentionally reuses the supplied inline data-URI assets and source
DOM instead of redrawing artwork or replacing it with approximations.
