import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  // viteSingleFile inlines the entire JS bundle and the compiled CSS
  // (Tailwind included) directly into dist/index.html. There are no
  // external .css/.js asset URLs left to 404 — the "unstyled page"
  // failure mode becomes impossible. Images from public/ remain separate
  // files and keep working via absolute root paths.
  plugins: [react(), tailwindcss(), viteSingleFile({ overrideConfig: { base: "/" } })],
  // Fixed to "/" unconditionally. The site has a permanent custom domain
  // (www.insakma.com, see public/CNAME) that serves from the domain root,
  // so there's no longer a need to branch on GITHUB_ACTIONS.
  //
  // IMPORTANT — do not go back to a conditional "./" fallback here: Vite's
  // HTML transform rewrites any root-relative href/src in index.html
  // (favicon links, manifest link, etc.) according to `base`. When base
  // resolved to "./" during a build (this happened once — the GITHUB_ACTIONS
  // env check did not evaluate as expected in that run, root cause not fully
  // diagnosed), every "/favicon.ico"-style link silently became
  // "./favicon.ico". That's invisible on "/" but breaks with real 404s once
  // scripts/copy-routes.mjs serves the same index.html from nested
  // directories like /sadnice/ — a relative href there resolves against
  // /sadnice/, not domain root. Keeping base as a plain, unconditional "/"
  // avoids the entire failure class. Local `vite dev` / `vite preview` both
  // work fine with base "/"; only opening dist/index.html directly via
  // file:// (which this project's workflow never does) would need "./".
  base: "/",
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
