# Packed N Prepped

A custom packing-list discovery website inspired by a Pinterest-style hub. It is now a small TypeScript/Vite site so it can grow cleanly while still publishing easily with GitHub Pages.

## Run Locally

Install dependencies once, then run the local dev server:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish With GitHub Pages

1. Create a GitHub repository named `PackedNPrepped` under `draftsanddetours`.
2. Push these files to the repository.
3. In GitHub, open Settings > Pages.
4. Choose the main branch and the root folder.

## Project Notes

- Use TypeScript for site behavior.
- Use the SSH Git remote for GitHub pushes.

## Drafting Posts

1. Add a new entry to `src/content.ts` in the `posts` array.
2. Give it a unique `slug`, title, hero image, metadata, sections, and forgotten items.
3. Add or update a homepage list card in `src/content.ts` if you want it featured.
4. The homepage will link to `packing-list.html?slug=your-post-slug`.
5. If you want a different default post page title or template copy, edit `packing-list.html` once and reuse it for all posts.
