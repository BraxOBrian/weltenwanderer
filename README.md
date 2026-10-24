# Weltenwanderer Moosburg

Statische Astro-Startseite mit konventioneller Navigation und Kartenbanner, Lorem-Ipsum-Platzhaltertext und Footer.

## Entwicklung

Node.js ab 22.23.4 (getestet mit 24.19.0) und npm:

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Die Navigations- und Footereinträge sind absichtlich inaktiv, ohne Zieladressen.
Nur die Startseite ist angelegt. Impressum, Datenschutz und weitere Inhalte sind
noch nicht umgesetzt. Das mobile Menü funktioniert ohne JavaScript.

`src/data/navigation.ts` enthält die gemeinsamen Navigationseinträge.
Auf Desktop steht die Navigation neben dem Vereinsnamen. Unter 76rem ersetzt
ein natives HTML-Menü die Navigationszeile, bevor sie mit dem Namen kollidiert.
Die Karte aus `src/assets/desktop_nav.png` bleibt darunter als reines Banner
sichtbar, auf Mobilgeräten mit reduzierter Höhe. Sie wird beim Build als WebP
ausgegeben und für den breiten Bannerausschnitt proportional beschnitten.

`dist/`, `.astro/` und `node_modules/` sind generierte, nicht versionierte Ordner.
