# SCM Deck

An offline Android reference app for supply chain, planning and SAP — built from
`Basic_Fundamentals.pptx`, `Basic_SAP_Study_Materials.pptx` and 18 infographic boards.

No internet needed once installed. Everything is bundled.

## What's inside

| Section | Contents |
|---|---|
| Fundamentals | 10 topics — ABC, XYZ, EOQ, inventory turns, safety stock (6 methods), dependent vs independent demand, SCM vs logistics, planning vs scheduling, PPC vs SCM, S&OP vs IBP |
| KPI hub | 45 metrics across delivery, inventory, forecast, sourcing, production and logistics — each with its formula |
| MRP views | MRP 1–4 field by field: MRP types, controller, lot sizes, planning time fence, procurement types, special procurement, backflush, strategy groups, consumption modes, ATP, planning horizon, exception messages |
| Master data | Types, scenario implications, integration points, key tables, all 17 material master views, create/change/display codes |
| Process flows | MM–PP, MM–SD, MM–EWM, subcontracting, source determination, source list, REM |
| MD04 | 45 element keys grouped by class, document chains, and the real three-plant walkthrough (03PM → 03Z6 → 03Z4) |
| Glossary | 114 terms, filterable |
| Slides | 41 boards, full resolution, zoomable |
| T-codes | 104 transactions, searchable and filterable |
| Calculators | EOQ · safety stock (all 6 methods) · ABC · XYZ · turns · forecast accuracy — preloaded with the deck's worked example |

## Building the APK from your phone

1. Create a new GitHub repo (any name, public or private).
2. **Add file → Upload files.** Upload everything in this folder, keeping the
   structure: `www/`, `www/assets/lib/`, `www/assets/deck/`, `.github/workflows/`.
   Android's file picker lets you multi-select — do one folder at a time.
3. Commit to `main`. The workflow starts on its own.
4. Actions tab → wait ~4 minutes.
5. Releases → download `scm-deck.apk` → install.

Allow "install unknown apps" for your browser the first time.

To rebuild after an edit, just commit — every push to `main` publishes a new release.

## Files

```
capacitor.config.json     app id: com.bibhu.scmdeck
package.json              Capacitor 6
.github/workflows/build.yml
www/index.html            UI, router, all views, all calculators
www/data.js               all content
www/assets/lib/           18 infographic boards + thumbnails
www/assets/deck/          23 images extracted from the two PPTX files
```

## Notes

- Images are native resolution (1440px wide — matches the S26 Ultra panel). Tap any
  board to open it full screen, then **＋** to zoom to 230% and scroll.
- The app ships with Capacitor's default launcher icon. Drop a 1024×1024 PNG in later
  if you want a custom one.
- Safety stock method 3 and method 5 are the two the deck recommends; they're marked ★.
