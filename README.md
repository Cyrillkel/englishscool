# Alex Barybin - personal site

Site of a language teacher, psychologist and mentor: [mentoralex.ru](https://mentoralex.ru).
A landing page in the style of [aliabdaal.com](https://aliabdaal.com) plus a blog with a small admin panel.

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, architecture is **FSD (Feature-Sliced Design)**.
The blog runs on SQLite (better-sqlite3 + Drizzle), Auth.js and a Tiptap editor. GSAP drives the flip calendar in the experience section.

## Getting started

Node.js 22 or newer is required (better-sqlite3 does not run on older versions).

```bash
pnpm install
mkdir -p .data    # the SQLite file lives here
pnpm db:migrate   # creates .data/db.sqlite and applies migrations
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm lint
```

## Environment

`.env.local` (not committed):

| Variable              | Purpose                                                               |
| --------------------- | --------------------------------------------------------------------- |
| `AUTH_SECRET`         | Auth.js session secret                                                |
| `ADMIN_LOGIN`         | Admin user name                                                       |
| `ADMIN_PASSWORD_HASH` | Password hash, generate with `node scripts/hash-password.mjs "pass"`  |
| `DATABASE_PATH`       | Optional path to the SQLite file, defaults to `.data/db.sqlite`       |

## Structure (FSD)

```
src/
├── app/          # Next.js routing: layout, globals.css, blog, admin, auth API
├── views/        # Pages (FSD "pages", renamed because of Next.js)
│   ├── home/         # Landing page, assembles the widgets
│   ├── blog/         # Post list
│   ├── blog-post/    # Single post
│   └── admin/        # Login, post list, post editor
├── widgets/      # Large page blocks
│   ├── header/       # Header with navigation
│   ├── hero/         # First screen and figures
│   ├── services/     # Services
│   ├── about/        # About
│   ├── experience/   # Experience by year with a flip calendar
│   ├── countries/    # Countries
│   ├── testimonials/ # Reviews
│   ├── contact-cta/  # Contacts and lesson sign-up
│   └── footer/       # Footer
├── features/
│   ├── admin-auth/   # Login and logout
│   └── post-editor/  # Post form, cover upload, Tiptap editor
├── entities/
│   └── post/         # Post queries and server actions
└── shared/
    ├── config/site.ts  # Name, contacts, navigation, countries
    ├── db/             # Drizzle schema, client, migrations
    ├── lib/            # Auth, uploads, slugs, GSAP set-up
    └── ui/             # Buttons, sections, section labels, scroll reveal
```

FSD import rule: a layer may only import from the layers below it
(`views → widgets → features → entities → shared`).

## Content

- Name, contacts, navigation and countries: `src/shared/config/site.ts`.
- Section texts live in their widgets, `src/widgets/*/ui/`.
- Experience entries: `src/widgets/experience/model/entries.ts`, one per year, oldest first.
- The label above each section heading is a dictionary entry (word, transcription,
  translation): `Term` in `src/shared/ui/term.tsx`. Transcriptions are set in
  `src/app/fonts/phonetic-serif.woff2`, a renamed subset of Gentium Book Plus
  (OFL, licence next to the file) that covers Latin and IPA.

## Experience section

The table is server-rendered and readable without scripts. The calendar next to it
is progressive enhancement: `src/widgets/experience/lib/board-motion.ts` is loaded
when the visitor gets near the section, follows the row under the reading line and
flips the calendar to its year. With reduced motion the calendar switches without flips.

## Blog and admin

- Public pages: `/blog` and `/blog/[slug]`. Admin: `/admin/login`, then `/admin/posts`.
- Posts are stored in SQLite. Schema changes: edit `src/shared/db/schema.ts`,
  run `pnpm db:generate`, commit the migration.
- Covers uploaded in the admin go to `public/uploads/`. That folder and `.data/` are
  not in git and survive deploys. Covers that ship with the repository are in `public/covers/`.

## Deploy

A push to `main` runs `.github/workflows/deploy.yml`, which executes `deploy.sh` on the
server over SSH: pull, install, migrate, build, reload with pm2. The nginx config is in `deploy/`.
