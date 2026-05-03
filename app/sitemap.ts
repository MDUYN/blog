const SITE_URL = "https://mduyn.github.io/blog";

export const dynamic = "force-static";

const articleSlugs = [
  "backtest-report",
  "blotter-system",
  "consistency-score",
  "context-record",
  "external-data-providers",
  "fx-conversion",
  "learning-from-quantopian",
  "notebook-magic",
  "parallel-backtest-windows",
  "pipelines",
  "stability-score",
  "why-i-started-finterion",
];

export default function sitemap() {
  const articles = articleSlugs.map((slug) => ({
    url: `${SITE_URL}/articles/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [
    "",
    "/articles",
    "/reading-list",
    "/about",
    "/cv",
    "/working-on",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articles];
}
