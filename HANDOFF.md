# Handoff

## Goal
Publish a lighthearted Lotto 6/45 statistics and personal ticket journal at `lottolab.onharu.app`.

## Implemented
- Responsive one-page product interface.
- Live historical draw loading and normalization.
- Frequency, overdue number, frequent pair, exact-repeat, odd/even, consecutive-number, and sum statistics.
- Weighted entertainment-only number generator that can mix in favorite numbers.
- Local favorite-number persistence.
- Local purchase records with automatic prize-rank comparison when the draw exists.
- Dedicated `numbers.html` view for all 45 numbers with frequency, share, last-seen gap, and three sort modes.
- Number view also shows recent 5/10/15/20-draw absence, long-run deviation, and the constant 13.33% next-draw inclusion probability; absence is descriptive, never predictive.

## Important decisions
- Static-first keeps hosting and maintenance simple.
- Public mirror data is used because the official lottery site does not expose a documented public API. Always link users to the official site for verification.
- Google login must not be simulated. It remains disabled until real OAuth credentials and server-side persistence are configured.

## Current delivery state (2026-09-28)
- The former Sites project is no longer available in the current Sites workspace.
- The static `dist` site was deployed to the Vercel project `onharu/lottolab` on 2026-10-02.
- Custom domain decision: `lottolab.onharu.app`.
- The domain is attached in Vercel; Cloudflare Domain Connect, DNS, HTTPS, both pages, and canonical URLs were verified on 2026-10-02.
- TCDD model `upstage/solar-pro4` was verified and the current-batch review completed with no P0/P1 findings.

## Verification commands
```powershell
node --test test/lotto.test.mjs
node --check dist/lotto.js
```

## Next owner
Start with `TODO.md`. If adding authentication, migrate local records after first login and keep guest mode available.
