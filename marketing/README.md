# Marketing assets

## Publication-journey poster

`researchmd-publication-journey.png` — 2160 × 2700 (1080 × 1350 at 2×), portrait.
Sized for WhatsApp status, Instagram feed and story, and print-ready notice boards.

### Files

| File | Role |
| --- | --- |
| `poster-body.html` | The poster's content — edit the copy here |
| `poster.css` | Layout, palette and type |
| `fonts-inline.css` | Archivo, Inter and IBM Plex Mono as base64 woff2 (no CDN needed) |
| `build.mjs` | Composes the two output pages from the sources above |
| `poster.html` | Generated — exact 1080 × 1350 page used for the render |
| `poster-artifact.html` | Generated — the same poster scaled into a shareable preview page |

### Regenerating after a copy change

```bash
node marketing/build.mjs

/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell \
  --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1080,1350 --virtual-time-budget=2000 \
  --screenshot=marketing/researchmd-publication-journey.png \
  "file://$PWD/marketing/poster.html"
```

Any headless Chrome works — use `headless_shell` (or Playwright) rather than the full
`chrome` binary, since `chrome --headless --window-size` reserves ~87px for browser UI
and silently crops the bottom of the poster.

### Fitting the canvas

The poster is a fixed 1080 × 1350 box with `overflow: hidden`, so longer copy gets
clipped rather than pushed onto a second page. After editing text, check the content
still fits — total band height must stay under 1350:

```bash
node -e "1" # then load poster.html and read:
# [...document.querySelector('.poster').children].reduce((a,e)=>a+e.getBoundingClientRect().height,0)
```

Current total is ~1310px, leaving ~52px of slack that `justify-content: space-between`
distributes between the four bands.
