import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frequency-to-note-converter';
const title = '频率与音乐音名转换器';
const description =
  '立即将赫兹（Hz）转换为音乐音名。识别任何频率的精确音高，测量音分（cents）偏差，聆听纯音，并精准调试合成器与采样器。';

const faqData = [
  {
    question: '我如何知道 440 Hz 对应哪个音符？',
    answer:
      '440 Hz 精确对应 A4，即全球通用的调律参考音。它是钢琴上中央 C 之上的 A 音。自 1939 年以来，该频率一直是 ISO 16 标准，并被用于调试世界各地的管弦乐器。',
  },
  {
    question: '音符“偏高 15 音分”是什么意思？',
    answer:
      '音分（cent）是半音的一百分之一。偏高 15 音分意味着频率略高于等程律中的精确音高。在合成器上，你应该应用 -15 音分的精调（fine-tune）来纠正它。',
  },
  {
    question: '除了 440 Hz，为什么还有 432 Hz 和 444 Hz 的参考选项？',
    answer:
      '不同的音乐背景使用不同的调律参考。432 Hz 在某些制作社区中非常流行。444 Hz 在文艺复兴时期的早期音乐录音中很常见。一些欧洲管弦乐团为了使音色更明亮，会将参考音设定在 441–444 Hz 之间。',
  },
  {
    question: '交互式钢琴键盘有什么用？',
    answer:
      '交互式钢琴让你能在键盘上直观地识别音符，也可以通过直接点击琴键来输入频率。按下琴键会显示其精确频率，并播放纯正的正弦波音以供对比。',
  },
  {
    question: '如何使用计算器显示的泛音（谐波）？',
    answer:
      '泛音（低八度和高八度）显示了与你的音符直接相关的频率。它们有助于避免合成器图层之间的冲突、将共振滤波器设定在正确的音高，或将鼓采样对应到正确的采样器八度。',
  },
  {
    question: '为什么试听模式生成的是正弦波而不是真实的乐器声？',
    answer:
      '正弦波是纯波，只包含基频而没有额外的泛音。这使得在不受音色色彩干扰的情况下，能对真实乐器进行干净的调音判断。这与电子指针式调音器生成的信号相同。',
  },
  {
    question: '如何计算音乐音符的频率？',
    answer:
      '频率是基于等程律使用对数公式计算出来的。以参考音 A4（440 Hz）为起点，每升高一个半音，频率就乘以 2 的 12 次方根（约 1.05946），而每个八度则对应频率翻倍。',
  },
  {
    question: '440 Hz 是什么音？',
    answer:
      '440 Hz 频率恰好是音符 A4。自 20 世纪中期以来，它是大多数管弦乐团和当代音乐家用来调试乐器的标准参考音。',
  },
  {
    question: '440 Hz 和 432 Hz 调律有什么区别？',
    answer:
      '440 Hz 是国际标准（ISO 16）。432 Hz 是一些音乐家出口于主观听感偏好而选择的另一种调律方式，常用于冥想音乐，尽管目前并没有科学证据表明它比 440 Hz 更有生物学益处。',
  },
];

const howToData = [
  {
    name: '输入频率',
    text: '在主输入框中输入以赫兹为单位的频率。结果会立即显示，包括音名及其科学音高标记。',
  },
  {
    name: '读取结果和音分计',
    text: '视觉调音指示器会显示你的频率是偏高、偏低还是完全准确。音分值会告诉你应该在乐器或插件上进行多少精调。',
  },
  {
    name: '利用泛音调节图层',
    text: '检查低八度和高八度频率，以便配置额外的振荡器、共振滤波器或打击乐图层，避免频率冲突。',
  },
  {
    name: '调整 A4 参考频率',
    text: '将 A4 参考频率更改为 432 Hz、444 Hz 或任何自定义值，使所有计算都与你的项目背景保持一致。',
  },
  {
    name: '聆听参考音',
    text: '按下播放按钮，以输入的频率生成纯正的正弦波，并通过耳朵来调试你的真实乐器。',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz 转音名',
    btnNoteToHz: '音名 转 Hz',
    labelRef: 'A4 参考频率',
    ariaRefCustom: '自定义 A4 参考频率',
    calInfo:
      '<strong>440 Hz</strong> 是国际标准。<strong>432 Hz</strong> 常用于冥想音乐和视唱。',
    labelFrequency: '频率',
    ariaFreqInput: '输入以赫兹为单位的频率',
    ariaPlay: '试听声音',
    copyNoteName: '复制音名',
    labelOctaveDown: '低八度',
    labelInputFreq: '输入频率',
    labelOctaveUp: '高八度',
    labelNoteInput: '音名 (例如 A4, C#3, Do4)',
    placeholderNote: '输入音名...',
    labelSetNote: '设定音符',
    labelSetOctave: '设定八度',
    labelSelectedNote: '已选音符',
    copyHz: '复制 Hz',
    btnListenNote: '试听音符',
    pianoLabel: '交互式钢琴 — 点击琴键查看其频率',
    pianoAria: '交互式钢琴键盘',
    historyTitle: '历史记录',
    historyClear: '清除',
    historyEmpty: '暂无转换记录',
    historyLoadAria: '加载 %s Hz',
    tuned: '已调好',
    sharp: '偏高 (sharp)',
    flat: '偏低 (flat)',
    unitHzExact: '精确 Hz',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: '八度',
    copyFeedback: '已复制',
  },
  seo: [
    {
      type: 'summary',
      title: '计算器功能',
      items: [
        '双向转换：Hz 转音名和音名转 Hz 在同一工具内完成',
        '采样级精度：可调节 A4 参考频率 (440 / 432 / 444 Hz)',
        '视觉音分计：带有偏高 / 偏低 / 已对齐指示',
        '泛音显示：显示基频、低八度和高八度的频率',
        '交互式钢琴键盘：高亮显示对应的琴键',
        '历史记录：方便快速对比不同的音色和采样',
      ],
    },
    {
      type: 'title',
      text: '什么是音乐音符的频率，为什么它很重要？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '从本质上讲，每个音乐音符都是空气的周期性振动。当吉他弦每秒振动 440 次时，它会产生 A4，即全球调律参考音。这种赫兹和音名之间的对应关系并不是随机的：它是由<strong>等程律</strong>定义的。等程律是西方音乐中占主导地位的调律系统，从数学角度将一个八度划分为十二个完全等距的半音。',
    },
    {
      type: 'paragraph',
      html: '在声音合成、音乐制作、音频工程和乐器制造中，了解每个音符的精确频率至关重要。合成器需要知道每个振荡器必须以多大的频率振动才能再现经过调律的音符。混音工程师需要知道在均衡器（EQ）的什么位置进行切割，才能在不影响乐器基频的情况下消除噪音。',
    },
    {
      type: 'title',
      text: '转换背后的数学公式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '等程律基于等比数列。每个半音相当于将频率乘以 2 的 12 次方根。根据相对于 A4 的半音距离来获取任何音符频率的公式是：',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: '将 MIDI 音符编号转换为以 Hz 为单位的频率的公式',
    },
    {
      type: 'paragraph',
      html: '其中 <em>n</em> 是 MIDI 音符编号（A4 = 69），而 <em>A4</em> 是参考频率，通常为 440 Hz。反转此公式即可得到与输入频率最接近的音名，以及音分偏差。',
    },
    {
      type: 'title',
      text: '音分：音乐家和工程师的精度单位',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '一个半音被分为 100 音分（cents）。这个单位允许以十进制精度描述任何调律偏差。训练有素的耳朵已经可以感知到 10 音分的偏差；如果是 20 音分以上，对大多数听众来说听起来就明显跑调了。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '完美调律',
          description:
            '当偏差小于等程律精确频率的 5 音分时，该音符被视为完美对齐。',
        },
        {
          title: 'DAW 中的音分',
          description:
            '采样器、合成器和降调/升调插件使用音分进行精调，使得采样能够被精准地调整到音符上且不产生噪音。',
        },
        {
          title: '人类感知阈值',
          description:
            '感知跑调音符的阈值在 5 到 15 音分之间波动，具体取决于乐器、动态和和声背景。',
        },
      ],
    },
    {
      type: 'title',
      text: 'A4 参考频率：440 Hz、432 Hz 与调律之争',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '参考频率 A4 = 440 Hz 在 1939 年实现了国际标准化（ISO 16）。然而，巴洛克音乐家通常使用 415 Hz 作为参考，且目前追求 432 Hz 的制作人社区也在不断扩大。像柏林爱乐乐团这样的精英管弦乐团经常使用 443 Hz，以获得更明亮、更具穿透力的音色。',
    },
    {
      type: 'paragraph',
      html: '在音乐制作中，当现场录音的原声乐器与虚拟乐器混合时，参考频率非常重要。如果录制的钢琴是按照 442 Hz 调音的，而合成器默认为 440 Hz，则所有采样都需要进行音分校正。',
    },
    {
      type: 'tip',
      title: '专业采样器技巧',
      html: '在将采样导入 Kontakt 或 Decent Sampler 等采样器时，请将采样频率输入此计算器。调音计上显示的音分值会准确地告诉你应该在采样器中输入的 <em>精调（fine-tune）</em> 值，以便采样播放时音高完美准确。',
    },
    {
      type: 'title',
      text: '分八度参考频率表',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此表显示了 A4 = 440 Hz 时等程律中每个 C 音名的精确频率，对于配置模块化合成器振荡器或验证乐器音域非常有用：',
    },
    {
      type: 'table',
      headers: ['音名', '频率 (Hz)', 'MIDI 音符', '典型乐器音域'],
      rows: [
        ['C0', '16.35', '12', '倍大提琴，管风琴踏板'],
        ['C1', '32.70', '24', '大提琴，电贝斯低音弦'],
        ['C2', '65.41', '36', '大提琴，电贝斯'],
        ['C3', '130.81', '48', '中提琴，次中音萨克斯，吉他'],
        ['C4', '261.63', '60', '中央 C，钢琴，男高音声部'],
        ['C5', '523.25', '72', '长笛，小提琴，女高音声部'],
        ['C6', '1046.50', '84', '短笛，小提琴高音区'],
        ['C7', '2093.00', '96', '长笛泛音，合成器'],
        ['C8', '4186.01', '108', '88 键键盘，技术极限'],
      ],
    },
    {
      type: 'title',
      text: '泛音与 2:1 关系的八度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音乐声学中最重要的关系之一是八度：频率翻倍会产生高一个八度的相同音符，而频率减半则会低一个八度。这种 2:1 的关系是任何原声乐器自然泛音的基础。',
    },
    {
      type: 'paragraph',
      html: '在合成中，了解频率的直接泛音是避免声音层中振荡器之间频谱冲突的关键。此计算器始终显示任何输入频率的高低八度。',
    },
    {
      type: 'title',
      text: '音乐家和制作人的真实应用案例',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '调试模拟振荡器：测量输出频率并与计算器对比，以确定需要调整多少音分的粗调或精调。',
        '将采样分配给音符：在 55 Hz 录制的踢鼓是 A1。此工具会准确地告诉你在采样器中应将其映射到何处。',
        '检测有问题的共振：如果房间在 80 Hz 处产生共振，计算器会确认那是 E2，引导你使用 EQ 进行衰减而不损害低音。',
        '同步超低音扬声器：验证多个低音炮是否在重现同一个音符，从而避免因干扰而产生的增强或抵消。',
        '调律钟和定音打击乐器：识别基频以便将其整合到作品的调性中。',
        '共振滤波器设计：设置在 349.23 Hz 的高 Q 值带通滤波器将在 F4 处达到峰值，使和声设计决策更加轻松。',
      ],
    },
    {
      type: 'title',
      text: '钢琴作为直观的视觉参考',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '钢琴键盘是音乐频谱最直观的视觉地图。其白键（自然音）和黑键（升/降音）的布局让人一眼就能识别出音阶、和弦和音程模式。交互式钢琴会高亮显示与每个频率对应的琴键，将数字与它在通用键盘上的位置联系起来。',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '数学精度：使用 ISO 16 等程律公式。',
          con: '局限性：仅适用于等程律，不适用于中庸全音律等历史调律。',
        },
        {
          pro: '自由校准：支持 400 到 480 Hz 之间的 A4 参考。',
          con: '正弦波不重现乐器的真实音色，仅重现基频。',
        },
        {
          pro: '双向转换：在同一工具内完成 Hz 转音名和音名转 Hz。',
          con: '音分计是相对于最近的半音而言的，而不是纯律。',
        },
        {
          pro: '历史记录：允许快速对比多个预设或采样。',
          con: '超出人耳听力范围（20 Hz – 20 kHz）的频率实际用途有限。',
        },
      ],
    },
    {
      type: 'title',
      text: '使用此工具的必备词汇表',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (赫兹)：每秒周期数。测量声波的频率。',
        'MIDI 音符：MIDI 标准中识别每个音符的 0 到 127 之间的整数。A4 = 69。',
        '科学音高标记：在音名后添加八度编号的命名系统（A4, C3）。',
        '音分 (Cents)：半音的一百分之一。允许精确表达调律偏差。',
        '等程律 (Equal temperament)：所有半音均相等的调律系统（比例为 2 的 12 次方根）。',
        'A4：参考音。国际标准：440 Hz (ISO 16, 1975)。',
        '泛音 / 谐波：原声乐器自然产生的前基频整数倍频率。',
        '精调 (Fine-tune)：合成器和采样器上用于按音分调节音高的参数。',
      ],
    },
  ],
};
