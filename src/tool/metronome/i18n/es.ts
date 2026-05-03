import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronomo';
const title = 'Metrónomo Online: Ritmo Perfecto con Web Audio API';
const description =
  'Metrónomo online gratuito para músicos. Precisión milimétrica con Web Audio API. Visual, auditivo y con Tap Tempo. Ideal para estudiar instrumento.';

const faqData = [
  {
    question: '¿Es este metrónomo preciso para nivel profesional?',
    answer:
      'Sí. Utilizamos la Web Audio API, que programa los sonidos directamente en el reloj de hardware del dispositivo. Esto evita los micro-retrasos típicos de otras aplicaciones web y garantiza una precisión milimétrica, incluso en sesiones largas.',
  },
  {
    question: '¿Qué es el Tap Tempo y cómo se usa?',
    answer:
      "Es una función que permite calcular los BPM pulsando rítmicamente. Solo tienes que hacer clic en el botón 'TAP' o pulsar la barra espaciadora al ritmo de la música que escuchas para obtener su velocidad exacta de forma instantánea.",
  },
  {
    question: '¿Puedo cambiar el compás y los acentos?',
    answer:
      'Sí, puedes configurar diferentes compases (2/4, 3/4, 4/4, 6/8, etc.) y personalizar la acentuación de los pulsos para adaptarlo al estilo de música que estés practicando.',
  },
  {
    question: '¿Por qué no escucho nada en mi iPhone o iPad?',
    answer:
      'En dispositivos iOS, la tecnología Web Audio respeta el interruptor físico de silencio. Asegúrate de que tu móvil no esté en modo silencio y sube el volumen multimedia para escuchar los pulsos.',
  },
];

const howToData = [
  {
    name: 'Ajustar los BPM',
    text: 'Utiliza el control deslizante o los botones de ajuste fino para establecer la velocidad deseada en pulsos por minuto.',
  },
  {
    name: 'Configurar el compás',
    text: 'Elige la métrica de sonido (ej. 4/4 o 3/4) para que el metrónomo acentúe correctamente el primer tiempo de cada compás.',
  },
  {
    name: 'Sincronizar con música externa (Tap)',
    text: 'Si necesitas saber el tempo de una canción que estás escuchando, pulsa el botón TAP al ritmo de la batería o el pulso principal.',
  },
  {
    name: 'Iniciar la práctica',
    text: 'Pulsa el botón de inicio. Los indicadores visuales te ayudarán a mantener el ritmo incluso si no puedes oír el sonido claramente en tu entorno.',
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

export const content: ToolLocaleContent<MetronomeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'Tempo',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: 'Compás',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: '¿No se oye?',
    warningText:
      'Si estás en iPhone/iPad, asegúrate de que el interruptor de silencio lateral no esté activado. La tecnología Web Audio respeta el modo silencio del sistema en muchos dispositivos.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Características del metrónomo',
      items: [
        'Motor de sonido con Web Audio API — precisión de milisegundos sin drift',
        'Tap Tempo: calcula el BPM pulsando al ritmo',
        'Compás configurable de 1 a 12 tiempos con acento automático',
        'Indicador visual de alto contraste con efecto ripple',
        'Control de volumen y ajuste fino de ±1 y ±5 BPM',
      ],
    },
    {
      type: 'title',
      text: 'La Precisión del Ritmo al Alcance de tu Navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bienvenido al <strong>Metrónomo Online Definitivo</strong>. Hemos construido esta herramienta pensando en una sola cosa: <em>fiabilidad</em>. A diferencia de otros metrónomos web que sufren de "drift" (pequeños retardos acumulativos) debido a la carga del procesador, nuestro motor de sonido está construido directamente sobre la <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Esto significa que los pulsos de sonido se programan en el reloj de hardware de tu dispositivo con antelación, garantizando una <strong>precisión de milisegundos</strong> inquebrantable, incluso si minimizas la pestaña o tu ordenador está ocupado.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Visualización Clara',
          description:
            'Indicadores visuales grandes y de alto contraste con efecto "ripple". Diseñados para ser percibidos con tu visión periférica, permitiéndote mantener la vista en tu partitura o instrumento sin perder el pulso.',
        },
        {
          title: 'Tap Tempo Inteligente',
          description:
            '¿Escuchas una canción y quieres saber su velocidad? Pulsa el botón TAP o la tecla Espacio al ritmo de la música. El algoritmo calculará el promedio exacto de tus pulsaciones.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Guía Maestra: Cómo Estudiar con Metrónomo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El metrónomo no es solo un reloj que hace "tic-tac"; es el juez más imparcial de tu técnica. Aquí tienes una metodología probada para mejorar tu velocidad y limpieza:',
    },
    {
      type: 'title',
      text: '1. El Método de la Escalera',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si tu objetivo es tocar a <strong>120 BPM</strong>, no empieces intentándolo a esa velocidad. Frustrarse es fácil; progresar requiere estrategia.',
    },
    {
      type: 'list',
      items: [
        'Empieza al 50% de la velocidad objetivo (ej. 60 BPM).',
        'Toca el pasaje perfectamente 3 veces seguidas. Si fallas una nota, el contador vuelve a cero.',
        'Sube el metrónomo solo 5 BPM.',
        'Repite hasta llegar a tu velocidad objetivo.',
      ],
    },
    {
      type: 'title',
      text: '2. Desplazamiento del Acento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa nuestro selector de compás para cambiar la acentuación. Practicar un pasaje de 4/4 poniendo el metrónomo como si fuera 3/4 hará que el acento ("clic" agudo) caiga en lugares diferentes de tu fraseo, obligándote a interiorizar el tiempo absoluto en lugar de depender del "uno".',
    },
    {
      type: 'title',
      text: '3. Silencios Estratégicos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una técnica avanzada es configurar el metrónomo a la mitad de la velocidad (ej. 60 BPM si tocas a 120) y sentir cada clic como los tiempos 1 y 3. O más difícil aún: sentirlo solo como los contratiempos. Esto desarrolla tu <strong>reloj interno</strong>.',
    },
    {
      type: 'title',
      text: 'Datos Curiosos sobre el Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El tempo afecta radicalmente la percepción emocional de la música.',
    },
    {
      type: 'table',
      headers: ['Término Italiano', 'BPM Aprox.', 'Carácter'],
      rows: [
        ['Largo', '40 – 60', 'Lento y solemne'],
        ['Andante', '76 – 108', 'Paso tranquilo, caminando'],
        ['Allegro', '120 – 156', 'Rápido, brillante y alegre'],
        ['Presto', '168 – 200', 'Muy rápido, frenético'],
      ],
    },
    {
      type: 'title',
      text: 'Tecnología detrás de este Metrónomo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este no es un reproductor de audios MP3 en bucle. Estamos generando ondas sinusoidales puras en tiempo real. El oscilador principal crea un tono de <strong>1000 Hz</strong> para el acento y <strong>800 Hz</strong> para los tiempos débiles, con una envolvente ADSR ultra-corta para máxima percusión. Esto asegura que el ataque del sonido sea instantáneo.',
    },
    {
      type: 'paragraph',
      html: 'Ya seas un baterista buscando bloquear el groove, un pianista trabajando escalas, o un guitarrista perfeccionando ese solo, este metrónomo es tu aliado silencioso (hasta que le des al play).',
    },
    {
      type: 'tip',
      title: '¿No escuchas el sonido en el móvil?',
      html: 'Si estás en iPhone/iPad, asegúrate de que el <strong>interruptor de silencio</strong> lateral no esté activado. La tecnología Web Audio respeta el modo silencio del sistema en muchos dispositivos.',
    },
  ],
};
