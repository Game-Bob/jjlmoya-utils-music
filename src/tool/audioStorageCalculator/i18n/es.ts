import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'calculadora-almacenamiento-audio-digital';
const title = 'Calculadora de Almacenamiento de Audio Digital: WAV, FLAC y MP3';
const description =
  'Estima el espacio en disco necesario para tus grabaciones de audio en WAV, FLAC y MP3 según la frecuencia de muestreo y profundidad de bits.';

const faqData = [
  {
    question: '¿Cuánto ocupa una hora de audio a 44.1 kHz 16 bits?',
    answer:
      'En estéreo (calidad CD), una hora de audio ocupa aproximadamente 635 MB de espacio en disco sin compresión (WAV/AIFF).',
  },
  {
    question: '¿Por qué el formato WAV ocupa tanto espacio?',
    answer:
      "WAV es un formato 'lossless' sin compresión, lo que significa que guarda cada muestra de audio individualmente para preservar la máxima fidelidad posible sin reducir datos.",
  },
  {
    question: '¿Qué es mejor para ahorrar espacio: FLAC o MP3?',
    answer:
      'FLAC ahorra hasta un 50% de espacio sin perder calidad (compresión sin pérdida). MP3 ahorra hasta un 80-90% pero elimina información de audio imperceptible (compresión con pérdida).',
  },
  {
    question: '¿Cómo calcular el espacio necesario para un podcast de 2 horas?',
    answer:
      'Si grabas en Mono a 48 kHz / 24 bits, necesitarás unos 988 MB. La calculadora te permite ajustar estos parámetros de forma precisa para tu equipo.',
  },
];

const howToData = [
  {
    name: 'Configurar el audio',
    text: 'Elige la frecuencia de muestreo (kHz), la profundidad de bits y el número de canales.',
  },
  {
    name: 'Introducir la duración',
    text: 'Escribe las horas, minutos y segundos que estimas que durará la grabación.',
  },
  {
    name: 'Analizar resultados',
    text: 'Observa el peso resultante en MB o GB y compáralo con diferentes formatos como FLAC o MP3.',
  },
  {
    name: 'Evaluar capacidad',
    text: 'Comprueba qué porcentaje del almacenamiento de tu tarjeta SD o disco duro ocupará la grabación.',
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

export const content: ToolLocaleContent<AudioStorageCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Configuración del Audio',
    labelHz: 'Frecuencia de Muestreo (kHz)',
    labelBits: 'Profundidad de Bits',
    labelChannels: 'Canales',
    labelDuration: 'Duración de la Grabación',
    labelHours: 'Horas',
    labelMinutes: 'Minutos',
    labelSeconds: 'Segundos',
    labelCapacity: 'Capacidad Disponible (en GB)',
    toggleLabelSpace: 'Quiero calcular cuánto podré grabar según mi espacio libre',
    labelComparison: 'Comparativa de Formatos y Almacenamiento',
    thFormat: 'Formato',
    thQuality: 'Calidad',
    thSize: 'Tamaño Estimado',
    qualityWav: 'Sin Compresión (Lossless)',
    qualityFlac: 'Compresión sin pérdida',
    qualityMp3High: 'Alta Calidad (Lossy)',
    qualityMp3Std: 'Calidad Estándar / Voz',
    labelDevices: 'Porcentaje ocupado en dispositivos comunes',
    device32: 'Tarjeta SD 32GB',
    device128: 'Almacenamiento 128GB',
    device1tb: 'Disco Duro 1TB',
    btnCopy: 'Copiar Resumen',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Estándar Video)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Alta Resolución)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Estándar)',
    optBits24: '24-bit (Productores / Cine)',
    optBits32: '32-bit (Punto Flotante)',
    optCh1: 'Mono (1 canal)',
    optCh2: 'Estéreo (2 canales)',
    optCh6: '5.1 Surround (6 canales)',
    optCh8: '7.1 Surround (8 canales)',
    labelDurationSet: 'Duración configurada: {time}',
    labelRecordingPossible: 'Grabación posible con {gb} GB configurados',
    toggleLabelTime: 'Volver al cálculo por duración',
    labelSpaceAvailable: 'Espacio Disponible',
    copyDone: '¡Resumen Copiado!',
    summarySpace:
      'La grabación de {t} a {bits}-bit/{hz} en modo {channels} ocupará aproximadamente {result}.',
    summaryTime:
      'Con {space} GB disponibles, puedes grabar hasta {result} de audio a {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Calculadora de Capacidad para Sonido Digital',
      items: [
        '<strong>WAV a MP3</strong>: Calcula el peso de archivos con y sin compresión.',
        '<strong>Resolución de Audio</strong>: Ajusta frecuencia (kHz) y bits (16/24/32).',
        '<strong>Inversión de cálculo</strong>: ¿Cuánto puedo grabar con el espacio que me queda?',
        '<strong>Formatos Profesionales</strong>: Estimación para FLAC y masterización en 192kHz.',
      ],
    },
    { type: 'title', text: '¿Cómo se calcula el tamaño de una grabación de audio?', level: 2 },
    {
      type: 'paragraph',
      html: 'El tamaño de un archivo de audio digital sin compresión (como WAV o AIFF) depende de tres factores técnicos fundamentales: <strong>Frecuencia de Muestreo (Sample Rate)</strong> — cuántas veces por segundo se "mide" la onda sonora (ej. 44.1 kHz o 48 kHz); <strong>Profundidad de Bits (Bit Depth)</strong> — la resolución de cada medida, con mayor rango dinámico y menor ruido a más bits; y <strong>Canales</strong> — si la grabación es Mono (1), Estéreo (2) o Multicanal (Surround). La fórmula matemática estándar es el <strong>Bitrate</strong>; multiplicado por la duración en segundos, da el tamaño total del archivo en bruto.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Calidad CD',
          description:
            '16-bit / 44.1 kHz. Ocupa aproximadamente 10.1 MB por minuto en estéreo. Es el estándar histórico de la industria discográfica.',
        },
        {
          title: 'Grabación Pro',
          description:
            '24-bit / 48 kHz. El estándar para video y cine. Ocupa unos 16.5 MB por minuto. Mayor margen para la mezcla.',
        },
        {
          title: 'Alta Resolución',
          description:
            '24-bit / 96 kHz. Utilizado en masterización. Dobla el tamaño de la grabación estándar hasta los 33 MB por minuto.',
        },
      ],
    },
    { type: 'title', text: '¿Por qué el audio a 24-bit ocupa un 50% más que a 16-bit?', level: 2 },
    {
      type: 'paragraph',
      html: 'Cada muestra de audio en 16 bits utiliza 2 bytes (16 ÷ 8) para almacenar la amplitud. El audio a 24 bits utiliza 3 bytes por muestra. Esto significa que, para una misma frecuencia de muestreo, un archivo de 24 bits será exactamente un 50% más pesado que uno de 16 bits. Si una grabación de una hora a 16-bit/44.1kHz ocupa 635 MB, la misma grabación a 24-bit/44.1kHz subirá hasta los 953 MB.',
    },
    {
      type: 'tip',
      title: '¿Merece la pena el espacio extra?',
      html: 'Aunque ocupe más, el audio a 24-bit ofrece un rango dinámico de 144 dB frente a los 96 dB de los 16-bit. Esto proporciona un "suelo de ruido" mucho más bajo, permitiendo grabar señales más débiles sin que el ruido de fondo sea un problema, algo vital en la fase de mezcla y masterización profesional.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: El impacto en el disco', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> son formatos sin compresión que preservan cada bit de la grabación original pero son los más pesados. <strong>FLAC</strong> aplica compresión sin pérdida (Lossless) y reduce el tamaño original entre un 40% y 60% sin sacrificar calidad. <strong>MP3 / AAC</strong> aplican compresión con pérdida (Lossy), eliminando frecuencias imperceptibles; un MP3 a 320 kbps ocupa aproximadamente un 22% del WAV original.',
    },
    {
      type: 'table',
      headers: ['Calidad', 'Frecuencia', 'Bits', 'MB por Minuto (Estéreo)'],
      rows: [
        ['Llamada Telefónica', '8 kHz', '8-bit', '0.94 MB'],
        ['Radio FM', '32 kHz', '16-bit', '7.32 MB'],
        ['CD Original', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Estudio Video', '48 kHz', '24-bit', '16.48 MB'],
        ['Alta Fidelidad', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Fórmula de cálculo para técnicos', level: 2 },
    {
      type: 'paragraph',
      html: 'Si necesitas realizar el cálculo manualmente o implementarlo en tu propio software, esta es la lógica que sigue nuestra calculadora:',
    },
    {
      type: 'code',
      ariaLabel: 'Lógica de cálculo de almacenamiento de audio',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Casos de uso para esta herramienta', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Evita quedarte sin espacio en tu grabadora portátil durante una entrevista larga.',
        'Estudio de Música: Calcula cuántos GB de espacio libre necesitas antes de abrir una sesión de 40 pistas a 96kHz.',
        'Ingeniería de Sonido Digital: Verifica que el bitrate de transferencia sea compatible con tu hardware.',
        'Post-producción de Cine: Estima el peso de las tomas multicanal 5.1 para el envío de archivos por red.',
        'Archivística: Determina la capacidad necesaria para digitalizar una colección de cintas analógicas en calidad Master.',
      ],
    },
  ],
};
