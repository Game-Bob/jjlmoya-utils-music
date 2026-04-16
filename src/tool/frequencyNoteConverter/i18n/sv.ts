import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frekvens-till-not-konverterare';
const title = 'Frekvens till musiknot konverterare';
const description =
  'Konvertera hertz till musiknoter direkt. Identifiera den exakta noten för vilken frekvens som helst, mät avvikelsen i cents, hör den rena tonen och stäm syntar och samplers med precision.';

const faqData = [
  {
    question: 'Hur vet jag vilken not 440 Hz motsvarar?',
    answer:
      '440 Hz motsvarar exakt A4, den universella referensnoten för stämning. Det är A:et ovanför mitt-C på pianot. Denna frekvens har varit ISO 16-standard sedan 1939 och används för att stämma orkesterinstrument över hela världen.',
  },
  {
    question: "Vad betyder det att en not är '15 cents ovanför'?",
    answer:
      'En cent är en hundradel av en halvton. Att vara 15 cents ovanför en not betyder att frekvensen är något högre (vassare) än den exakta noten i liksvävande temperatur. På en synt bör du använda -15 cents fine-tune för att korrigera det.',
  },
  {
    question: 'Varför finns det referensalternativ för 432 Hz och 444 Hz förutom 440 Hz?',
    answer:
      'Olika musikaliska sammanhang använder olika stämreferenser. 432 Hz är populärt i vissa produktionskretsar. 444 Hz är vanligt i inspelningar av tidig musik från renässansen. Vissa europeiska orkestrar stämmer mellan 441–444 Hz för ett ljusare ljud.',
  },
  {
    question: 'Vad används det interaktiva pianoklaviaturen till?',
    answer:
      'Det interaktiva pianot låter dig visuellt identifiera noten på klaviaturen och även mata in frekvenser genom att trycka direkt på tangenterna. Genom att trycka på en tangent får du dess exakta frekvens och hör en ren sinuston för jämförelse.',
  },
  {
    question: 'Hur använder jag de övertoner som kalkylatorn visar?',
    answer:
      'Övertonerna (lägre och högre oktav) visar de frekvenser som är direkt relaterade till din not. De är användbara för att undvika konflikter mellan syntlager, ställa in resonansfilter till rätt not eller mappa trumsamples till rätt sampleroktaver.',
  },
  {
    question: 'Varför genererar lyssningsläget en sinuston istället för det riktiga ljudet?',
    answer:
      'En sinuston är en ren våg som bara innehåller grundfrekvensen utan extra övertoner. Det möjliggör en ren jämförelse med det riktiga instrumentet utan att klangfärgen stör bedömningen av stämningen. Det är samma signal som en elektronisk nåltuner genererar.',
  },
  {
    question: 'Hur beräknar man frekvensen för en musiknot?',
    answer:
      'Frekvensen beräknas med en logaritmisk formel baserad på liksvävande temperatur. Utifrån referensen A4 (440 Hz) erhålls varje halvton uppåt genom att multiplicera med tolfte roten ur två (~1,05946), och varje oktav motsvarar en fördubbling av frekvensen.',
  },
  {
    question: 'Vilken not är frekvensen 440 Hz?',
    answer:
      'Frekvensen 440 Hz är exakt noten A4. Det är den standardreferensnot som används av de flesta orkestrar och samtida musiker för att stämma sina instrument sedan mitten av 1900-talet.',
  },
  {
    question: 'Vad är skillnaden mellan stämning i 440 Hz och 432 Hz?',
    answer:
      '440 Hz är den internationella standarden (ISO 16). 432 Hz är en alternativ stämning som vissa musiker föredrar av subjektiva ljudmässiga skäl, ofta använd i meditationsmusik, även om det inte finns några vetenskapliga bevis för tydliga biologiska fördelar jämfört med 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Ange frekvensen',
    text: 'Skriv in frekvensen i hertz i det huvudsakliga inmatningsfältet. Resultatet visas omedelbart med notnamn och dess vetenskapliga oktav.',
  },
  {
    name: 'Läs av resultatet och centmätaren',
    text: 'Den visuella tunerindikatorn visar om din frekvens är ovanför, under eller exakt på noten. Centvärdet talar om för dig hur mycket du ska justera fine-tune på din plugin eller ditt instrument.',
  },
  {
    name: 'Använd övertonerna för att stämma lager',
    text: 'Kontrollera frekvenserna för lägre och högre oktav för att konfigurera extra oscillatorer, resonansfilter eller slagverkslager utan frekvenskonflikter.',
  },
  {
    name: 'Justera A4-referensen',
    text: 'Ändra A4-referensen till 432 Hz, 444 Hz eller valfritt specialvärde så att alla beräkningar stämmer överens med ditt projekt.',
  },
  {
    name: 'Lyssna på referenstonen',
    text: 'Tryck på play-knappen för att generera en ren sinuston vid den angivna frekvensen och stäm ditt riktiga instrument efter örat.',
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
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
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
    btnHzToNote: 'Hz till Not',
    btnNoteToHz: 'Not till Hz',
    labelRef: 'A4 Referens',
    ariaRefCustom: 'Specialanpassad A4-referensfrekvens',
    calInfo:
      '<strong>440 Hz</strong> är den internationella standarden. <strong>432 Hz</strong> används ofta i meditationsmusik och solfeggio.',
    labelFrequency: 'FREKVENS',
    ariaFreqInput: 'Ange frekvens i hertz',
    ariaPlay: 'Lyssna på ton',
    copyNoteName: 'Kopiera not',
    labelOctaveDown: 'Lägre oktav',
    labelInputFreq: 'Inmatad frekvens',
    labelOctaveUp: 'Högre oktav',
    labelNoteInput: 'NOTNAMN (t.ex. A4, C#3, Do4)',
    placeholderNote: 'Skriv noten...',
    labelSetNote: 'STÄLL IN NOT',
    labelSetOctave: 'STÄLL IN OKTAV',
    labelSelectedNote: 'Vald not',
    copyHz: 'Kopiera Hz',
    btnListenNote: 'Lyssna på not',
    pianoLabel: 'Interaktivt piano — tryck på en tangent för att se dess frekvens',
    pianoAria: 'Interaktivt pianoklaviatur',
    historyTitle: 'Historik',
    historyClear: 'Rensa',
    historyEmpty: 'Inga senaste konverteringar',
    historyLoadAria: 'Ladda %s Hz',
    tuned: 'Stämd',
    sharp: 'för hög',
    flat: 'för låg',
    unitHzExact: 'exakt Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: 'Okt',
    copyFeedback: 'Kopierat',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kalkylatorns funktioner',
      items: [
        'Dubbelriktad konvertering: Hz till not och not till Hz i samma verktyg',
        'Sample-exakt precision med justerbar A4-referens (440 / 432 / 444 Hz)',
        'Visuell centmätare med indikator för hög / låg / stämd',
        'Visning av övertoner (grundfrekvens, lägre oktav, högre oktav)',
        'Interaktivt pianoklaviatur som markerar motsvarande tangent',
        'Sökhistorik för snabb jämförelse av patcher och samples',
      ],
    },
    {
      type: 'title',
      text: 'Vad är frekvensen för en musiknot och varför spelar det roll?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varje musiknot är i grunden en periodisk vibration i luften. När en gitarrsträng vibrerar med 440 cykler per sekund producerar den A4, den universella referensnoten för stämning. Denna korrespondens mellan hertz och noter är inte godtycklig: den definieras av <strong>liksvävande temperatur</strong>, det dominerande stämsystemet i västerländsk musik, som delar upp oktaven i tolv matematiskt sett perfekt ekvidistanta halvtoner.',
    },
    {
      type: 'paragraph',
      html: 'Att känna till den exakta frekvensen för varje not är grundläggande inom ljudsyntes, musikproduktion, ljudteknik och instrumenttillverkning. En synt behöver veta vid vilken frekvens varje oscillator måste vibrera för att återge en stämd not. En mixningstekniker behöver veta var man ska skära med en equalizer för att ta bort ett brummande ljud utan att påverka instrumentets grundton.',
    },
    {
      type: 'title',
      text: 'Den matematiska formeln bakom konverteringen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Liksvävande temperatur är baserad på en geometrisk progression. Varje halvton motsvarar att man multiplicerar frekvensen med tolfte roten ur två. Formeln för att erhålla frekvensen för vilken not som helst från dess avstånd i halvtoner i förhållande till A4 är:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Formel för att konvertera MIDI-notnummer till frekvens i Hz',
    },
    {
      type: 'paragraph',
      html: 'Där <em>n</em> är MIDI-notnumret (A4 = 69) och <em>A4</em> är referensfrekvensen, vanligtvis 440 Hz. Genom att invertera denna formel får man den närmaste noten till vilken inmatad frekvens som helst, liksom avvikelsen i cents.',
    },
    {
      type: 'title',
      text: 'Cents: precisionsenheten för musiker och tekniker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En halvton är uppdelad i 100 cents. Denna enhet gör det möjligt att beskriva alla stämavvikelser med decimal precision. En avvikelse på 10 cents är redan märkbar för ett tränat öra; över 20 cents låter det klart ostämt för de flesta lyssnare.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Perfekt stämning',
          description:
            'En not är perfekt stämd när avvikelsen är mindre än 5 cents från den exakta frekvensen i liksvävande temperatur.',
        },
        {
          title: 'Cents i DAW',
          description:
            'Samplers, syntar och plugins för pitch-shift använder cents för fine-tune, vilket gör det möjligt att justera samples till deras exakta not utan artefakter.',
        },
        {
          title: 'Mänsklig tröskel',
          description:
            'Tröskeln för när man uppfattar ostämda noter varierar mellan 5 och 15 cents beroende på instrument, dynamik och harmoniskt sammanhang.',
        },
      ],
    },
    {
      type: 'title',
      text: 'A4-referensen: 440 Hz, 432 Hz och stämkrigen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Referensfrekvensen A4 = 440 Hz standardiserades internationellt 1939 (ISO 16). Barockmusiker arbetar dock vanligtvis med referenser på 415 Hz, och det finns en växande grupp producenter som föredrar 432 Hz. Elitorkestrar som Berlinerfilharmonikerna använder regelbundet 443 Hz för ett ljusare och mer genomträngande ljud.',
    },
    {
      type: 'paragraph',
      html: 'I musikproduktion spelar referensen roll när man mixar live-inspelade akustiska instrument med virtuella instrument. Om det inspelade pianot var stämt till 442 Hz men synten är inställd på 440 Hz som standard, kommer alla samples att behöva korrigeras i cents.',
    },
    {
      type: 'tip',
      title: 'Trick för professionella samplers',
      html: 'När du importerar ett sample i en sampler som Kontakt eller Decent Sampler, mata in samplets frekvens i denna kalkylator. Centvärdet som visas på stämmätaren talar om exakt vilket <em>fine-tune</em>-värde du ska mata in i samplern så att noten spelas perfekt stämd.',
    },
    {
      type: 'title',
      text: 'Referensfrekvenstabell per oktav',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna tabell visar de exakta frekvenserna för varje C-not i liksvävande temperatur med A4 = 440 Hz, vilket är användbart för att konfigurera oscillatorer i modulära syntar eller verifiera ett instruments omfång:',
    },
    {
      type: 'table',
      headers: ['Not', 'Frekvens (Hz)', 'MIDI-not', 'Typiskt instrumentomfång'],
      rows: [
        ['C0', '16.35', '12', 'Kontrabas, orgelpedal'],
        ['C1', '32.70', '24', 'Kontrabas, elbas låg sträng'],
        ['C2', '65.41', '36', 'Cello, elbas'],
        ['C3', '130.81', '48', 'Viola, tenorsaxofon, gitarr'],
        ['C4', '261.63', '60', 'Mitt-C, piano, tenorstämmor'],
        ['C5', '523.25', '72', 'Flöjt, violin, sopranstämmor'],
        ['C6', '1046.50', '84', 'Piccolaflöjt, höga violinregister'],
        ['C7', '2093.00', '96', 'Flöjtövertoner, synt'],
        ['C8', '4186.01', '108', '88-tangenters klaviatur, teknisk gräns'],
      ],
    },
    {
      type: 'title',
      text: 'Övertoner och oktaven som ett 2:1-förhållande',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett av de viktigaste förhållandena i musikalisk akustik är oktaven: att fördubbla frekvensen ger samma not en oktav högre, och att halvera den sänker den en oktav. Detta 2:1-förhållande är basen för de naturliga övertonerna hos alla akustiska instrument.',
    },
    {
      type: 'paragraph',
      html: 'Inom syntes är det viktigt att känna till de direkta övertonerna för en frekvens för att undvika spektrala krockar mellan oscillatorer i ett ljudlager. Denna kalkylator visar alltid den högre och lägre oktaven för varje inmatad frekvens.',
    },
    {
      type: 'title',
      text: 'Verkliga användningsområden för musiker och producenter',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Stämning av analoga oscillatorer: mät utgångsfrekvensen och jämför med kalkylatorn för att veta hur många cents du ska justera coarse eller fine tune.',
        'Tilldelning av samples till noter: en baskagge inspelad vid 55 Hz är ett A1. Detta verktyg talar om exakt var du ska mappa den i en sampler.',
        'Identifiering av problematiska resonanser: om ett rum resonerar vid 80 Hz bekräftar kalkylatorn att det är E2, vilket vägleder användningen av EQ för att dämpa frekvensen utan att skada basen.',
        'Synkronisering av subwoofers: genom att verifiera att flera subs återger samma not undviker man förstärkningar eller utsläckningar på grund av interferens.',
        'Stämning av klockor och slagverk med bestämd tonhöjd: identifiera grundtonen för att integrera dem i styckets tonalitet.',
        'Design av resonansfilter: ett bandpassfilter med högt Q vid 349.23 Hz kommer att peka vid F4, vilket gör harmoniska designbeslut lättare.',
      ],
    },
    {
      type: 'title',
      text: 'Pianot som en omedelbar visuell referens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pianoklaviaturen är den mest intuitiva visuella kartan över det musikaliska spektrumet. Dess layout med vita (naturliga) och svarta (höjda/sänkta) tangenter gör det möjligt att känna igen mönster av skalor, ackord och intervall vid en första anblick. Det interaktiva pianot markerar tangenten som motsvarar varje frekvens och kopplar ihop siffran med dess position på den universella klaviaturen.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Matematisk precision: använder ISO 16-formeln för liksvävande temperatur.',
          con: 'Begränsning: gäller endast liksvävande temperatur, inte historiska stämningar.',
        },
        {
          pro: 'Fri kalibrering: stöder A4-referenser mellan 400 och 480 Hz.',
          con: 'Sinustonen återger inte instrumentets verkliga klangfärg, bara grundfrekvensen.',
        },
        {
          pro: 'Dubbelriktad konvertering: Hz till not och not till Hz i samma verktyg.',
          con: 'Centmätaren är relativ i förhållande till närmaste halvton, inte ren temperatur.',
        },
        {
          pro: 'Sökhistorik: möjliggör snabb jämförelse av flera patcher eller samples.',
          con: 'Frekvenser utanför det hörbara området (20 Hz – 20 kHz) har begränsad praktisk nytta.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Viktig ordlista för användning av detta verktyg',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): cykler per sekund. Mäter frekvensen på en ljudvåg.',
        'MIDI-not: heltal från 0 till 127 som identifierar varje not i MIDI-standarden. A4 = 69.',
        'Vetenskaplig oktav: namngivningssystem som lägger till oktavnumret till noten (A4, C3).',
        'Cents: en hundradel av en halvton. Gör det möjligt att uttrycka stämavvikelser med precision.',
        'Liksvävande temperatur: stämsystem där alla halvtoner är lika (förhållande 2^(1/12)).',
        'A4: referensnot. Internationell standard: 440 Hz (ISO 16, 1975).',
        'Överton/Harmonisk: frekvenser som är heltalsmultipler av grundtonen och som produceras naturligt av akustiska instrument.',
        'Fine-tune: parameter på syntar och samplers för att justera stämningen i cents.',
      ],
    },
  ],
};
