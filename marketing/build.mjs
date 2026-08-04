/* Builds the poster from one source of truth:
 *   poster.html          — exact 1080x1350 page, used for the PNG render
 *   poster-artifact.html — same poster, scaled into a shareable preview page
 * Run: node marketing/build.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const read = f => fs.readFileSync(path.join(dir, f), 'utf8');

const fonts = read('fonts-inline.css');
const css = read('poster.css');
const body = read('poster-body.html');

fs.writeFileSync(path.join(dir, 'poster.html'), `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>ResearchMD — Get Indexed. Not Exhausted.</title>
<style>
${fonts}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1080px; height: 1350px; background: #0A0118; }
${css}
</style>
</head>
<body>
${body}
</body>
</html>
`);

fs.writeFileSync(path.join(dir, 'poster-artifact.html'), `<title>ResearchMD — Get Indexed. Not Exhausted.</title>
<style>
${fonts}
:root {
  --page-bg:   #F2EFF7;
  --page-fg:   #241540;
  --page-dim:  #6B5C87;
  --page-line: rgba(124, 58, 237, 0.22);
}
@media (prefers-color-scheme: dark) {
  :root { --page-bg: #0D0619; --page-fg: #EDE6FA; --page-dim: #9B8CBC; --page-line: rgba(167,139,250,0.22); }
}
:root[data-theme="dark"] { --page-bg: #0D0619; --page-fg: #EDE6FA; --page-dim: #9B8CBC; --page-line: rgba(167,139,250,0.22); }
:root[data-theme="light"] { --page-bg: #F2EFF7; --page-fg: #241540; --page-dim: #6B5C87; --page-line: rgba(124,58,237,0.22); }

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background: var(--page-bg);
  color: var(--page-fg);
  font-family: 'Inter', system-ui, sans-serif;
  padding: 28px 24px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.caption { width: min(1080px, 100%); display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 10px; padding-bottom: 14px; border-bottom: 1px solid var(--page-line); }
.caption h2 { font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 19px; letter-spacing: -0.015em; }
.caption p { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--page-dim); }

.frame {
  --s: calc(min(1080px, 100vw - 48px) / 1080);
  width: min(1080px, 100%);
  height: calc(1350px * var(--s));
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 24px 70px -28px rgba(23, 10, 46, 0.65);
}
.frame .poster { transform: scale(var(--s)); transform-origin: top left; }

.note { width: min(1080px, 100%); font-size: 14.5px; line-height: 1.6; color: var(--page-dim); }
.note b { color: var(--page-fg); font-weight: 600; }

${css}
</style>

<div class="caption">
  <h2>ResearchMD &mdash; publication journey poster</h2>
  <p>1080 &times; 1350 &middot; WhatsApp status &amp; Instagram portrait</p>
</div>

<div class="frame">
${body}
</div>

<p class="note">
  <b>How to use it:</b> the PNG at <code>marketing/researchmd-publication-journey.png</code> is the
  shareable file &mdash; WhatsApp status, Instagram feed or story, and college notice boards.
  Edit the wording in <code>marketing/poster-body.html</code> and re-run
  <code>node marketing/build.mjs</code> plus the render command in
  <code>marketing/README.md</code> to regenerate it.
</p>
`);

console.log('built poster.html + poster-artifact.html');
