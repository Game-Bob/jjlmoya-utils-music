import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'music-note-equivalency';
const title = '音名対応表：ラテン式・英米式・ドイツ式システム';
const description =
  'ラテン式（Do, Re, Mi）、英米式（C, D, E）、ドイツ式（H）の各システム間で音名を変換するインタラクティブ・ツール。ピアノ表示、オクターブ、周波数（Hz）も確認できます。';

const faqData = [
  {
    question: '英米式（アングロサクソン式）表記とは何ですか？',
    answer:
      'AからGまでのアルファベットを使用して音を表すシステムです。現代音楽やジャズにおける標準です。このシステムでは、A=La（ラ）、B=Si（シ）、C=Do（ド）、D=Re（レ）、E=Mi（ミ）、F=Fa（ファ）、G=Sol（ソ）となります。',
  },
  {
    question: 'なぜドイツではBがHと呼ばれるのですか？',
    answer:
      "中世における 'B-quadratum'（スクエアB）の表記の変化によるものです。ドイツ語圏では、HはナチュラルのB（シ）を指し、BはフラットのB（シ(flat)）のみを指すために使用されます。",
  },
  {
    question: '科学的ピッチ表記における「中央ハ」とは何ですか？',
    answer:
      '88鍵ピアノの中央にある「ド（C）」の鍵盤のことで、ANSI/国際標準ではC4と呼ばれます。音楽院などで広く使われているフランス・ベルギー式ではDo3と呼ばれます。',
  },
  {
    question: '2つの音が「異名同音（エンハーモニック）」であるとはどういう意味ですか？',
    answer:
      '名前は異なるが、同じ物理的な音を表し、ピアノの同じ鍵盤で演奏されることを意味します。例えば、Cシャープ（C#）とDフラット（Db）は異名同音です。',
  },
  {
    question: 'A4の標準周波数はいくつですか？',
    answer:
      '国際標準周波数は440 Hzです（ISO 16規格）。これは、オーケストラ、楽器、デジタルシンセサイザーを調律するための世界共通の基準です。',
  },
];

const howToData = [
  {
    name: 'オクターブを選択する',
    text: '画面上部の数字セレクターを使用して、作業したいピアノのオクターブを指定します（デフォルトは中央のオクターブ4です）。',
  },
  {
    name: 'ピアノの鍵盤を押す',
    text: 'インタラクティブ・ピアノの鍵盤をクリックまたはタップすると、その技術情報と名称が表示されます。',
  },
  {
    name: 'システムを比較する',
    text: '下部のパネルで、その音がラテン式、英米式、ドイツ式の各システムで同時に何と呼ばれているかを確認します。',
  },
  {
    name: '聴いて確認する',
    text: '「試聴」ボタンを押すと、選択した音の正確な周波数を聴いて音程を確認できます。',
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
    octaveLabel: '科学的ピッチ表記（C4 = 中央ハ）:',
    systemsTitle: '名称システム',
    systemLatino: 'ラテン式（階名）',
    systemAnglo: '英米式（現代）',
    systemGerman: 'ドイツ式（ドイツ語）',
    sciNotationTitle: '科学的表記',
    systemAnsi: '国際標準（ANSI）',
    systemFranco: 'フランス・ベルギー式',
    systemEnharmonic: '実用的な異名同音',
    techTitle: '技術データと波形',
    btnPlay: '試聴',
    btnCopy: '情報をコピー',
    initialTitle: 'ピアノの鍵盤を選択してください',
    copyDone: 'コピーしました',
    copyLabelNote: '音',
    copyLabelGerman: 'ドイツ式システム',
    copyLabelFreq: '周波数',
    copyLabelAnsi: '科学的オクターブ',
    copyLabelUrl: 'URL',
    naLabel: '該当なし',
  },
  seo: [
    {
      type: 'summary',
      title: '多言語対応 音名変換ツール',
      items: [
        '<strong>3つのシステムを同時表示</strong>：ラテン式、英米式、ドイツ式を一目で確認。',
        '<strong>インタラクティブ・ピアノ</strong>：鍵盤をクリックしてすべての対応関係を表示。',
        '<strong>正確な周波数</strong>：ISO 16規格に基づいた各音の周波数（Hz）を表示。',
        '<strong>異名同音</strong>：2つの名前を持つ音を自動的に識別。',
      ],
    },
    {
      type: 'title',
      text: '異なるシステム間での音名の対応を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音楽は世界共通の言語ですが、その記述方法や名称は地域や教育背景によって大きく異なります。ラテン諸国やヨーロッパの古典的な伝統ではラテン式（Do, Re, Mi...）が主流ですが、現代音楽やジャズ、英語圏ではアメリカ式の表記（C, D, E...）が標準化されています。さらに、ドイツの影響を受けた国々では、ナチュラルのBをHと呼び、BフラットをBと呼ぶという歴史的な特殊性があります。',
    },
    {
      type: 'title',
      text: '主要な3つの音名命名システム',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>ラテン式システム（階名）：</strong> イタリア、スペイン、フランス、および多くの中南米諸国で使用されています。グイード・ダレッツォによる聖ヨハネ讃歌に基づき、Do, Re, Mi, Fa, Sol, La, Siを使用します。',
        '<strong>アメリカ式表記（英米式）：</strong> ジャズ、ポップス、ロックの世界標準です。A=Laを起点にアルファベットの最初の7文字（A-G）を割り当てます。CがDoに相当します。',
        '<strong>ドイツ式システム：</strong> ドイツ、オーストリア、および北欧諸国で使用されています。最大の違いは、ナチュラルのBにHを使用し、BフラットにBを使用することです。',
      ],
    },
    {
      type: 'title',
      text: 'ドイツ式表記におけるBとHの不思議な歴史',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの初心者は、なぜドイツでは音のシをHと書くのか不思議に思います。その起源は中世の写本におけるミスにあります。古い文字システムでは、シの音にBという文字が使われていました。そこには2つのバリエーションがありました。<em>B quadratum</em>（四角いB、ナチュラルのシ用）と <em>B rotundum</em>（丸いB、フラットのシ用）です。',
    },
    {
      type: 'paragraph',
      html: '時を経て、ドイツの写本では <em>B quadratum</em> の形が小文字の h にどんどん似ていきました。この視覚的な変化が印刷技術によって固定され、現在のドイツ式名称（ナチュラルのシはH、フラットのシはB）が誕生しました。興味深いことに、この区別があったおかげで、J.S.バッハのような作曲家は有名な「B-A-C-H」の主題（シ(flat) - ラ - ド - シ(natural)）を使って自分の作品に署名することができました。',
    },
    {
      type: 'title',
      text: '幹音の対応比較表',
      level: 2,
    },
    {
      type: 'table',
      headers: ['音名（ラテン式）', '表記（英米式）', 'ドイツ語（ドイツ式）', '由来'],
      rows: [
        ['Do (ド)', 'C', 'C', '基底周波数'],
        ['Re (レ)', 'D', 'D', '第2音'],
        ['Mi (ミ)', 'E', 'E', '第3音'],
        ['Fa (ファ)', 'F', 'F', '第4音'],
        ['Sol (ソ)', 'G', 'G', '第5音'],
        ['La (ラ)', 'A', 'A', '調律の基準音'],
        ['Si (シ)', 'B', 'H', '大きな相違点'],
      ],
    },
    {
      type: 'title',
      text: 'シャープ、フラット、そして異名同音の概念',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '西洋音楽では、1オクターブにつき12の音を使用します。5つの追加の音は、変化記号であるシャープ（#）やフラット（(flat)）で表されます。シャープは音を半音上げ、フラットは半音下げます。',
    },
    {
      type: 'paragraph',
      html: 'これが<strong>異名同音（エンハーモニック）</strong>という考え方につながります。名前は違っても、音は全く同じでピアノの同じ鍵盤を共有する音のことです。例えば、C#とDbは異名同音です。当計算ツールはこれらの対応関係を自動的にハイライトします。これは、ある楽譜ではF#と書かれているのに、別の楽譜では同じ調性でGbと書かれている理由を理解する上で不可欠です。',
    },
    {
      type: 'title',
      text: 'オクターブ：科学的ピッチ表記 vs フランス・ベルギー式',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '国際的な科学的ピッチ表記（ANSI）：中央のドをC4と呼びます。シンセサイザー、DAW、音楽ソフトウェア（MIDI）の標準です。',
        'フランス・ベルギー式表記：クラシック音楽の音楽院で広く使われています。このシステムでは、中央のドはDo3です。',
        'ヘルムホルツ方式：大文字、小文字、プライム記号（C, c, c\', c\'\'）を使用します。古い技術文献やドイツの音響学でよく見られます。',
      ],
    },
    {
      type: 'tip',
      title: '制作者へのヒント',
      html: 'DAWにご注意ください：ヤマハなどのメーカーは中央のドをC3とみなしますが、ローランドやFL StudioなどはC4あるいはC5とみなす場合があります。シンセサイザーの音が1オクターブずれて聞こえる場合は、ソフトウェアがどの科学的表記基準に従っているかを確認してください。',
    },
    {
      type: 'title',
      text: 'ヘルツ（Hz）単位の周波数と標準調律',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '物理学的な観点から見ると、各音はヘルツ（1秒あたりの振動数）で測定される特定の周波数に対応しています。国際的な調律標準（ISO 16）では、<strong>A4</strong> は正確に <strong>440 Hz</strong> で振動すると定められています。',
    },
    {
      type: 'list',
      items: [
        '技術的なドリフトが生じる可能性があるアナログシンセサイザーの調整。',
        'ミキシングにおいて、特定の音の共鳴を除去するために精密なイコライザーを設定する。',
        '物理的なピッチと音楽的な知覚の関係を理解する。',
        'ピッチをセント単位で調整してサンプルを正確に変換する。',
      ],
    },
    {
      type: 'title',
      text: 'この計算ツールの実用的な活用事例',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '英語の楽譜を読まなければならないセッションミュージシャンのための、表記間の即時変換。',
          con: 'このシステムは微細な音律や非西洋の調律は考慮していません。',
        },
        {
          pro: '楽譜の音楽的な綴りを改善するための異名同音の特定。',
          con: '音声再生は純粋な波形であり、実際の楽器の音色（音のキャラクター）はありません。',
        },
        {
          pro: '和声学を学ぶ学生のための、科学的表記からフランス・ベルギー式へのオクターブ変換。',
          con: '標準的なA4=440Hzの調律のみを前提としており、バロック調律（415 Hz）などは想定していません。',
        },
        {
          pro: 'スケールやコードの学習を容易にする直感的なピアノ表示。',
          con: '各文脈でどの変化記号が最適かを判断するには、基礎的な理論知識が必要です。',
        },
      ],
    },
    {
      type: 'title',
      text: '技術用語集リファレンス',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '半音：西洋音楽システムにおける2つの音の間の最小距離（例：EからF）。',
        '全音：2つの半音に相当する距離（例：CからD）。',
        '記譜法：音やコードを表すための略記システム。',
        'ヘルツ（Hz）：音の周波数の測定単位。',
        'オクターブ：一方の周波数がもう一方の2倍である2つの音を隔てる間隔。',
        '調号：調性を定義するために五線譜の冒頭に置かれる変化記号のセット。',
      ],
    },
  ],
};
