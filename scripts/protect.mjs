/**
 * Puts the work behind a password, on a host that has no server.
 *
 * GitHub Pages serves files and nothing else, so a gate that only hides the
 * page would be a curtain: the copy would still sit in the source for anyone
 * who looked. Instead the built page is encrypted here, at the end of the
 * build, and what ships is ciphertext plus a form. The password is never in
 * the repository and never in the deploy — only the reader has it.
 *
 * AES-GCM with a key derived from the password by PBKDF2 (SHA-256, 250k
 * rounds), all of it through the browser's own WebCrypto, which is available
 * on every browser this site supports.
 *
 * What this cannot do: the pictures are separate files on the same host, so
 * someone who guesses their paths can fetch them. It is the page — the story,
 * the numbers, the client's name — that is protected.
 *
 * Without SITE_PASSWORD the protected pages are removed from the build rather
 * than published in the clear, so a deploy that forgets the secret loses the
 * pages instead of leaking them.
 */

import { webcrypto as crypto } from "node:crypto";
import { readFile, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

/** Every page under the work, and nothing else. */
const PROTECTED = [
  "portfolio/index.html",
  "portfolio/hiring-agent/index.html",
  "portfolio/throne/index.html",
  "portfolio/video-platform/index.html",
];

const ITERATIONS = 250_000;
const password = process.env.SITE_PASSWORD;

if (!password) {
  for (const page of PROTECTED) {
    const file = join(DIST, page);
    if (existsSync(file)) await rm(dirname(file), { recursive: true, force: true });
  }
  console.warn(
    "\n  SITE_PASSWORD is not set — the work pages were removed from the build\n" +
      "  rather than published unprotected. Set it and build again.\n"
  );
  process.exit(0);
}

const encoder = new TextEncoder();

async function keyFrom(salt) {
  const material = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, [
    "deriveKey",
  ]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
}

/** The page the visitor gets: a form, and the encrypted page it opens. */
function shell({ title, salt, iv, payload }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="robots" content="noindex, nofollow" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Lora:ital,wght@1,500&display=swap"
      rel="stylesheet"
    />
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100dvh;
        display: grid;
        place-items: center;
        padding: 24px;
        background: #fafafa;
        color: #1a1a1a;
        font: 400 16px/1.5 Geist, system-ui, sans-serif;
        letter-spacing: -0.019em;
      }
      form {
        width: min(400px, 100%);
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        border: 1px solid #f2f2f2;
        border-radius: 24px;
        background: #fff;
        box-shadow: 0 1px 3px rgb(0 0 0 / 0.05);
      }
      h1 {
        margin: 0;
        font: italic 500 24px/32px Lora, Georgia, serif;
        letter-spacing: 0;
        color: #545454;
      }
      p { margin: 0; color: #545454; }
      label { font: 500 14px/20px Geist, system-ui, sans-serif; letter-spacing: 0; }
      input {
        width: 100%;
        height: 44px;
        margin-top: 8px;
        padding: 0 12px;
        border: 1px solid #e2e2e2;
        border-radius: 12px;
        background: #fff;
        font: inherit;
        color: inherit;
      }
      button {
        height: 44px;
        border: 0;
        border-radius: 999px;
        background: #0d0d0d;
        color: #fff;
        font: 500 16px/1 Geist, system-ui, sans-serif;
        cursor: pointer;
      }
      input:focus-visible, button:focus-visible { outline: 2px solid #1a1a1a; outline-offset: 2px; }
      .error { color: #1a1a1a; font-weight: 500; }
      [hidden] { display: none !important; }
    </style>
  </head>
  <body>
    <form id="gate">
      <h1>Hello 👋</h1>
      <p>Our work is shared privately. Enter the password you were given.</p>
      <label>
        Password
        <input type="password" name="password" autocomplete="current-password" required autofocus />
      </label>
      <p class="error" id="error" role="alert" hidden>That password did not work. Try again.</p>
      <button type="submit">View the work</button>
    </form>

    <script type="application/json" id="payload">
${JSON.stringify({ salt, iv, data: payload })}
    </script>

    <script>
      (() => {
        const KEY = "sature-work";
        const { salt, iv, data } = JSON.parse(document.getElementById("payload").textContent);
        const bytes = (b64) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
        const form = document.getElementById("gate");
        const error = document.getElementById("error");

        async function open(password) {
          const material = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(password),
            "PBKDF2",
            false,
            ["deriveKey"]
          );
          const key = await crypto.subtle.deriveKey(
            { name: "PBKDF2", salt: bytes(salt), iterations: ${ITERATIONS}, hash: "SHA-256" },
            material,
            { name: "AES-GCM", length: 256 },
            false,
            ["decrypt"]
          );
          const plain = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: bytes(iv) },
            key,
            bytes(data)
          );
          return new TextDecoder().decode(plain);
        }

        /* The page arrives as text, so its scripts are inert until they are
           made again — a script node that came from parsing never runs. */
        function show(html) {
          const parsed = new DOMParser().parseFromString(html, "text/html");
          document.replaceChild(document.importNode(parsed.documentElement, true), document.documentElement);
          for (const old of document.querySelectorAll("script")) {
            const script = document.createElement("script");
            for (const { name, value } of old.attributes) script.setAttribute(name, value);
            script.textContent = old.textContent;
            old.replaceWith(script);
          }
        }

        /* One password for the whole of the work: having opened one page, the
           links between them are not a locked door again. It is kept for the
           tab only, so a shared computer does not keep anyone signed in. */
        const remembered = sessionStorage.getItem(KEY);
        if (remembered) {
          open(remembered)
            .then(show)
            .catch(() => sessionStorage.removeItem(KEY));
        }

        form.addEventListener("submit", async (event) => {
          event.preventDefault();
          error.hidden = true;
          const password = new FormData(form).get("password");
          try {
            const html = await open(password);
            try {
              sessionStorage.setItem(KEY, password);
            } catch {}
            show(html);
          } catch {
            error.hidden = false;
            form.password.select();
          }
        });
      })();
    </script>
  </body>
</html>
`;
}

const salt = crypto.getRandomValues(new Uint8Array(16));
const key = await keyFrom(salt);

for (const page of PROTECTED) {
  const file = join(DIST, page);
  const html = await readFile(file, "utf8");
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(html)
  );
  /* The gate says nothing about what is behind it: the page's own title names
     the client, and a tab is as public as the page. */
  await writeFile(
    file,
    shell({
      title: "Our work — Sature",
      salt: Buffer.from(salt).toString("base64"),
      iv: Buffer.from(iv).toString("base64"),
      payload: Buffer.from(encrypted).toString("base64"),
    })
  );
  console.log(`  protected  ${page}  (${Math.round(encrypted.byteLength / 1024)} kB)`);
}
