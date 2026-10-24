// Noch keine Zieladressen: Alle Einträge sind in diesem Entwurf inaktiv.
export const navigation = [
  { label: 'Start', icon: 'home', current: true },
  { label: 'Bibliothek', icon: 'book', current: false },
  { label: 'Satzung', icon: 'scroll', current: false },
  { label: 'Vorstand', icon: 'people', current: false },
  { label: 'Veranstaltungen', icon: 'calendar', current: false },
  { label: 'Mitglied werden', icon: 'people', current: false },
  { label: 'Kontakt', icon: 'mail', current: false },
] as const;
