import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'phase-distance-calculator';
const title = '麦克风相位距离计算器';
const description =
  '计算对齐麦克风所需的延迟和补偿。通过高精度样本调整和温度校正，避免相位抵消和梳状滤波。';

const faqData = [
  {
    question: '什么是音频中的相位抵消（phase cancellation）？',
    answer:
      '这是指当来自同一声源的两个信号在不同时间到达时发生的声学现象。声波会相互干扰，如果它们的相位差为180度，就会相互抵消，使声音变得单薄且缺乏厚度。',
  },
  {
    question: '为什么温度会影响计算？',
    answer:
      '因为声音是通过空气传播的，而空气的密度会随温度改变。温度越高，声速越快。精确的温度调整可让您计算出分隔麦克风之间的确切延迟。',
  },
  {
    question: '反转相位与反转极性相同吗？',
    answer:
      '技术上不同，尽管这两个术语经常混用。极性是电学上的改变（旋转180度），而相位是时间上的偏移。我们的工具允许您模拟这两者，以找到最佳的声音一致性。',
  },
  {
    question: '什么是梳状滤波（Comb Filtering）？',
    answer:
      '这是指将信号与其延迟版本合并后产生的频率响应。它会产生一系列像梳齿一样的峰值和谷值，从而彻底改变仪器的音色。',
  },
  {
    question: '麦克风技术中的3:1规则是什么？',
    answer:
      '这是一种最小化相位问题的技术：当对不同声源使用两个麦克风时，麦克风之间的距离应至少是每个麦克风到其声源距离的三倍。',
  },
  {
    question: '物理对齐麦克风好还是用软件对齐好？',
    answer:
      '在录音期间进行良好的物理对齐总是更好的，以避免产生人工痕迹。然而，DAW中的数字延迟提供了样本级的精确度，这在手动移动麦克风时几乎是不可能实现的。',
  },
];

const howToData = [
  {
    name: '测量距离',
    text: '测量从声源（例如军鼓）到您使用的每个麦克风的物理距离。',
  },
  {
    name: '设置环境',
    text: '输入室温和项目的采样率，以获得基于真实物理规律的计算。',
  },
  {
    name: '分析图表',
    text: '观察频率响应可视化器，以识别可听范围内的关键抵消。',
  },
  {
    name: '应用补偿',
    text: '复制毫秒或样本值，并将其输入到您通道上的延迟插件中，以完美对齐轨道。',
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
    labelTemp: '温度 (°C) / 声音',
    btnAuto: '自动',
    labelSampleRate: '采样率 (kHz)',
    labelUnits: '单位制',
    optMetric: '公制 (m/cm)',
    optImperial: '英制 (ft/in)',
    labelDistA: '麦克风 A 距离',
    labelDistB: '麦克风 B 距离',
    labelPresets: '快速预设',
    presetCoincident: '同轴 (XY)',
    presetSnare: '军鼓',
    presetAmbient: '环境',
    btnInvert: '反转相位 (Φ)',
    labelGain: '麦克风 B 相对增益:',
    btnCopy: '复制样本',
    labelDelay: '所需延迟',
    unitMs: '毫秒 (ms)',
    labelCompensation: '补偿',
    unitSamples: '样本',
    labelPhaseStatus: '相位状态',
    textLoading: '加载中...',
    statusInPhase: '同相',
    statusInPhaseDesc: '信号已完美对齐。',
    statusCritical: '严重相位抵消',
    statusCriticalDesc: '中低频段出现明显的梳状滤波。',
    statusOffAxis: '偏轴',
    statusOffAxisDesc: '轻微相位偏移。音色质感有所改变。',
    warningCritical: '(!) 可能存在严重的相位抵消',
    labelSoundSpeed: '声速',
    labelDistDiff: '距离差',
    labelNullFreq: '第一抵消点频率',
    textNone: '无',
    chartTitle: '频率响应 (H) - 梳状滤波',
    promptSoundSpeed: '声速 (m/s):',
    copyFeedback: '已复制！',
  },
  seo: [
    {
      type: 'summary',
      title: '计算器功能',
      items: [
        '考虑温度调节的精确声速物理计算',
        '毫秒和样本级结果以用于 DAW 延迟补偿',
        '覆盖整个可听光谱的梳状滤波效果画布可视化器',
        '麦克风预设（XY同轴、军鼓、环境）',
        '相位反转模拟和相对增益控制',
        '支持公制和英制单位',
      ],
    },
    {
      type: 'title',
      text: '什么是相位抵消，为什么它会破坏您的混音？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在音频工程领域，相位是最关键的概念之一，但矛盾的是，它也是初学者最容易忽视的概念之一。当您使用放置在不同距离的两个或多个麦克风录制声源（例如架子鼓或吉他放大器）时，声波不会同时到达麦克风音囊。这种细微的时间差会引起一种称为<strong>相位偏移</strong>（phase shift）的现象。',
    },
    {
      type: 'title',
      text: '梳状滤波现象',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当两个相同的信号结合并带有微小延迟时，频率响应中就会出现一系列谷值和峰值。在频谱分析仪上观察时，该图案类似于梳子的齿，因此得名。这种效果破坏性地改变了乐器的自然音色。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '对低频的影响',
          description:
            '相位抵消在低频中最为致命，声音的厚度和形体感会完全消失。',
        },
        {
          title: '金属质感',
          description:
            '梳状滤波会增加人工染色，使声音听起来空洞或处理过度。',
        },
      ],
    },
    {
      type: 'title',
      text: '温度对计算的影响',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多声音工程师忘记了空气是物理介质，其密度会随温度而变化。声速并不是一个恒定不变的常数，在20°C时，它的传播速度约为每秒343米。',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: '声速随温度变化的计算公式',
    },
    {
      type: 'tip',
      title: '微调补偿',
      html: '几度的温度差异就可以使抵消点移动几赫兹。使用您录音室的实际温度运行我们的计算器，可以确保在 DAW 中获得完美的对齐。',
    },
    {
      type: 'title',
      text: '关键录音场景',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '军鼓（Top & Bottom）：对齐两个鼓面的时间，以最大化击打感和力度。',
        '顶空麦克风（Overheads）和近距离麦克风：延迟近距离麦克风以匹配顶空麦克风的相位。',
        '多麦克风录制吉他：融合动圈麦克风和铝带麦克风而不会丢失中低频。',
        '贝斯 DI 与麦克风：同步直接信号与音箱麦克风，以获得浑厚的声音。',
      ],
    },
    {
      type: 'title',
      text: '物理对齐 vs 数字处理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '尽管我们的工具为您提供了录音后在 DAW 中纠正相位的数值，但我们始终建议您在录音室中尝试最佳的物理对齐。将麦克风移动几毫米可能会比任何数字处理都更有效。',
    },
    {
      type: 'stats',
      items: [
        { label: '20°C下的声速', value: '343.2 m/s' },
        { label: '毫秒/厘米', value: '0.029 ms' },
        { label: '48kHz下的样本数', value: '每厘米1.4个样本' },
      ],
    },
    {
      type: 'title',
      text: '参考表：距离 vs 第一抵消点',
      level: 2,
    },
    {
      type: 'table',
      headers: ['距离差 (cm)', '延迟 (ms)', '第一抵消点 (Hz)', '影响范围'],
      rows: [
        ['1 cm', '0.029', '17160', '极高频'],
        ['5 cm', '0.146', '3432', '中高频 (临场感)'],
        ['10 cm', '0.291', '1716', '中频 (临场感)'],
        ['30 cm', '0.874', '572', '中低频 (形体感)'],
        ['1 米', '2.914', '172', '低频 (基频)'],
      ],
    },
    {
      type: 'title',
      text: '对齐方法的优缺点',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '物理对齐：原始信号的衰减较小。',
          con: '物理对齐：难以进行微米级的精确调整。',
        },
        {
          pro: '数字校正：样本级别的绝对精确度。',
          con: '数字校正：如果应用不当可能会产生预回声。',
        },
        {
          pro: '极性反转：快速解决 180° 的相位抵消。',
          con: '极性反转：无法解决中间状态的相位偏移。',
        },
        {
          pro: '时间补偿：恢复丢失的冲击力和击打感。',
          con: '时间补偿：需要精确测量每个麦克风的距离。',
        },
      ],
    },
    {
      type: 'tip',
      title: '如何用耳朵检测相位问题？',
      html: '按下"反转相位"按钮（Φ）。如果激活它使声音获得了形体和低频，那么说明您的麦克风之前是反相的。如果声音"消失"或变得更单薄，则说明它们之前已正确对齐。',
    },
    {
      type: 'title',
      text: '单声道兼容性与立体声感知',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在立体声录音中，相位关系定义了声像的稳定性。如果存在严重的相位不一致，当混音在单声道系统上播放时，声音可能会完全消失。我们的计算器可帮助您预测当通道相加时哪些频率受损最严重。',
    },
  ],
};
