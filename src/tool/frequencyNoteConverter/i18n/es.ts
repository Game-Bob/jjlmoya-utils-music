import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'conversor-frecuencia-nota-musical';
const title = 'Conversor de Frecuencia a Nota Musical';
const description =
  'Convierte hercios a notas musicales al instante. Identifica la nota exacta de cualquier frecuencia, mide la desviación en cents, escucha el tono puro y afina sintetizadores y samplers con precisión.';

const faqData = [
  {
    question: '¿Cómo sé a qué nota corresponde una frecuencia de 440 Hz?',
    answer:
      '440 Hz corresponde exactamente al La4 (A4), la nota de referencia universal. Es el La por encima del Do central del piano. Esta frecuencia es el estándar ISO 16 desde 1939 y se usa para afinar instrumentos orquestales en todo el mundo.',
  },
  {
    question: "¿Qué significa que una nota esté '15 cents por encima'?",
    answer:
      'Un cent es la centésima parte de un semitono. Estar 15 cents por encima significa que la frecuencia es ligeramente más aguda que la nota exacta del temperamento igual. En un sintetizador, deberías aplicar -15 cents de fine-tune para corregirla.',
  },
  {
    question: '¿Por qué hay opciones de referencia 432 Hz y 444 Hz además de 440 Hz?',
    answer:
      'Diferentes contextos musicales usan distintas referencias. 432 Hz es popular en ciertas comunidades de producción. 444 Hz es común en música antigua renacentista. Algunas orquestas europeas afinan entre 441-444 Hz para un sonido más brillante.',
  },
  {
    question: '¿Para qué sirve el piano interactivo de la herramienta?',
    answer:
      'El piano interactivo permite identificar visualmente la nota en el teclado y también introducir frecuencias tocando teclas directamente. Al pulsar una tecla, obtienes su frecuencia exacta y puedes escuchar un tono sinusoidal puro.',
  },
  {
    question: '¿Cómo uso los armónicos que muestra la calculadora?',
    answer:
      'Los armónicos (octava inferior y superior) te permiten saber las frecuencias directamente relacionadas con tu nota. Son útiles para evitar conflictos entre capas de sintetizador, configurar filtros resonantes o mapear samples de batería.',
  },
  {
    question: '¿Por qué el modo de escucha genera un tono sinusoidal?',
    answer:
      'El tono sinusoidal es una onda pura que contiene únicamente la frecuencia fundamental sin armónicos añadidos. Permite una comparación limpia con el instrumento real sin que colores tímbricos interfieran en el juicio de afinación.',
  },
  {
    question: '¿Cómo calcular la frecuencia de una nota musical?',
    answer:
      'La frecuencia se calcula mediante una fórmula logarítmica basada en el temperamento igual. Partiendo de La4 (440 Hz), cada semitono superior se obtiene multiplicando por la raíz doceava de dos (~1.05946), y cada octava equivale a doblar la frecuencia.',
  },
  {
    question: '¿Qué nota es la frecuencia 440 Hz?',
    answer:
      'La frecuencia de 440 Hz es exactamente la nota La4 (A4 en cifrado americano). Es la nota de referencia estándar utilizada por la mayoría de las orquestas y músicos contemporáneos para afinar sus instrumentos.',
  },
  {
    question: '¿Diferencias entre la afinación a 440 Hz y 432 Hz?',
    answer:
      '440 Hz es el estándar internacional (ISO 16). 432 Hz es una afinación alternativa que algunos músicos prefieren por considerarla más natural, utilizándose frecuentemente en música para meditación, aunque no existe evidencia científica de beneficios biológicos claros.',
  },
];

const howToData = [
  {
    name: 'Escribe la frecuencia',
    text: 'Introduce la frecuencia en hercios en el campo de entrada principal. El resultado aparece de inmediato con el nombre de la nota y su octava científica.',
  },
  {
    name: 'Lee el resultado y el medidor de cents',
    text: 'El indicador visual tipo afinador te muestra si tu frecuencia está por encima, por debajo o exactamente en la nota. El valor en cents indica cuánto debes ajustar el fine-tune.',
  },
  {
    name: 'Usa los armónicos para afinar capas',
    text: 'Consulta las frecuencias de la octava inferior y superior para configurar osciladores adicionales, filtros resonantes o capas de percusión sin conflictos entre frecuencias.',
  },
  {
    name: 'Ajusta la referencia A4',
    text: 'Cambia la referencia A4 a 432 Hz, 444 Hz o cualquier valor personalizado para que todos los cálculos sean coherentes con el contexto de tu proyecto.',
  },
  {
    name: 'Escucha el tono de referencia',
    text: 'Pulsa el botón de reproducción para generar un tono sinusoidal puro en la frecuencia introducida y afinar tu instrumento real de oído.',
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
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias técnicas',
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
    btnHzToNote: 'Hz a Nota',
    btnNoteToHz: 'Nota a Hz',
    labelRef: 'Referencia A4',
    ariaRefCustom: 'Frecuencia de referencia A4 personalizada',
    calInfo:
      '<strong>440 Hz</strong> es el estándar internacional. <strong>432 Hz</strong> se usa a menudo en música de meditación y solfeggio.',
    labelFrequency: 'FRECUENCIA',
    ariaFreqInput: 'Introduce la frecuencia en hercios',
    ariaPlay: 'Escuchar tono',
    copyNoteName: 'Copiar nota',
    labelOctaveDown: 'Octava inferior',
    labelInputFreq: 'Frecuencia introducida',
    labelOctaveUp: 'Octava superior',
    labelNoteInput: 'NOMBRE DE LA NOTA (Ej: La4, A4, C#3)',
    placeholderNote: 'Escribe la nota...',
    labelSetNote: 'ESTABLECER NOTA',
    labelSetOctave: 'ESTABLECER OCTAVA',
    labelSelectedNote: 'Nota seleccionada',
    copyHz: 'Copiar Hz',
    btnListenNote: 'Escuchar nota',
    pianoLabel: 'Piano interactivo — toca una tecla para ver su frecuencia',
    pianoAria: 'Teclado de piano interactivo',
    historyTitle: 'Historial',
    historyClear: 'Limpiar',
    historyEmpty: 'Sin conversiones recientes',
    historyLoadAria: 'Cargar %s Hz',
    tuned: 'Afinado',
    sharp: 'sostenido',
    flat: 'bemol',
    unitHzExact: 'Hz exactos',
    noteNames: 'Do,Do#,Re,Re#,Mi,Fa,Fa#,Sol,Sol#,La,La#,Si',
    noteOptions:
      'Do (C)|Do# / Reb|Re (D)|Re# / Mib|Mi (E)|Fa (F)|Fa# / Solb|Sol (G)|Sol# / Lab|La (A)|La# / Sib|Si (B)',
    pianoOctave: 'Oct',
    copyFeedback: 'Copiado',
  },
  seo: [
    {
      type: 'summary',
      title: 'Características de la calculadora',
      items: [
        'Conversión bidireccional: Hz a nota y nota a Hz en la misma herramienta',
        'Precisión de muestra con referencia A4 ajustable (440 / 432 / 444 Hz)',
        'Medidor visual en cents con indicador sostenido / bemol / afinado',
        'Visualización de armónicos (fundamental, octava inferior, octava superior)',
        'Teclado de piano interactivo que ilumina la tecla correspondiente',
        'Historial de búsqueda para comparar rápidamente patches y samples',
      ],
    },
    {
      type: 'title',
      text: 'Qué es la frecuencia de una nota musical y por qué importa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada nota musical es, en esencia, una vibración periódica del aire. Cuando una cuerda de guitarra vibra a 440 ciclos por segundo, produce el La4 (A4), la nota de referencia universal para afinar instrumentos. Esta correspondencia entre hercios y notas no es arbitraria: está definida por el <strong>temperamento igual</strong>, el sistema de afinación predominante en la música occidental, que divide la octava en doce semitonos perfectamente equidistantes desde el punto de vista matemático.',
    },
    {
      type: 'paragraph',
      html: 'Conocer la frecuencia exacta de cada nota es fundamental en la síntesis de sonido, la producción musical, la ingeniería de audio y la luthería. Un sintetizador necesita saber a qué frecuencia debe oscilar cada oscilador para reproducir una nota afinada. Un ingeniero de mezcla necesita saber dónde cortar con un ecualizador para eliminar un zumbido sin afectar la fundamental de un instrumento.',
    },
    {
      type: 'title',
      text: 'La fórmula matemática detrás de la conversión',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El temperamento igual se basa en una progresión geométrica. Cada semitono equivale a multiplicar la frecuencia por la raíz doceava de dos. La fórmula para obtener la frecuencia de cualquier nota a partir de su distancia en semitonos respecto a La4 es:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Fórmula de conversión de nota MIDI a frecuencia en Hz',
    },
    {
      type: 'paragraph',
      html: 'Donde <em>n</em> es el número de nota MIDI (A4 = 69) y <em>A4</em> es la frecuencia de referencia, habitualmente 440 Hz. Invertir esta fórmula permite obtener la nota más cercana a cualquier frecuencia introducida, así como la desviación en cents.',
    },
    {
      type: 'title',
      text: 'Los cents: la unidad de precisión para músicos y técnicos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un semitono se divide en 100 cents. Esta unidad permite describir con precisión decimal cualquier desviación de afinación. Una desviación de 10 cents ya es perceptible para un oído entrenado; por encima de 20 cents resulta claramente desafinado para la mayoría de oyentes.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Afinación perfecta',
          description:
            'Una nota está perfectamente afinada cuando la desviación es inferior a 5 cents respecto a la frecuencia exacta del temperamento igual.',
        },
        {
          title: 'Cents en DAW',
          description:
            'Los samplers, sintetizadores y plugins de pitch shifting usan cents para el fine-tune, lo que permite ajustar samples a su nota exacta sin artefactos.',
        },
        {
          title: 'Tolerancia humana',
          description:
            'El umbral de percepción del desafinado varía entre 5 y 15 cents según el instrumento, la dinámica y el contexto armónico de la pieza.',
        },
      ],
    },
    {
      type: 'title',
      text: 'La referencia A4: 440 Hz, 432 Hz y las guerras de afinación',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La frecuencia de referencia A4 = 440 Hz fue estandarizada internacionalmente en 1939 (ISO 16). Sin embargo, músicos barrocos trabajan habitualmente con referencias de 415 Hz, y hay una creciente comunidad de productores que prefieren 432 Hz. Orquestas de élite como la Filarmónica de Berlín utilizan habitualmente 443 Hz para obtener un sonido más brillante y penetrante.',
    },
    {
      type: 'paragraph',
      html: 'En producción musical, la referencia importa cuando se mezclan instrumentos acústicos grabados en live con instrumentos virtuales. Si el piano grabado afinó a 442 Hz pero el sintetizador usa 440 Hz por defecto, todos los samples deberán corregirse en cents.',
    },
    {
      type: 'tip',
      title: 'Truco profesional para samplers',
      html: 'Cuando importas un sample en un sampler como Kontakt o Decent Sampler, introduce la frecuencia del sample en esta calculadora. El resultado en cents que muestra el medidor de afinación te dice exactamente el valor de <em>fine-tune</em> que debes introducir en el sampler para que la nota suene perfectamente afinada.',
    },
    {
      type: 'title',
      text: 'Tabla de frecuencias de referencia por octava',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta tabla muestra las frecuencias exactas de cada Do (C) en el temperamento igual con referencia A4 = 440 Hz, útil para configurar osciladores de sintetizadores modulares o verificar el rango de un instrumento:',
    },
    {
      type: 'table',
      headers: ['Nota', 'Frecuencia (Hz)', 'Nota MIDI', 'Rango de instrumento habitual'],
      rows: [
        ['Do0 (C0)', '16.35', '12', 'Subcontrabajo, órgano pedal'],
        ['Do1 (C1)', '32.70', '24', 'Contrabajo, bajo eléctrico grave'],
        ['Do2 (C2)', '65.41', '36', 'Violonchelo, guitarra bajo'],
        ['Do3 (C3)', '130.81', '48', 'Viola, saxo tenor, guitarra'],
        ['Do4 (C4)', '261.63', '60', 'Do central, piano, voz tenor'],
        ['Do5 (C5)', '523.25', '72', 'Flauta, violín, voz soprano'],
        ['Do6 (C6)', '1046.50', '84', 'Flautín, registros de violín agudo'],
        ['Do7 (C7)', '2093.00', '96', 'Armónicos de flauta, sintetizador'],
        ['Do8 (C8)', '4186.01', '108', 'Teclado de 88 teclas, límite técnico'],
      ],
    },
    {
      type: 'title',
      text: 'Armónicos y la octava como relación 2:1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una de las relaciones más importantes en acústica musical es la octava: doblar la frecuencia produce la misma nota en la octava superior, y dividirla a la mitad la lleva una octava abajo. Esta relación 2:1 es la base de los armónicos naturales de cualquier instrumento acústico.',
    },
    {
      type: 'paragraph',
      html: 'En síntesis, conocer los armónicos directos de una frecuencia es clave para evitar que un oscilador colisione espectralmente con otro en una capa de sonido. Esta calculadora muestra siempre la octava superior e inferior de cualquier frecuencia introducida.',
    },
    {
      type: 'title',
      text: 'Casos de uso reales para músicos y productores',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Afinar osciladores analógicos: mide la frecuencia de salida y compárala con la calculadora para saber cuántos cents ajustar en el coarse o fine tune.',
        'Asignar samples a notas: un bombo grabado a 55 Hz es un La1. Con esta herramienta sabes exactamente dónde mapearlo en un sampler.',
        'Detectar resonancias molestas: si una sala resuena a 80 Hz, la calculadora confirma que es un Mi2, orientando el uso del ecualizador.',
        'Sincronizar subwoofers: verificar que múltiples subs estén reproduciendo la misma nota evita refuerzos o cancelaciones por interferencia.',
        'Afinar campanas y percusión de altura definida: identifica la fundamental para integrarlos en la tonalidad de la pieza.',
        'Diseño de filtros resonantes: un filtro pasa-banda en 349.23 Hz generará un pico en Fa4, facilitando las decisiones armónicas.',
      ],
    },
    {
      type: 'title',
      text: 'El piano como referencia visual inmediata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El teclado de piano es el mapa visual más intuitivo del espectro musical. Su disposición de teclas blancas y negras permite reconocer patrones de escalas, acordes e intervalos de un vistazo. El piano interactivo ilumina la tecla correspondiente a cada frecuencia, conectando el número con su posición en el teclado universal.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Precisión matemática: usa la fórmula ISO 16 del temperamento igual exacto.',
          con: 'Limitación: solo aplica a temperamento igual, no a afinaciones históricas como el mesotónico.',
        },
        {
          pro: 'Calibración libre: permite trabajar con referencias A4 entre 400 y 480 Hz.',
          con: 'El tono sinusoidal no reproduce el timbre real del instrumento, solo la frecuencia fundamental.',
        },
        {
          pro: 'Conversión bidireccional: Hz a nota y nota a Hz en la misma herramienta.',
          con: 'El medidor de cents es relativo al semitono más cercano, no al temperamento justo.',
        },
        {
          pro: 'Historial de búsqueda: permite comparar rápidamente varios parches o samples.',
          con: 'Frecuencias fuera del rango audible (20 Hz - 20 kHz) tienen escasa utilidad práctica.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Glosario esencial para usar esta herramienta',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hercios): ciclos por segundo. Mide la frecuencia de una onda sonora.',
        'Nota MIDI: número entero del 0 al 127 que identifica cada nota en el estándar MIDI. A4 = 69.',
        'Octava científica: sistema de nomenclatura que añade el número de octava a la nota (La4, Do3).',
        'Cents: centésima parte de un semitono. Permite expresar desvíos de afinación con precisión.',
        'Temperamento igual: sistema de afinación donde todos los semitonos son iguales (razón 2^(1/12)).',
        'A4 / La4: nota de referencia. Estándar internacional: 440 Hz (ISO 16 de 1975).',
        'Armónico: frecuencias múltiplo entero de la fundamental producidas de forma natural en instrumentos acústicos.',
        'Fine-tune: parámetro de los sintetizadores y samplers para ajustar la afinación en cents.',
      ],
    },
  ],
};
