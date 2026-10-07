# Standard Operating Procedure — Department Website

**Department of Pharmacology**
Government Medical College & Hospital, Chhatrapati Sambhajinagar

This document explains how to keep the department website up to date.
It assumes no knowledge of programming. Every task below is done in a web
browser; nothing needs to be installed on any computer.

---

## 1. How the website works

The website is made of ordinary files kept in an online folder called a
**repository** (or "repo") on GitHub. A service called **Vercel** watches that
repository. Whenever a file changes, Vercel automatically rebuilds the website
and publishes it, usually within one minute.

```
   You edit a file on GitHub   →   Vercel notices   →   Website updates
```

There is nothing to "upload to the server" and no password-protected control
panel. Changing the website means changing a file on GitHub.

### Where things are kept

| File or folder | What it holds |
|---|---|
| `index.html` | All page content and the structure of every tab |
| `index.css` | Colours, fonts, spacing — the appearance |
| `index.js` | Faculty list, courses, quiz questions, slideshow behaviour |
| `assets/notices.json` | **Notice board entries** |
| `assets/faculty/` | Faculty photographs |
| `assets/gallery/` | Event and facility photographs |
| `assets/gallery/extra/` | The large photo wall on the Gallery tab |
| `assets/awards/` | Award photographs and press cuttings |
| `backend/` | Optional server for ADR report storage |

---

## 2. Accounts you must have

| Service | Purpose | Who should own it |
|---|---|---|
| **GitHub** | Stores the website files | The department, not an individual |
| **Vercel** | Publishes the website | The department, not an individual |

Both accounts must be registered to a **departmental email address** that the
department will keep permanently, not to the personal email of any one doctor
or resident.

### Critical — before any handover

1. Record the login email and password of both accounts in the department's
   confidential records.
2. GitHub requires **two-factor authentication**. When it is switched on,
   GitHub shows a list of **recovery codes**. Print them and keep them with the
   department records. Without these, the account becomes unreachable the day
   the registered mobile number leaves the department.
3. Ensure at least **two** staff members know where these records are kept.

---

## 3. Posting a notice on the notice board

This is the most common task. It needs no knowledge of code.

1. Open the repository on **github.com**
2. Click the `assets` folder, then click the file `notices.json`
3. Click the **pencil icon** (top right) to edit
4. Copy an existing block and change it. Each notice looks like this:

```json
    {
      "date": "2026-08-15",
      "tag": "Examination",
      "title": "Second MBBS internal assessment schedule",
      "body": "Timetable displayed on the departmental notice board.",
      "link": "assets/documents/ia-schedule.pdf",
      "linkText": "Download timetable (PDF)"
    }
```

- `date` must be written **year-month-day**, as in `2026-08-15`
- `tag` is the small coloured label. Use words like `Examination`, `Event`,
  `Award`, `Achievement`, `Circular`
- `link` and `linkText` are optional — delete both lines if there is no
  attachment. If you keep them, remember to remove the comma at the end of
  the `body` line
- Put a **comma between notices**, but never after the last one
5. Scroll down and click **Commit changes**

Notices sort themselves by date automatically. Newest appears first.
The same notices also feed the scrolling "What's New" strip on the home page.

> **If the notice board goes blank**, the file has a punctuation error — almost
> always a missing or extra comma. See section 9 to undo the change.

---

## 4. Adding photographs

### To the photo wall on the Gallery tab

1. Open `assets` → `gallery` → `extra` and note the highest numbered file
   (for example `photo-44.jpeg`)
2. Rename your new photographs on your computer to continue the sequence:
   `photo-45.jpeg`, `photo-46.jpeg`, and so on. Use lower case and the same
   `.jpeg` ending
3. On GitHub, inside that folder, click **Add file → Upload files**, drag the
   photographs in, and click **Commit changes**
4. Open `index.js`, click the pencil icon, and find this line near the middle:

```js
const PHOTO_WALL_COUNT = 44;
```

   Change `44` to the new highest number, then **Commit changes**

### To a captioned gallery group

1. Upload the photograph to `assets/gallery/`
2. Open `index.html`, click the pencil icon, and use **Ctrl + F** to find the
   heading of the group you want (for example `Facilities & Infrastructure`)
3. Copy one complete block that looks like this and change the file name and
   the caption:

```html
            <figure class="gf-card">
              <img src="assets/gallery/YOUR-PHOTO.jpg" alt="Describe the photograph" loading="lazy">
              <figcaption>The caption shown under the photograph</figcaption>
            </figure>
```

4. **Commit changes**

Always write a meaningful `alt` description. It is what visually impaired
visitors hear, and the department website is expected to be accessible.

---

## 5. Changing the home page slideshow

1. Upload the photograph to `assets/gallery/`
2. Open `index.html` and find `<div class="hero-carousel"` near the top
3. Each slide is one block like this:

```html
              <figure class="hc-slide" role="group" aria-roledescription="slide" aria-label="1 of 6">
                <img src="assets/dept-group-photo.jpg" alt="Describe the photograph">
                <figcaption class="hc-caption">
                  <span class="hc-tag">Our Department</span>
                  <h2>Department of Pharmacology</h2>
                  <p>Faculty &amp; Residents — Government Medical College &amp; Hospital</p>
                </figcaption>
              </figure>
```

4. To **add** a slide, copy a whole block and change the image and text.
   To **remove** one, delete the whole block from `<figure` to `</figure>`
5. **Commit changes**

The arrows, the dots and the automatic timing adjust themselves to the number
of slides. Nothing else needs changing.

---

## 6. Updating faculty and staff

When a faculty member joins or leaves, two places need attention.

**The Faculty tab** — in `index.html`, find the heading `Teaching Faculty` and
copy or delete one `<div class="faculty-card">` block.

**The CV tab** — in `index.js`, find the list beginning `const facultyProfiles`.
Each person is one entry:

```js
  { id: "rathod", name: "Dr. Arati Vitthal Rathod", designation: "Assistant Professor", group: "Assistant Professor", photo: "assets/faculty/rathod.jpg" },
```

- `group` must be exactly one of: `Professor`, `Associate Professor`,
  `Assistant Professor`, `Senior Resident` — this drives the filter buttons
- `photo` must match a real file in `assets/faculty/`
- A longer `cv: { ... }` section is optional. Without it, the person still
  appears in the directory with a note that the detailed CV is awaited

Remember to update the **Total Teaching Members** count on the Faculty tab.

---

## 7. Correcting text anywhere on the site

1. Open `index.html` on GitHub
2. Click the **pencil icon**
3. Press **Ctrl + F** and search for the words you want to change
4. Edit only the words between the angle brackets. Do not delete anything that
   looks like `<p>` or `</div>`
5. **Commit changes**

---

## 8. Checking that a change worked

1. Wait about one minute after committing
2. Open the website and press **Ctrl + Shift + R** to force a fresh copy
3. If nothing changed, open **vercel.com**, go to the project, open
   **Deployments**, and check the newest entry says **Ready**. If it says
   **Error**, see section 9

---

## 9. Undoing a mistake

Nothing done on this website is permanent. Every version ever published is kept.

**To put the previous version back immediately:**

1. Open **vercel.com** and select the project
2. Click **Deployments**
3. Find the last entry that worked, click the **⋯** menu beside it
4. Choose **Promote to Production**

The website reverts within seconds. Then fix the file at leisure and commit again.

**To see what was changed and by whom**, open the repository on GitHub and click
**Commits**. Every change is listed with its date and author.

---

## 10. Adverse Drug Reaction (ADR) reports

The Patient Corner contains an ADR reporting form. **Confirm how it has been
configured before relying on it.**

- If the site is published as static pages only, submitted reports are kept in
  the visitor's own browser and **do not reach the department**
- For reports to arrive, the form must either be connected to a forwarding
  service that emails the department, or the site must be hosted with the
  included `backend/` server running

If the `backend/` server is used, the administrator key **must** be changed from
its default value before the site is public. It is set with the `ADMIN_KEY`
setting described in `README.md`.

Check with whoever deployed the site which arrangement is in place, and record
the answer here:

> ADR reports currently go to: _________________________________

---

## 11. Periodic checks

| How often | Task |
|---|---|
| Monthly | Post new notices; remove notices that have expired |
| Each term | Update faculty, residents and the Total Teaching Members count |
| Every six months | Click through every tab and check no photograph is missing |
| Yearly | Update the copyright year in the footer of `index.html` |
| Yearly | Confirm the GitHub and Vercel account recovery details are current |
| On handover | Transfer both accounts and update section 12 below |

---

## 12. Responsibility

| Role | Name | Contact |
|---|---|---|
| Faculty in charge of the website | | |
| Second person with account access | | |
| Department email on record | pharmacgmca@gmail.com | |

Keep this table filled in. When either person leaves the department, update it
and change the account passwords the same week.

---

## 13. If something cannot be fixed

Commit nothing further and do not delete files in an attempt to repair it.
Use section 9 to restore the last working version first — that always succeeds —
and only then seek help. The repository holds the complete history, so no work
is ever lost.
