// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The style guide is noindex, and the work is encrypted behind a password
// (and marked noindex) after the build. Neither belongs in the sitemap.
const HIDDEN = [/^\/styleguide\/?$/, /^\/portfolio(\/|$)/];

// https://astro.build/config
export default defineConfig({
  site: "https://sature.studio",
  // Served from the domain root normally. A preview deploy on a project page
  // sits under /<repo>/, so the path comes in through the environment rather
  // than being hardcoded — the production build is unaffected.
  base: process.env.SITE_BASE ?? "/",
  // Sections are anchors on one page, so links like "#about" must not be
  // rewritten; keeping trailing slashes consistent avoids that entirely.
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter(page) {
        const path = new URL(page).pathname;
        return !HIDDEN.some((pattern) => pattern.test(path));
      },
    }),
  ],
});
