import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'musikwerkzeuge',
  title: 'Online Musikwerkzeuge',
  description:
    'Kostenlose Musikwerkzeuge für Musiker, Produzenten und Enthusiasten. Metronom, BPM-Rechner, Frequenzkonverter, Notenäquivalenz und mehr.',
  seo: [
    {
      type: 'summary',
      title: 'Was Sie in dieser Kategorie finden',
      items: [
        'Online-Metronom mit Web Audio API — Millisekundengenauigkeit',
        'BPM-zu-Millisekunden-Rechner für Delays und Hallgeräte',
        'Frequenz-zu-Musiknote-Konverter (Hz, Cent und Verstimmung)',
        'Phasenabstandsrechner für Mikrofonausrichtung',
        'Notenäquivalenz zwischen lateinischen, amerikanischen und deutschen Systemen',
        'Digitaler Audio-Speicherrechner',
      ],
    },
    {
      type: 'title',
      text: 'Musikwerkzeuge für jede Phase des kreativen Prozesses',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Von der ersten Probe bis zum finalen Mastering braucht jeder Musiker und Produzent präzise Werkzeuge, die jederzeit verfügbar sind. Unsere Sammlung von <strong>Online-Musikwerkzeugen</strong> wurde mit einem klaren Ziel entwickelt: maximale technische Präzision bei minimalem Aufwand.',
    },
    {
      type: 'paragraph',
      html: 'Keine Installation erforderlich. Alle Werkzeuge laufen direkt im Browser, sind vollständig kostenlos und schützen Ihre Privatsphäre: Keine Daten verlassen Ihr Gerät.',
    },
    {
      type: 'title',
      text: 'Für den übenden Musiker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>Online-Metronom</strong> ist das grundlegende Werkzeug für jeden Musiker in Ausbildung oder im Üben. Unser Metronom verwendet die Web Audio API, um Millisekundengenauigkeit zu gewährleisten, Drift zu eliminieren und visuelles Feedback mit einem Welleneffekt bereitzustellen. Die <strong>Tap-Tempo</strong>-Funktion ermöglicht es Ihnen, das BPM eines beliebigen Songs sofort zu finden.',
    },
    {
      type: 'title',
      text: 'Für den Musikproduzenten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>BPM-zu-Millisekunden-Rechner</strong> ist in jeder Mixing-Session unverzichtbar. Ein Delay oder Hall auf das Songtempo zu synchronisieren macht den Unterschied zwischen einem Mix, der atmet, und einem, der künstlich klingt. Ebenso richtet der <strong>Phasenabstandsrechner</strong> Mikrofone mit Sample-genauer Präzision aus und verhindert Phasenauslöschung bei Multi-Mikrofon-Aufnahmen.',
    },
    {
      type: 'title',
      text: 'Für den Tontechniker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Frequenz-zu-Musiknote-Konverter</strong> wandelt jeden Hz-Wert in seine entsprechende Note um und zeigt dabei auch die Abweichung in Cent. Perfekt zum Stimmen analoger Synthesizer, zum Identifizieren problematischer Resonanzen in einem Raum oder zum Arbeiten mit verstimmten Samples. Der <strong>digitale Audio-Speicherrechner</strong> hilft bei der Planung von Aufnahmeprojekten und der präzisen Verwaltung von Festplattenplatz.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Technische Präzision',
          description:
            'Alle Werkzeuge basieren auf mathematisch verifizierten Algorithmen. Keine Annäherungen: Die Ergebnisse sind exakt und reproduzierbar.',
        },
        {
          title: 'Vollständige Privatsphäre',
          description:
            'Die Verarbeitung erfolgt auf Ihrem Gerät. Keine Audio-, Datei- oder persönlichen Daten werden an einen Server übertragen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Die universelle Sprache der Musik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Musik ist eine Sprache mit mehreren Notationssystemen. Das <strong>Notenäquivalenz</strong>-Werkzeug übersetzt sofort zwischen dem lateinischen System (Do, Re, Mi…), dem amerikanischen System (C, D, E…) und dem deutschen System (C, D, E… mit H statt B), um Verwirrung bei der Kommunikation mit Musikern aus verschiedenen Traditionen oder beim Lesen von Noten aus verschiedenen Ländern zu vermeiden.',
    },
    {
      type: 'tip',
      title: 'Keine Installation erforderlich',
      html: 'Alle Werkzeuge laufen direkt im Browser, ohne Plugins oder zusätzliche Apps. Setzen Sie ein Lesezeichen auf diese Seite, um sie während Ihrer Sessions immer zur Hand zu haben.',
    },
  ],
};
