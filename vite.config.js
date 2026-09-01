import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
