import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronome';
const title = 'オンライン・メトロノーム：高精度な視覚と音声';
const description =
  'ミュージシャンのための無料オンライン・メトロノーム。Web Audio APIによるミリ秒単位の精度。視覚、音声、タップテンポ機能を搭載。楽器の練習に最適です。';

const faqData = [
  {
    question: 'このメトロノームはプロの使用に耐えるほど正確ですか？',
    answer:
      'はい。デバイスのハードウェアクロックで直接サウンドをスケジュールするWeb Audio APIを使用しています。これにより、他のウェブアプリケーションで見られるような微小な遅延を回避し、長時間のセッションでもミリ秒単位の精度を保証します。',
  },
  {
    question: 'タップテンポとは何ですか？どのように使いますか？',
    answer:
      'リズムに合わせてタップすることでBPMを計算する機能です。「TAP」ボタンをクリックするか、聴いている音楽の拍子に合わせてスペースキーを押すだけで、即座に正確なテンポを取得できます。',
  },
  {
    question: '拍子やアクセントを変更できますか？',
    answer:
      'はい。2/4、3/4、4/4、6/8など、さまざまな拍子を設定したり、練習している音楽のスタイルに合わせて拍のアクセントをカスタマイズしたりできます。',
  },
  {
    question: 'iPhoneやiPadで音が聞こえないのはなぜですか？',
    answer:
      'iOSデバイスでは、Web Audioテクノロジーは物理的な消音スイッチ（マナーモード）の設定を尊重します。電話が消音モードになっていないことを確認し、メディアの音量を上げてクリック音を確認してください。',
  },
];

const howToData = [
  {
    name: 'BPMを設定する',
    text: 'スライダーまたは微調整ボタンを使用して、1分あたりの拍数（BPM）を希望の速度に設定します。',
  },
  {
    name: '拍子を構成する',
    text: 'メトロノームが各小節の最初の拍を正しく強調するように、拍数（例：4/4または3/4）を選択します。',
  },
  {
    name: '外部の音楽と同期させる（タップ）',
    text: '聴いている曲のテンポを知る必要がある場合は、ドラムやメインのパルスに合わせてTAPボタンをタップします。',
  },
  {
    name: '練習を始める',
    text: 'スタートボタンを押します。視覚的なインジケーターにより、周囲の音でクリック音がはっきりと聞こえない場合でもリズムを維持できます。',
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
    labelTempo: 'テンポ',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: '拍子',
    labelTap: 'タップテンポ',
    btnTap: 'TAP',
    warningTitle: '音が聞こえませんか？',
    warningText:
      'iPhone/iPadをご使用の場合は、本体横の消音スイッチ（マナーモード）がオンになっていないか確認してください。Web Audioテクノロジーは、多くのデバイスでシステムの消音モードの設定に従います。',
  },
  seo: [
    {
      type: 'summary',
      title: 'メトロノームの特徴',
      items: [
        'Web Audio APIエンジン — ミリ秒単位の精度でズレがありません',
        'タップテンポ機能：拍をタップすることでBPMを計算',
        '1から12拍まで設定可能な拍子と自動アクセント機能',
        '波紋（リップル）エフェクト付きの高コントラストな視覚インジケーター',
        '音量コントロールと±1/±5 BPMの微調整ボタン',
      ],
    },
    {
      type: 'title',
      text: 'ブラウザで体験する究極のリズム精度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>決定版オンライン・メトロノーム</strong>へようこそ。私たちは、<em>信頼性</em>という一つの目標を掲げてこのツールを構築しました。プロセッサの負荷によって「ドリフト」（微小な遅延の累積）が発生しやすい他のウェブ・メトロノームとは異なり、私たちのサウンドエンジンは<strong>Web Audio API</strong>上に直接構築されています。',
    },
    {
      type: 'paragraph',
      html: 'これは、サウンドパルスがデバイスのハードウェアクロックに事前にスケジュールされることを意味します。これにより、タブを最小化したりコンピュータが他の作業で忙しかったりしても、<strong>揺るぎないミリ秒単位の精度</strong>が保証されます。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'クリアな視覚化',
          description:
            '「波紋」エフェクトを伴う高コントラストで大きな視覚的インジケーター。周辺視野で認識できるように設計されているため、リズムを崩すことなく、楽譜や楽器に目を向けたまま練習を続けることができます。',
        },
        {
          title: 'スマート・タップテンポ',
          description:
            '聴いている曲の速度を知りたいですか？音楽に合わせて「TAP」ボタンまたはスペースキーを叩いてください。アルゴリズムがあなたのタップの正確な平均値を計算します。',
        },
      ],
    },
    {
      type: 'title',
      text: 'マスターガイド：メトロノームを使った練習法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'メトロノームは単に時を刻む時計ではありません。あなたのテクニックを最も公平に判断する審判です。ここでは、スピードと正確さを向上させるための実証済みの方法を紹介します。',
    },
    {
      type: 'title',
      text: '1. ラダー（はしご）メソッド',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '目標が <strong>120 BPM</strong> で演奏することであれば、最初からその速度で挑戦しないでください。挫折しやすくなります。上達には戦略が必要です。',
    },
    {
      type: 'list',
      items: [
        '目標速度の50%（例：60 BPM）から始めます。',
        'そのフレーズを連続して3回、完璧に演奏します。1音でも間違えたら、カウントはリセットされます。',
        'メトロノームを5 BPMだけ上げます。',
        '目標速度に達するまでこれを繰り返します。',
      ],
    },
    {
      type: 'title',
      text: '2. アクセントの移動',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '拍子セレクターを使用してアクセントを移動させます。4/4拍子のフレーズを3/4拍子に設定したメトロノームで練習すると、アクセント（鋭いクリック音）がフレーズの異なる位置に来るため、「1拍目」に頼るのではなく、絶対的な時間を内面化することを強制されます。',
    },
    {
      type: 'title',
      text: '3. 戦略的なサイレンス',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '高度なテクニックとして、メトロノームを半分の速度（例：120で弾くなら60 BPM）に設定し、各クリックを1拍目と3拍目として感じます。さらに難しいのは、それを裏拍（オフビート）としてのみ感じることです。これにより、あなたの<strong>体内時計</strong>が鍛えられます。',
    },
    {
      type: 'title',
      text: 'テンポに関する興味深い事実',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'テンポは、音楽の感情的な認識を劇的に変化させます。',
    },
    {
      type: 'table',
      headers: ['イタリア語の用語', '目安のBPM', '性格'],
      rows: [
        ['Largo（ラルゴ）', '40 – 60', '緩やかに、荘厳に'],
        ['Andante（アンダンテ）', '76 – 108', '歩くような速さで、穏やかに'],
        ['Allegro（アレグロ）', '120 – 156', '速く、明るく楽しく'],
        ['Presto（プレスト）', '168 – 200', '非常に速く、急速に'],
      ],
    },
    {
      type: 'title',
      text: 'このメトロノームを支える技術',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'これは単なるMP3のループ再生ではありません。私たちはリアルタイムで純粋な正弦波を生成しています。メイン・オシレーターは、アクセントには <strong>1000 Hz</strong>、弱拍には <strong>800 Hz</strong> のトーンを作成し、最大のパンチ力を得るために超短時間のADSRエンベロープを適用しています。これにより、瞬時のサウンドアタックが保証されます。',
    },
    {
      type: 'paragraph',
      html: 'グルーヴを刻むドラマー、音階に取り組むピアニスト、ソロを完成させるギタリスト。あなたが誰であれ、このメトロノームはあなたの静かなパートナーとなります（再生ボタンを押すまでは）。',
    },
    {
      type: 'tip',
      title: 'モバイルで音が聞こえませんか？',
      html: 'iPhone/iPadをご使用の場合は、<strong>本体横の消音スイッチ</strong>がオンになっていないか確認してください。Web Audioテクノロジーは、多くのデバイスでシステムの消音モードの設定に従います。',
    },
  ],
};
