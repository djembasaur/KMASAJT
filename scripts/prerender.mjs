// Prerendering: posle "npm run build", posetimo svaku rutu headless
// browser-om i sačuvamo renderovani HTML kao statičan fajl. Pravi
// posetioci i dalje dobijaju potpuno isti React sajt (inline <script>
// iz vite-plugin-singlefile ostaje u snapshotu i normalno se izvrši) —
// crawleri koji ne izvršavaju JS sada odmah vide pun tekst u sirovom
// HTML-u.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/supstrat",
  "/supstrat/paradajz",
  "/supstrat/krastavac",
  "/supstrat/paprika",
  "/supstrat/plavi-patlidzan",
  "/supstrat/jagoda",
  "/supstrat/malina",
  "/supstrat/kupina",
  "/supstrat/borovnica",
  "/supstrat/ruza",
  "/sadnice",
  "/o-nama",
  "/baza-znanja",
  "/kontakt",
];

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(res);
}

// Minimalni statični server sa SPA fallback-om (ekvivalent "serve -s"):
// servira fizički fajl ako postoji, u suprotnom pada nazad na
// dist/index.html — lokalno nemamo GitHub Pages 404.html mehanizam.
function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    const decodedPath = decodeURIComponent(url.pathname);
    const safeRelative = path
      .normalize(decodedPath)
      .replace(/^(\.\.[/\\])+/, "");
    const filePath = path.join(distDir, safeRelative);

    if (
      filePath.startsWith(distDir) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isFile()
    ) {
      serveFile(res, filePath);
      return;
    }

    serveFile(res, path.join(distDir, "index.html"));
  });
}

async function main() {
  const distIndex = path.join(distDir, "index.html");
  if (!fs.existsSync(distIndex)) {
    console.error(
      `Nije pronađen ${distIndex} — prvo pokreni "npm run build".`
    );
    process.exit(1);
  }

  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Lokalni server za prerendering pokrenut na :${PORT}`);

  // --no-sandbox: GitHub Actions runners don't have the user namespaces
  // Chrome's sandbox needs, so an unflagged launch crashes immediately
  // there (harmless locally too, since we only ever load our own build).
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0" });
      await page.waitForFunction(
        () => document.documentElement.dataset.prerenderReady === "true"
      );

      const html = await page.content();

      const outPath =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route.slice(1), "index.html");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      console.log(`Prerendered ${route} -> ${path.relative(distDir, outPath)}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
