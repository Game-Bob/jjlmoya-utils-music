import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'musik',
  title: 'Online Musikverktyg',
  description:
    'Gratis musikverktyg för musiker, producenter och entusiaster. Metronom, BPM-kalkylator, frekvensomvandlare, notsekvivalens och mer.',
  seo: [
    {
      type: 'summary',
      title: 'Vad du hittar i den här kategorin',
      items: [
        'Online metronom med Web Audio API — millisekundprecision',
        'BPM till millisekunder kalkylator för delays och reverb',
        'Frekvens till musiknot omvandlare (Hz, cent och detuning)',
        'Fasavståndsräknare för mikrofonjustering',
        'Notsekvivalens mellan latinska, amerikanska och tyska system',
        'Kalkylator för digitalt ljudlagring',
      ],
    },
    {
      type: 'title',
      text: 'Musikverktyg för Varje Steg i den Kreativa Processen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Från den första repetitionen till den sista masteringen behöver varje musiker och producent precisa verktyg tillgängliga när som helst. Vår samling av <strong>online musikverktyg</strong> har utformats med ett tydligt mål: maximal teknisk precision med minimal friktion.',
    },
    {
      type: 'paragraph',
      html: 'Ingen installation krävs. Alla verktyg körs direkt i din webbläsare, är helt gratis och skyddar din integritet: inga data lämnar din enhet.',
    },
    {
      type: 'title',
      text: 'För den Övande Musikern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Online metronomen</strong> är det grundläggande verktyget för varje musiker under träning eller övning. Vår metronom använder Web Audio API för att garantera millisekundprecision, eliminera drift och ge visuell feedback med en rippeleffekt. Funktionen <strong>Tap Tempo</strong> låter dig omedelbart hitta BPM för vilken låt som helst.',
    },
    {
      type: 'title',
      text: 'För Musikproducenten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>BPM till millisekunder kalkylator</strong> är essentiell i varje mixningssession. Att synkronisera en delay eller reverb till låttempolåt skiljer ett mix som andas från ett som låter artificiellt. På samma sätt justerar <strong>fasavståndsräknaren</strong> mikrofoner med sampelprecision och förhindrar fasavbrott i flermikrofoninspelningar.',
    },
    {
      type: 'title',
      text: 'För Ljudteknikern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Frekvens till musiknot omvandlaren</strong> omvandlar vilket Hz-värde som helst till dess ekvivalenta not, visar också avvikelsen i cent. Perfekt för att stämma analoga synthesizers, identifiera problematiska resonanser i ett rum eller arbeta med ur-stämda samples. <strong>Kalkylatorn för digitalt ljudlagring</strong> hjälper till att planera inspelningsprojekt och hantera diskutrymme med precision.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Teknisk Precision',
          description:
            'Alla verktyg är baserade på matematiskt verifierade algoritmer. Inga approximationer: resultaten är exakta och reproducerbara.',
        },
        {
          title: 'Full Integritet',
          description:
            'Bearbetning sker på din enhet. Inget ljud, fil eller personlig data överförs till någon server.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Musikens Universella Språk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Musik är ett språk med flera notationssystem. Verktyget för <strong>notsekvivalens</strong> översätter omedelbart mellan det latinska systemet (Do, Re, Mi…), det amerikanska systemet (C, D, E…) och det tyska systemet (C, D, E… med H istället för B), och undviker förvirring vid kommunikation med musiker från olika traditioner eller läsning av noter från olika länder.',
    },
    {
      type: 'tip',
      title: 'Ingen installation behövs',
      html: 'Alla verktyg körs direkt i webbläsaren, utan plugins eller extra appar. Bokmärk den här sidan för att alltid ha dem till hands under dina sessioner.',
    },
  ],
};
