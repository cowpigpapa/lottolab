# LottoLab collaboration guide

## Product
- Korean-first playful Lotto 6/45 statistics web app for `lottolab.onharu.app`.
- This is entertainment and record-keeping, never a claim of improved winning odds.
- Primary flows: weekly data sync, statistical number suggestions, favorite numbers, purchase history, automatic result/rank checking.

## Current architecture
- Portable static site in `dist/`; no build step is required.
- Draw data is fetched in the browser from `https://smok95.github.io/lotto/results/all.json` and normalized in `dist/lotto.js`.
- Favorites and tickets use `localStorage` until account persistence is implemented.
- Tests use the Node standard test runner: `node --test test/lotto.test.mjs`.

## Working agreements
- Follow repository `AGENTS.md` and TCDD: baseline, smallest change, tests, Solar Pro 4 Freebuff review.
- Keep visible copy in Korean and preserve the bright editorial/playground visual direction.
- Never fabricate lottery results or describe generated numbers as predictive certainty.
- Update `HANDOFF.md` and `TODO.md` after material decisions or scope changes.
