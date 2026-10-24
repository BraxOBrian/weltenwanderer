# Weltenwanderer Moosburg

Statische Astro-Startseite mit Kartennavigation, Lorem-Ipsum-Platzhaltertext und Footer.

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

`src/data/navigation.ts` enthält gemeinsame Labels und prozentuale Positionen
auf dem vollständigen Kartenbild `src/assets/desktop_nav.png`. Das Bild wird
beim Build als WebP ausgegeben und nicht beschnitten. Unter 59rem ersetzt ein
konventionelles Menü die Karte. Der Breakpoint ist ein vorläufiger Layoutwert.

`dist/`, `.astro/` und `node_modules/` sind generierte, nicht versionierte Ordner.
