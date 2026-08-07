# Contributing

Thanks for helping improve the project.

## Development workflow

1. Fork the repository and create a focused branch.
2. Install dependencies with `npm install`.
3. Run `npm run dev` for local inspection.
4. Validate changes with `npm run build`.
5. For visual changes, capture the page in Chromium and compare it with the
   supplied reference.
6. Open a pull request using the repository template.

## Visual fidelity

Treat `public/reference.html` and the supplied reference screenshot as the
primary sources of truth. Reuse existing DOM, CSS, fonts, and artwork. Do not
replace supplied assets with placeholders or introduce screenshot-only hacks.

## Commits

Use Conventional Commits, for example:

```text
fix(rendering): stabilize Bento image decoding
```

Keep commits focused and include validation details in the commit body.

## Pull requests

Describe the motivation, implementation, validation, and any visual impact.
Include before/after screenshots for visual changes whenever possible.
