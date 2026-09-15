# Department of Pharmacology — GMCH Chhatrapati Sambhajinagar Website

Official department website with an integrated Adverse Drug Reaction (ADR / PvPi) reporting backend.

## Folder structure

```
pharmacology-department-website/
├── index.html          # All page content (7 tabs)
├── index.css           # Styling, themes, accessibility modes
├── index.js            # Interactivity (tabs, quiz, search, ADR form)
├── assets/             # Images (hero, gallery, faculty photos)
├── backend/
│   ├── server.js       # Zero-dependency Node.js server + ADR report storage
│   └── data/           # ADR reports saved here as adr-reports.json (auto-created)
└── README.md
```

## Running the website WITH the backend (recommended)

Requires [Node.js](https://nodejs.org) (any recent version). No `npm install` needed.

```
cd pharmacology-department-website
node backend/server.js
```

Then open **http://localhost:8080**

- Patient ADR reports submitted through the "Patient & Safety Corner" form are saved to `backend/data/adr-reports.json`.
- View all received reports at: **http://localhost:8080/admin?key=gmch-pharma-admin**
- Change the admin key by setting the `ADMIN_KEY` environment variable before starting, e.g. (PowerShell):
  `$env:ADMIN_KEY = "my-secret"; node backend/server.js`

## Running WITHOUT the backend

You can also just double-click `index.html`. Everything works except server-side ADR storage —
in that case reports are kept in the visitor's browser localStorage so they are not lost,
but they will not reach the department until a backend is deployed.

## Deploying publicly

- **Static-only (no ADR storage):** host the folder on GitHub Pages / Netlify / college web server.
- **With ADR storage:** deploy to any Node.js host (Render, Railway, a college server with Node installed) —
  the same `node backend/server.js` command works. Put the site behind HTTPS before collecting real patient data.

## Notes

- Dark mode, text size, and accessibility settings persist across visits (localStorage).
- Tabs are deep-linkable: `index.html#faculty`, `#research`, `#patient`, etc.
- A hidden honeypot field in the ADR form blocks most spam bots.
