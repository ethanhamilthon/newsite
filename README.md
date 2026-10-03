# yerdana.com

Personal bio site: about, courses, YouTube, socials, blog. Languages: Kazakh (default), Russian, English.

Stack: [Astro](https://astro.build) static site, hosted on Netlify.

## Run locally

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # output in dist/
```

## URLs

| Page | kz | ru | en |
|------|----|----|----|
| Home | `/` | `/ru/` | `/en/` |
| Blog | `/blog/` | `/ru/blog/` | `/en/blog/` |
| Course (kz only) | `/courses/<slug>/` | | |

`?lang=kz|ru|en` on any page switches to that language and remembers the choice.

## Edit content

### Links and numbers

`src/config.ts`: WhatsApp, Telegram, Instagram, TikTok, YouTube, and the numbers in the top bar (`STATS`).

### Texts (about me, buttons, labels)

`src/i18n/ui.ts`: one block per language (`kz`, `ru`, `en`).

### Photo

Replace `src/assets/avatar.jpg` (square). `public/og.jpg` is the preview image for links (1200×630).

### Blog post

Create a Markdown file in the folder of its language:

```
src/content/blog/kz/my-post.md   ->  yerdana.com/blog/my-post/
src/content/blog/ru/my-post.md   ->  yerdana.com/ru/blog/my-post/
src/content/blog/en/my-post.md   ->  yerdana.com/en/blog/my-post/
```

```md
---
title: 'Title'
description: 'One line for the list and for link previews'
date: 2026-10-03
draft: false   # true = hidden
---

Text in Markdown.
```

Each language shows only its own posts.

### Course

One file per course in `src/content/courses/<slug>.md`, written in Kazakh. See `google-flow.md`: title, subtitle, price, audience, program, the WhatsApp message (`waText`), and `videoId`.

**Course video:** upload to YouTube as *Unlisted* (Қолжетімділік: Сілтеме арқылы). Copy the id from the link: `https://youtu.be/AbCdEf12345` → `videoId: 'AbCdEf12345'`. Empty `videoId` shows a placeholder.

### YouTube videos on the home page

Loaded from the channel RSS at build time (latest 6 public videos). A GitHub Action (`.github/workflows/rebuild.yml`) triggers a Netlify rebuild every day at 08:00 Almaty.

## Deploy

Push to `main`. Netlify builds with `pnpm build` and publishes `dist` (see `netlify.toml`).
