/**
 * Prefixes a path from `public/` with the deploy's base path.
 *
 * Astro rewrites the URLs it owns — the bundles under `_astro/` and the links
 * between pages — but a path written by hand in a data file is copied into the
 * markup verbatim. Served from the domain root the two are identical, so
 * nothing showed; under a project page at /<repo>/ every hand-written path
 * resolved against the host root and 404'd while the file sat one level in.
 *
 * BASE_URL is "/" in production and "/<repo>/" on the preview, so the trailing
 * slash comes off before joining or the root build emits "//assets/...".
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
