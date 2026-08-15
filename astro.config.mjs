// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sature.studio",
  // Sections are anchors on one page, so links like "#about" must not be
  // rewritten; keeping trailing slashes consistent avoids that entirely.
  trailingSlash: "never",
});
