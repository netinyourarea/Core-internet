# Core Internet

Marketing site for Core Internet — a purple-and-white, Poppins, asymmetric design.
It is a client-side rendered single-page app built with Vite, React, TanStack Router and Tailwind CSS v4.

## Development

```sh
bun install   # or npm install
bun run dev   # http://localhost:5173
bun run build # outputs static files to dist/
bun run preview
```

## Deployment

`dist/` is fully static. Configure your host to serve `index.html` for unknown paths
(`public/_redirects` already does this for Netlify/Cloudflare Pages).
