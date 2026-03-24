import { readFile } from "node:fs/promises";
import path from "node:path";

const routeSourceMap = {
  "": "index.html",
  about: "about/index.html",
  community: "community/index.html",
  contact: "contact/index.html",
  "hall-hire": "hall-hire/index.html",
  "life-events": "life-events/index.html",
  "news-events": "news-events/index.html",
  safeguarding: "safeguarding/index.html",
  worship: "worship/index.html"
};

export const staticRouteKeys = Object.keys(routeSourceMap).filter(Boolean);

function extractMatch(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : "";
}

export async function getSourcePage(routeKey = "") {
  const sourcePath = routeSourceMap[routeKey];
  if (!sourcePath) return null;

  const absolutePath = path.join(process.cwd(), sourcePath);
  const html = await readFile(absolutePath, "utf8");

  return {
    routeKey,
    title: extractMatch(html, /<title>([\s\S]*?)<\/title>/i),
    description: extractMatch(html, /<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/i),
    main: extractMatch(html, /<main[^>]*>([\s\S]*?)<\/main>/i)
  };
}

