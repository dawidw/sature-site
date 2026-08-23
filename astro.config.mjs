// @ts-check
import { defineConfig } from "astro/config";

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
});
