# Intellismart Software Portfolio

Start the local preview with Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build and `npm run start` to serve it.

The logo, photographs, client marks, and software screenshots in `public/media` come from the supplied Intellismart portfolio. The software images show illustrative data. See [DESIGN.md](DESIGN.md) for the color, type, and interaction rules.

The consultation dialog prepares a draft in the visitor’s email app. Visitors review and send it there. The same contact address is available as a direct link.

Set `SITE_URL` to the public origin before building for deployment. It enables the canonical URL, sharing image, sitemap entry, and indexing. Local builds disallow indexing.
