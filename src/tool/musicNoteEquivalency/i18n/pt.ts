import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'equivalencia-notas-musicais';
const title = 'Equivalência de Notas Musicais: Sistemas Latino Germânico e Inglês';
const description =
  'Tradutor interativo de notas musicais entre os sistemas latino (Dó, Ré, Mi), anglo-saxão (C, D, E) e germânico (H). Inclui visualizador de piano, oitavas e frequências (Hz).';

const faqData = [
  {
    question: 'O que é a notação americana ou anglo-saxã?',
    answer:
      'É o sistema que utiliza as letras de A a G para representar as notas musicais. É o padrão na música moderna e no jazz. Neste sistema, A=Lá, B=Si, C=Dó, D=Ré, E=Mi, F=Fá e G=Sol.',
  },
  {
    question: 'Por que o Si é chamado de H na Alemanha?',
    answer:
      "Devido a uma evolução gráfica medieval do 'B-quadratum'. Nos países de língua alemã, a letra H é reservada para o Si natural, enquanto a letra B é usada exclusivamente para o Si bemol.",
  },
  {
    question: "O que é o 'Dó central' na notação científica?",
    answer:
      'O Dó central (a tecla Dó no meio de um piano de 88 teclas) é o C4 no padrão ANSI/Internacional. No sistema franco-belga, amplamente utilizado em conservatórios, é chamado de Dó3.',
  },
  {
    question: 'O que significa duas notas serem enarmônicas?',
    answer:
      'Significa que têm nomes diferentes, mas representam o mesmo som físico e são tocadas na mesma tecla do piano. Por exemplo, Dó sustenido (C#) e Ré bemol (Db) são notas enarmônicas.',
  },
  {
    question: 'Qual é a frequência padrão de Lá4?',
    answer:
      'A frequência padrão internacional é 440 Hz (padrão ISO 16). É a referência universal para a afinação de orquestras, instrumentos e sintetizadores digitais.',
  },
];

const howToData = [
  {
    name: 'Selecione a oitava',
    text: 'Use o seletor numérico no topo para indicar com qual oitava do piano você deseja trabalhar (o padrão é a oitava 4, a central).',
  },
  {
    name: 'Pressione uma nota no piano',
    text: 'Clique ou toque em qualquer tecla no piano interativo para ver as suas informações técnicas e nomenclatura.',
  },
  {
    name: 'Compare os sistemas',
    text: 'Observe os painéis inferiores para ver como essa nota é chamada nos sistemas latino, anglo-saxão e germânico simultaneamente.',
  },
  {
    name: 'Ouça e verifique',
    text: 'Pressione o botão "Ouvir" para escutar a frequência exata da nota selecionada e confirmar a sua altura musical.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    octaveLabel: 'Oitava Científica (C4 = Dó Central):',
    systemsTitle: 'Sistemas de Nomenclatura',
    systemLatino: 'Latino (Solfejo)',
    systemAnglo: 'Anglo-saxão (Moderno)',
    systemGerman: 'Germânico (Alemão)',
    sciNotationTitle: 'Notação Científica',
    systemAnsi: 'Internacional (ANSI)',
    systemFranco: 'Franco-belga',
    systemEnharmonic: 'Enarmonia Útil',
    techTitle: 'Dados Técnicos e Ondas',
    btnPlay: 'Ouvir',
    btnCopy: 'Copiar Info',
    initialTitle: 'Selecione uma nota no piano',
    copyDone: 'Copiado!',
    copyLabelNote: 'Nota',
    copyLabelGerman: 'Sistema Alemão',
    copyLabelFreq: 'Frequência',
    copyLabelAnsi: 'Oitava Científica',
    copyLabelUrl: 'URL',
    naLabel: 'N/A',
  },
  seo: [
    {
      type: 'summary',
      title: 'Tradutor Multilíngue de Notas Musicais',
      items: [
        '<strong>3 sistemas simultaneamente</strong>: Latino, Anglo-saxão e Germânico num relance.',
        '<strong>Piano interativo</strong>: Clique em qualquer tecla para ver todas as suas equivalências.',
        '<strong>Frequências exatas</strong>: Cada nota mostra os seus Hz conforme o padrão ISO 16.',
        '<strong>Enarmonias</strong>: Identifica automaticamente notas com nomes duplos.',
      ],
    },
    {
      type: 'title',
      text: 'Compreendendo a equivalência de notas musicais em diferentes sistemas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A música é uma linguagem universal, mas a sua escrita e nomenclatura variam profundamente dependendo da região geográfica e do contexto acadêmico. Enquanto os países de língua latina e a tradição clássica europeia predominam com o sistema latino (Dó, Ré, Mi...), a música moderna, o jazz e o mundo anglo-saxão padronizaram a notação americana (C, D, E...). Além disso, existe uma particularidade histórica nos países de influência germânica, onde o Si natural é chamado de H e o Si bemol é B.',
    },
    {
      type: 'title',
      text: 'Os três principais sistemas de nomenclatura musical',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Sistema Latino (Solfejo):</strong> Usado em Portugal, Brasil, Espanha, Itália, França e grande parte da América Latina. Baseado no hino a São João Batista de Guido d\'Arezzo. Usa Dó, Ré, Mi, Fá, Sol, Lá, Si.',
        '<strong>Notação Americana (Anglo-saxão):</strong> O padrão mundial para jazz, pop e rock. Atribui as primeiras sete letras do alfabeto (A-G) começando em A=Lá. C é a letra para o Dó.',
        '<strong>Sistema Germânico:</strong> Usado na Alemanha, Áustria e países do norte da Europa. A diferença fundamental é o uso de H para o Si natural e B para o Si bemol.',
      ],
    },
    {
      type: 'title',
      text: 'A curiosa história do B e do H na notação alemã',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Muitos iniciantes perguntam-se por que na Alemanha a nota Si se escreve com um H. A origem reside num erro de copista medieval. No antigo sistema de letras, a letra B era usada para o Si. Havia duas variantes: o <em>B quadratum</em> (quadrado, para o Si natural) e o <em>B rotundum</em> (redondo, para o Si bemol).",
    },
    {
      type: 'paragraph',
      html: 'Com o tempo, a forma do <em>B quadratum</em> assemelhou-se cada vez mais a um h minúsculo nos manuscritos alemães. Esta evolução gráfica consolidou-se na imprensa e deu origem à atual nomenclatura alemã: H para o Si natural e B para o Si bemol. Curiosamente, esta distinção permitiu que compositores como J.S. Bach assinassem as suas obras com o famoso motivo "B-A-C-H" (Si bemol - Lá - Dó - Si natural).',
    },
    {
      type: 'title',
      text: 'Tabela comparativa de equivalências de notas naturais',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nota (Latino)', 'Notação (Anglo)', 'Alemão (Germânico)', 'Origem'],
      rows: [
        ['Dó', 'C', 'C', 'Frequência base'],
        ['Ré', 'D', 'D', 'Segunda nota'],
        ['Mi', 'E', 'E', 'Terceira nota'],
        ['Fá', 'F', 'F', 'Quarta nota'],
        ['Sol', 'G', 'G', 'Quinta nota'],
        ['Lá', 'A', 'A', 'Nota de afinação'],
        ['Si', 'B', 'H', 'A grande variante'],
      ],
    },
    {
      type: 'title',
      text: 'Sustenidos, Bemóis e o conceito de Enarmonia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na música ocidental, usamos 12 sons por oitava. As cinco notas adicionais são representadas por alterações: o sustenido (#) e o bemol (b). Um sustenido eleva a nota um semitom, enquanto um bemol baixa-a um semitom.',
    },
    {
      type: 'paragraph',
      html: 'Isto leva-nos à <strong>Enarmonia</strong>: duas notas que têm nomes diferentes, mas soam exatamente da mesma forma e ocupam a mesma tecla do piano. Por exemplo, Dó# e Réb são enarmônicas. A nossa calculadora destaca automaticamente estas equivalências, o que é vital para entender por que uma partitura pode pedir um Fá# enquanto outra pede um Solb na mesma tonalidade.',
    },
    {
      type: 'title',
      text: 'Oitavas: Notação Científica vs Franco-belga',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Notação Científica Internacional (ANSI): O Dó central é chamado de C4. É o padrão em sintetizadores, DAWs e software musical (MIDI).',
        'Notação Franco-belga: Amplamente utilizada em conservatórios clássicos. Neste sistema, o Dó central é Dó3.',
        "Sistema Helmholtz: Usa letras maiúsculas, minúsculas e apóstrofos (C, c, c', c''). Mais comum na antiga literatura técnica e acústica alemã.",
      ],
    },
    {
      type: 'tip',
      title: 'Dica para produtores',
      html: 'Cuidado com as DAWs: alguns fabricantes (como a Yamaha) consideram o Dó central como C3, enquanto outros (como a Roland ou FL Studio) consideram-no C4 ou até C5. Se o seu sintetizador soa uma oitava deslocado, verifique qual padrão de notação científica o software está a seguir.',
    },
    {
      type: 'title',
      text: 'Frequência em Hertz (Hz) and afinação padrão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De uma perspectiva física, cada nota corresponde a uma frequência específica medida em hertz (ciclos por segundo). O padrão internacional de afinação (ISO 16) estabelece que o <strong>Lá4</strong> vibra exatamente a <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Calibrar sintetizadores analógicos que podem sofrer deriva técnica.',
        'Ajustar equalizadores cirúrgicos na mistura para eliminar ressonâncias em notas específicas.',
        'Compreender a relação entre a altura física e a percepção musical.',
        'Converter samples com precisão ajustando o pitch em cents.',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso prático para esta calculadora',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Tradução instantânea entre notações para músicos de sessão que precisam de ler partituras em inglês.',
          con: 'O sistema não contempla microtonalidades ou afinações não ocidentais.',
        },
        {
          pro: 'Identificação de notas enarmônicas para melhorar a ortografia musical em partituras.',
          con: 'A reprodução de áudio é uma onda pura, não tem o timbre de um instrumento real.',
        },
        {
          pro: 'Conversão de oitava científica para franco-belga para estudantes de harmonia.',
          con: 'Apenas assume a afinação padrão Lá4=440Hz, não as afinações barrocas (415 Hz).',
        },
        {
          pro: 'Visualização intuitiva do piano que facilita a aprendizagem de escalas e acordes.',
          con: 'Requer conhecimentos básicos de teoria para interpretar qual alteração é melhor em cada contexto.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referência de glossário técnico',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Semitom: A distância mínima entre duas notas no sistema ocidental (ex: de Mi para Fá).',
        'Tom: A distância equivalente a dois semitons (ex: de Dó para Ré).',
        'Notação: Sistema de abreviaturas para representar notas e acordes.',
        'Hertz (Hz): Unidade de medida da frequência sonora.',
        'Oitava: Intervalo que separa duas notas onde a frequência de uma é o dobro da outra.',
        'Armadura de clave: Conjunto de alterações no início de uma pauta que definem a tonalidade.',
      ],
    },
  ],
};
