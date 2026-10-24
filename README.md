# Weltenwanderer Moosburg

Statisches Astro-Grundgerüst für die Vereinswebseite. Projektvorgaben stehen in
[AGENTS.md](AGENTS.md).

## Entwicklung

Voraussetzung: Node.js 22.23.4 oder neuer (getestet mit Node.js 24) und npm.

```sh
npm ci
npm run dev
```

`npm run build` erzeugt die statische Ausgabe. `npm run preview` startet eine
lokale Vorschau des Builds. `dist/`, `node_modules/` und `.astro/` sind generiert
und werden nicht versioniert.

## Struktur

```text
public/images/       Kartenbild und weitere freigegebene Bilder
src/components/      Header, Desktop-/Mobilnavigation und Footer
src/data/            Gemeinsame Navigationsdaten
src/layouts/         Gemeinsames HTML-Grundlayout
src/pages/           Statisch erzeugte Seiten
src/styles/          Zentrale Styles und Farbtokens
```

Die Startseite ist ausdrücklich ein Entwicklungsplatzhalter. Weitere Seiten,
Vereinsinhalte und rechtliche Angaben werden erst mit bestätigten Daten ergänzt.
`CityMapNav.astro` enthält bis zur Auswahl des Kartenbilds eine einfache
Desktopnavigation. Kartenbild, Gebäudezuordnung, Labelpositionen und endgültiger
Breakpoint bleiben offen. Die mobile Navigation nutzt natives HTML ohne
JavaScript. Vor Veröffentlichung fehlen insbesondere die finale Kartennavigation,
reale Inhalte sowie geprüfte Impressums- und Datenschutzangaben.
