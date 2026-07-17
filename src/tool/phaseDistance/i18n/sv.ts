import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'fasavstands-raknare';
const title = 'Fasavståndskalkylator för mikrofoner';
const description =
  'Beräkna den fördröjning och kompensering som krävs för att rikta in mikrofoner. Undvik fasutsläckning och kamfiltrering med precision på samplenivå och temperaturjustering.';

const faqData = [
  {
    question: 'Vad är fasutsläckning inom ljud?',
    answer:
      'Det är ett akustiskt fenomen som inträffar när två signaler från samma källa anländer vid olika tidpunkter. Vågorna interfererar med varandra, och om de är förskjutna med 180 grader släcker de ut varandra, vilket gör att ljudet låter tunt och saknar fyllighet.',
  },
  {
    question: 'Varför påverkar temperaturen beräkningen?',
    answer:
      'Eftersom ljud färdas genom luft, och luftens densitet ändras med temperaturen. Ju varmare det är, desto snabbare färdas ljudet. En exakt temperaturjustering gör att du kan beräkna den exakta fördröjningen mellan separerade mikrofoner.',
  },
  {
    question: 'Är fasinvertering samma sak som polaritetsinvertering?',
    answer:
      'Tekniskt sett nej, även om termerna används synonymt. Polaritet är en elektrisk förändring (rotering 180°), medan fas är en tidsförskjutning. Vårt verktyg låter dig simulere båda för att hitta punkten med bäst ljudkoherens.',
  },
  {
    question: 'Vad är kamfiltrering (Comb Filtering)?',
    answer:
      'Det är det frekvenssvar som blir resultatet av att kombinera en signal med en fördröjd version av sig själv. Det skapar en serie toppar och dalar - som tänderna på en kam - som drastiskt ändrar instrumentets klangfärg.',
  },
  {
    question: 'Vad är 3 till 1-regeln inom mikrofonteknik?',
    answer:
      'Det är en teknik för att minimera fasproblem: när du använder två mikrofoner för olika källor bör avståndet mellan mikrofonerna vara minst tre gånger avståndet från varje mikrofon till dess källa.',
  },
  {
    question: 'Är det bättre att rikta in mikrofoner fysiskt eller med programvara?',
    answer:
      'En bra fysisk inriktning under inspelningen är alltid att föredra för att undvika artefakter. Digital fördröjning i DAW ger dock en precision på samplenivå som är nästan omöjlig att uppnå genom att flytta mikrofoner för hand.',
  },
];

const howToData = [
  {
    name: 'Mät avstånden',
    text: 'Mät det fysiska avståndet från ljudkällan (t.ex. virveltrumman) till var och en av mikrofonerna du använder.',
  },
  {
    name: 'Ställ in miljön',
    text: 'Ange rumstemperatur och samplingsfrekvens för ditt projekt för to få beräkningar baserade på verklig fysik.',
  },
  {
    name: 'Analysera grafen',
    text: 'Titta på frekvenssvarsvisualiseringen för att identifiera möjliga kritiska utsläckningar i det hörbara området.',
  },
  {
    name: 'Tillämpa kompenseringen',
    text: 'Kopiera millisekund- eller samplingvärdet och ange det i fördröjningspluggen på din kanal för att rikta in spåren perfekt.',
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Temperatur (°C) / Ljud',
    btnAuto: 'Auto',
    labelSampleRate: 'Samplingsfrekvens (kHz)',
    labelUnits: 'Enhetssystem',
    optMetric: 'Metrisk (m/cm)',
    optImperial: 'Imperial (ft/in)',
    labelDistA: 'Avstånd mikrofon A',
    labelDistB: 'Avstånd mikrofon B',
    labelPresets: 'Snabbinställningar',
    presetCoincident: 'Sammanfallande (XY)',
    presetSnare: 'Virvel',
    presetAmbient: 'Ambiente',
    btnInvert: 'Invertera fas (Φ)',
    labelGain: 'Relativ förstärkning Mic B:',
    btnCopy: 'Kopiera samplen',
    labelDelay: 'Krävd fördröjning',
    unitMs: 'millisekunder (ms)',
    labelCompensation: 'Kompensering',
    unitSamples: 'Samples',
    labelPhaseStatus: 'Fasstatus',
    textLoading: 'Laddar...',
    statusInPhase: 'I FAS',
    statusInPhaseDesc: 'Signaler perfekt inriktade.',
    statusCritical: 'KRITISK UTSLÄCKNING',
    statusCriticalDesc: 'Betydande kamfiltrering i det lägre/mellanregistret.',
    statusOffAxis: 'UTOM AXEL',
    statusOffAxisDesc: 'Liten fasförskjutning. Textur modifierad.',
    warningCritical: 'MÖJLIG KRITISK UTSLÄCKNING',
    labelSoundSpeed: 'Ljudhastighet',
    labelDistDiff: 'Avståndsskillnad',
    labelNullFreq: 'Första nollorna',
    textNone: 'Ingen',
    chartTitle: 'FREKVENSSVAR (H) - KAMFILTRERING',
    promptSoundSpeed: 'Ljudhastighet (m/s):',
    copyFeedback: 'Kopierat!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kalkylatorns funktioner',
      items: [
        'Exakt fysisk beräkning med temperaturjustering för ljudets hastighet',
        'Resultat i millisekunder och samplen för kompensering i DAW',
        'Canvas-visualiserare för kamfiltrering över hela det hörbara spektrumet',
        'Mikrofoninställningar (XY, virvel, omgivning)',
        'Fasinverteringssimulering och relativ förstärkningskontroll',
        'Stöd för metriska och imperiala enheter',
      ],
    },
    {
      type: 'title',
      text: 'Vad är fasutsläckning och varför förstör det dina mixar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom ljudteknik är fas ett av de mest kritiska koncepten och, paradoxalt nog, ett av de mest förbisedda av nybörjare. När du spelar in en ljudkälla - som ett trumset eller en gitarrförstärkare - med två eller fler mikrofoner placerade på olika avstånd, når ljudvågorna inte kapslarna samtidigt. Denna tidsskillnad, hur liten den än är, orsakar ett fenomen som kallas <strong>fasförskjutning</strong>.',
    },
    {
      type: 'title',
      text: 'Fenomenet kamfiltrering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När två identiska signaler kombineras med en liten fördröjning mellan dem uppstår en serie dalar och toppar i frekvenssvaret. Sett på en spektrumanalysator påminner mönstret om tänderna på en kam - därav namnet. Denna effekt förändrar instrumentets naturliga klangfärg på ett destruktivt sätt.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Inverkan på basen',
          description:
            'Fasutsläckning är mest förödande i de låga frekvenserna, där ljudets kropp försvinner helt.',
        },
        {
          title: 'Metallisk textur',
          description:
            'Kamfiltrering lägger till en artificiell färgning som låter tom eller överdrivet processad.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ljudhastighet och temperatur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många ljudtekniker glömmer att luft är ett fysiskt medium och dess densitet ändras med temperaturen. Ljudhastigheten är inte en oföränderlig konstant - vid 20°C färdas ljudet med ungefär 343 meter per sekund.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Formel för ljudets hastighet som funktion av temperatur',
    },
    {
      type: 'tip',
      title: 'Kirurgisk kompensering',
      html: 'Några graders skillnad kan flytta utsläckningspunkterna med flera hertz. Att använda vår kalkylator med den faktiska temperaturen i din studio garanterar perfekt inriktning i DAW.',
    },
    {
      type: 'title',
      text: 'Kritiska inspelningsscenarier',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Virveltrumma (topp och botten): Rikta in båda skinnen tidsmässigt för att maximera punchen.',
        'Overheads och närliggande mikrofoner: Fördröj närliggande mikrofoner för att matcha fasen på overheadmikrofonerna.',
        'Gitarrer med flera mikrofoner: Blanda en dynamisk mikrofon och en bandmikrofon utan att förlora det lägre mellanregistret.',
        'Bas DI och mikrofon: Synkronisera den direkta signalen med förstärkarmikrofonen för ett massivt ljud.',
      ],
    },
    {
      type: 'title',
      text: 'Fysisk inriktning vs. digital fördröjning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Även om vårt verktyg ger dig värdena för att korrigera fas i din DAW efter inspelning, rekommenderar vi alltid att du försöker få den bästa möjliga fysiska inriktningen i studion. Att flytta en mikrofon några millimeter kan vara mer effektivt än någon digital bearbetning.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Hastighet vid 20°C', value: '343.2 m/s' },
        { label: 'Millisekunder/cm', value: '0.029 ms' },
        { label: 'Samplen vid 48kHz', value: '1.4 per cm' },
      ],
    },
    {
      type: 'title',
      text: 'Referenstabell: Avstånd vs. Första noll',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Skillnad (cm)', 'Fördröjning (ms)', '1:a noll (Hz)', 'Påverkar...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Extrem diskant'],
        ['5 cm', '0.146', '3432', 'Övre mellanregister (Närvaro)'],
        ['10 cm', '0.291', '1716', 'Mellanregister (Närvaro)'],
        ['30 cm', '0.874', '572', 'Lägre mellanregister (Kropp)'],
        ['1 meter', '2.914', '172', 'Bas (Grundton)'],
      ],
    },
    {
      type: 'title',
      text: 'För- och nackdelar med korrigeringsmetoder',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Fysisk inriktning: Mindre försämring av originalsignalen.',
          con: 'Fysisk inriktning: Svårt att justera med mikroskopisk noggrannhet.',
        },
        {
          pro: 'Digital korrigering: Absolut precision på samplenivå.',
          con: 'Digital korrigering: Kan skapa för-eko om det tillämpas felaktigt.',
        },
        {
          pro: 'Polaritetsinvertering: Snabb lösning för 180-graders utsläckningar.',
          con: 'Polaritetsinvertering: Korrigerar inte mellanliggande fasförskjutningar.',
        },
        {
          pro: 'Tidskompensering: Återställer förlorad kraft och punch.',
          con: 'Tidskompensering: Kräver exakt mätning av varje mikrofon.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Hur upptäcker man fasproblem med örat?',
      html: 'Tryck på knappen "Invertera fas" (Φ). Om aktiveringen av den gör att ljudet får mer kropp och bas, var mikrofonerna ur fas. Om ljudet försvinner eller blir tunnare, var de korrekt inriktade.',
    },
    {
      type: 'title',
      text: 'Monokompatibilitet och stereobild',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I stereoinspelningar definierar fasförhållandet stabiliteten hos ljudbilden. Om det finns allvarliga inkonsekvenser kan ljudet försvinna helt när mixen spelas upp på ett monosystem. Vår kalkylator hjälper dig att förutsäga vilka frekvenser som kommer att drabbas mest när kanalerna summeras.',
    },
  ],
};
