// Positionen beziehen sich auf das vollständige, unbeschnittene Kartenbild.
// Noch keine Zieladressen: Alle Einträge sind in diesem Entwurf inaktiv.
export const navigation = [
  { label: 'Start', icon: 'home', x: 15.5, y: 57, current: true },
  { label: 'Bibliothek', icon: 'book', x: 20, y: 22, current: false },
  { label: 'Satzung', icon: 'scroll', x: 49, y: 18, current: false },
  { label: 'Vorstand', icon: 'people', x: 50, y: 44, current: false },
  { label: 'Veranstaltungen', icon: 'calendar', x: 76, y: 26, current: false },
  { label: 'Mitglied werden', icon: 'people', x: 61, y: 81, current: false },
  { label: 'Kontakt', icon: 'mail', x: 85, y: 59, current: false },
] as const;
