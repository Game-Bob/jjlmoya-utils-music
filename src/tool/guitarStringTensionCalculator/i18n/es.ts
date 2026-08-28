import { createGuitarStringTensionContent } from './content-factory';

const title = 'Calculadora de tensión de cuerdas de guitarra';
const slug = 'calculadora-tension-cuerdas-guitarra';
const description = 'Estima la tensión de cada cuerda de guitarra a partir del calibre, la escala y la afinación. Compara juegos completos sin conexión en unidades métricas o imperiales.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metrico', imperial: 'Imperial', metricLength: 'Escala en mm', imperialLength: 'Escala en pulgadas', metricGauge: 'Calibre en mm', imperialGauge: 'Calibre en mil', metricTension: 'kg de fuerza', imperialTension: 'libras de fuerza', chooseSet: 'Elige un juego de cuerdas', scaleLength: 'Escala', tuning: 'Afinacion', material: 'Material de la cuerda', customSet: 'Editar calibres', presetHint: 'Empieza por el juego mas parecido', gauge: 'Calibre', note: 'Nota', frequency: 'Frecuencia', tension: 'Tension', status: 'Sensacion', totalTension: 'Tiro total sobre el mastil', averageTension: 'Media por cuerda', tensionSpread: 'Diferencia entre la mas floja y la mas tensa', low: 'Floja', balanced: 'Equilibrada', high: 'Tensa', standard: 'Mi estandar', halfStepDown: 'Un semitono abajo', dropD: 'Drop D', wholeStepDown: 'Un tono abajo', openG: 'Open G', steel: 'Acero', nickel: 'Acero niquelado', phosphorBronze: 'Bronce fosforico', nylon: 'Nailon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Editar calibres', shortScale: 'Escala corta 24,75 pulgadas', fenderScale: 'Escala Fender 25,5 pulgadas', martinScale: 'Escala Martin 25,4 pulgadas', customScale: 'Escala personalizada', customScaleHint: 'Usa la longitud vibrante entre cejuela y puente', formulaNote: 'La estimacion usa T = 4L²f²μ, donde μ es la masa por unidad de longitud inferida del diametro y la densidad del material.', modelNote: 'Esta estimacion sin conexion usa un modelo de densidad del acero. Los nucleos, entorchados, recubrimientos y pesos unitarios del fabricante pueden cambiar la tension real. Comprueba los datos del fabricante antes de cambiar el ajuste del instrumento.', faqTitle: 'Preguntas sobre la tension de las cuerdas', bibliographyTitle: 'Fuentes del modelo de tension', tableLabel: 'Lectura de tension de cada cuerda', tensionMapLabel: 'Perfil de tension de las seis cuerdas',
  },
  faq: [
    { question: '¿Que necesita una calculadora de tension de cuerdas?', answer: 'Necesita la escala vibrante, la altura de cada nota, el calibre y una estimacion coherente de la densidad del material. Un preset aporta los seis calibres y la afinacion cambia las frecuencias objetivo.' },
    { question: '¿Una escala de guitarra mas larga aumenta la tension?', answer: 'Si. Con el mismo calibre y nota, la tension crece con el cuadrado de la longitud vibrante. Por eso un juego 10-46 puede sentirse mas duro en una escala de 25,5 pulgadas que en una de 24,75.' },
    { question: '¿Como afecta la afinacion a la tension?', answer: 'Bajar una cuerda reduce su tension con el cuadrado de la proporcion de frecuencias. Bajar un tono deja aproximadamente el 79 % de la tension original y bajar un semitono alrededor del 89 %.' },
    { question: '¿Son exactos los resultados para cuerdas entorchadas?', answer: 'No. El modelo trata la cuerda como un cilindro con la densidad del material. Las cuerdas entorchadas tienen nucleo, vueltas y recubrimientos, por lo que las tablas de peso unitario del fabricante son mas precisas.' },
    { question: '¿Que tension resulta comoda en una guitarra?', answer: 'No existe un objetivo universal. Esta herramienta marca por debajo de 8 libras como flojo y por encima de 25 como tenso para detectar extremos, pero el estilo, el ajuste y el instrumento deciden que resulta comodo.' },
    { question: '¿Puedo usar el resultado para aprobar un juego nuevo?', answer: 'Usalo para comparar escenarios, no como garantia de seguridad. Revisa las indicaciones del fabricante del instrumento y las especificaciones de las cuerdas antes de cambiar mucho el calibre o la afinacion.' },
  ],
  howTo: [
    { name: 'Elige el sistema de medida', text: 'Usa Metrico para milimetros y kilogramos de fuerza o Imperial para pulgadas, mil y libras de fuerza. El ajuste fisico no cambia al alternar.' },
    { name: 'Elige escala y afinacion', text: 'Selecciona la escala mas cercana y despues la afinacion que usas. Usa Escala personalizada si conoces la longitud vibrante entre cejuela y puente.' },
    { name: 'Selecciona o edita los calibres', text: 'Empieza con un preset 9-42, 10-46, 11-49 o 12-54. Abre Editar calibres para comparar un juego mixto o una sexta personalizada.' },
    { name: 'Lee el perfil de tension', text: 'Compara cada cuerda, el tiro total sobre el mastil y la diferencia entre extremos. Las marcas Floja y Tensa señalan valores que merecen revisar el ajuste.' },
  ],
  seo: [
    { type: 'summary', title: 'Que compara esta calculadora', items: ['La tension de las seis cuerdas desde un preset o calibres propios', 'Los cambios de escala y afinacion como un nuevo perfil de tension', 'Lecturas metricas e imperiales en kilogramos o libras de fuerza', 'Marcas de cuerdas flojas y tensas para detectar extremos'] },
    { type: 'title', text: 'Que te dice la tension sobre el ajuste de una guitarra', level: 2 },
    { type: 'paragraph', html: 'La tension es la fuerza que mantiene una cuerda en una nota concreta. No depende solo del calibre: tambien cambian la fuerza la nota y la longitud vibrante. El perfil del juego ayuda a detectar una cuerda mucho mas floja o tensa que las de alrededor.' },
    { type: 'title', text: 'El modelo fisico de la estimacion', level: 2 },
    { type: 'paragraph', html: 'Una cuerda vibrante relaciona frecuencia, longitud vibrante y densidad lineal. De esa relacion sale T = 4L²f²μ. La calculadora estima la densidad a partir de una seccion circular y un modelo de acero.' },
    { type: 'title', text: 'Por que siguen importando los datos del fabricante', level: 2 },
    { type: 'paragraph', html: 'Las cuerdas entorchadas combinan nucleo y vueltas, y el recubrimiento cambia su peso unitario. Usa este resultado como laboratorio de comparacion y la tabla del fabricante como referencia para instalar un producto concreto.' },
    { type: 'list', items: ['Toma la escala de las especificaciones o mide desde la cejuela hasta el puente.', 'Elige la afinacion real que vas a utilizar.', 'Empieza por el preset mas cercano y edita solo las cuerdas que quieras cambiar.', 'Revisa los valores y la diferencia y confirma los datos del fabricante.'] },
  ],
});
