import { createGuitarStringTensionContent } from './content-factory';

const title = 'ギター弦張力計算機';
const slug = 'guitar-string-tension-calculator';
const description = '弦の太さ、スケール長、チューニングからギターの各弦の張力を推定します。メートル法またはヤード・ポンド法で弦セット全体をオフライン比較できます。';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'メートル法', imperial: 'ヤード・ポンド法', metricLength: 'スケール長 mm', imperialLength: 'スケール長 インチ', metricGauge: 'ゲージ mm', imperialGauge: 'ゲージ mil', metricTension: 'kgf', imperialTension: '重量ポンド', chooseSet: '弦セットを選択', scaleLength: 'スケール長', tuning: 'チューニング', material: '弦の材質', customSet: 'ゲージを編集', presetHint: '近いセットから始める', gauge: 'ゲージ', note: '音名', frequency: '周波数', tension: '張力', status: '弾き心地', totalTension: 'ネックへの合計荷重', averageTension: '1本あたりの平均', tensionSpread: '最も弱い弦と強い弦の差', low: '弱い', balanced: '均衡', high: '強い', standard: '標準 E', halfStepDown: '半音下げ', dropD: 'Drop D', wholeStepDown: '全音下げ', openG: 'Open G', steel: 'スチール', nickel: 'ニッケルメッキスチール', phosphorBronze: 'フォスファーブロンズ', nylon: 'ナイロン', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'ゲージを編集', shortScale: 'ショートスケール 24.75インチ', fenderScale: 'Fenderスケール 25.5インチ', martinScale: 'Martinスケール 25.4インチ', customScale: 'カスタムスケール', customScaleHint: 'ナットからブリッジまでの振動長を入力', formulaNote: 'T = 4L²f²μ を使い、μは直径と材質密度から求めた単位長さあたりの質量です。', modelNote: 'このオフライン推定はスチールの密度モデルを使います。芯線、巻線、コーティング、メーカーの線密度によって実際の張力は変わります。楽器の調整を変える前にメーカーのデータを確認してください。', faqTitle: 'ギター弦の張力に関する質問', bibliographyTitle: '張力モデルの参考資料', tableLabel: '各弦の張力測定値', tensionMapLabel: '6本の弦の張力プロファイル',
  },
  faq: [
    { question: 'ギター弦張力計算機には何が必要ですか？', answer: '振動するスケール長、各弦の音程、弦のゲージ、材質密度の一貫した推定値が必要です。プリセットが6本のゲージを入力し、チューニングが目標周波数を変えます。' },
    { question: 'ギターのスケールが長いと弦の張力は上がりますか？', answer: 'はい。同じゲージと音程なら、張力は振動長の2乗に比例して上がります。そのため同じ10-46セットでも、24.75インチより25.5インチの方が強く感じられます。' },
    { question: 'チューニングの変更は張力にどう影響しますか？', answer: '音程を下げると、周波数比の2乗に応じて張力が下がります。全音下げでは元の約79パーセント、半音下げでは約89パーセントになります。' },
    { question: '巻弦の結果は正確ですか？', answer: 'いいえ。このモデルは弦を材質密度を持つ円柱として扱います。巻弦には芯線、巻線、コーティングがあるため、メーカーの線密度表の方が正確です。' },
    { question: '快適なギター弦の張力はどれくらいですか？', answer: '一律の目標値はありません。このツールでは極端な値を見つけるため、8重量ポンド未満を弱い、25重量ポンド超を強いと表示します。弾き方、調整、楽器も感触を左右します。' },
    { question: '新しい弦セットの採用判断に結果を使えますか？', answer: 'シナリオ比較に使い、安全保証とは考えないでください。ゲージやチューニングを大きく変える前に、楽器メーカーの指示と弦メーカーの仕様を確認してください。' },
  ],
  howTo: [
    { name: '単位系を選ぶ', text: 'ミリメートルとkgfにはメートル法、インチとmilと重量ポンドにはヤード・ポンド法を選びます。切り替えても物理的な設定は変わりません。' },
    { name: 'スケールとチューニングを選ぶ', text: '最も近いスケール長を選び、実際に使うチューニングを選びます。振動長が分かる場合はカスタムスケールを使います。' },
    { name: 'ゲージを選ぶか編集する', text: '9-42、10-46、11-49、12-54のプリセットから始めます。混合セットや低音弦を試す場合はゲージを編集を開きます。' },
    { name: '張力プロファイルを読む', text: '各弦、ネックへの合計荷重、両端の差を比較します。弱いと強いの表示が、確認すべき値を示します。' },
  ],
  seo: [
    { type: 'summary', title: 'この計算機で比較できること', items: ['プリセットまたは独自ゲージによる6本の弦の張力', 'スケール長とチューニングの変更による張力プロファイル', 'kgfまたは重量ポンドによるメートル法とヤード・ポンド法の表示', '弱い弦と強い弦を見つけるための状態表示'] },
    { type: 'title', text: '弦の張力からギターの調整について分かること', level: 2 },
    { type: 'paragraph', html: '弦の張力は、選んだ音程を保つための引っ張り力です。ゲージだけで決まるのではなく、音程と振動長も力を変えます。プロファイルを見ると、隣の弦より大幅に弱い弦や強い弦を見つけられます。' },
    { type: 'title', text: '推定に使う物理モデル', level: 2 },
    { type: 'paragraph', html: '振動する弦では周波数、振動長、線密度が関係します。ここでは T = 4L²f²μ を使い、円形断面とスチール密度モデルから線密度を推定します。' },
    { type: 'title', text: 'メーカーのデータが重要な理由', level: 2 },
    { type: 'paragraph', html: '巻弦は芯線と巻線で構成され、コーティングや構造によって線密度が変わります。この結果は比較用に使い、取り付け時はメーカーの製品表を基準にしてください。' },
    { type: 'list', items: ['楽器の仕様からスケール長を確認するか、ナットからブリッジまで測る。', '実際に使うチューニングを選ぶ。', '近いゲージプリセットから始め、変えたい弦だけ編集する。', '各値と差を確認し、メーカーのデータと照合する。'] },
  ],
});
