import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frequentie-naar-noot-converter';
const title = 'Frequentie naar Muzieknoten Converter';
const description =
  'Converteer hertz direct naar muzieknoten. Identificeer de exacte noot van elke frequentie, meet de afwijking in cents, hoor de pure toon en stem synthesizers en samplers met precisie.';

const faqData = [
  {
    question: 'Hoe weet ik welke noot overeenkomt met 440 Hz?',
    answer:
      '440 Hz komt precies overeen met A4, de universele stemreferentienoot. Het is de A boven de centrale C op de piano. Deze frequentie is sinds 1939 de ISO 16-norm en wordt wereldwijd gebruikt om orkestinstrumenten te stemmen.',
  },
  {
    question: "Wat betekent het als een noot '15 cents te hoog' is?",
    answer:
      'Een cent is een honderdste van een halve toon. Als een noot 15 cents te hoog is, betekent dit dat de frequentie iets hoger is dan de exacte noot in de gelijkzwevende stemming. Op een synthesizer moet je -15 cents fine-tune toepassen om dit te corrigeren.',
  },
  {
    question: 'Waarom zijn er naast 440 Hz ook referentie-opties van 432 Hz en 444 Hz?',
    answer:
      'Verschillende muzikale contexten gebruiken verschillende stemreferenties. 432 Hz is populair in bepaalde productiecommunities. 444 Hz komt veel voor bij opnames van vroege muziek uit de renaissance. Sommige Europese orkesten stemmen tussen 441–444 Hz voor een helderdere klank.',
  },
  {
    question: 'Waarvoor dient het interactieve pianoklavier?',
    answer:
      'Met de interactieve piano kun je de noot visueel identificeren op het klavier en ook frequenties invoeren door direct op de toetsen te drukken. Door op een toets te drukken, zie je de exacte frequentie en hoor je een pure sinusgolf ter vergelijking.',
  },
  {
    question: 'Hoe gebruik ik de harmonischen die de calculator toont?',
    answer:
      'De harmonischen (lager en hoger octaaf) tonen de frequenties die direct gerelateerd zijn aan je noot. Ze zijn nuttig om conflicten tussen synthesizer-lagen te vermijden, resonante filters op de juiste noot in te stellen of drum samples aan de juiste sampler-octaven toe te wijzen.',
  },
  {
    question: 'Waarom genereert de luistermodus een sinusgolf in plaats van het echte geluid?',
    answer:
      'Een sinusgolf is een pure golf die alleen de grondfrequentie bevat zonder toegevoegde harmonischen. Dit maakt een zuivere vergelijking met het echte instrument mogelijk zonder dat klankkleur de beoordeling van de stemming verstoort. Het is hetzelfde signaal dat een elektronisch stemapparaat genereert.',
  },
  {
    question: 'Hoe bereken je de frequentie van een muzieknoot?',
    answer:
      'De frequentie wordt berekend met een logaritmische formule op basis van de gelijkzwevende stemming. Uitgaande van de referentie-A4 (440 Hz), wordt elke halve toon hoger verkregen door te vermenigvuldigen met de twaalfde-machtswortel uit twee (~1,05946), en elk octaaf staat gelijk aan het verdubbelen van de frequentie.',
  },
  {
    question: 'Welke noot is de frequentie 440 Hz?',
    answer:
      'De frequentie van 440 Hz is precies de noot A4. Het is de standaard referentienoot die door de meeste orkesten en hedendaagse muzikanten wordt gebruikt om hun instrumenten te stemmen sinds het midden van de twintigste eeuw.',
  },
  {
    question: 'Wat is het verschil tussen stemmen op 440 Hz en 432 Hz?',
    answer:
      '440 Hz is de internationale standaard (ISO 16). 432 Hz is een alternatieve stemming die sommige muzikanten verkiezen om subjectieve sonische redenen, vaak gebruikt in meditatiemuziek, hoewel er geen wetenschappelijk bewijs is voor duidelijke biologische voordelen vergeleken met 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Voer de frequentie in',
    text: 'Typ de frequentie in hertz in het hoofdveld. Het resultaat verschijnt onmiddellijk met de nootnaam en het wetenschappelijke octaaf.',
  },
  {
    name: 'Lees het resultaat en de cents-meter',
    text: 'De visuele meter toont of je frequentie te hoog, te laag of precies goed is. De cents-waarde vertelt je hoeveel je de fine-tune op je instrument of plugin moet aanpassen.',
  },
  {
    name: 'Gebruik de harmonischen om lagen te stemmen',
    text: 'Controleer de frequenties van het lagere en hogere octaaf om extra oscillatoren, resonante filters of percussielagen te configureren zonder frequentieconflicten.',
  },
  {
    name: 'Pas de A4-referentie aan',
    text: 'Wijzig de A4-referentie naar 432 Hz, 444 Hz of een aangepaste waarde, zodat alle berekeningen consistent zijn met je projectcontext.',
  },
  {
    name: 'Luister naar de referentietoon',
    text: 'Druk op de afspeelknop om een pure sinusgolf te genereren op de ingevoerde frequentie en stem je echte instrument op het gehoor.',
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

export const content: ToolLocaleContent<FrequencyNoteConverterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische referenties',
  bibliography: [
    {
      name: 'ISO 16:1975 — Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Physics of Sound — Musical Acoustics (MIT)',
      url: 'https://musictech.mit.edu/musical-acoustics-synthesis-and-audio-effects/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz naar Noot',
    btnNoteToHz: 'Noot naar Hz',
    labelRef: 'A4 Referentie',
    ariaRefCustom: 'Aangepaste A4 referentiefrequentie',
    calInfo:
      '<strong>440 Hz</strong> is de internationale standaard. <strong>432 Hz</strong> wordt vaak gebruikt in meditatiemuziek en solfeggio.',
    labelFrequency: 'FREQUENTIE',
    ariaFreqInput: 'Voer frequentie in hertz in',
    ariaPlay: 'Luister naar toon',
    copyNoteName: 'Kopieer noot',
    labelOctaveDown: 'Lager octaaf',
    labelInputFreq: 'Invoerfrequentie',
    labelOctaveUp: 'Hoger octaaf',
    labelNoteInput: 'NOOTNAAM (bijv. A4, C#3, Do4)',
    placeholderNote: 'Typ de noot...',
    labelSetNote: 'STEL NOOT IN',
    labelSetOctave: 'STEL OCTAAF IN',
    labelSelectedNote: 'Geselecteerde noot',
    copyHz: 'Kopieer Hz',
    btnListenNote: 'Luister naar noot',
    pianoLabel: 'Interactieve piano — druk op een toets om de frequentie te zien',
    pianoAria: 'Interactief pianoklavier',
    historyTitle: 'Geschiedenis',
    historyClear: 'Wissen',
    historyEmpty: 'Geen recente conversies',
    historyLoadAria: 'Laad %s Hz',
    tuned: 'Gestemd',
    sharp: 'te hoog',
    flat: 'te laag',
    unitHzExact: 'exacte Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: 'Oct',
    copyFeedback: 'Gekopieerd',
  },
  seo: [
    {
      type: 'summary',
      title: 'Functies van de calculator',
      items: [
        'Bidirectionele conversie: Hz naar noot en noot naar Hz in dezelfde tool',
        'Sample-nauwkeurige precisie met aanpasbare A4-referentie (440 / 432 / 444 Hz)',
        'Visuele cents-meter met indicator voor te hoog / te laag / gestemd',
        'Weergave van harmonischen (grondtoon, lager octaaf, hoger octaaf)',
        'Interactief pianoklavier dat de bijbehorende toets markeert',
        'Zoekgeschiedenis om snel patches en samples te vergelijken',
      ],
    },
    {
      type: 'title',
      text: 'Wat is de frequentie van een muzieknoot en waarom is het belangrijk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elke muzieknoot is in essentie een periodieke trilling van de lucht. Wanneer een gitaarsnaar 440 keer per seconde trilt, produceert deze A4, de universele stemreferentienoot. Deze overeenkomst tussen hertz en noten is niet willekeurig: deze wordt gedefinieerd door de <strong>gelijkzwevende stemming</strong>, het overheersende stemsysteem in de westerse muziek, dat het octaaf vanuit wiskundig oogpunt verdeelt in twaalf perfect even ver van elkaar verwijderde halve tonen.',
    },
    {
      type: 'paragraph',
      html: 'Het kennen van de exacte frequentie van elke noot is fundaal in de geluidssynthese, muziekproductie, audiotechniek en instrumentenbouw. Een synthesizer moet weten op welke frequentie elke oscillator moet trillen om een gestemde noot te reproduceren. Een mixing-engineer moet weten waar hij moet filteren met een equalizer om een brom te verwijderen zonder de grondtoon van een instrument aan te tasten.',
    },
    {
      type: 'title',
      text: 'De wiskundige formule achter de conversie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De gelijkzwevende stemming is gebaseerd op een meetkundige reeks. Elke halve toon staat gelijk aan het vermenigvuldigen van de frequentie met de twaalfde-machtswortel uit twee. De formule om de frequentie van een willekeurige noot te berekenen op basis van de afstand in halve tonen ten opzichte van A4 is:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Formule voor het converteren van MIDI-nootnummer naar frequentie in Hz',
    },
    {
      type: 'paragraph',
      html: 'Waarbij <em>n</em> het MIDI-nootnummer is (A4 = 69) and <em>A4</em> de referentiefrequentie, meestal 440 Hz. Het omkeren van deze formule geeft de dichtstbijzijnde noot voor elke ingevoerde frequentie, evenals de afwijking in cents.',
    },
    {
      type: 'title',
      text: 'Cents: de precisie-eenheid voor muzikanten en technici',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een halve toon is verdeeld in 100 cents. Met deze eenheid kan elke stemafwijking met decimale precisie worden beschreven. Een afwijking van 10 cents is al waarneembaar voor een getraind oor; boven de 20 cents klinkt het voor de meeste luisteraars duidelijk vals.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Perfecte stemming',
          description:
            'Een noot is perfect gestemd wanneer de afwijking minder dan 5 cents is van de exacte frequentie in de gelijkzwevende stemming.',
        },
        {
          title: 'Cents in de DAW',
          description:
            'Samplers, synthesizers en pitch-shifting plugins gebruiken cents voor fine-tune, waardoor samples zonder artefacten op hun exacte noot kunnen worden afgestemd.',
        },
        {
          title: 'Menselijke drempel',
          description:
            'De waarnemingsdrempel voor valse noten varieert tussen 5 en 15 cents, afhankelijk van het instrument, de dynamiek en de harmonische context.',
        },
      ],
    },
    {
      type: 'title',
      text: 'De A4-referentie: 440 Hz, 432 Hz en de stemmenoorlog',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De referentiefrequentie A4 = 440 Hz werd in 1939 internationaal gestandaardiseerd (ISO 16). Barokmuzikanten werken echter meestal met referenties van 415 Hz, en er is een groeiende gemeenschap van producers die de voorkeur geeft aan 432 Hz. Elite-orkesten zoals de Berliner Philharmoniker gebruiken regelmatig 443 Hz voor een helderdere, meer doordringende klank.',
    },
    {
      type: 'paragraph',
      html: 'In de muziekproductie is de referentie van belang bij het mixen van live opgenomen akoestische instrumenten met virtuele instrumenten. Als de opgenomen piano was gestemd op 442 Hz maar de synthesizer standaard op 440 Hz staat, moeten alle samples in cents worden gecorrigeerd.',
    },
    {
      type: 'tip',
      title: 'Professionele samplertruc',
      html: 'Wanneer je een sample importeert in een sampler zoals Kontakt of Decent Sampler, voer dan de scanfrequentie van de sample in deze calculator in. De cents-waarde die op de meter wordt getoond, vertelt je precies de <em>fine-tune</em> waarde die je in de sampler moet invoeren, zodat de noot perfect gestemd speelt.',
    },
    {
      type: 'title',
      text: 'Referentietabel voor frequenties per octaaf',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tabel toont de exacte frequenties van elke C-noot in de gelijkzwevende stemming met A4 = 440 Hz, nuttig voor het configureren van modulaire synthesizer-oscillatoren of het verifiëren van het bereik van een instrument:',
    },
    {
      type: 'table',
      headers: ['Noot', 'Frequentie (Hz)', 'MIDI-noot', 'Typisch instrumentbereik'],
      rows: [
        ['C0', '16.35', '12', 'Contrabas, orgelpedaal'],
        ['C1', '32.70', '24', 'Contrabas, basgitaar lage snaar'],
        ['C2', '65.41', '36', 'Cello, basgitaar'],
        ['C3', '130.81', '48', 'Altviool, tenorsaxofoon, gitaar'],
        ['C4', '261.63', '60', 'Centrale C, piano, tenorspeelstijl'],
        ['C5', '523.25', '72', 'Fluit, viool, sopraanstem'],
        ['C6', '1046.50', '84', 'Piccolo, hoge vioolregisters'],
        ['C7', '2093.00', '96', 'Fluit-harmonischen, synthesizer'],
        ['C8', '4186.01', '108', '88-toetsen klavier, technische limiet'],
      ],
    },
    {
      type: 'title',
      text: 'Harmonischen en het octaaf als een 2:1 verhouding',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een van de belangrijkste relaties in de muzikale akoestiek is het octaaf: het verdubbelen van de frequentie produceert dezelfde noot een octaaf hoger, en het halveren ervan brengt deze een octaaf lager. Deze 2:1 relatie is de basis van de natuurlijke harmonischen van elk akoestisch instrument.',
    },
    {
      type: 'paragraph',
      html: 'Bij synthese is het kennen van de directe harmonischen van een frequentie essentieel om spectrale botsingen tussen oscillatoren in een geluidslaag te voorkomen. Deze calculator toont altijd het bovenste en onderste octaaf van elke ingevoerde frequentie.',
    },
    {
      type: 'title',
      text: 'Praktische gebruikssituaties voor muzikanten en producers',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Analoge oscillatoren stemmen: meet de uitgangsfrequentie en vergelijk deze met de calculator om te weten hoeveel cents je de coarse of fine tune moet aanpassen.',
        'Samples toewijzen aan noten: een kickdrum opgenomen op 55 Hz is een A1. Deze tool vertelt je precies waar je deze in een sampler moet mappen.',
        'Problematische resonanties detecteren: als een kamer resoneert op 80 Hz, bevestigt de calculator dat dit E2 is, wat de EQ-instelling stuurt om de resonantie te dempen zonder de bas te beschadigen.',
        'Subwoofers synchroniseren: door te controleren of meerdere subs dezelfde noot reproduceren, worden versterkingen of uitdovingen door interferentie voorkomen.',
        'Klokken en percussie met vaste toonhoogte stemmen: identificeer de grondtoon om ze te integreren in de tonaliteit van het stuk.',
        'Resonant filterontwerp: een high-Q banddoorlaatfilter op 349.23 Hz zal pieken op F4, wat harmonische ontwerpbeslissingen vergemakkelijkt.',
      ],
    },
    {
      type: 'title',
      text: 'De piano als directe visuele referentie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het pianoklavier is de meest intuïtieve visuele kaart van het muzikale spectrum. De indeling van witte (natuurlijke) en zwarte (kruis/mol) toetsen maakt het mogelijk om patronen van toonladders, akkoorden en intervallen in één oogopslag te herkennen. De interactieve piano markeert de toets die overeenkomt met elke frequentie, waardoor het getal wordt gekoppeld aan de positie op het universele klavier.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Mathematische precisie: gebruikt de ISO 16-formule voor gelijkzwevende stemming.',
          con: 'Beperking: alleen van toepassing op de gelijkzwevende stemming, niet op historische stemmingen zoals de middentoonstemming.',
        },
        {
          pro: 'Vrije kalibratie: ondersteunt A4-referenties tussen 400 en 480 Hz.',
          con: 'De sinusgolf reproduceert niet de echte klankkleur van het instrument, alleen de grondfrequentie.',
        },
        {
          pro: 'Bidirectionele conversie: Hz naar noot en noot naar Hz in dezelfde tool.',
          con: 'De cents-meter is relatief ten opzichte van de dichtstbijzijnde halve toon, niet de reine stemming.',
        },
        {
          pro: 'Zoekgeschiedenis: maakt snelle vergelijking van meerdere patches of samples mogelijk.',
          con: 'Frequenties buiten het hoorbare bereik (20 Hz - 20 kHz) hebben een beperkt praktisch nut.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Essentiële woordenlijst voor het gebruik van deze tool',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): cycli per seconde. Meet de frequentie van een geluidsgolf.',
        'MIDI-noot: geheel getal van 0 tot 127 dat elke noot in de MIDI-standaard identificeert. A4 = 69.',
        'Wetenschappelijk octaaf: naamgevingssysteem dat het octaafnummer aan de noot koppelt (A4, C3).',
        'Cents: een honderdste van een halve toon. Hiermee kunnen stemafwijkingen met precisie worden uitgedrukt.',
        'Gelijkzwevende stemming: stemsysteem waarbij alle halve tonen gelijk zijn (verhouding 2^(1/12)).',
        'A4: referentienoot. Internationale standaard: 440 Hz (ISO 16, 1975).',
        'Harmonische: frequenties die een geheel veelvoud zijn van de grondtoon, natuurlijk geproduceerd door akoestische instrumenten.',
        'Fine-tune: parameter van synthesizers en samplers voor het aanpassen van de stemming in cents.',
      ],
    },
  ],
};
