import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'audio-storage-calculator';
const title = 'オーディオ・ストレージ・計算機: WAV、FLAC、MP3のファイルサイズ';
const description =
  'サンプリングレートとビット深度に基づいて、WAV、FLAC、MP3形式でのオーディオ録音に必要なディスク容量を推定します。';

const faqData = [
  {
    question: '44.1 kHz 16ビットのオーディオ1時間はどのくらいの容量になりますか？',
    answer:
      'ステレオ（CD品質）の場合、1時間のオーディオは非圧縮（WAV/AIFF）で約635 MBのディスク容量を占有します。',
  },
  {
    question: 'なぜWAV形式はそれほど多くの容量を占有するのですか？',
    answer:
      'WAVは非圧縮の「ロスレス」形式であり、データ量を削減することなく、最高の忠実度を維持するためにすべてのオーディオサンプルを個別に保存するためです。',
  },
  {
    question: '容量を節約するには、FLACとMP3のどちらが良いですか？',
    answer:
      'FLACは品質を落とさずに最大50%の容量を節約できます（ロスレス圧縮）。MP3は最大80-90%節約できますが、知覚できないオーディオ情報を削除します（不完全圧縮）。',
  },
  {
    question: '2時間のポッドキャストに必要な容量を計算するにはどうすればよいですか？',
    answer:
      '48 kHz / 24ビットのモノラルで録音する場合、約988 MB必要になります。この計算機を使用すると、機材に合わせてこれらのパラメーターを正確に調整できます。',
  },
];

const howToData = [
  {
    name: 'オーディオの設定',
    text: 'サンプリングレート (kHz)、ビット深度、チャンネル数を選択します。',
  },
  {
    name: '録音時間を入力',
    text: '録音予定の時間を、時、分、秒で入力します。',
  },
  {
    name: '結果を分析',
    text: '算出されたサイズ（MBまたはGB）を確認し、FLACやMP3などの異なる形式と比較します。',
  },
  {
    name: '容量を評価',
    text: 'その録音がSDカードやハードドライブの容量の何パーセントを占めるかを確認します。',
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
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    {
      name: 'ビット深度 (音響) – Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%83%E3%83%88%E6%B3%AA%E5%BA%A6_(%E9%9F%B3%E9%9F%BF)',
    },
    {
      name: 'サンプリング周波数 – Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AA%E3%83%B3%E3%82%B0%E5%91%A8%E6%B3%A2%E6%95%B0',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'オーディオ設定',
    labelHz: 'サンプリングレート (kHz)',
    labelBits: 'ビット深度',
    labelChannels: 'チャンネル数',
    labelDuration: '録音時間',
    labelHours: '時間',
    labelMinutes: '分',
    labelSeconds: '秒',
    labelCapacity: '使用可能なストレージ (GB)',
    toggleLabelSpace: '空き容量で録音可能な時間を計算する',
    labelComparison: '形式とストレージの比較',
    thFormat: '形式',
    thQuality: '品質',
    thSize: '推定サイズ',
    qualityWav: '非圧縮 (ロスレス)',
    qualityFlac: 'ロスレス圧縮',
    qualityMp3High: '高品質 (不完全圧縮)',
    qualityMp3Std: '標準品質 / 音声',
    labelDevices: '一般的なデバイスでの使用率',
    device32: '32GB SDカード',
    device128: '128GB ストレージ',
    device1tb: '1TB ハードドライブ',
    btnCopy: '概要をコピー',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (ビデオ標準)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (ハイレゾ)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16ビット (CD / 標準)',
    optBits24: '24ビット (プロデューサー / 映画)',
    optBits32: '32ビット (浮動小数点)',
    optCh1: 'モノラル (1ch)',
    optCh2: 'ステレオ (2ch)',
    optCh6: '5.1サラウンド (6ch)',
    optCh8: '7.1サラウンド (8ch)',
    labelDurationSet: '設定された時間: {time}',
    labelRecordingPossible: '{gb} GBの設定で録音可能です',
    toggleLabelTime: '時間計算に戻る',
    labelSpaceAvailable: '空き容量',
    copyDone: '概要をコピーしました',
    summarySpace:
      '{channels}モード、{bits}ビット/{hz}での{t}の録音は、約{result}を占有します。',
    summaryTime:
      '{space} GBの空き容量がある場合、{bits}ビット/{hz}の{channels}で最大{result}まで録音可能です。',
  },
  seo: [
    {
      type: 'summary',
      title: 'デジタルサウンド・ストレージ・計算機',
      items: [
        '<strong>WAVからMP3へ</strong>: 圧縮あり・なしのファイルサイズを計算。',
        '<strong>オーディオ解像度</strong>: 周波数 (kHz) とビット (16/24/32) を調整。',
        '<strong>逆算機能</strong>: 残りの容量でどのくらい録音できるか。',
        '<strong>プロ用形式</strong>: FLACや192kHzマスタリングの推定値を算出。',
      ],
    },
    { type: 'title', text: 'オーディオ録音のサイズはどのように計算されますか？', level: 2 },
    {
      type: 'paragraph',
      html: '非圧縮のデジタルオーディオファイル（WAVやAIFFなど）のサイズは、3つの基本的な技術的要因によって決まります。まずは<strong>サンプリングレート</strong>（音波を1秒間に何回「測定」するか、例: 44.1 kHzや48 kHz）、次に<strong>ビット深度</strong>（各測定の解像度。ビットが高いほどダイナミックレンジが広がり、ノイズが低減します）、そして<strong>チャンネル数</strong>（モノラル(1)、ステレオ(2)、またはマルチチャンネル(サラウンド)）です。標準的な数学的公式は<strong>ビットレート</strong>で、これに秒単位の時間を掛けることで、未加工の総ファイルサイズが算出されます。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD品質',
          description:
            '16ビット / 44.1 kHz。ステレオで1分あたり約10.1 MB。音楽業界の歴史的な標準規格。',
        },
        {
          title: 'プロ用録音',
          description:
            '24ビット / 48 kHz。ビデオや映画の標準。1分あたり約16.5 MB。ミキシング時のヘッドルームが広がります。',
        },
        {
          title: 'ハイレゾリューション',
          description:
            '24ビット / 96 kHz。マスタリングで使用。標準的な録音サイズの2倍、1分あたり最大33 MBに達します。',
        },
      ],
    },
    { type: 'title', text: 'なぜ24ビットオーディオは16ビットより50%も容量が多いのですか？', level: 2 },
    {
      type: 'paragraph',
      html: '16ビットの各オーディオサンプルは、振幅を保存するために2バイト (16 ÷ 8) を使用します。24ビットのオーディオはサンプルあたり3バイトを使用します。これは、同じサンプリングレートであれば、24ビットのファイルは16ビットのファイルよりも正確に50%大きくなることを意味します。もし16ビット/44.1kHzでの1時間の録音が635 MBであれば、同じ24ビット/44.1kHzでの録音は953 MBまで増加します。',
    },
    {
      type: 'tip',
      title: '追加の容量を費やす価値はありますか？',
      html: 'より多くの容量を占有しますが、24ビットオーディオは16ビットの96 dBに対して144 dBのダイナミックレンジを提供します。これにより「ノイズフロア」が大幅に低減され、バックグラウンドノイズを気にすることなく微弱な信号を録音できるようになります。これはプロフェッショナルなミキシングやマスタリングにおいて不可欠です。',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: ディスクへの影響', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong>は非圧縮形式で、元の録音のすべてのビットを保持しますが、最も重くなります。<strong>FLAC</strong>はロスレス圧縮を適用し、品質を犠牲にすることなく元のサイズを40〜60%削減します。<strong>MP3 / AAC</strong>は不完全圧縮を適用し、知覚できない周波数を削除します。320 kbpsのMP3は、元のWAVの約22%の容量になります。',
    },
    {
      type: 'table',
      headers: ['品質', '周波数', 'ビット数', '1分あたりのMB (ステレオ)'],
      rows: [
        ['電話通話', '8 kHz', '8ビット', '0.94 MB'],
        ['FMラジオ', '32 kHz', '16ビット', '7.32 MB'],
        ['オリジナルCD', '44.1 kHz', '16ビット', '10.09 MB'],
        ['ビデオスタジオ', '48 kHz', '24ビット', '16.48 MB'],
        ['ハイファイ', '96 kHz', '24ビット', '32.96 MB'],
      ],
    },
    { type: 'title', text: '技術者向けの計算式', level: 2 },
    {
      type: 'paragraph',
      html: '手動で計算を行う場合や、独自のソフトウェアに実装する必要がある場合、当計算機が採用しているロジックは以下の通りです。',
    },
    {
      type: 'code',
      ariaLabel: 'オーディオストレージの計算ロジック',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'このツールの使用例', level: 2 },
    {
      type: 'list',
      items: [
        'ポッドキャスティング: 長いインタビュー中にポータブルレコーダーの容量が不足するのを防ぐ。',
        '音楽スタジオ: 96kHzで40トラックのセッションを開始する前に、何GBの空き容量が必要か計算する。',
        'デジタルサウンドエンジニアリング: 転送ビットレートがハードウェアと互換性があるか確認する。',
        '映画ポストプロダクション: ネットワークファイル納品用に、5.1マルチチャンネルテイクのサイズを推定する。',
        'アーカイブ作成: アナログテープのコレクションをマスター品質でデジタル化するのに必要な容量を決定する。',
      ],
    },
  ],
};
