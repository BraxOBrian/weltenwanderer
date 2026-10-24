# Weltenwanderer Moosburg

Statische Astro-Startseite mit konventioneller Navigation und Karten-Hero, Lorem-Ipsum-Platzhaltertext und Footer.

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
Die Karte aus `src/assets/desktop_nav.png` bildet darunter einen seitenbreiten
Hero mit der Willkommensüberschrift. Seine Höhe richtet sich nach dem Viewport
(Desktop 75svh, mobil 65svh, jeweils mit Mindest- und Maximalhöhe). Das Bild wird
als WebP ausgegeben und proportional auf den Hero zugeschnitten. Ein dunkler
Verlauf hält den darüberliegenden Text lesbar. Lorem Ipsum folgt unter dem Hero.

`dist/`, `.astro/` und `node_modules/` sind generierte, nicht versionierte Ordner.
