import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-naar-ms-calculator';
const title = 'BPM naar Milliseconden Calculator voor Delay en Reverb';
const description =
  'Converteer je projecttempo (BPM) naar exacte delaytijden (ms) en frequenties (Hz). De essentiële tool voor het met ritmische precisie instellen van delays, reverbs und compressors.';

const faqData = [
  {
    question: 'Wat is Pre-delay bij een reverb?',
    answer:
      'Pre-delay is de tijd tussen het directe geluid (bron) en het begin van de reverbstaart. Door dit ritmisch in te stellen, blijft de originele bron helder voordat het ruimtelijke effect het overneemt — essentieel voor zang en percussie.',
  },
  {
    question: 'Hoe werkt Tap Tempo?',
    answer:
      'Tap Tempo detecteert het tempo door ritmisch mee te klikken met een nummer. Elke klik wordt getimed en het systeem berekent het gemiddelde van de intervallen om je de exacte BPM te geven. Het is de snelste manier om effecten te synchroniseren met een externe track.',
  },
  {
    question: 'Waarom milliseconden gebruiken in plaats van automatische synchronisatie?',
    answer:
      "Er zijn drie belangrijke redenen: het gebruik van analoge hardware zonder MIDI, het verfijnen van pre-delays zodat de reverb 'ademt', en 'groove'-aanpassingen waarbij effecten iets buiten het raster worden geplaatst om een statisch, robotachtig gevoel te voorkomen.",
  },
  {
    question: 'Waarvoor wordt de ritmische Hz-waarde gebruikt?',
    answer:
      'Hertz-waarden vertellen je hoe vaak iets per seconde gebeurt. Ze zijn essentieel voor het configureren van LFO-oscillatoren, phaser-sweepsnelheden of filtermodulatie op synthesizers die geen native tempo-sync hebben.',
  },
];

const howToData = [
  {
    name: 'Voer de BPM in',
    text: 'Typ je projecttempo in het centrale veld of gebruik de Tap Tempo-knop.',
  },
  {
    name: 'Vind de onderverdeling',
    text: 'Zoek de noot die je nodig hebt (kwart, achtste, etc.) in de eenvoudige, gepunteerde of triolen-tabellen.',
  },
  {
    name: 'Kopieer de waarde',
    text: 'Klik op het kopieericoon naast de millisecondewaarde om deze direct in je plugin of hardware te plakken.',
  },
  {
    name: 'Stel de Pre-delay in',
    text: 'Gebruik het onderste gedeelte voor ultrakorte waarden die ideaal zijn om reverb te scheiden van de hoofdstem.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<BpmCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische referenties',
  bibliography: [
    {
      name: 'The Art of Mixing: A Visual Guide to Recording, Engineering, and Production',
      url: 'https://exellon.net/book/The%20Art%20Of%20Mixing%20A%20Visual%20Guide%20To%20Recording%20Engineering%20And%20Production%20(1997)%20-%20David%20Gibson%20Mix%20Books.pdf',
    },
    {
      name: 'BPM to MS Conversion Formula — Tuneform',
      url: 'https://tuneform.com/tools/time-tempo-bpm-to-milliseconds-ms',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'TEMPO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Delaytijden',
    sectionDotted: 'Gepunteerde Noten',
    sectionTriplets: 'Triolen',
    sectionReverb: 'Reverb-ontwerp (Pre-delay)',
    colNote: 'Noot',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-delay</strong> scheidt de originele aanzet van de reverbstaart om helderheid te krijgen.',
    copyAriaMs: 'Kopieer milliseconden',
    copyAriaPreDelay: 'Kopieer pre-delay',
    copyFeedback: 'Gekopieerd!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Functies van de calculator',
      items: [
        'Directe berekening voor eenvoudige, gepunteerde en triolen-noten',
        'Milliseconden- en Hz-waarden voor elke ritmische onderverdeling',
        'Pre-delay sectie voor reverb-ontwerp met muzikale precisie',
        'Tap Tempo: bepaal BPM door mee te tikken met de muziek',
        'Kopieer met één klik naar het klembord voor elke DAW of plugin',
      ],
    },
    {
      type: 'title',
      text: 'Waarom is een BPM naar Milliseconden Calculator essentieel?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In de moderne muziekproductie onderscheidt ritmische precisie een amateurmix van een professionele mix. Hoewel de meeste DAW’s zoals Ableton Live, FL Studio of Logic Pro automatische synchronisatie voor hun effecten hebben, zijn er talloze situaties waarin handmatige bediening superieur is.',
    },
    {
      type: 'title',
      text: 'Het belang van Pre-delay in Reverb',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een van de meest kritische toepassingen van deze tool is het aanpassen van de <strong>pre-delay</strong>. Als je reverb toepast op zang zonder pre-delay, begint de effectstaart onmiddellijk, wat de medeklinkers vertroebelt en de helderheid vermindert. Door een ritmische pre-delay te berekenen (zoals een 64e of 128e noot), laat je de originele stem ademen voordat de kunstmatige akoestische ruimte het overneemt. Dit creëert een gevoel van diepte zonder de aanwezigheid van de bron op te offeren.',
    },
    {
      type: 'title',
      text: 'Analoge Delay en Externe Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als je analoge delaypedalen of vintage synthesizers verzamelt, weet je dat velen geen MIDI-clock-ingang hebben. Om een tapedealy handmatig in te stellen, moet je precies weten hoeveel milliseconden overeenkomen met een achtste of gepunteerde kwartnoot. Onze calculator geeft je die waarden direct, zodat je je hardware met chirurgische precisie kunt instellen.',
    },
    {
      type: 'title',
      text: 'Off-the-grid Effecten en Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Soms klinkt mathematische perfectie saai. Veel producers gebruiken millisecondenwaarden als uitgangspunt en verschuiven ze dan iets naar boven of beneden. Een delay 5 tot 10 ms buiten het raster plaatsen kan een menselijke <em>swing</em> of unieke <em>groove</em> toevoegen die rigide quantisatie nooit kan dupliceren.',
    },
    {
      type: 'title',
      text: 'Gesynchroniseerde Compressie en LFO’s',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wist je dat de <strong>Attack-</strong> en <strong>Release-tijden</strong> van een compressor ook ritmisch kunnen zijn? Door de release van je drum bus-compressor zo in te stellen dat deze precies voor de volgende kick-hit eindigt, ontstaat een "pomp-" of <em>ademeffect</em> dat het ritme van het nummer versterkt. Evenzo is de Hz-waarde essentieel voor het configureren van low-frequency oscillatoren (LFO’s) op synths zonder native tempo-sync.',
    },
    {
      type: 'tip',
      title: 'Hoe gebruik je Tap Tempo',
      html: 'De <strong>Tap Tempo</strong>-functie is ideaal voor live-situaties of wanneer je luistert naar een externe track waarvan je het tempo niet kent. Klik simpelweg ritmisch op de knop in de maat van de muziek. We raden minstens 4 of 5 taps aan, zodat het algoritme de waarde nauwkeuriger kan middelen.',
    },
    {
      type: 'title',
      text: 'Tempo Wiskundeformules',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De onderliggende formule is eenvoudig: <code>ms = 60.000 / BPM</code>. Van daaruit worden multipliers toegepast voor elke onderverdeling.',
    },
    {
      type: 'list',
      items: [
        'Eenvoudige noten: gebaseerd op binaire verdeling (1, 0.5, 0.25, etc.).',
        'Gepunteerd: vermenigvuldig de basiswaarde met 1.5.',
        'Triolen: vermenigvuldig de basiswaarde met 0.667 (2/3).',
      ],
    },
  ],
};
