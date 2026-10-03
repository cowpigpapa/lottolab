# TODO

## Required before public launch
- [x] Complete a current-batch Solar Pro 4 review and save `FREEBUFF_CODE_REVIEW.md`.
- [x] Deploy the static `dist` site to the Vercel project `onharu/lottolab`.
- [ ] Choose account backend (recommended: Supabase Auth + Postgres, or WordPress REST + Google OAuth if deploying inside WordPress).
- [ ] Obtain Google OAuth client ID/secret for `lottolab.onharu.app` and configure authorized redirect origins.
- [ ] Add authenticated server-side ticket/favorite storage and one-time guest-data migration.
- [ ] Add scheduled weekly data validation against the official Donghaeng Lottery result.
- [ ] Confirm the public data mirror license/reliability or replace it with an owned scheduled collector.
- [x] Approve Cloudflare Domain Connect for `lottolab.onharu.app`, verify DNS/HTTPS, and confirm public access.

## Product follow-ups
- [ ] Add monthly spending limit and gentle responsible-play reminders.
- [ ] Add ticket edit and CSV export.
- [ ] Add result notification opt-in after account login.
- [ ] Add privacy policy and data deletion flow before collecting account data.
