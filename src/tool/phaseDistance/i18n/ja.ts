import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'phase-distance-calculator';
const title = 'マイク位相距離計算機';
const description =
  'マイクを整列させるために必要な遅延時間と補正値を計算します。サンプル精度の高い調整と温度補正により、位相の打ち消し合いとコームフィルタリングを防ぎます。';

const faqData = [
  {
    question: 'オーディオにおける位相の打ち消し合い（フェイズ・キャンセレーション）とは何ですか？',
    answer:
      '同一の音源からの2つの信号が異なる時間に到達したときに発生する音響現象です。波が互いに干渉し、180度ずれると完全に打ち消し合い、音が細く、存在感のないものになります。',
  },
  {
    question: 'なぜ温度が計算に影響するのですか？',
    answer:
      '音は空気を伝わり、空気の密度は温度によって変化するためです。気温が高いほど音速は速くなります。正確に温度を調整することで、離れたマイク間の正確な遅延時間を計算できます。',
  },
  {
    question: '位相反転（フェイズ・インバート）と極性反転（ポラリティ・インバート）は同じですか？',
    answer:
      '技術的には異なりますが、しばしば混同して使用されます。極性は電気的な変化（180度回転）ですが、位相は時間的なズレです。当ツールでは、音響的な一貫性が最も高いポイントを見つけるために、両方のシミュレーションを行えます。',
  },
  {
    question: 'コームフィルタリング（櫛形フィルタ効果）とは何ですか？',
    answer:
      '信号と、それを遅延させた信号が合成されたときに生じる周波数特性です。櫛の歯のように規則的な山と谷が形成され、楽器の音色を大きく変化させます。',
  },
  {
    question: 'マイク技術における3:1ルールとは何ですか？',
    answer:
      '位相問題を最小限に抑えるための技術です。複数の異なる音源に2つのマイクを使用する場合、マイク間の距離は、各マイクと音源との距離の少なくとも3倍以上離す必要があります。',
  },
  {
    question: 'マイクの整列は物理的に行うべきですか、それともソフトウェアで行うべきですか？',
    answer:
      '録音時の物理的な位置調整がノイズや不自然さを避けるために常に推奨されます。しかし、DAWにおけるデジタルディレイは、手作業でマイクを動かすだけでは不可能な、サンプル単位の非常に精密な調整を可能にします。',
  },
];

const howToData = [
  {
    name: '距離の測定',
    text: '音源（例：スネアドラム）から使用する各マイクまでの物理的な距離を測定します。',
  },
  {
    name: '環境の設定',
    text: '実際の物理法則に基づいた計算結果を得るために、室温とプロジェクトのサンプリングレートを入力します。',
  },
  {
    name: 'グラフの分析',
    text: '周波数特性ビジュアライザーを見て、可聴領域で発生する可能性のある深刻な打ち消し合いを確認します。',
  },
  {
    name: '補正の適用',
    text: 'ミリ秒またはサンプル数をコピーして、DAWのディレイプラグインに適用し、トラックを完全に整列させます。',
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: '温度 (°C) / 音',
    btnAuto: '自動',
    labelSampleRate: 'サンプリングレート (kHz)',
    labelUnits: '単位系',
    optMetric: 'メートル法 (m/cm)',
    optImperial: 'ヤード・ポンド法 (ft/in)',
    labelDistA: 'マイクA距離',
    labelDistB: 'マイクB距離',
    labelPresets: 'クイックプリセット',
    presetCoincident: 'ワンポイントマイク (XY)',
    presetSnare: 'スネア',
    presetAmbient: 'アンビエント',
    btnInvert: '位相を反転 (Φ)',
    labelGain: 'マイクBの相対ゲイン:',
    btnCopy: 'サンプルをコピー',
    labelDelay: '必要な遅延',
    unitMs: 'ミリ秒 (ms)',
    labelCompensation: '補正',
    unitSamples: 'サンプル',
    labelPhaseStatus: '位相ステータス',
    textLoading: '読み込み中...',
    statusInPhase: '同相 (イン・フェイズ)',
    statusInPhaseDesc: '信号が完璧に整列しています。',
    statusCritical: '致命的な打ち消し合い',
    statusCriticalDesc: '低・中音域で重大なコームフィルタリングが発生しています。',
    statusOffAxis: '軸外 (オフアクシス)',
    statusOffAxisDesc: 'わずかな位相のズレ。音の質感が変わります。',
    warningCritical: '(!) 致命的な打ち消し合いの可能性あり',
    labelSoundSpeed: '音速',
    labelDistDiff: '距離の差',
    labelNullFreq: '最初のディップ周波数',
    textNone: 'なし',
    chartTitle: '周波数特性 (H) - コームフィルタリング',
    promptSoundSpeed: '音速 (m/s):',
    copyFeedback: 'コピー完了！',
  },
  seo: [
    {
      type: 'summary',
      title: '計算機の機能',
      items: [
        '音速の温度補正を考慮した正確な物理的計算',
        'DAW補正用のミリ秒およびサンプル単位の出力',
        '可聴全域のコームフィルタリング効果を示すキャンバスビジュアライザー',
        'マイクプリセット（XY、スネア、アンビエント）',
        '位相反転シミュレーションと相対ゲイン調整',
        'メートル法およびヤード・ポンド法への対応',
      ],
    },
    {
      type: 'title',
      text: '位相の打ち消し合いとは何ですか？なぜミックスが台無しになるのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音響エンジニアリングの世界において、位相は最も重要な概念の一つであり、同時に初心者が見落としがちな要素です。ドラムセットやギターアンプなどの音源を、異なる距離に配置された複数のマイクで録音する場合、音波は同時にマイクカプセルに到達しません。このわずかな時間差が、<strong>位相のズレ</strong>（フェイズシフト）と呼ばれる現象を引き起こします。',
    },
    {
      type: 'title',
      text: 'コームフィルタリング現象',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '同一の信号にわずかな遅延を加えて合成すると、周波数特性に山と谷ができます。スペクトラムアナライザーで観察すると、櫛（コーム）の歯のように見えるため、コームフィルタリングと呼ばれます。この効果は、楽器が持つ本来の自然な音色を損なう原因になります。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '低音域への影響',
          description:
            '位相の打ち消し合いは低音域で最も顕著に現れ、音の太さや芯が完全に失われます。',
        },
        {
          title: '金属的な質感',
          description:
            'コームフィルタリングは、芯のない「スカスカ」した処理の強すぎる不自然な着色を加えます。',
        },
      ],
    },
    {
      type: 'title',
      text: '計算に与える温度の影響',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの音響エンジニアは、空気が物理的な媒体であり、その密度が温度によって変化することを忘れています。音速は一定ではなく、20°Cでは毎秒約343メートルになります。',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: '温度に基づく音速の計算公式',
    },
    {
      type: 'tip',
      title: '精密な補正',
      html: 'わずか数度の温度差で、打ち消される周波数が数ヘルツずれることがあります。スタジオの実際の温度を計算機に入力することで、DAWで完璧な整列を行えます。',
    },
    {
      type: 'title',
      text: '重要な録音シナリオ',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'スネアドラム（トップ＆ボトム）：両方のヘッドの時間軸を揃え、アタックと低音의パンチを最大化します。',
        'オーバーヘッドとスポットマイク：オーバーヘッドの位相に合わせてスポットマイクを遅延させます。',
        'マルチマイクを使用したギター：低中音域を失うことなく、ダイナミックマイクとリボンマイクをブレンドします。',
        'ベースのDIとアンプ：ダイレクト音とマンプ音を同期させ、太いベースサウンドを実現します。',
      ],
    },
    {
      type: 'title',
      text: '物理的整列 vs デジタル処理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールは録音後にDAWで位相を補正するための数値を提供しますが、録音時にスタジオで可能な限り物理的な整列を試みることを常にお勧めします。マイクを数ミリメートル動かすだけで、あらゆるデジタル処理以上に効果的な結果を得られます。',
    },
    {
      type: 'stats',
      items: [
        { label: '20°Cでの音速', value: '343.2 m/s' },
        { label: '1cmあたりの時間', value: '0.029 ms' },
        { label: '48kHzでのサンプル', value: '1cmあたり1.4サンプル' },
      ],
    },
    {
      type: 'title',
      text: '参照テーブル: 距離 vs 最初のディップ',
      level: 2,
    },
    {
      type: 'table',
      headers: ['距離の差 (cm)', '遅延時間 (ms)', '最初の谷 (Hz)', '影響を受ける帯域'],
      rows: [
        ['1 cm', '0.029', '17160', '超高音域'],
        ['5 cm', '0.146', '3432', '中高音域（プレゼンス）'],
        ['10 cm', '0.291', '1716', '中音域（プレゼンス）'],
        ['30 cm', '0.874', '572', '中低音域（ボディ）'],
        ['1 m', '2.914', '172', '低音域（基音）'],
      ],
    },
    {
      type: 'title',
      text: '補正方法のメリットとデメリット',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '物理的な整列：オリジナル信号の音質劣化が少ない。',
          con: '物理的な整列：ミリメートル単位の精密な調整が難しい。',
        },
        {
          pro: 'デジタル補正：サンプル単位での絶対的な精度。',
          con: 'デジタル補正：誤って適用するとプリエコーが発生する可能性がある。',
        },
        {
          pro: '極性反転：180度のズレに対する即時の解決策。',
          con: '極性反転：中間的な位相のズレは解決できない。',
        },
        {
          pro: '時間補正：失われたパンチやアタック感を回復。',
          con: '時間補正：各マイクの距離を精密に測定する必要がある。',
        },
      ],
    },
    {
      type: 'tip',
      title: '耳で位相問題を聞き分ける方法',
      html: '「位相を反転」ボタン（Φ）を押します。有効にしたときに音が太くなり、低音域が豊かになれば、元々のマイク位置が位相ズレを起こしていたことを意味します。音が「消え」たり細くなったりする場合は、適切に整列されています。',
    },
    {
      type: 'title',
      text: 'モノラル互換性とステレオ定位',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ステレオ録音において、位相関係は音像の安定性を定義します。重大な不一致がある場合、ミックスがモノラルシステムで再生されたときに完全に音が消えてしまう可能性があります。当社の計算機は、チャンネルが統合されたときにどの周波数が最も深刻な影響を受けるかを予測するのに役立ちます。',
    },
  ],
};
