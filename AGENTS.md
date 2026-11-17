<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- Company facts (phone, WhatsApp, CNPJ, ANP, email, hours, leadership) live only in `src/lib/empresa.ts`; null fields are hidden in the UI so nothing invented is shown.
- The landing page is composed of section components in `src/components/site/`; `src/routes/index.tsx` only orders them.
- Site images are real files in `src/assets/` imported through Vite (logos via `src/lib/logos.ts`), never `/__l5e/` CDN URLs or `.asset.json` pointers, because the site is also deployed on Vercel where Lovable's asset paths do not exist.
- Uploaded team photos retain their original aspect ratios so people are not cropped out.
- The sitemap is router-derived (`src/lib/sitemap.ts` + `src/routes/sitemap[.]xml.ts`); every route must set `staticData.sitemap` so new pages are listed or excluded explicitly.
- Google Search Console is verified by the HTML file in `public/google*.html`; never delete it or Google loses the site.
- The coverage map is a self-drawn SVG from public IBGE state outlines, pre-projected into `src/lib/mapa-abrangencia.ts`; it is decorative, so it needs no map service or API key.
- The link-preview image (og:image/twitter:image) is a 1200x630 file in `public/` referenced by absolute published URL, because social crawlers need an absolute URL and Vite-bundled asset URLs are hashed and relative.
