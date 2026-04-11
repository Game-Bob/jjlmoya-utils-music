import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'musica',
  title: 'Herramientas de Música Online',
  description:
    'Utilidades musicales gratuitas para músicos, productores y aficionados. Metrónomo, calculadora de BPM, afinador de frecuencias, equivalencias de notas y más.',
  seo: [
    {
      type: 'summary',
      title: 'Qué encontrarás en esta categoría',
      items: [
        'Metrónomo online con Web Audio API — precisión de milisegundos',
        'Calculadora BPM a milisegundos para delays y reverbs',
        'Conversor de frecuencia a nota musical (Hz, cents y desafinación)',
        'Calculadora de distancia de fase para alineación de micrófonos',
        'Equivalencia de notas entre sistemas Latino, Americano y Germánico',
        'Calculadora de almacenamiento de audio digital',
      ],
    },
    {
      type: 'title',
      text: 'Herramientas Musicales para Cada Etapa del Proceso Creativo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Desde el primer ensayo hasta la masterización final, cada músico y productor necesita herramientas precisas que estén disponibles en cualquier momento. Nuestra colección de <strong>utilidades musicales online</strong> ha sido diseñada con un objetivo claro: ofrecer la máxima precisión técnica con la mínima fricción.',
    },
    {
      type: 'paragraph',
      html: 'No necesitas instalar ninguna aplicación. Todas las herramientas funcionan directamente en tu navegador, son completamente gratuitas y preservan tu privacidad: ningún dato abandona tu dispositivo.',
    },
    {
      type: 'title',
      text: 'Para el Músico que Practica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El <strong>metrónomo online</strong> es la herramienta fundamental de cualquier músico en formación o en activo. Nuestro metrónomo utiliza la Web Audio API para garantizar una precisión de milisegundos, eliminar el drift y ofrecer retroalimentación visual con efecto ripple. La función <strong>Tap Tempo</strong> permite calcular el BPM de cualquier canción al instante.',
    },
    {
      type: 'title',
      text: 'Para el Productor Musical',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>calculadora de BPM a milisegundos</strong> es indispensable en cualquier sesión de mezcla. Sincronizar un delay o una reverb con el tempo de la canción marca la diferencia entre una mezcla que respira y una que suena artificial. Igualmente, la <strong>calculadora de distancia de fase</strong> permite alinear micrófonos con precisión de muestras y evitar la cancelación de fase en grabaciones con múltiples micros.',
    },
    {
      type: 'title',
      text: 'Para el Técnico de Sonido',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El <strong>conversor de frecuencia a nota musical</strong> transforma cualquier valor en Hz a su nota equivalente, mostrando además la desviación en cents. Ideal para afinar sintetizadores analógicos, identificar resonancias problemáticas en una sala o trabajar con samples que no están en tono. La <strong>calculadora de almacenamiento de audio digital</strong> ayuda a dimensionar proyectos de grabación y gestionar el espacio en disco con precisión.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Precisión Técnica',
          description:
            'Todas las herramientas están basadas en algoritmos verificados matemáticamente. Nada de aproximaciones: los resultados son exactos y reproducibles.',
        },
        {
          title: 'Privacidad Total',
          description:
            'El procesamiento ocurre en tu dispositivo. Ningún audio, archivo ni dato personal se transmite a ningún servidor.',
        },
      ],
    },
    {
      type: 'title',
      text: 'El Lenguaje Universal de la Música',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La música es un lenguaje con múltiples sistemas de notación. La herramienta de <strong>equivalencia de notas</strong> permite traducir instantáneamente entre el sistema Latino (Do, Re, Mi…), el Americano (C, D, E…) y el Germánico (C, D, E… con H en lugar de B), evitando confusiones al comunicarse con músicos de distintas tradiciones o al leer partituras de diferentes países.',
    },
    {
      type: 'tip',
      title: 'Acceso sin instalación',
      html: 'Todas las herramientas funcionan directamente en el navegador, sin plugins ni aplicaciones adicionales. Guarda esta página en favoritos para tenerlas siempre a mano durante tus sesiones.',
    },
  ],
};
