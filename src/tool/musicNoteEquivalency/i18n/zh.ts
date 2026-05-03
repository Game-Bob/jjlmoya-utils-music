import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'music-note-equivalency';
const title = '音名对应表：拉丁、英美及德意志系统';
const description =
  '拉丁系统（Do, Re, Mi）、英美系统（C, D, E）和德意志系统（H）之间的交互式音名转换器。包含钢琴可视化、八度及频率（Hz）参考。';

const faqData = [
  {
    question: '什么是美式或英美式记谱法？',
    answer:
      '它是使用字母 A 到 G 来表示乐音的系统。它是现代音乐和爵士乐的标准。在这个系统中，A=La，B=Si，C=Do，D=Re，E=Mi，F=Fa，G=Sol。',
  },
  {
    question: '为什么在德国 B 被称为 H？',
    answer:
      '这源于中世纪“B-quadratum”（方块B）在图形上的演变。在德语国家，字母 H 专用于还原 B（Si），而字母 B 则专门用于降 B（B-flat）。',
  },
  {
    question: '科学音高记谱法中的“中央 C”是什么？',
    answer:
      '中央 C（88 键钢琴正中间的 C 键）在 ANSI/国际标准中称为 C4。在音乐学院广泛使用的法比系统中，它被称为 Do3。',
  },
  {
    question: '两个音“等音（Enharmonic）”是什么意思？',
    answer:
      '意味着它们有不同的名称，但代表相同的物理声音，并在相同的钢琴键上演奏。例如，升 C（C#）和降 D（Db）是等音。',
  },
  {
    question: 'A4 的标准频率是多少？',
    answer:
      '国际标准频率为 440 Hz（ISO 16 标准）。它是管弦乐队、乐器和数字合成器调音的通用参考基准。',
  },
];

const howToData = [
  {
    name: '选择八度',
    text: '使用顶部的数字选择器指示你要使用的钢琴八度（默认为八度 4，即中央八度）。',
  },
  {
    name: '点击钢琴键',
    text: '点击或轻触交互式钢琴上的任意键，查看其技术信息和命名法。',
  },
  {
    name: '比较各系统',
    text: '查看下方面板，同时了解该音在拉丁、英美和德意志系统中的称呼。',
  },
  {
    name: '试听并验证',
    text: '按下“试听”按钮听到所选音符的精确频率，以确认其音高。',
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
    octaveLabel: '科学八度 (C4 = 中央 C):',
    systemsTitle: '命名系统',
    systemLatino: '拉丁系统 (唱名)',
    systemAnglo: '英美系统 (现代)',
    systemGerman: '德意志系统 (德语)',
    sciNotationTitle: '科学记谱法',
    systemAnsi: '国际 (ANSI)',
    systemFranco: '法比系统',
    systemEnharmonic: '实用等音',
    techTitle: '技术数据与波形',
    btnPlay: '试听',
    btnCopy: '复制信息',
    initialTitle: '选择钢琴上的一个音',
    copyDone: '已复制！',
    copyLabelNote: '音符',
    copyLabelGerman: '德语系统',
    copyLabelFreq: '频率',
    copyLabelAnsi: '科学八度',
    copyLabelUrl: 'URL',
    naLabel: '不适用',
  },
  seo: [
    {
      type: 'summary',
      title: '多语言乐音转换器',
      items: [
        '<strong>3 套系统同步显示</strong>：拉丁、英美和德意志系统一目了然。',
        '<strong>交互式钢琴</strong>：点击任意键查看其所有对应关系。',
        '<strong>精确频率</strong>：每个音符都根据 ISO 16 标准显示其 Hz 频率。',
        '<strong>等音</strong>：自动识别具有双重名称的音符。',
      ],
    },
    {
      type: 'title',
      text: '了解不同系统间的音名对应关系',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音乐是一种通用语言，但其书写和命名法因地理区域和学术背景的不同而大相径庭。拉丁语系国家和欧洲古典传统以拉丁系统（Do, Re, Mi...）为主，而现代音乐、爵士乐和英美世界则将美式记谱法（C, D, E...）标准化。此外，受德意志影响的国家存在一个历史特性，即还原 B 被称为 H，而降 B 被称为 B。',
    },
    {
      type: 'title',
      text: '三大主要音乐命名系统',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>拉丁系统（唱名）：</strong> 用于意大利、西班牙、法国及拉丁美洲大部分地区。基于圭多·达莱佐创作的《圣约翰赞美诗》。使用 Do, Re, Mi, Fa, Sol, La, Si。',
        '<strong>美式记谱法（英美）：</strong> 爵士、流行和摇滚乐的世界标准。从 A=La 开始分配字母表的前七个字母 (A-G)。C 是 Do 的代表字母。',
        '<strong>德意志系统：</strong> 用于德国、奥地利和北欧国家。核心区别是使用 H 表示还原 B，使用 B 表示降 B。',
      ],
    },
    {
      type: 'title',
      text: '德国记谱法中 B 和 H 的趣史',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多初学者好奇为什么在德国“降 B”音被写成 B，而“B”音被写成 H。这源于中世纪抄写员的一个错误。在旧字母系统中，字母 B 用于表示 Si。它有两种变体：<em>B quadratum</em>（方形，用于还原 B）和 <em>B rotundum</em>（圆形，用于降 B）。',
    },
    {
      type: 'paragraph',
      html: '久而久之，在德国手稿中 <em>B quadratum</em> 的形状越来越像小写字母 h。这种图形演变在印刷中被固定下来，从而产生了现在的德语命名法：H 代表还原 B，B 代表降 B。有趣的是，这种区别使得像 J.S. 巴赫这样的作曲家能够用著名的“B-A-C-H”动机（降 B - A - C - 还原 B）来签署他们的作品。',
    },
    {
      type: 'title',
      text: '基本音名对应关系对比表',
      level: 2,
    },
    {
      type: 'table',
      headers: ['音名 (拉丁)', '记谱 (英美)', '德语 (德意志)', '来源'],
      rows: [
        ['Do', 'C', 'C', '基础频率'],
        ['Re', 'D', 'D', '第二音'],
        ['Mi', 'E', 'E', '第三音'],
        ['Fa', 'F', 'F', '第四音'],
        ['Sol', 'G', 'G', '第五音'],
        ['La', 'A', 'A', '调音参考音'],
        ['Si', 'B', 'H', '最大变体'],
      ],
    },
    {
      type: 'title',
      text: '升号、降号与等音概念',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在西方音乐中，我们每个八度使用 12 个音。五个额外的音符由变音符号表示：升号 (#) 和降号 (b)。升号将音符提高半音，而降号将其降低半音。',
    },
    {
      type: 'paragraph',
      html: '这引出了<strong>等音 (Enharmony)</strong> 的概念：两个名称不同但声音完全相同且占据钢琴同一键位的音符。例如，C# 和 Db 就是等音。我们的计算器会自动突出显示这些对应关系，这对于理解为什么有些乐谱在同一调性下要求 F# 而另一些要求 Gb 至关重要。',
    },
    {
      type: 'title',
      text: '八度：科学记谱法 vs 法比系统',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '国际科学记谱法 (ANSI)：中央 C 被称为 C4。它是合成器、DAW 和音乐软件 (MIDI) 的标准。',
        '法比系统记谱：广泛用于古典音乐学院。在此系统中，中央 C 是 Do3。',
        '亥姆霍兹系统：使用大写、小写和撇号 (C, c, c\', c\'\')。在旧的技术文献和德国声学中更为常见。',
      ],
    },
    {
      type: 'tip',
      title: '给制作人的建议',
      html: '注意 DAW：某些制造商（如雅马哈）认为中央 C 是 C3，而其他制造商（如罗兰或 FL Studio）认为它是 C4 甚至 C5。如果你的合成器听起来差了一个八度，请确认软件遵循的是哪种科学记谱标准。',
    },
    {
      type: 'title',
      text: '以赫兹 (Hz) 为单位的频率与标准调音',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '从物理学角度来看，每个音符对应一个以赫兹（每秒周期数）测量的特定频率。国际调音标准 (ISO 16) 规定 <strong>A4</strong> 的振动频率正好是 <strong>440 Hz</strong>。',
    },
    {
      type: 'list',
      items: [
        '校准可能存在技术漂移的模拟合成器。',
        '在混音中调整精细均衡器以消除特定音符上的共鸣。',
        '了解物理音高与音乐感知之间的关系。',
        '通过以音分 (cents) 为单位调整音高来精确转换采样。',
      ],
    },
    {
      type: 'title',
      text: '此计算器的实际应用场景',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '为必须阅读英文总谱的乐手提供各记谱法间的即时转换。',
          con: '该系统不考虑微调律或非西方调律。',
        },
        {
          pro: '等音识别，以改进乐谱中的音乐性拼写。',
          con: '音频回放是纯波形，不具备真实乐器的音色。',
        },
        {
          pro: '为和声学学生提供科学八度与法比八度的转换。',
          con: '仅假设标准 A4=440Hz 调音，不包含巴洛克调音 (415 Hz)。',
        },
        {
          pro: '直观的钢琴可视化，方便学习音阶和和弦。',
          con: '需要基础理论知识来判断在特定语境下哪种变音符号最合适。',
        },
      ],
    },
    {
      type: 'title',
      text: '技术术语参考',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '半音：西方系统中两个音之间的最小距离（例如从 E 到 F）。',
        '全音：相当于两个半音的距离（例如从 C 到 D）。',
        '记谱法：表示音符和和弦的缩写系统。',
        '赫兹 (Hz)：声音频率的计量单位。',
        '八度：分隔两个音符的音程，其中一个的频率是另一个的两倍。',
        '调号：五线谱开头定义调性的一组变音符号。',
      ],
    },
  ],
};
