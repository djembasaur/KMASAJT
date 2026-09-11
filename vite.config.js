import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  // viteSingleFile inlines the entire JS bundle and the compiled CSS
  // (Tailwind included) directly into dist/index.html. There are no
  // external .css/.js asset URLs left to 404 under the /KMASAJT/
  // subpath — the "unstyled page" failure mode becomes impossible.
  // Images from public/ remain separate files and keep working.
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // Custom domain (www.insakma.com, see public/CNAME) serves the site from
  // the domain root, so base is "/" for the production build. If the custom
  // domain is ever removed and the site falls back to plain GitHub Pages
  // (djembasaur.github.io/KMASAJT/), this needs to change back to
  // "/KMASAJT/" for GITHUB_ACTIONS builds. Local dev/preview keeps "./" so
  // relative asset paths work when previewing dist/ directly from disk.
  base: process.env.GITHUB_ACTIONS === "true" ? "/" : "./",
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
