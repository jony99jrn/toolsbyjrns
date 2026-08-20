# Tools by JRN — animated landing page

Splash/landing page for Tools by JRN (Vite + React 19 + TypeScript + Tailwind v4 + framer-motion).
Links out to the real hub at https://toolsbyjrn.vercel.app, Merge PDF, DIU Cover Page, and GitHub.

## 1. Install & run locally

```bash
npm install
npm run dev
```

## 2. Add the background video

I don't have network access to download binary files, so `public/hero.mp4` isn't included —
you need to add it yourself. Two options:

**A) Use your own video** (recommended, so it actually matches your brand):
Drop any landscape .mp4 into `public/hero.mp4`. Something bright/warm works best since the
text overlay is white — campus footage, a desk/study clip, or a simple warm gradient loop
all work.

**B) Use the original template placeholder video:**
```bash
curl -L "https://pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev/templates/harbor/hero.mp4" -o public/hero.mp4
```
(Run this on your own machine — it needs internet access. It's generic stock footage, not
tied to your brand, so treat it as a placeholder to swap out later.)

Either way, save it as exactly `public/hero.mp4` — `Hero.tsx` already points `<video src="/hero.mp4" />`
at that path, so no code changes needed once the file is there.

## 3. Deploy

Push this folder to a new GitHub repo, then import it into Vercel the same way you deployed
your other tools. Vercel auto-detects Vite — no config needed. You'll get a URL like
`tools-by-jrn-landing.vercel.app`.

## 4. Link it from the hub

Add a tile/link to this new page in your Tools By JRN tool data array, the same way Merge PDF
and DIU Cover Page are listed. Paste that array file if you want the exact entry written for you.
