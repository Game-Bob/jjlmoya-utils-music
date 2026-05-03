import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-to-ms-calculator';
const title = 'ディレイとリバーブのためのBPM・ミリ秒計算機';
const description =
  'プロジェクトのテンポ（BPM）を正確なディレイタイム（ms）と周波数（Hz）に変換します。ディレイ、リバーブ、コンプレッサーをリズムに合わせて精密に設定するための必須ツールです。';

const faqData = [
  {
    question: 'リバーブにおけるプリディレイ（Pre-delay）とは何ですか？',
    answer:
      'プリディレイは、直接音（音源）とリバーブテイル（残響）の開始までの時間のことです。これをリズムに合わせて設定することで、空間エフェクトが広がる前に元の音源の明瞭さを保つことができます。ボーカルやパーカッションにおいて非常に重要です。',
  },
  {
    question: 'タップテンポ（Tap Tempo）はどのように機能しますか？',
    answer:
      'タップテンポは、曲に合わせてリズムよくボタンをクリックすることでテンポを検出します。各クリックの間隔を計測し、その平均値から正確なBPMを算出します。外部トラックにエフェクトを同期させるための最も速い方法です。',
  },
  {
    question: 'なぜ自動同期ではなくミリ秒を使用するのですか？',
    answer:
      '主に3つの理由があります。MIDI非対応のアナログ機材を使用する場合、リバーブが「呼吸」するようにプリディレイを微調整する場合、そして「グルーヴ」を出すためにあえてグリッドからわずかにずらしてロボットのような静的な感じを避ける場合です。',
  },
  {
    question: 'リズムに対応したHz（ヘルツ）値は何に使用されますか？',
    answer:
      'ヘルツ値は、1秒間に何かが起こる回数を示します。テンポ同期機能のないシンセサイザーで、LFOオシレーター、フェイザーのスイープ速度、またはフィルター・モジュレーションを設定する際に不可欠です。',
  },
];

const howToData = [
  {
    name: 'BPMを入力',
    text: '中央のフィールドにプロジェクトのテンポを入力するか、タップテンポボタンを使用します。',
  },
  {
    name: '音符を選択',
    text: '通常の音符、付点音符、または三連符の表から、必要な音符（4分、8分など）を見つけます。',
  },
  {
    name: '値をコピー',
    text: 'ミリ秒値の横にあるコピーアイコンをクリックして、プラグインや機材に直接貼り付けます。',
  },
  {
    name: 'プリディレイを設定',
    text: '下部のセクションを使用して、リバーブとリードボーカルを分離するのに理想的な、非常に短い値を設定します。',
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

export const content: ToolLocaleContent<BpmCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'テンポ (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'ディレイタイム',
    sectionDotted: '付点音符',
    sectionTriplets: '三連符',
    sectionReverb: 'リバーブ・デザイン（プリディレイ）',
    colNote: '音符',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>プリディレイ</strong>は、明瞭さを得るために元の音のアタックとリバーブテイルを分離します。',
    copyAriaMs: 'ミリ秒をコピー',
    copyAriaPreDelay: 'プリディレイをコピー',
    copyFeedback: 'コピーしました！',
  },
  seo: [
    {
      type: 'summary',
      title: '計算機の特徴',
      items: [
        '通常の音符、付点音符、三連符を瞬時に計算',
        'すべてのリズム分割に対応するミリ秒とHzの値',
        '音楽的に正確なリバーブ設計のためのプリディレイ・セクション',
        'タップテンポ：音楽に合わせてタップすることでBPMを検出',
        'あらゆるDAWやプラグインに対応したワンクリックのクリップボードコピー',
      ],
    },
    {
      type: 'title',
      text: 'なぜBPM・ミリ秒計算機が不可欠なのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '現代の音楽制作において、リズムの精密さはアマチュアのミックスとプロのミックスを分ける要素です。Ableton Live、FL Studio、Logic ProなどのほとんどのDAWにはエフェクトの自動同期が含まれていますが、手動での調整が優れている状況は数多くあります。',
    },
    {
      type: 'title',
      text: 'リバーブにおけるプリディレイの重要性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールの最も重要な用途の一つは、<strong>プリディレイ</strong>の調整です。プリディレイなしでボーカルにリバーブをかけると、エフェクトの残響がすぐに始まり、子音がぼやけて明瞭さが失われます。リズムに合わせたプリディレイ（1/64音符や1/128音符など）を計算することで、人工的な音響空間が広がる前に元の声に「呼吸」する余裕を与えます。これにより、音源の存在感を損なうことなく、奥行き感を作り出すことができます。',
    },
    {
      type: 'title',
      text: 'アナログディレイと外部ハードウェア',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'アナログディレイペダルやヴィンテージ・シンセサイザーのコレクターなら、多くの機材にMIDIクロック入力がないことをご存知でしょう。テープディレイを手動で設定するには、8分音符や付点4分音符が正確に何ミリ秒に相当するかを知る必要があります。当計算機はそれらの値を瞬時に表示し、ハードウェアを外科的な精度で設定することを可能にします。',
    },
    {
      type: 'title',
      text: 'グリッド外のエフェクトとグルーヴ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '完璧な数学的正確さは、時として退屈に聞こえることがあります。多くのプロデューサーはミリ秒値を起点とし、そこからわずかに値をずらします。ディレイをグリッドから5〜10msずらすことで、機械的なクオンタイズでは決して再現できない人間味のある<em>スイング</em>や独特の<em>グルーヴ</em>を生み出すことができます。',
    },
    {
      type: 'title',
      text: '同期したコンプレッションとLFO',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'コンプレッサーの<strong>アタック（Attack）</strong>と<strong>リリース（Release）</strong>タイムもリズムに対応させることができることをご存知ですか？ドラムバス・コンプレッサーのリリースタイムを次のキックのアタック直前に終わるように設定することで、曲のリズムを強調する「パンピング」や<em>呼吸</em>のような効果を生み出します。同様に、Hz値はテンポ同期のないシンセでLFOを構成する際にも不可欠です。',
    },
    {
      type: 'tip',
      title: 'タップテンポの使い方',
      html: '<strong>タップテンポ</strong>機能は、ライブパフォーマンス中や、テンポのわからない外部トラックを聴いている時に最適です。曲のリズムに合わせてボタンを叩くだけです。アルゴリズムが値をより正確に平均化できるよう、少なくとも4〜5回タップすることをお勧めします。',
    },
    {
      type: 'title',
      text: 'テンポ計算の公式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '基礎となる公式は単純です： <code>ms = 60,000 / BPM</code>。ここから各音符の分割に応じて倍率を適用します。',
    },
    {
      type: 'list',
      items: [
        '通常の音符：2進法（1、0.5、0.25など）に基づく。',
        '付点音符：基本の値を1.5倍する。',
        '三連符：基本の値を0.667（2/3）倍する。',
      ],
    },
  ],
};
