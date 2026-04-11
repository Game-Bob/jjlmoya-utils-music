import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'equivalencia-notas-musicales';
const title = 'Equivalencia de Notas Musicales: Latino, Anglosajón y Germánico';
const description =
  'Traductor interactivo de notas musicales entre sistemas latino (Do, Re, Mi), anglosajón (C, D, E) y germánico (H). Incluye visualizador de piano, octavas y frecuencias (Hz).';

const faqData = [
  {
    question: '¿Qué es el cifrado americano o anglosajón?',
    answer:
      'Es el sistema que utiliza letras de la A a la G para representar las notas musicales. Es el estándar en la música moderna y el jazz. En este sistema, A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa y G=Sol.',
  },
  {
    question: '¿Por qué en Alemania el Si se llama H?',
    answer:
      "Debido a una evolución gráfica medieval del 'B-quadratum'. En los países de habla germánica, la letra H se reserva para el Si natural, mientras que la letra B se utiliza exclusivamente para el Si bemol.",
  },
  {
    question: "¿Cuál es el 'Do central' en notación científica?",
    answer:
      'El Do central (la tecla Do que está justo en medio de un piano de 88 notas) es el C4 en el estándar ANSI/Internacional. En el sistema franco-belga, muy usado en conservatorios, se denomina Do3.',
  },
  {
    question: '¿Qué significa que dos notas sean enarmónicas?',
    answer:
      'Significa que tienen nombres distintos pero representan el mismo sonido físico y se tocan en la misma tecla del piano. Por ejemplo, Do sostenido (C#) y Re bemol (Db) son notas enarmónicas.',
  },
  {
    question: '¿Cuál es la frecuencia estándar del La4?',
    answer:
      'La frecuencia estándar internacional es de 440 Hz (norma ISO 16). Es la referencia universal para afinar orquestas, instrumentos y sintetizadores digitales.',
  },
];

const howToData = [
  {
    name: 'Selecciona la octava',
    text: 'Usa el selector numérico superior para indicar en qué octava del piano quieres trabajar (por defecto está en la octava 4, que es la central).',
  },
  {
    name: 'Pulsa una nota en el piano',
    text: 'Haz clic o toca cualquier tecla del piano interactivo para ver su información técnica y nomenclatura.',
  },
  {
    name: 'Compara los sistemas',
    text: 'Observa los paneles inferiores para ver cómo se llama esa nota en los sistemas latino, anglosajón y germánico simultáneamente.',
  },
  {
    name: 'Escucha y verifica',
    text: "Pulsa el botón 'Escuchar Tono' para oír la frecuencia exacta de la nota seleccionada y confirmar su altura musical.",
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

export const content: ToolLocaleContent<MusicNoteEquivalencyUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias técnicas',
  bibliography: [
    {
      name: 'ISO 16:1975 Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Harvard Dictionary of Music - Notation Systems',
      url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674011632',
    },
    {
      name: 'Nomenclature of Musical Notes - Theory of Music',
      url: 'https://en.wikipedia.org/wiki/Musical_note#Note_names_and_history',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    octaveLabel: 'Octava Científica (C4 = Do3):',
    systemsTitle: 'Sistemas de Nomenclatura',
    systemLatino: 'Latino (Solfège)',
    systemAnglo: 'Anglosajón (Moderno)',
    systemGerman: 'Germánico (Alemán)',
    sciNotationTitle: 'Notación Científica',
    systemAnsi: 'Internacional (ANSI)',
    systemFranco: 'Franco-Belga',
    systemEnharmonic: 'Enarmonía Útil',
    techTitle: 'Datos Técnicos y Ondas',
    btnPlay: 'Escuchar Tono',
    btnCopy: 'Copiar Info',
    initialTitle: 'Selecciona una nota en el piano',
    copyDone: '¡Copiado!',
    copyLabelNote: 'Nota',
    copyLabelGerman: 'Sistema Alemán',
    copyLabelFreq: 'Frecuencia',
    copyLabelAnsi: 'Octava Científica',
    copyLabelUrl: 'URL',
    naLabel: 'N/A',
  },
  seo: [
    {
      type: 'summary',
      title: 'Traductor de Notas Musicales Multilenguaje',
      items: [
        '<strong>3 sistemas simultáneos</strong>: Latino, Anglosajón y Germánico al instante.',
        '<strong>Piano interactivo</strong>: Haz clic en cualquier tecla para ver sus equivalencias.',
        '<strong>Frecuencias exactas</strong>: Cada nota muestra su Hz según el estándar ISO 16.',
        '<strong>Enarmonías</strong>: Identifica automáticamente las notas con doble nombre.',
      ],
    },
    {
      type: 'title',
      text: 'Entendiendo la equivalencia de las notas musicales en diferentes sistemas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La música es un lenguaje universal, pero su escritura y nomenclatura varían profundamente según la región geográfica y el contexto académico. Mientras que en los países de habla hispana y en la tradición clásica europea predomina el sistema latino (Do, Re, Mi...), en la música moderna, el jazz y el ámbito anglosajón se ha estandarizado el cifrado americano (C, D, E...). Además, existe una particularidad histórica en los países de influencia germánica donde el Si natural se denomina H y el Si bemol es B.',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta de equivalencia de notas musicales ha sido diseñada para resolver confusiones instantáneamente. Permite traducir entre estos tres sistemas principales, identificar la octava exacta en notación científica internacional y visualizar la posición de cada nota en un teclado de piano interactivo. Es una utilidad esencial para estudiantes de conservatorio que se inician en el jazz, productores que trabajan con librerías internacionales y músicos que necesitan interpretar partituras de distintas procedencias.',
    },
    {
      type: 'title',
      text: 'Los tres sistemas principales de nomenclatura musical',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para navegar por la teoría musical global, es fundamental conocer las tres "lenguas" en las que se expresan las notas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sistema Latino (Solfège):</strong> Utilizado en España, Italia, Francia y gran parte de Latinoamérica. Basado en el himno a San Juan Bautista de Guido d\'Arezzo. Usa Do, Re, Mi, Fa, Sol, La, Si.',
        '<strong>Cifrado Americano (Anglosajón):</strong> Es el estándar mundial para el jazz, el pop y el rock. Asigna las siete primeras letras del alfabeto (A-G) empezando por la nota La. El Do es la letra C.',
        '<strong>Sistema Germánico:</strong> Utilizado en Alemania, Austria y países del norte de Europa. La gran diferencia es que usa la letra H para el Si natural y la B para el Si bemol.',
      ],
    },
    {
      type: 'title',
      text: 'La curiosa historia del Si, la B y la H',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos principiantes se preguntan por qué en Alemania el Si se escribe con una H. El origen es un error de copista medieval. En el sistema de letras antiguo, la letra B se usaba para el Si. Existían dos variantes: el <em>B quadratum</em> (cuadrado, para el Si natural) y el <em>B rotundum</em> (redondo, para el Si bemol).',
    },
    {
      type: 'paragraph',
      html: 'Con el tiempo, la forma del <em>B quadratum</em> se fue pareciendo cada vez más a una H minúscula en los manuscritos alemanes. Esta evolución gráfica se consolidó en la imprenta y dio lugar a la nomenclatura actual alemana: H para el Si natural y B para el Si bemol. Curiosamente, esta distinción permitió a compositores como J.S. Bach firmar sus obras con el famoso motivo "B-A-C-H" (Si bemol - La - Do - Si natural).',
    },
    {
      type: 'title',
      text: 'Tabla comparativa de equivalencias de notas naturales',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nota (Latino)', 'Cifrado (Anglo)', 'Alemán (Germánico)', 'Origen del Cifrado'],
      rows: [
        ['Do', 'C', 'C', 'Frecuencia base'],
        ['Re', 'D', 'D', 'Segunda nota'],
        ['Mi', 'E', 'E', 'Tercera nota'],
        ['Fa', 'F', 'F', 'Cuarta nota'],
        ['Sol', 'G', 'G', 'Quinta nota'],
        ['La', 'A', 'A', 'Nota de afinación'],
        ['Si', 'B', 'H', 'La gran variante'],
      ],
    },
    {
      type: 'title',
      text: 'Sostenidos, Bemoles y el concepto de Enarmonía',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En la música occidental utilizamos 12 sonidos por octava. Las cinco notas adicionales se representan mediante alteraciones: el sostenido (#) y el bemol (b). Un sostenido eleva la nota un semitono, mientras que un bemol la baja un semitono.',
    },
    {
      type: 'paragraph',
      html: 'Esto nos lleva a la <strong>Enarmonía</strong>: dos notas que tienen nombres diferentes pero suenan exactamente igual y ocupan la misma tecla en el piano. Por ejemplo, Do# (Do elevado un semitono) y Reb (Re bajado un semitono) son enarmónicos. Nuestra calculadora resalta estas equivalencias automáticamente, lo cual es vital para comprender por qué una partitura puede pedir un Fa# y otra un Solb en una misma tonalidad.',
    },
    {
      type: 'title',
      text: 'Octavas: Notación Científica vs Franco-Belga',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Notación Científica Internacional (ANSI): El Do central se denomina C4. Es el estándar en sintetizadores, DAWs y software de música (MIDI).',
        'Notación Franco-Belga: Muy extendida en conservatorios clásicos de habla hispana. En este sistema, el Do central es el Do3.',
        'Sistema de Helmholtz: Utiliza letras mayúsculas, minúsculas y primas (C, c, c\', c\'\'). Es más común en literatura técnica antigua y acústica alemana.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo para productores',
      html: 'Ten cuidado con los DAWs: algunos fabricantes (como Yamaha) consideran que el Do central es C3, mientras que otros (como Roland o FL Studio) lo consideran C4 o incluso C5. Si tu sintetizador suena una octava fuera de lugar, verifica qué norma de notación científica está siguiendo el software.',
    },
    {
      type: 'title',
      text: 'Frecuencia en hercios (Hz) y afinación estándar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Desde un punto de vista físico, cada nota corresponde a una frecuencia específica medida en hercios (ciclos por segundo). El estándar internacional de afinación (ISO 16) establece que la nota <strong>La4 (A4)</strong> vibra exactamente a <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Calibrar sintetizadores analógicos que pueden sufrir derivas técnicas.',
        'Ajustar ecualizadores quirúrgicos en mezcla para eliminar resonancias en notas específicas.',
        'Comprender la relación entre altura física y percepción musical.',
        'Convertir samples de manera precisa ajustando el pitch en cents.',
      ],
    },
    {
      type: 'title',
      text: 'Casos prácticos de uso de la calculadora',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: "Traducción instantánea entre cifrados para músicos de sesión que deben leer 'charts' en inglés.",
          con: 'El sistema no contempla microtonalidades ni afinaciones no occidentales.',
        },
        {
          pro: 'Identificación de notas enarmónicas para mejorar la ortografía musical en partituras.',
          con: 'La reproducción de audio es una onda pura, no tiene el timbre de un instrumento real.',
        },
        {
          pro: 'Conversión de octavas científica a franco-belga para estudiantes de armonía.',
          con: 'Solo asume la afinación estándar A4=440Hz, no afinaciones barrocas (415 Hz).',
        },
        {
          pro: 'Visualización intuitiva en piano que facilita el aprendizaje de escalas y acordes.',
          con: 'Requiere conocimientos básicos de teoría para interpretar qué alteración es mejor en cada contexto.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Glosario técnico de referencia',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Semitono: La distancia mínima entre dos notas en el sistema occidental (ej. de Mi a Fa).',
        'Tono: La distancia equivalente a dos semitonos (ej. de Do a Re).',
        'Cifrado: Sistema de abreviaturas para representar notas y acordes.',
        'Hercios (Hz): Unidad de medida de la frecuencia sonora.',
        'Octava: Intervalo que separa dos notas donde la frecuencia de una es el doble de la otra.',
        'Armadura: Conjunto de alteraciones al inicio de un pentagrama que definen la tonalidad.',
      ],
    },
  ],
};
