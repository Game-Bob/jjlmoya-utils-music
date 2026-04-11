import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'calculadora-bpm-milisegundos';
const title = 'Calculadora BPM a Milisegundos para Delay y Reverb';
const description =
  'Convierte el tempo (BPM) en retardos exactos (ms) y frecuencias (Hz). La herramienta esencial para configurar delays, reverbs y compresores con precisión rítmica.';

const faqData = [
  {
    question: '¿Qué es el Pre-delay en una reverb?',
    answer:
      'El pre-delay es el tiempo que transcurre entre el sonido directo (la fuente) y el comienzo de la cola de reverberación. Ajustarlo rítmicamente permite que la fuente original sea clara y no sea tapada por el efecto de espacio, algo vital en voces y percusiones.',
  },
  {
    question: '¿Cómo funciona el Tap Tempo?',
    answer:
      'Es una herramienta que detecta el tempo clicando rítmicamente siguiendo el pulso de una canción. Al pulsar varias veces, el sistema promedia la duración entre clics para darnos los BPM exactos. Es la forma más rápida de sincronizar efectos con una pista externa.',
  },
  {
    question: '¿Por qué usar milisegundos en lugar de sincronización automática?',
    answer:
      "Hay tres razones principales: el uso de hardware analógico sin MIDI, el diseño fino de pre-delays para que la reverb respire, y el ajuste de 'groove' donde se desplazan los efectos ligeramente fuera de la rejilla para que no suenen tan estáticos o robóticos.",
  },
  {
    question: '¿Para qué sirve el cálculo rítmico en Hertz (Hz)?',
    answer:
      'Los hercios indican cuántas veces ocurre algo por segundo. Son esenciales para configurar osciladores LFO, la velocidad de barrido de un phaser o para sincronizar la modulación de filtros en sintetizadores que no tienen opción de tempo sync nativo.',
  },
];

const howToData = [
  {
    name: 'Introduce el BPM',
    text: 'Escribe el tempo de tu proyecto en el campo central o usa el botón de Tap Tempo.',
  },
  {
    name: 'Identifica la subdivisión',
    text: 'Busca la nota que necesitas (negra, corchea, etc.) en las tablas de tiempos simples, puntillos o tresillos.',
  },
  {
    name: 'Copia el valor',
    text: 'Haz clic en el icono de copiar al lado del valor en milisegundos (ms) para llevarlo a tu plugin o hardware.',
  },
  {
    name: 'Ajusta el Pre-delay',
    text: 'Utiliza la sección inferior para valores ultra-cortos ideales para separar la reverb de la voz principal.',
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
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias técnicas',
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
    sectionDelay: 'Tiempos de Delay',
    sectionDotted: 'Notas con Puntillo',
    sectionTriplets: 'Tresillos de Nota',
    sectionReverb: 'Diseño de Reverb (Pre-delay)',
    colNote: 'Nota',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      'El <strong>Pre-delay</strong> separa el ataque original de la cola de reverb para ganar claridad.',
    copyAriaMs: 'Copiar milisegundos',
    copyAriaPreDelay: 'Copiar pre-delay',
    copyFeedback: '¡Copiado!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Características de la calculadora',
      items: [
        'Cálculo instantáneo para notas simples, con puntillo y tresillos',
        'Valores en milisegundos y Hz para cada subdivisión rítmica',
        'Sección de Pre-delay para diseño de reverb con precisión musical',
        'Tap Tempo: detecta el BPM clicando al ritmo de la música',
        'Copia al portapapeles con un clic para usar en cualquier DAW o plugin',
      ],
    },
    {
      type: 'title',
      text: '¿Por qué es vital una Calculadora de BPM a Milisegundos?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el mundo de la producción musical moderna, la precisión rítmica es lo que separa una mezcla amateur de una profesional. Aunque la mayoría de los DAWs (Digital Audio Workstations) como Ableton Live, FL Studio o Logic Pro incluyen sincronización automática para sus efectos, existen innumerables situaciones donde el control manual es superior.',
    },
    {
      type: 'title',
      text: 'La importancia del Pre-delay en la Reverberación',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno de los usos más críticos de esta herramienta es el ajuste del <strong>pre-delay</strong>. Si aplicas una reverb a una voz sin pre-delay, la cola del efecto empezará inmediatamente, "empañando" las consonantes y restando claridad. Al calcular un pre-delay rítmico (como una fusa o semifusa), permites que la voz original respire antes de que el espacio acústico artificial tome el control. Esto crea una sensación de profundidad sin sacrificar la presencia de la fuente sonora.',
    },
    {
      type: 'title',
      text: 'Delay Analógico y Hardware Externo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si eres un coleccionista de pedales de delay analógicos o sintetizadores vintage, sabrás que muchos no cuentan con entrada de reloj MIDI. Configurar un delay de cinta manual requiere conocer exactamente cuántos milisegundos corresponden a una corchea o una negra con puntillo. Nuestra calculadora te da esos valores al instante, permitiéndote ajustar tu hardware con precisión quirúrgica.',
    },
    {
      type: 'title',
      text: "Efectos 'Off-the-grid' y Groove",
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A veces, la perfección matemática es aburrida. Muchos productores utilizan los valores de milisegundos como punto de partida para luego "empujarlos" ligeramente arriba o abajo. Mover un delay unos 5-10 ms fuera de la rejilla puede añadir un <em>swing</em> humano o un <em>groove</em> único que la cuantización rígida del ordenador no puede replicar.',
    },
    {
      type: 'title',
      text: 'Compresión y LFOs Sincronizados',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Sabías que los tiempos de <strong>Attack</strong> y <strong>Release</strong> de un compresor también pueden ser rítmicos? Si ajustas el release de tu compresor de bus de batería para que termine exactamente antes del siguiente golpe de bombo (usando el tiempo de una negra o corchea), crearás un efecto de "bombeo" o <em>breathing</em> que refuerza el ritmo de la canción. Igualmente, la frecuencia en Hertz (Hz) es fundamental para configurar osciladores de baja frecuencia (LFO) que no tienen opción de sincronización por tempo.',
    },
    {
      type: 'tip',
      title: 'Cómo usar el Tap Tempo',
      html: 'Nuestra función de <strong>Tap Tempo</strong> es ideal para situaciones de directo o cuando estás escuchando una pista externa de la cual desconoces el tempo. Simplemente clica rítmicamente sobre el botón siguiendo el pulso de la música. Recomendamos hacer al menos 4 o 5 pulsaciones para que el algoritmo promedie el valor con mayor exactitud.',
    },
    {
      type: 'title',
      text: 'Fórmulas Matemáticas del Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si tienes curiosidad por saber cómo se realizan estos cálculos, la fórmula base es sencilla: <code>ms = 60.000 / BPM</code>. A partir de ahí, se aplican los multiplicadores para las subdivisiones.',
    },
    {
      type: 'list',
      items: [
        'Notas simples: Se basan en la división binaria (1, 0.5, 0.25, etc.).',
        'Puntillo (Dotted): Multiplica el valor base por 1.5.',
        'Tresillos (Triplets): Multiplica el valor base por 0.667 (2/3).',
      ],
    },
  ],
};
