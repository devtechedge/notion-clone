# Lighthouse baseline

The intended desktop command is:

```bash
npx lighthouse http://localhost:3000/reference.html \
  --output=json --output-path=docs/lighthouse/desktop.json \
  --chrome-flags="--headless"
```

The local Windows runner currently exits during Chrome Launcher temporary
profile cleanup with `EPERM`, before it writes a report. No Lighthouse score is
invented or treated as authoritative until the command completes successfully
in CI or a compatible Chromium environment.
