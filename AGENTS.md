# AGENTS.md – Weltenwanderer Moosburg

## 1. Zweck und Arbeitsweise

Dieses Repository enthält die Webseite des Pen-&-Paper-Vereins **Weltenwanderer Moosburg**. Dieses Dokument ist die verbindliche Arbeitsgrundlage für KI-Coding-Agents und Mitwirkende, soweit keine ausdrücklich neuere Projektentscheidung vorliegt.

**Ziel:** Eine schnelle, statische, barrierearme und gut pflegbare Vereinswebseite mit einer historischen, illustrierten Stadtkarte von Moosburg als charakteristischer **Desktop-Navigation**.

**Arbeitsprinzipien:**

- Bestehende Architektur und Gestaltung respektieren; keine unnötigen Abhängigkeiten oder Frameworks hinzufügen.
- Kleine, nachvollziehbare Änderungen mit klarer Trennung von Inhalt, Gestaltung und Funktionalität bevorzugen.
- Vor umfangreichen Umbauten bestehende Projektdateien, Assets und Konventionen prüfen.
- Keine Inhalte, Personen, Kontaktdaten, Termine, Vereinsregistereinträge oder rechtlichen Angaben erfinden.
- Offene Gestaltungsfragen nicht stillschweigend als endgültig festlegen; für reversible Entscheidungen sinnvolle Defaults wählen und dokumentieren.
- Die Webseite und ihre öffentlichen Inhalte sind **deutschsprachig**.

## 2. Verbindliche Produktentscheidungen

1. **Desktop:** Im oberen Bereich **jeder Seite** befindet sich dieselbe illustrierte Stadtkarte als Hauptnavigation. Sie ist **nicht bildschirmfüllend** und verdrängt den Seiteninhalt nicht.
2. **Navigationseinträge sind dauerhaft sichtbar.** Ihre Bezeichnungen dürfen **nicht erst bei Hover** erscheinen. Hover/Focus darf lediglich das aktive Ziel zusätzlich hervorheben.
3. **Mobile Geräte:** Hier wird die Kartennavigation durch eine **konventionelle, gut bedienbare Navigation** ersetzt (z. B. Kopfzeile mit ausklappbarem Menü). Nicht versuchen, eine verkleinerte Gesamtkarte als primäre mobile Navigation zu erzwingen.
4. **Designentscheidung geändert:** Die Navigation soll nicht wie in Punkt 1,2 und 3 umgesetzt werden. Wir machen eine konventionelle Navigation.
5. **Unterseiten:** Karte oben, darunter der normale Seiteninhalt. Aktuelle Seite soll in der Navigation erkennbar sein.
6. **Technologie:** Statische Webseite, bevorzugt **Astro** mit HTML/CSS und **minimalem JavaScript**, nur wo funktional nötig. **Kein Vue 3, React oder anderes clientseitiges UI-Framework** ohne neue ausdrückliche Entscheidung.
7. **Designfarben:** Gedämpftes **Rot, Gold und Braun**, ergänzt durch Pergamenttöne. Atmosphäre: historisch, fantasievoll, hochwertig – aber lesbar, zurückhaltend und nicht überladen.
8. **Kartenstil:** Handgezeichnete, historische Vogelperspektive auf Moosburg mit dichten Häuserzeilen, der markanten Kirche und warmen Pergamentfarben. **Keine modernen Bahnhofs-/Gleisanlagen**, kein Kompass und keine Straßennamen auf der finalen Karte. Wo möglich, an der tatsächlichen Altstadtstruktur orientieren.
9. **Dekoration reduzieren:** Keine überladenen Wappen, Wimpel, Bücherstapel oder sonstige Deko im Inhaltsbereich. **Efeu kann sparsam im Karten-/Navigationsbereich vorkommen**, nicht als dekorative Ranke am Content-Rand. Keine unnötigen Schmuckelemente, die Inhalt oder Bedienung erschweren.
10. **Vereinsname:** „Weltenwanderer Moosburg“ als gut sichtbarer Titel/Markenname. Vereinsstatus bzw. „e. V.“ erst verwenden, wenn bestätigt.

## 3. Gestaltungssystem

Vorgeschlagene Startpalette (bei Bedarf anhand des finalen Bildmaterials anpassen):

| Rolle | Farbe | Hex |
| --- | --- | --- |
| Primär / Burgunderrot | Dunkelrot | `#762B2B` |
| Akzent / Altgold | Gedämpftes Gold | `#C49A49` |
| Rahmen / Dunkelbraun | Dunkles Holz | `#38291F` |
| Hintergrund / Pergament | Warmes Beige | `#E8D6AE` |
| Text / Tintenbraun | Dunkles Braun | `#241B17` |

- CSS-Custom-Properties als zentrale Designtokens verwenden, keine verstreuten Hexwerte.
- Fließtext muss auf Pergament **gut kontrastieren** und auch bei Zoom lesbar bleiben.
- Historische Typografie gezielt für Titel/Überschriften, gut lesbare Serif- oder andere passende Schrift für Fließtext. Keine rein dekorativen Schriften für längere Absätze.
- Zurückhaltende Rahmen und Linien sind in Ordnung; keine ornamental überladenen Seitenleisten.
- Seiteninhalt unter der Karte als ruhige, gut strukturierte Lesefläche mit großzügigen Abständen.
- Keine unechten Wappen, erfundenen Vereinsmottos oder unbestätigten Claims ergänzen.

## 4. Aufbau der Seiten

### Desktop (schematisch)

```text
┌───────────────────────────────────────────────────────┐
│ Vereinsname / zurückhaltender Kopfbereich             │
├───────────────────────────────────────────────────────┤
│                                                       │
│  HISTORISCHE STADTKARTE ALS NAVIGATION                │
│  [Bibliothek] [Satzung] [Vorstand] [Kontakt] ...       │
│  dauerhaft sichtbare, klickbare Beschriftungen        │
│                                                       │
├───────────────────────────────────────────────────────┤
│ Seitentitel                                           │
│                                                       │
│ Inhalt der jeweiligen Unterseite                      │
│                                                       │
├───────────────────────────────────────────────────────┤
│ Footer / rechtlich notwendige Links                   │
└───────────────────────────────────────────────────────┘
```

Die Karte ist ein **breites Banner**, kein Vollbild. Eine anfängliche Desktop-Höhe von ungefähr **300–400 px** ist ein zu testender Richtwert, keine feste Vorgabe. Die Navigation soll gut lesbar sein, ohne auf jeder Unterseite unnötig viel vertikalen Raum einzunehmen.

### Mobil

```text
┌──────────────────────────┐
│ Weltenwanderer   [Menü] │
├──────────────────────────┤
│ Seitentitel              │
│ Inhalt                   │
│ ...                      │
├──────────────────────────┤
│ Footer                   │
└──────────────────────────┘
```

- Im mobilen Layout die großformatige Karte als Navigation **ausblenden oder vollständig durch das konventionelle Menü ersetzen**. Sie darf nicht zusätzlichen Platz beanspruchen, wenn sie für die Navigation nicht genutzt wird.
- Breakpoint nach **tatsächlicher Nutzbarkeit der Kartenlabels** bestimmen, nicht pauschal nach Gerätekategorie. Tablets gezielt testen.
- Navigation ohne Hover zuverlässig bedienbar machen.

## 5. Kartenbasierte Navigation – Umsetzung

**Technischer Ansatz:** Kartenbild und Navigation **getrennt** pflegen.

- Die Karte ist ein optimiertes Bild (bevorzugt WebP/AVIF, mit geeignetem Fallback).
- **Schriftzüge/Links NICHT in das Kartenbild hineinrendern**: Texte und Ziele müssen unabhängig editierbar, zugänglich und responsiv sein.
- Interaktive Bereiche als semantische `<a href="…">`-Links auf einer Overlay-Ebene realisieren. Für unregelmäßige Gebäudeflächen können SVG-Polygone bzw. `path`-Elemente verwendet werden; die sichtbaren Labels bleiben dabei eindeutig den Links zugeordnet.
- Bei SVG: ein konsistentes `viewBox`-Koordinatensystem nutzen. Bei absolut positionierten HTML-Overlays prozentuale Koordinaten bezogen auf den **unbeschnittenen Bildcontainer** verwenden.
- **Bild und Overlay müssen jederzeit dieselbe Geometrie haben**. Unkontrolliertes `object-fit: cover` kann Klickflächen verschieben. Besser: Bild mit bekanntem Seitenverhältnis und `width: 100%; height: auto` in einem entsprechend dimensionierten Container.
- **Jeder Navigationspunkt ist permanent als Textlabel erkennbar**, mit ausreichender Größe und einem Hintergrund/einer Kontur, die ihn vom detailreichen Stadtbild abhebt.
- Hover-, Tastaturfokus- und `aria-current="page"`-Zustände klar gestalten; bevorzugt Gold-/Rotakzente. Aktives Gebäude kann sanft betont werden, ohne den Karteninhalt zu verdecken.
- Keine Animationen als Voraussetzung für das Verständnis; `prefers-reduced-motion` beachten.
- Klick-/Touchbereiche groß genug halten; keine überlappenden interaktiven Ziele.
- Startseite, Unterseiten und direkte URL-Aufrufe müssen ohne Client-Routing funktionieren.
- Die Bildkarte ist eine **Navigationsoberfläche**, keine geografisch exakte Vermessungskarte; keine falsche Maßstabspräzision suggerieren.

### Mögliche Navigationspunkte (Arbeitsliste, nicht final)

- Startseite
- Verein / Über uns
- Vorstand
- Satzung
- Vereinsbibliothek
- Veranstaltungen / Spielrunden
- Mitglied werden
- Kontakt

Welches Gebäude welchen Punkt darstellt, ist **noch festzulegen**. Die Beispiele im Mockup sind keine verbindliche Informationsarchitektur. Navigationsziele an einer zentralen Stelle konfigurieren, damit Desktop- und Mobilnavigation stets synchron bleiben.

## 6. Empfohlene Astro-Struktur

Falls das Repository noch nicht initialisiert ist, ist folgende Struktur ein geeigneter Ausgangspunkt:

```text
src/
  components/
    SiteHeader.astro
    CityMapNav.astro
    MobileNav.astro
    SiteFooter.astro
  data/
    navigation.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    verein.astro
    vorstand.astro
    satzung.astro
    bibliothek.astro
    veranstaltungen.astro
    mitglied-werden.astro
    kontakt.astro
    impressum.astro
    datenschutz.astro
  styles/
    global.css
public/
  images/
    moosburg-map.webp
```

Dies ist ein **Vorschlag**, kein Auftrag, sämtliche Seiten sofort mit erfundenen Inhalten anzulegen. Vorhandene Verzeichnisstrukturen nach Möglichkeit beibehalten.

- Für gemeinsam genutzte Kopfzeile, Kartennavigation und Footer Komponenten einsetzen.
- Basislayout steuert gemeinsame Metadaten, Header, Navigation, Hauptinhalt und Footer.
- Navigation zentral als Datenstruktur pflegen: `label`, `href`, Position bzw. Karten-Zielfläche; ggf. `description`. Keine getrennten hartcodierten Menülisten.
- Statische Seiten aus Astro vorgerendert ausgeben. Kein SSR oder Server-Backend ohne tatsächlichen Bedarf.
- Native HTML-Elemente, CSS und kleine, klar begrenzte Skripte bevorzugen.
- Für ein mobiles Menü `<details>/<summary>` prüfen oder ein minimales zugängliches Menü mit JavaScript umsetzen; Bedienbarkeit und Zustandsanzeige gehen vor reiner Codeersparnis.

## 7. Inhalte und Sprache

- Öffentlich sichtbare Texte sind in gut verständlichem Deutsch geschrieben.
- Texte handeln vom Pen-&-Paper-Verein und seinem tatsächlichen Angebot; keine pauschalen Behauptungen über historische Bildungsarbeit, Veranstaltungen oder Kooperationen aus Demo-Mockups übernehmen.
- Vereinsvorstand, Satzung, Mitgliedschaft, Bibliothek, Termine und Kooperationen nur mit bestätigten Angaben veröffentlichen.
- Bei fehlenden realen Daten klar gekennzeichnete Platzhalter in Entwicklungsversionen verwenden; nicht als fertige Fakten ausgeben.
- Impressum und Datenschutzerklärung müssen vor Veröffentlichung anhand tatsächlicher Betreiber- und Hostingdaten geprüft werden. Keine juristischen Muster als garantiert rechtskonform ausgeben.
- Externe Schriften, Analytik, eingebettete Dienste und Cookie-Technik nur bei konkretem Bedarf und nach Datenschutzprüfung einsetzen.

## 8. Barrierefreiheit und Bedienbarkeit

- Strukturell korrektes HTML: `<header>`, `<nav aria-label="Hauptnavigation">`, `<main>`, `<footer>`.
- Alle Seiten müssen vollständig per **Tastatur** bedienbar sein, inklusive Kartenlinks und mobilem Menü.
- Deutliche `:focus-visible`-Stile, nicht allein Farbwechsel als Zustandsanzeige.
- `aria-current="page"` für die aktive Navigation setzen.
- Kontrast für normale Texte mindestens **4,5:1**, für große Texte mindestens **3:1** anstreben.
- Relevante Navigationstexte sind echter Text; keine rein grafischen Labels.
- Karte als Hintergrund/Illustration von den eigentlichen Links unterscheiden: sinnvolles Alt-Konzept wählen, keine redundanten langen Beschreibungen sämtlicher dargestellter Gebäude.
- Mobile Touch-Ziele ausreichend groß gestalten, Zielgröße möglichst 44 × 44 CSS-Pixel.
- Bedienbarkeit bei 200 % Zoom, schmalen Viewports und ohne JavaScript prüfen. Wenn das mobile Menü JavaScript erfordert, ohne JavaScript zumindest einen alternativen Zugang zu den Hauptlinks sicherstellen.
- Keine essenziellen Informationen allein über Hover-Effekte vermitteln.

## 9. Performance und SEO

- So wenig JavaScript wie möglich ausliefern. Kein Client-Hydration-Overhead für statische Komponenten.
- Die Karte ist das wichtigste und potentiell größte Asset: Bildgröße, Format und Kompression bewusst optimieren. Keine unnötig hochauflösende Originaldatei ungeprüft ausliefern.
- Das Kartenbanner nicht verzögert laden, wenn es sofort sichtbar ist; Größen-/Seitenverhältnis zur Vermeidung von Layout-Sprüngen festlegen.
- Für jede Seite eindeutigen `<title>`, sinnvolle Meta-Description, genau eine H1 und klare Überschriftenhierarchie setzen.
- Seiten über echte interne URLs verlinken; kein rein clientseitiges Umschalten von Unterseiten.
- Wo relevant, Sitemaps und kanonische URLs nach Festlegung der Domain ergänzen.

## 10. Vorgehen für Coding-Agents

Bei jeder relevanten Aufgabe:

1. **Bestand prüfen:** Betroffene Komponenten, vorhandene Styles, Assets, Routing und ggf. Skripte ansehen.
2. **Entscheidung abgleichen:** Desktop-Karte, permanente Labels, mobile Standardnavigation und statische Architektur dürfen nicht versehentlich verletzt werden.
3. **Minimal umsetzen:** Bestehendes wiederverwenden; keine neuen Bibliotheken ohne ersichtlichen Mehrwert.
4. **Prüfen:** Falls Projektbefehle vorhanden, Build/Lint/Tests ausführen; Links, Tastatur, Kontrast und Responsive-Verhalten kontrollieren.
5. **Berichten:** Kurz festhalten, welche Dateien geändert wurden, was getestet wurde und welche Punkte offen sind.

### Definition of Done für Navigationsänderungen

- [ ] Desktop zeigt Karte im oberen Bereich aller relevanten Seiten.
- [ ] Sämtliche Navigationslabels sind ohne Hover sichtbar.
- [ ] Karte und Klickflächen bleiben beim Skalieren deckungsgleich.
- [ ] Aktuelle Unterseite ist erkennbar.
- [ ] Mobile zeigt eine konventionelle, vollständig nutzbare Navigation.
- [ ] Tastatur- und Fokusverhalten geprüft.
- [ ] Keine unnötigen Dekoelemente (Kompass, Wappen, Schienen, Legende, Straßennamen) wieder eingeführt.
- [ ] Statischer Build funktioniert, sofern die Projektumgebung eingerichtet ist.

## 11. Offene Entscheidungen

Diese Punkte **nicht ohne Abstimmung als entschieden darstellen**:

- Vollständige Seiten-/Navigationsstruktur und finale Menütexte.
- Exakte Zuordnung von Seiten zu Gebäuden und genaue Labelpositionen.
- Finale Kartenbilddatei und für Desktop geeigneter Bildausschnitt.
- Exakter Breakpoint zwischen Karten- und Menüansicht.
- Domain, Hosting, Impressumsdaten, Datenschutzhinweise und Vereinsstatus.
- Tatsächliche Inhalte und Dokumente (Satzung, Termine, Vorstand, Bibliotheksbestand etc.).

**Designziel in einem Satz:** Eine atmosphärische Pen-&-Paper-Vereinswebseite, deren historische Stadtkarte auf Desktop als sofort verständliche Navigation dient und die auf Mobilgeräten ebenso unkompliziert wie eine klassische Webseite benutzbar bleibt.
