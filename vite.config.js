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
  // GitHub Pages serves the site under /KMASAJT/ — on the Actions runner
  // (GITHUB_ACTIONS=true) assets get that absolute base. Everywhere else
  // (local builds, previews) relative "./" keeps paths portable.
  base: process.env.GITHUB_ACTIONS === "true" ? "/KMASAJT/" : "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
