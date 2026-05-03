import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'muzik-notasi-esdegerligi';
const title = 'Müzik Notası Eşdeğerliği: Latin, İngiliz ve Alman Sistemleri';
const description =
  'Latin (Do, Re, Mi), Anglo-Sakson (C, D, E) ve Germen (H) sistemleri arasında etkileşimli müzik notası çeviricisi. Piyano görselleştirici, oktavlar ve frekansları (Hz) içerir.';

const faqData = [
  {
    question: 'Amerikan veya Anglo-Sakson notasyonu nedir?',
    answer:
      'Müzik notalarını temsil etmek için A\'dan G\'ye kadar olan harfleri kullanan sistemdir. Modern müzik ve cazda standarttır. Bu sistemde A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa ve G=Sol\'dur.',
  },
  {
    question: 'Almanya\'da neden Si\'ye H deniyor?',
    answer:
      "Orta Çağ'daki 'B-quadratum'un grafiksel bir evrimi nedeniyle. Almanca konuşulan ülkelerde H harfi natürel Si için ayrılırken, B harfi sadece Si bemol için kullanılır.",
  },
  {
    question: "Bilimsel notasyonda 'orta C' nedir?",
    answer:
      'Orta C (88 tuşlu bir piyanonun ortasındaki Do tuşu), ANSI/Uluslararası standartta C4\'tür. Konservatuvarlarda yaygın olarak kullanılan Fransız-Belçika sisteminde Do3 olarak adlandırılır.',
  },
  {
    question: 'İki notanın anarmonik (enharmonik) olması ne anlama gelir?',
    answer:
      'İsimlerinin farklı olup aynı fiziksel sesi temsil etmeleri ve aynı piyano tuşunda çalınmaları anlamına gelir. Örneğin, Do diyez (C#) ve Re bemol (Db) anarmonik notalardır.',
  },
  {
    question: 'A4\'ün standart frekansı nedir?',
    answer:
      'Uluslararası standart frekans 440 Hz\'dir (ISO 16 standardı). Orkestraları, enstrümanları ve dijital sentezleyicileri akort etmek için evrensel referanstır.',
  },
];

const howToData = [
  {
    name: 'Oktavı seçin',
    text: 'Piyanonun hangi oktavıyla çalışmak istediğinizi belirtmek için üstteki sayısal seçiciyi kullanın (varsayılan merkezi oktav olan 4\'tür).',
  },
  {
    name: 'Piyanoda bir notaya basın',
    text: 'Teknik bilgilerini ve adlandırmasını görmek için etkileşimli piyanodaki herhangi bir tuşa tıklayın veya dokunun.',
  },
  {
    name: 'Sistemleri karşılaştırın',
    text: 'O notanın Latin, Anglo-Sakson ve Germen sistemlerinde aynı anda ne olarak adlandırıldığını görmek için alt panellere bakın.',
  },
  {
    name: 'Dinleyin ve doğrulayın',
    text: 'Seçilen notanın tam frekansını duymak ve müzikal perdesini onaylamak için "Dinle" düğmesine basın.',
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
    octaveLabel: 'Bilimsel Oktav (C4 = Orta C):',
    systemsTitle: 'Adlandırma Sistemleri',
    systemLatino: 'Latin (Solfej)',
    systemAnglo: 'Anglo-Sakson (Modern)',
    systemGerman: 'Germen (Alman)',
    sciNotationTitle: 'Bilimsel Notasyon',
    systemAnsi: 'Uluslararası (ANSI)',
    systemFranco: 'Fransız-Belçika',
    systemEnharmonic: 'Faydalı Anarmoni',
    techTitle: 'Teknik Veriler ve Dalgalar',
    btnPlay: 'Dinle',
    btnCopy: 'Bilgiyi Kopyala',
    initialTitle: 'Piyanodan bir nota seçin',
    copyDone: 'Kopyalandı!',
    copyLabelNote: 'Nota',
    copyLabelGerman: 'Alman Sistemi',
    copyLabelFreq: 'Frekans',
    copyLabelAnsi: 'Bilimsel Oktav',
    copyLabelUrl: 'URL',
    naLabel: 'N/A',
  },
  seo: [
    {
      type: 'summary',
      title: 'Çok Dilli Müzik Notası Çeviricisi',
      items: [
        '<strong>Aynı anda 3 sistem</strong>: Bir bakışta Latin, Anglo-Sakson ve Germen sistemleri.',
        '<strong>Etkileşimli piyano</strong>: Tüm eşdeğerliklerini görmek için herhangi bir tuşa tıklayın.',
        '<strong>Tam frekanslar</strong>: Her nota, ISO 16 standardına göre Hz değerini gösterir.',
        '<strong>Anarmonikler</strong>: Çift isme sahip notaları otomatik olarak tanımlar.',
      ],
    },
    {
      type: 'title',
      text: 'Farklı sistemlerde müzik notası eşdeğerliğini anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Müzik evrensel bir dildir, ancak yazımı ve adlandırılması coğrafi bölgeye ve akademik bağlama göre derinlemesine değişir. Latin dillerinin konuşulduğu ülkeler ve klasik Avrupa geleneği Latin sistemi (Do, Re, Mi...) ile baskınken, modern müzik, caz ve Anglo-Sakson dünyası Amerikan notasyonunu (C, D, E...) standartlaştırmıştır. Ek olarak, Germen etkisindeki ülkelerde natürel Si\'nin H olarak adlandırıldığı ve Si bemolün B olduğu tarihsel bir özellik vardır.',
    },
    {
      type: 'title',
      text: 'Üç ana müzikal adlandırma sistemi',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Latin Sistemi (Solfej):</strong> İtalya, İspanya, Fransa ve Latin Amerika'nın büyük bir kısmında kullanılır. Guido d'Arezzo'nun Aziz Yahya İlahisi'ne dayanır. Do, Re, Mi, Fa, Sol, La, Si kullanır.",
        '<strong>Amerikan Notasyonu (Anglo-Sakson):</strong> Caz, pop ve rock için dünya standardıdır. A=La\'dan başlayarak alfabenin ilk yedi harfini (A-G) atar. Do harfi C\'dir.',
        '<strong>Germen Sistemi:</strong> Almanya, Avusturya ve Kuzey Avrupa ülkelerinde kullanılır. Temel fark, natürel Si için H ve Si bemol için B kullanılmasıdır.',
      ],
    },
    {
      type: 'title',
      text: "Alman notasyonunda B ve H'nin ilginç hikayesi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Pek çok yeni başlayan, Almanya'da Si notasının neden H ile yazıldığını merak eder. Kökeni Orta Çağ'daki bir kopya hatasına dayanır. Eski harf sisteminde B harfi Si için kullanılıyordu. İki varyant vardı: <em>B quadratum</em> (kare, natürel Si için) ve <em>B rotundum</em> (yuvarlak, bemol Si için).",
    },
    {
      type: 'paragraph',
      html: 'Zamanla, Alman el yazmalarında <em>B quadratum</em> şekli giderek küçük h harfine benzemeye başladı. Bu grafiksel evrim baskıda sağlamlaştı ve mevcut Alman isimlendirmesine yol açtı: Natürel Si için H ve Si bemol için B. İlginç bir şekilde, bu ayrım J.S. Bach gibi bestecilerin eserlerini ünlü "B-A-C-H" motifiyle (Si bemol - La - Do - Si natürel) imzalamalarına olanak tanıdı.',
    },
    {
      type: 'title',
      text: 'Natürel nota eşdeğerlikleri karşılaştırma tablosu',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nota (Latin)', 'Notasyon (Anglo)', 'Almanca (Germen)', 'Köken'],
      rows: [
        ['Do', 'C', 'C', 'Temel frekans'],
        ['Re', 'D', 'D', 'İkinci nota'],
        ['Mi', 'E', 'E', 'Üçüncü nota'],
        ['Fa', 'F', 'F', 'Dördüncü nota'],
        ['Sol', 'G', 'G', 'Beşinci nota'],
        ['La', 'A', 'A', 'Akort notası'],
        ['Si', 'B', 'H', 'Büyük varyant'],
      ],
    },
    {
      type: 'title',
      text: 'Diyezler, Bemoller ve Anarmoni kavramı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Batı müziğinde her oktav için 12 ses kullanırız. Beş ek nota değiştiricilerle temsil edilir: diyez (#) ve bemol (b). Bir diyez notayı yarım ses yükseltirken, bir bemol yarım ses düşürür.',
    },
    {
      type: 'paragraph',
      html: 'Bu bizi <strong>Anarmoni (Enharmoni)</strong> kavramına götürür: İsimleri farklı olan ancak sesleri tamamen aynı olan ve aynı piyano tuşunu kaplayan iki nota. Örneğin C# ve Db anarmoniktir. Hesaplayıcımız bu eşdeğerlikleri otomatik olarak vurgular; bu, bir notanın neden aynı tonda bir yerde Fa# olarak istenirken başka bir yerde Solb olarak istenebileceğini anlamak için hayati önem taşır.',
    },
    {
      type: 'title',
      text: 'Oktavlar: Bilimsel Notasyon vs Fransız-Belçika',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Uluslararası Bilimsel Notasyon (ANSI): Orta C, C4 olarak adlandırılır. Sentezleyicilerde, DAW'larda ve müzik yazılımlarında (MIDI) standarttır.",
        'Fransız-Belçika Notasyonu: Klasik konservatuvarlarda yaygın olarak kullanılır. Bu sistemde orta C, Do3\'tür.',
        "Helmholtz Sistemi: Büyük harf, küçük harf ve tırnak işaretlerini (C, c, c', c'') kullanır. Eski teknik literatürde ve Alman akustiğinde daha yaygındır.",
      ],
    },
    {
      type: 'tip',
      title: 'Yapımcılar için ipucu',
      html: "DAW'lara dikkat edin: Bazı üreticiler (Yamaha gibi) orta C'yi C3 olarak kabul ederken, diğerleri (Roland veya FL Studio gibi) C4 hatta C5 olarak kabul eder. Sentezleyiciniz bir oktav farklı duyuluyorsa, yazılımın hangi bilimsel notasyon standardını takip ettiğini doğrulayın.",
    },
    {
      type: 'title',
      text: 'Hertz (Hz) cinsinden frekans ve standart akort',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fiziksel bir perspektiften bakıldığında, her nota hertz (saniyedeki döngü sayısı) cinsinden ölçülen belirli bir frekansa karşılık gelir. Uluslararası akort standardı (ISO 16), <strong>A4</strong> notasının tam olarak <strong>440 Hz</strong>\'de titreştiğini belirler.',
    },
    {
      type: 'list',
      items: [
        'Teknik kayma yaşayabilen analog sentezleyicileri kalibre etmek.',
        'Belirli notalardaki rezonansları ortadan kaldırmak için miksajda cerrahi ekolayzırları ayarlamak.',
        'Fiziksel perde ile müzikal algı arasındaki ilişkiyi anlamak.',
        'Pitch değerini cent cinsinden ayarlayarak örnekleri (sample) hassas bir şekilde dönüştürmek.',
      ],
    },
    {
      type: 'title',
      text: 'Bu hesaplayıcı için pratik kullanım durumları',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'İngilizce notaları okumak zorunda kalan stüdyo müzisyenleri için işaretlemeler arasında anında çeviri.',
          con: 'Sistem mikrotonaliteleri veya Batı dışı akortları dikkate almaz.',
        },
        {
          pro: 'Notalardaki müzikal yazımı iyileştirmek için anarmonik notaların tanınması.',
          con: 'Ses çalma saf bir dalgadır, gerçek bir enstrümanın tınısına sahip değildir.',
        },
        {
          pro: 'Armoni öğrencileri için bilimsel oktavdan Fransız-Belçika oktavına dönüşüm.',
          con: 'Sadece standart A4=440Hz akordunu varsayar, Barok akortlarını (415 Hz) değil.',
        },
        {
          pro: 'Gamları ve akorları öğrenmeyi kolaylaştıran sezgisel piyano görselleştirmesi.',
          con: 'Hangi değişikliğin her bağlamda en iyisi olduğunu yorumlamak için temel teori bilgisi gerektirir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Teknik sözlük referansı',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Yarım Ton: Batı sisteminde iki nota arasındaki minimum mesafe (örneğin Mi\'den Fa\'ya).',
        'Tam Ton: İki yarım tona eşdeğer mesafe (örneğin Do\'dan Re\'ye).',
        'Notasyon: Notaları ve akorları temsil etmek için kullanılan kısaltma sistemi.',
        'Hertz (Hz): Ses frekansının ölçü birimi.',
        'Oktav: Birinin frekansı diğerinin iki katı olan iki notayı ayıran aralık.',
        'Donanım (Anahtar imzası): Portrenin başında tonaliteyi tanımlayan değiştirici grubu.',
      ],
    },
  ],
};
