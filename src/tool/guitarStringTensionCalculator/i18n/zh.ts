import { createGuitarStringTensionContent } from './content-factory';

const title = '吉他琴弦张力计算器';
const slug = 'guitar-string-tension-calculator';
const description = '根据琴弦规格、有效弦长和调弦方式估算每根吉他弦的张力。使用公制或英制单位离线比较整套琴弦。';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: '公制', imperial: '英制', metricLength: '有效弦长 mm', imperialLength: '有效弦长 英寸', metricGauge: '规格 mm', imperialGauge: '规格 mil', metricTension: '千克力', imperialTension: '磅力', chooseSet: '选择琴弦套装', scaleLength: '有效弦长', tuning: '调弦', material: '琴弦材料', customSet: '编辑规格', presetHint: '先从最接近的套装开始', gauge: '规格', note: '音符', frequency: '频率', tension: '张力', status: '手感', totalTension: '琴颈总拉力', averageTension: '每根琴弦平均值', tensionSpread: '最松与最紧琴弦的差值', low: '偏松', balanced: '均衡', high: '偏紧', standard: '标准 E', halfStepDown: '降半音', dropD: 'Drop D', wholeStepDown: '降全音', openG: 'Open G', steel: '钢', nickel: '镀镍钢', phosphorBronze: '磷青铜', nylon: '尼龙', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: '编辑规格', shortScale: '短弦长 24.75 英寸', fenderScale: 'Fender 弦长 25.5 英寸', martinScale: 'Martin 弦长 25.4 英寸', customScale: '自定义弦长', customScaleHint: '使用上弦枕到琴桥之间的振动长度', formulaNote: '估算使用 T = 4L²f²μ，其中 μ 是根据直径和材料密度推导出的单位长度质量。', modelNote: '此离线估算使用钢材密度模型。琴芯、缠绕、涂层和制造商提供的线密度都会影响实际张力。改变乐器设置前请查看制造商数据。', faqTitle: '吉他琴弦张力问题', bibliographyTitle: '张力模型参考资料', tableLabel: '每根琴弦的张力读数', tensionMapLabel: '六根琴弦的张力分布',
  },
  faq: [
    { question: '吉他琴弦张力计算器需要什么？', answer: '它需要振动弦长、每根琴弦的音高、琴弦规格以及一致的材料密度估算。预设会提供六根琴弦的规格，而调弦方式会改变目标频率。' },
    { question: '更长的吉他弦长会增加琴弦张力吗？', answer: '会。在规格和音高相同的情况下，张力随振动长度的平方增加。因此同样的 10-46 套装在 25.5 英寸弦长上可能比 24.75 英寸更紧。' },
    { question: '改变调弦如何影响张力？', answer: '降低音高会按照频率比的平方降低张力。降全音约保留原张力的 79%，降半音约保留 89%。' },
    { question: '缠绕琴弦的结果准确吗？', answer: '不完全准确。模型将琴弦视为具有材料密度的圆柱体。缠绕弦有琴芯、缠绕和涂层，因此制造商的单位长度质量表更精确。' },
    { question: '多大的琴弦张力比较舒服？', answer: '没有适合所有人的统一目标。为了帮助发现极端值，本工具将低于 8 磅标为偏松，高于 25 磅标为偏紧。演奏方式、调校和乐器也会影响手感。' },
    { question: '可以用结果决定是否采用新琴弦套装吗？', answer: '请将它用于比较方案，而不要当作安全保证。大幅改变规格或调弦前，请查看乐器制造商指南和琴弦制造商规格。' },
  ],
  howTo: [
    { name: '选择测量单位', text: '毫米和千克力使用公制，英寸、mil 和磅力使用英制。切换单位不会改变实际设置。' },
    { name: '选择弦长和调弦', text: '选择最接近的有效弦长，再选择实际使用的调弦。如果知道振动长度，可以使用自定义弦长。' },
    { name: '选择或编辑规格', text: '从 9-42、10-46、11-49 或 12-54 预设开始。需要混合套装或自定义低音弦时，打开编辑规格。' },
    { name: '阅读张力分布', text: '比较每根琴弦、琴颈总拉力以及两端的差值。偏松和偏紧标记会指出需要进一步检查的数值。' },
  ],
  seo: [
    { type: 'summary', title: '这个计算器比较什么', items: ['使用预设或自定义规格计算六根琴弦的张力', '将弦长和调弦变化显示为新的张力分布', '以千克力或磅力显示公制和英制读数', '用偏松和偏紧标记快速发现极端值'] },
    { type: 'title', text: '琴弦张力能说明什么', level: 2 },
    { type: 'paragraph', html: '琴弦张力是保持琴弦在指定音高所需的拉力。它不只取决于规格，音高和振动长度也会改变拉力。张力分布可以帮助你发现明显比相邻琴弦更松或更紧的琴弦。' },
    { type: 'title', text: '估算背后的物理模型', level: 2 },
    { type: 'paragraph', html: '振动琴弦将频率、振动长度和线密度联系起来。这里使用 T = 4L²f²μ，并根据圆形截面和钢材密度模型估算线密度。这个关系可以帮助你比较不同弦长、不同调弦和不同规格带来的手感变化，并提前发现某一根弦与整套琴弦不平衡的情况。' },
    { type: 'title', text: '为什么仍要参考制造商数据', level: 2 },
    { type: 'paragraph', html: '缠绕琴弦由琴芯和缠绕层组成，涂层和结构会改变单位长度质量。请将结果作为比较工具，并以制造商产品表作为安装参考。这样可以在购买前预估手感变化，找出整套琴弦中最需要关注的差异，也能避免只看琴弦规格而忽略弦长和音高的影响。实际安装前，还应确认琴桥、琴颈和调音方式适合新的组合。' },
    { type: 'list', items: ['从乐器规格中取得有效弦长，或测量上弦枕到琴桥的距离。', '选择实际使用的调弦。', '从最接近的规格预设开始，只编辑计划更换的琴弦。', '检查各项读数和差值，再与制造商数据比较。', '安装前确认琴颈和琴桥适合新的张力组合。'] },
  ],
});
