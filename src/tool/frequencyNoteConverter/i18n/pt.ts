import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'conversor-frequencia-para-nota';
const title = 'Conversor de Frequência para Nota Musical';
const description =
  'Converta hertz em notas musicais instantaneamente. Identifique a nota exata de qualquer frequência, meça o desvio em cents, ouça o tom puro e afine sintetizadores e samplers com precisão.';

const faqData = [
  {
    question: 'Como sei a qual nota 440 Hz corresponde?',
    answer:
      '440 Hz corresponde exatamente ao Lá4, a nota de referência universal para afinação. É o Lá acima do Dó central no piano. Esta frequência é o padrão ISO 16 desde 1939 e é usada para afinar instrumentos de orquestra em todo o mundo.',
  },
  {
    question: "O que significa uma nota estar '15 cents acima'?",
    answer:
      'Um cent é a centésima parte de um semitom. Estar 15 cents acima de uma nota significa que a frequência está ligeiramente mais aguda do que a nota exata no temperamento igual. Num sintetizador, você deve aplicar -15 cents de fine-tune para corrigi-la.',
  },
  {
    question: 'Por que existem opções de referência de 432 Hz e 444 Hz além de 440 Hz?',
    answer:
      'Diferentes contextos musicais usam diferentes referências de afinação. 432 Hz é popular em certas comunidades de produção. 444 Hz é comum em gravações de música antiga renascentista. Algumas orquestras europeias afinam entre 441 e 444 Hz para um som mais brilhante.',
  },
  {
    question: 'Para que serve o teclado de piano interativo?',
    answer:
      'O piano interativo permite identificar visualmente a nota no teclado e também inserir frequências pressionando as teclas diretamente. Pressionar uma tecla mostra sua frequência exata e reproduz um tom senoidal puro para comparação.',
  },
  {
    question: 'Como uso os harmônicos mostrados pela calculadora?',
    answer:
      'Os harmônicos (oitava inferior e superior) mostram as frequências diretamente relacionadas à sua nota. Eles são úteis para evitar conflitos entre camadas de sintetizadores, ajustar filtros ressonantes para a nota correta ou mapear samples de bateria para as oitavas corretas do sampler.',
  },
  {
    question: 'Por que o modo de audição gera um tom senoidal em vez do som real?',
    answer:
      'Um tom senoidal é uma onda pura que contém apenas a frequência fundamental, sem harmônicos adicionais. Isso permite uma comparação limpa com o instrumento real, sem que a cor do timbre interfira no julgamento da afinação. É o mesmo sinal que um afinador eletrônico de agulha gera.',
  },
  {
    question: 'Como se calcula a frequência de uma nota musical?',
    answer:
      'A frequência é calculada usando uma fórmula logarítmica baseada no temperamento igual. Partindo do Lá4 de referência (440 Hz), cada semitom acima é obtido multiplicando pela raiz décima segunda de dois (~1,05946), e cada oitava equivale a dobrar a frequência.',
  },
  {
    question: 'Que nota é a frequência de 440 Hz?',
    answer:
      'A frequência de 440 Hz é exatamente a nota Lá4. É a nota de referência padrão usada pela maioria das orquestras e músicos contemporâneos para afinar seus instrumentos desde meados do século XX.',
  },
  {
    question: 'Qual é a diferença entre a afinação de 440 Hz e 432 Hz?',
    answer:
      '440 Hz é o padrão internacional (ISO 16). 432 Hz é uma afinação alternativa que alguns músicos preferem por razões sonoras subjetivas, frequentemente usada em música de meditação, embora não existam evidências científicas de benefícios biológicos claros em comparação com os 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Insira a frequência',
    text: 'Digite a frequência em hertz no campo de entrada principal. O resultado aparece imediatamente com o nome da nota e sua oitava científica.',
  },
  {
    name: 'Leia o resultado e o medidor de cents',
    text: 'O indicador visual do afinador mostra se sua frequência está acima, abaixo ou exatamente na nota. O valor em cents diz quanto você deve ajustar no fine-tune do seu instrumento ou plugin.',
  },
  {
    name: 'Use os harmônicos para afinar camadas',
    text: 'Verifique as frequências das oitavas inferior e superior para configurar osciladores adicionais, filtros ressonantes ou camadas de percussão sem conflitos de frequência.',
  },
  {
    name: 'Ajuste a referência Lá4',
    text: 'Altere a referência Lá4 para 432 Hz, 444 Hz ou qualquer valor personalizado para que todos os cálculos sejam consistentes com o contexto do seu projeto.',
  },
  {
    name: 'Ouça o tom de referência',
    text: 'Pressione o botão play para gerar um tom senoidal puro na frequência inserida e afine seu instrumento real de ouvido.',
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
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências técnicas',
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
    btnHzToNote: 'Hz para Nota',
    btnNoteToHz: 'Nota para Hz',
    labelRef: 'Referência Lá4',
    ariaRefCustom: 'Frequência de referência Lá4 personalizada',
    calInfo:
      '<strong>440 Hz</strong> é o padrão internacional. <strong>432 Hz</strong> é frequentemente usado em música de meditação e solfejo.',
    labelFrequency: 'FREQUÊNCIA',
    ariaFreqInput: 'Insira a frequência em hertz',
    ariaPlay: 'Ouvir tom',
    copyNoteName: 'Copiar nota',
    labelOctaveDown: 'Oitava inferior',
    labelInputFreq: 'Frequência de entrada',
    labelOctaveUp: 'Oitava superior',
    labelNoteInput: 'NOME DA NOTA (ex: Lá4, Dó#3, Do4)',
    placeholderNote: 'Digite a nota...',
    labelSetNote: 'DEFINIR NOTA',
    labelSetOctave: 'DEFINIR OITAVA',
    labelSelectedNote: 'Nota selecionada',
    copyHz: 'Copiar Hz',
    btnListenNote: 'Ouvir nota',
    pianoLabel: 'Piano interativo — pressione uma tecla para ver sua frequência',
    pianoAria: 'Teclado de piano interativo',
    historyTitle: 'Histórico',
    historyClear: 'Limpar',
    historyEmpty: 'Nenhuma conversão recente',
    historyLoadAria: 'Carregar %s Hz',
    tuned: 'Afinado',
    sharp: 'acima',
    flat: 'abaixo',
    unitHzExact: 'Hz exatos',
    noteNames: 'Dó,Dó#,Ré,Ré#,Mi,Fá,Fá#,Sol,Sol#,Lá,Lá#,Si',
    noteOptions: 'Dó (C)|Dó# / Réb|Ré (D)|Ré# / Mib|Mi (E)|Fá (F)|Fá# / Solb|Sol (G)|Sol# / Láb|Lá (A)|Lá# / Sib|Si (B)',
    pianoOctave: 'Oit',
    copyFeedback: 'Copiado',
  },
  seo: [
    {
      type: 'summary',
      title: 'Recursos da calculadora',
      items: [
        'Conversão bidirecional: Hz para nota e nota para Hz na mesma ferramenta',
        'Precisão absoluta com referência Lá4 ajustável (440 / 432 / 444 Hz)',
        'Medidor visual de cents com indicador de acima / abaixo / afinado',
        'Exibição de harmônicos (fundamental, oitava inferior, oitava superior)',
        'Teclado de piano interativo destacando a tecla correspondente',
        'Histórico de busca para comparação rápida de timbres e samples',
      ],
    },
    {
      type: 'title',
      text: 'O que é a frequência de uma nota musical e por que ela é importante',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toda nota musical é, em essência, uma vibração periódica do ar. Quando uma corda de guitarra vibra a 440 ciclos por segundo, ela produz o Lá4, a nota de referência universal para afinação. Esta correspondência entre hertz e notas não é arbitrária: ela é definida pelo <strong>temperamento igual</strong>, o sistema de afinação predominante na música ocidental, que divide a oitava em doze semitons perfeitamente equidistantes de uma perspectiva matemática.',
    },
    {
      type: 'paragraph',
      html: 'Saber a frequência exata de cada nota é fundamental na síntese sonora, produção musical, engenharia de áudio e fabricação de instrumentos. Um sintetizador precisa saber em qual frequência cada oscilador deve vibrar para reproduzir uma nota afinada. Um engenheiro de mixagem precisa saber onde cortar com um equalizador para remover um ruído sem afetar a fundamental de um instrumento.',
    },
    {
      type: 'title',
      text: 'A fórmula matemática por trás da conversão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O temperamento igual é baseado numa progressão geométrica. Cada semitom equivale a multiplicar a frequência pela raiz décima segunda de dois. A fórmula para obter a frequência de qualquer nota a partir de sua distância em semitons relativa ao Lá4 é:',
    },
    {
      type: 'code',
      code: 'f = Lá4 × 2^((n - 69) / 12)',
      ariaLabel: 'Fórmula para converter o número da nota MIDI em frequência em Hz',
    },
    {
      type: 'paragraph',
      html: 'Onde <em>n</em> é o número da nota MIDI (Lá4 = 69) e <em>Lá4</em> é a frequência de referência, geralmente 440 Hz. Inverter esta fórmula fornece a nota mais próxima de qualquer frequência inserida, bem como o desvio em cents.',
    },
    {
      type: 'title',
      text: 'Cents: a unidade de precisão para músicos e técnicos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um semitom é dividido em 100 cents. Esta unidade permite que qualquer desvio de afinação seja descrito com precisão decimal. Um desvio de 10 cents já é perceptível para um ouvido treinado; acima de 20 cents soa claramente desafinado para a maioria dos ouvintes.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Afinação perfeita',
          description:
            'Uma nota está perfeitamente afinada quando o desvio é inferior a 5 cents da frequência exata do temperamento igual.',
        },
        {
          title: 'Cents na DAW',
          description:
            'Samplers, sintetizadores e plugins de pitch-shifting usam cents para fine-tune, permitindo que os samples sejam ajustados à sua nota exata sem artefatos.',
        },
        {
          title: 'Limiar humano',
          description:
            'O limiar de percepção para notas desafinadas varia entre 5 e 15 cents, dependendo do instrumento, dinâmica e contexto harmônico.',
        },
      ],
    },
    {
      type: 'title',
      text: 'A referência Lá4: 440 Hz, 432 Hz e as guerras de afinação',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A frequência de referência Lá4 = 440 Hz foi padronizada internacionalmente em 1939 (ISO 16). No entanto, músicos barrocos trabalham tipicamente com referências de 415 Hz, e há uma comunidade crescente de produtores que preferem 432 Hz. Orquestras de elite, como a Filarmônica de Berlim, usam regularmente 443 Hz para um som mais brilhante e penetrante.',
    },
    {
      type: 'paragraph',
      html: 'Na produção musical, a referência importa ao misturar instrumentos acústicos gravados ao vivo com instrumentos virtuais. Se o piano gravado foi afinado em 442 Hz, mas o sintetizador está por padrão em 440 Hz, todos os samples precisarão ser corrigidos em cents.',
    },
    {
      type: 'tip',
      title: 'Truque de sampler profissional',
      html: 'Ao importar um sample para um sampler como o Kontakt ou Decent Sampler, insira a frequência do sample nesta calculadora. O valor em cents mostrado no medidor de afinação informa exatamente o valor de <em>fine-tune</em> a ser inserido no sampler para que a nota toque perfeitamente afinada.',
    },
    {
      type: 'title',
      text: 'Tabela de frequências de referência por oitava',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta tabela mostra as frequências exatas de cada nota Dó no temperamento igual com Lá4 = 440 Hz, útil para configurar osciladores de sintetizadores modulares ou verificar a extensão de um instrumento:',
    },
    {
      type: 'table',
      headers: ['Nota', 'Frequência (Hz)', 'Nota MIDI', 'Extensão típica do instrumento'],
      rows: [
        ['Dó0', '16.35', '12', 'Contrabaixo, pedal de órgão'],
        ['Dó1', '32.70', '24', 'Contrabaixo, baixo elétrico corda grave'],
        ['Dó2', '65.41', '36', 'Violoncelo, baixo elétrico'],
        ['Dó3', '130.81', '48', 'Viola, sax tenor, guitarra'],
        ['Dó4', '261.63', '60', 'Dó central, piano, voz de tenor'],
        ['Dó5', '523.25', '72', 'Flauta, violino, voz de soprano'],
        ['Dó6', '1046.50', '84', 'Piccolo, registros agudos do violino'],
        ['Dó7', '2093.00', '96', 'Harmônicos de flauta, sintetizador'],
        ['Dó8', '4186.01', '108', 'Teclado de 88 teclas, limite técnico'],
      ],
    },
    {
      type: 'title',
      text: 'Harmônicos e a oitava como uma relação 2:1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma das relações mais importantes na acústica musical é a oitava: dobrar a frequência produz a mesma nota uma oitava acima, e reduzi-la pela metade leva-a uma oitava abaixo. Esta relação 2:1 é a base dos harmônicos naturais de qualquer instrumento acústico.',
    },
    {
      type: 'paragraph',
      html: 'Na síntese, conhecer os harmônicos diretos de uma frequência é fundamental para evitar colisões espectrais entre osciladores em uma camada sonora. Esta calculadora sempre mostra a oitava superior e inferior de qualquer frequência inserida.',
    },
    {
      type: 'title',
      text: 'Casos de uso reais para músicos e produtores',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Afinação de osciladores analógicos: meça a frequência de saída e compare com a calculadora para saber em quantos cents deve ajustar o tuning grosso ou fino.',
        'Atribuição de samples a notas: um bumbo gravado em 55 Hz é um Lá1. Esta ferramenta informa exatamente onde mapeá-lo num sampler.',
        'Detecção de ressonâncias problemáticas: se uma sala ressoa a 80 Hz, a calculadora confirma que é um Mi2, orientando o uso do EQ para atenuá-la sem prejudicar o grave.',
        'Sincronização de subwoofers: verificar se vários subs reproduzem a mesma nota evita reforços ou cancelamentos por interferência.',
        'Afinação de sinos e percussão de altura definida: identifique a fundamental para integrá-los na tonalidade da peça.',
        'Design de filtros ressonantes: um filtro passa-faixa com alto Q em 349.23 Hz terá seu pico no Fá4, facilitando decisões de design harmônico.',
      ],
    },
    {
      type: 'title',
      text: 'O piano como uma referência visual imediata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O teclado do piano é o mapa visual mais intuitivo do espectro musical. Sua disposição de teclas brancas (naturais) e pretas (sustenidos/bemóis) permite reconhecer padrões de escalas, acordes e intervalos rapidamente. O piano interativo destaca a tecla correspondente a cada frequência, conectando o número à sua posição no teclado universal.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Precisão matemática: utiliza a fórmula de temperamento igual ISO 16.',
          con: 'Limitação: aplica-se apenas ao temperamento igual, não a afinações históricas como a mesotônica.',
        },
        {
          pro: 'Calibração livre: suporta referências Lá4 entre 400 e 480 Hz.',
          con: 'O tom senoidal não reproduz o timbre real do instrumento, apenas a frequência fundamental.',
        },
        {
          pro: 'Conversão bidirecional: Hz para nota e nota para Hz na mesma ferramenta.',
          con: 'O medidor de cents é relativo ao semitom mais próximo, não ao temperamento justo ou puro.',
        },
        {
          pro: 'Histórico de busca: permite a comparação rápida de vários timbres ou samples.',
          con: 'Frequências fora da faixa audível (20 Hz – 20 kHz) têm utilidade prática limitada.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Glossário essencial para usar esta ferramenta',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): ciclos por segundo. Mede a frequência de uma onda sonora.',
        'Nota MIDI: número inteiro de 0 a 127 que identifica cada nota no padrão MIDI. Lá4 = 69.',
        'Oitava científica: sistema de nomenclatura que anexa o número da oitava à nota (Lá4, Dó3).',
        'Cents: centésima parte de um semitom. Permite expressar desvios de afinação com precisão.',
        'Temperamento igual: sistema de afinação onde todos os semitons são iguais (proporção 2^(1/12)).',
        'Lá4: nota de referência. Padrão internacional: 440 Hz (ISO 16, 1975).',
        'Harmônico: frequências que são múltiplos inteiros da fundamental, produzidas naturalmente por instrumentos acústicos.',
        'Fine-tune: parâmetro de sintetizadores e samplers para ajustar a afinação em cents.',
      ],
    },
  ],
};
