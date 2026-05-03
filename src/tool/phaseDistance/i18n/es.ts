import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'calculadora-distancia-fase';
const title = 'Calculadora de Distancia de Fase para Micrófonos';
const description =
  'Calcula el retraso y la compensación necesaria para alinear micrófonos. Evita la cancelación de fase y el filtrado de peine con precisión de muestras y ajuste de temperatura.';

const faqData = [
  {
    question: '¿Qué es la cancelación de fase en audio?',
    answer:
      'Es un fenómeno acústico que ocurre cuando dos señales de la misma fuente llegan a momentos distintos. Las ondas se interfieren entre sí, y si están desalineadas 180 grados, se cancelan, provocando que el sonido se vuelva delgado y sin cuerpo.',
  },
  {
    question: '¿Por qué influye la temperatura en el cálculo?',
    answer:
      'Porque el sonido viaja a través del aire, y la densidad del aire cambia con la temperatura. Cuanto más calor hace, más rápido viaja el sonido. Un ajuste de temperatura preciso permite calcular el retraso exacto entre micrófonos separados.',
  },
  {
    question: '¿Es lo mismo invertir la fase que invertir la polaridad?',
    answer:
      'Técnicamente no, aunque se usen indistintamente. La polaridad es un cambio eléctrico (girar 180°), mientras que la fase es un desplazamiento en el tiempo. Nuestra herramienta permite simular ambos para encontrar el punto de mayor coherencia sonora.',
  },
  {
    question: '¿Qué es el filtrado de peine (Comb Filtering)?',
    answer:
      'Es la respuesta en frecuencia resultante de combinar una señal con una versión retrasada de sí misma. Crea una serie de picos y valles (como los dientes de un peine) que alteran drásticamente el timbre del instrumento.',
  },
  {
    question: '¿Cuál es la regla del 3:1 en microfonía?',
    answer:
      'Es una técnica para minimizar problemas de fase: cuando uses dos micrófonos para captar diferentes fuentes, la distancia entre los micrófonos debe ser al menos tres veces la distancia de cada micrófono a su fuente.',
  },
  {
    question: '¿Es mejor alinear los micros físicamente o con software?',
    answer:
      'Siempre es preferible una buena alineación física durante la grabación para evitar artefactos. Sin embargo, el delay digital en el DAW permite una precisión de muestra (sample-accurate) que es casi imposible de lograr moviendo micros a mano.',
  },
];

const howToData = [
  {
    name: 'Mide las distancias',
    text: 'Mide la distancia física desde la fuente de sonido (ej. parche de caja) hasta cada uno de los micrófonos que estás utilizando.',
  },
  {
    name: 'Ajusta el entorno',
    text: 'Introduce la temperatura de la sala y la frecuencia de muestreo de tu proyecto para obtener cálculos basados en la física real.',
  },
  {
    name: 'Analiza el gráfico',
    text: 'Observa el visualizador de respuesta en frecuencia para identificar posibles cancelaciones críticas en el rango audible.',
  },
  {
    name: 'Aplica la compensación',
    text: 'Copia el valor de milisegundos o muestras (samples) e introdúcelo en el plugin de delay de tu canal para alinear perfectamente las pistas.',
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
    labelTemp: 'Temperatura (°C) / Sonido',
    btnAuto: 'Auto',
    labelSampleRate: 'Freq. Muestreo (kHz)',
    labelUnits: 'Sistema de Unidades',
    optMetric: 'Métrico (m/cm)',
    optImperial: 'Imperial (ft/in)',
    labelDistA: 'Distancia Micrófono A',
    labelDistB: 'Distancia Micrófono B',
    labelPresets: 'Preajustes Rápidos',
    presetCoincident: 'Coincidente (XY)',
    presetSnare: 'Caja',
    presetAmbient: 'Ambiencia',
    btnInvert: 'Invertir Fase (Φ)',
    labelGain: 'Ganancia Relativa Mic B:',
    btnCopy: 'Copiar Samples',
    labelDelay: 'Retraso Necesario',
    unitMs: 'milisegundos (ms)',
    labelCompensation: 'Compensación',
    unitSamples: 'Samples (Muestras)',
    labelPhaseStatus: 'Estado de Fase',
    textLoading: 'Cargando...',
    statusInPhase: 'EN FASE',
    statusInPhaseDesc: 'Señales perfectamente alineadas.',
    statusCritical: 'CANCELACIÓN CRÍTICA',
    statusCriticalDesc: 'Filtrado de peine notable en graves/medios.',
    statusOffAxis: 'FUERA DE EJE',
    statusOffAxisDesc: 'Desfase ligero. Textura modificada.',
    warningCritical: '(!) POSIBLE CANCELACIÓN CRÍTICA',
    labelSoundSpeed: 'Velocidad del Sonido',
    labelDistDiff: 'Diferencia de Distancia',
    labelNullFreq: 'Primeros Nulos (Nulls)',
    textNone: 'Ninguno',
    chartTitle: 'RESPUESTA EN FRECUENCIA (H) — COMB FILTERING',
    promptSoundSpeed: 'Velocidad del Sonido (m/s):',
    copyFeedback: '¡Copiado!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Características de la calculadora',
      items: [
        'Cálculo físico exacto con ajuste de temperatura para la velocidad del sonido',
        'Resultado en milisegundos y samples para compensación en DAW',
        'Visualizador Canvas del filtrado de peine en todo el espectro audible',
        'Preajustes de microfonía (XY coincidente, caja, ambiencia)',
        'Simulación de inversión de fase y control de ganancia relativa',
        'Soporte para unidades métricas e imperiales',
      ],
    },
    {
      type: 'title',
      text: '¿Qué es la cancelación de fase y por qué arruina tus mezclas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el mundo de la ingeniería de audio, la fase es uno de los conceptos más críticos y, paradójicamente, uno de los más ignorados por los principiantes. Cuando grabas una fuente de sonido, como una batería o un amplificador de guitarra, con dos o más micrófonos situados a diferentes distancias, las ondas sonoras no llegan a las cápsulas al mismo tiempo. Esta diferencia de tiempo, por minúscula que sea, provoca un fenómeno conocido como <strong>desfase</strong>.',
    },
    {
      type: 'title',
      text: 'El fenómeno del Filtrado de Peine (Comb Filtering)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando dos señales idénticas se combinan con un ligero retraso entre ellas, se crean una serie de valles y picos en la respuesta de frecuencia. Al observar esto en un analizador de espectro, verás un patrón que se asemeja a los dientes de un peine, de ahí su nombre. Este efecto altera el timbre natural del instrumento de forma destructiva.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impacto en Graves',
          description:
            'La cancelación de fase suele ser más devastadora en las frecuencias bajas, donde el cuerpo del sonido desaparece por completo.',
        },
        {
          title: 'Textura Metálica',
          description:
            "El filtrado de peine añade una coloración artificial que suena 'hueca' o excesivamente procesada.",
        },
      ],
    },
    {
      type: 'title',
      text: 'La influencia de la temperatura en el cálculo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos técnicos de sonido olvidan que el aire es un medio físico y su densidad cambia con la temperatura. La velocidad del sonido no es una constante inmutable; a 20°C viaja aproximadamente a 343 metros por segundo.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Fórmula de la velocidad del sonido según la temperatura',
    },
    {
      type: 'tip',
      title: 'Compensación Quirúrgica',
      html: 'Unos pocos grados de diferencia pueden desplazar los puntos de cancelación varios hercios. Usar nuestra calculadora con la temperatura real de tu estudio garantiza una alineación perfecta en el DAW.',
    },
    {
      type: 'title',
      text: 'Escenarios críticos de grabación',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Caja de batería (Snare Top & Bottom): Alinea temporalmente ambos parches para maximizar el punch.',
        'Overheads y Close-miking: Retrasa los micros cercanos para que coincidan con la fase de los ambientales.',
        'Guitarras con múltiples micros: Mezcla un dinámico y un cinta sin perder los medios-graves.',
        'Bajos por DI y Micro: Sincroniza la señal directa con la del amplificador para un sonido masivo.',
      ],
    },
    {
      type: 'title',
      text: 'Alineación Física vs. Procesamiento Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aunque nuestra utilidad te da los valores para corregir la fase en tu DAW tras la grabación, siempre recomendamos intentar la mejor alineación física posible en el estudio. Mover un micrófono unos milímetros puede ser más efectivo que cualquier procesamiento digital.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Velocidad @ 20°C', value: '343.2 m/s' },
        { label: 'Milisegundos/cm', value: '0.029 ms' },
        { label: 'Samples @ 48kHz', value: '1.4 por cm' },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de referencia: Distancia vs. Primer Nulo',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Diferencia (cm)', 'Retraso (ms)', '1er Nulo (Hz)', 'Afecta a...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Extremo agudo'],
        ['5 cm', '0.146', '3432', 'Medios-agudos (Brillo)'],
        ['10 cm', '0.291', '1716', 'Medios (Presencia)'],
        ['30 cm', '0.874', '572', 'Medios-graves (Cuerpo)'],
        ['1 metro', '2.914', '172', 'Graves (Fundamental)'],
      ],
    },
    {
      type: 'title',
      text: 'Ventajas y desventajas de los métodos de corrección',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Alineación física: Menor degradación de la señal original.',
          con: 'Alineación física: Difícil de ajustar con exactitud micrométrica.',
        },
        {
          pro: 'Corrección digital: Precisión absoluta a nivel de muestra.',
          con: 'Corrección digital: Puede crear pre-echo si se aplica mal.',
        },
        {
          pro: 'Inversión de polaridad: Solución instantánea para cancelaciones de 180°.',
          con: 'Inversión de polaridad: No corrige desfases intermedios.',
        },
        {
          pro: 'Compensación temporal: Recupera el impacto y el punch perdido.',
          con: 'Compensación temporal: Requiere medir con precisión cada micro.',
        },
      ],
    },
    {
      type: 'tip',
      title: '¿Cómo detectar problemas de fase de oído?',
      html: 'Pulsa el botón de "Invertir Fase" (Φ). Si al activarlo el sonido gana cuerpo y graves, significa que tus micrófonos estaban fuera de fase. Si el sonido "desaparece" o se vuelve más delgado, estaban correctamente alineados.',
    },
    {
      type: 'title',
      text: 'Compatibilidad Mono y Percepción Estéreo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En las grabaciones estéreo, la relación de fase define la estabilidad de la imagen sonora. Si hay inconsistencias graves, el sonido podría desaparecer por completo si la mezcla se reproduce en un sistema mono. Nuestra calculadora te ayuda a predecir qué frecuencias sufrirán más cuando los canales se sumen.',
    },
  ],
};
