# SUBMISSION — Unsent: The Micro-Confession Sprint

## Bounty facts

- Slug: `u-boothlord-unsent-the-micro-confession-sprint-8c6596ba`
- Title: Unsent: The Micro-Confession Sprint
- Bounty page: https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
- Prize: $2 top 2 ($1/$1)
- Entry: FREE
- Blind round-1 cutoff: 2026-11-25T09:30:44Z (16:30 WIB 25 Nov); final deadline 2026-11-26T01:30:00Z (08:30 WIB 26 Nov)
- Field: 260 submissions at discovery
- Judge: pairwise (z-ai/glm-5.3-flash); most genuinely unsent wins; tie-break fewer bytes, then earlier receipt

## The entry (112 bytes total; message line 92 chars, ≤200; total ≤260)

> To: my ex's mother
> I still make your soup when I'm sick, and your son still thinks I learned it from a cookbook.

Stdout/entry.txt sha256: `756e6065c8111c6e44f584d4566dafa4416fa76a836944b5d10ea9662ae2328b`
Deterministic across runs; `/output/entry.txt` byte-matches stdout.

Why this one: non-romantic (the field will be flooded with love confessions), specific concrete detail (her soup, sick days, a cookbook lie), and the To: line and message need each other — the soup is hers, the son is hers, and the secret only makes sense addressed to her. The reason it stayed unsent is felt, not stated: admitting it would confess the bond with his mother outlived the breakup.

## Build

- Work dir: `~/workspace/scratch/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/`
- Files: `main.ts` (entrypoint, Node 22), `LICENSE` (MIT), `README.md` (3 make.fun badges + bounty link), `package.json` (`{"type":"module"}`), `.gitignore` (kit artifacts)
- Local git HEAD: `7fe00f83801eab41be908ea39d1cfce16a612e73`
- Authored fresh in this session across 3 write/edit stages (draft → revised wording → main); thinking_reproduces 83.3%, thinking_revised 3 messages
- Session file: `~/agents/agent-0aacce06-471e-4ba5-8416-c1c4d63355bc/sessions/0aacce06-471e-4ba5-8416-c1c4d63355bc.jsonl`
- Prompt file: `~/workspace/scratch/makefun-sweep/prompt-unsent-8c6596ba.txt` ("saben ono bounty anyar langsung garap, pokok skip sing bayar", origin scheduled, via "makefun-new-bounty-watch cron")
- Kit: current kit downloaded from https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/kit (in work dir, gitignored)

## Bundle + check

- Bundle: `unsent-bundle.tar.gz`, sha256 `fd26b5e5d392019822a339025a1745cee68f0fe8afc46e6bdb129fb6645785d2` (124,269 bytes)
- Check (2026-11-25T02:10:47Z, vs HEAD 7fe00f83): **13 passed, 1 failed, 5 skipped, 5 checked at submission**
  - Pass: competition_open, snapshot, license_osi, entrypoint, transcripts_present, transcripts_recorded, thinking_wellformed, thinking_in_window, thinking_reproduces (25/30 = 83.3%), thinking_turns (29), thinking_revised (3 messages), transcripts_run_record, thinking_own_work
  - FAIL: thinking_priced — 0 usage rows (subagent rows are written only once this run completes)
  - At submission (parent handles via mirror + submit): repo_public, repo_owner, repo_created_after_open, commit_in_repo, duplicate_snapshot

## BLOCKER — parent must do before submit

1. Re-run the muse.db usage SELECT with agent_ids `8b1e93cc-23cd-43b3-b79a-7084d01f9f66` (parent) + `0aacce06-471e-4ba5-8416-c1c4d63355bc` (this builder) AFTER this run completes, write rows to a usage file unchanged.
2. Re-bundle with `--muse-usage <file>` added (same flags as `unsent-bundle.tar.gz`), re-run check — expect 14/0/5.
3. Mirror to GitHub (repo `vickyair1/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba`, new repo created after 2026-11-25T01:31:07Z, About website + `makefun` topic), then submit — do NOT mirror/submit from this subagent session.
