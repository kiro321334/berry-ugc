# Berry UGC – Landing page (Next.js 14 + Tailwind, RTL)

```bash
npm install
cp .env.example .env.local   # NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_WHATSAPP, NEXT_PUBLIC_CONTACT_EMAIL
npm run dev
```
- Sections: `components/sections/*` — content: `lib/data.ts` — SEO: `lib/site.ts`, `lib/jsonld.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.
- Favicon (from the Berry logo): `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`.
- Replace `public/images/works/*.webp` with the original video posters (same filenames, 144x254 ratio or similar 9:16).
