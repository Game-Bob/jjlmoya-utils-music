import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicNoteEquivalencyUI } from '../ui';

const slug = 'kesetaraan-not-musik';
const title = 'Kesetaraan Not Musik: Sistem Latin, Anglophone, dan Jerman';
const description =
  'Penerjemah interaktif not musik antara sistem Latin (Do, Re, Mi), Anglo-Saxon (C, D, E), dan Jermanik (H). Termasuk visualisator piano, oktaf, dan frekuensi (Hz).';

const faqData = [
  {
    question: 'Apa itu notasi Amerika atau Anglo-Saxon?',
    answer:
      'Ini adalah sistem yang menggunakan huruf A sampai G untuk mewakili not musik. Ini adalah standar dalam musik modern dan jazz. Dalam sistem ini, A=La, B=Si, C=Do, D=Re, E=Mi, F=Fa, dan G=Sol.',
  },
  {
    question: 'Mengapa B disebut H di Jerman?',
    answer:
      "Karena evolusi grafis abad pertengahan dari 'B-quadratum'. Di negara-negara berbahasa Jerman, huruf H disediakan untuk B natural, sedangkan huruf B digunakan secara eksklusif untuk Bes (B-flat).",
  },
  {
    question: "Apa itu 'C tengah' dalam notasi ilmiah?",
    answer:
      'C tengah (tuts C di tengah piano 88 tuts) adalah C4 dalam standar ANSI/Internasional. Dalam sistem Perancis-Belgia yang banyak digunakan di konservatori, ini disebut Do3.',
  },
  {
    question: 'Apa artinya jika dua not bersifat enharmonik?',
    answer:
      'Artinya mereka memiliki nama yang berbeda tetapi mewakili suara fisik yang sama dan dimainkan pada tuts piano yang sama. Misalnya, C-kres (C#) dan Des (Db) adalah not enharmonik.',
  },
  {
    question: 'Berapa frekuensi standar A4?',
    answer:
      'Frekuensi standar internasional adalah 440 Hz (standar ISO 16). Ini adalah referensi universal untuk menyetem orkestra, instrumen, dan synthesizer digital.',
  },
];

const howToData = [
  {
    name: 'Pilih oktav',
    text: 'Gunakan pemilih numerik di bagian atas untuk menunjukkan oktav piano mana yang ingin Anda gunakan (default adalah oktav 4, yaitu oktav tengah).',
  },
  {
    name: 'Tekan sebuah not pada piano',
    text: 'Klik atau ketuk tuts apa pun pada piano interaktif untuk melihat informasi teknis dan nomenklaturnya.',
  },
  {
    name: 'Bandingkan sistemnya',
    text: 'Lihat panel bawah untuk melihat apa nama not tersebut dalam sistem Latin, Anglo-Saxon, dan Jermanik secara bersamaan.',
  },
  {
    name: 'Dengarkan dan verifikasi',
    text: 'Tekan tombol "Dengarkan" untuk mendengar frekuensi tepat dari not yang dipilih dan mengonfirmasi nada musikalnya.',
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
    octaveLabel: 'Oktav Ilmiah (C4 = C Tengah):',
    systemsTitle: 'Sistem Penamaan',
    systemLatino: 'Latin (Solfège)',
    systemAnglo: 'Anglo-Saxon (Modern)',
    systemGerman: 'Jermanik (Jerman)',
    sciNotationTitle: 'Notasi Ilmiah',
    systemAnsi: 'Internasional (ANSI)',
    systemFranco: 'Perancis-Belgia',
    systemEnharmonic: 'Enharmonik Berguna',
    techTitle: 'Data Teknis & Gelombang',
    btnPlay: 'Dengarkan',
    btnCopy: 'Salin Info',
    initialTitle: 'Pilih sebuah not pada piano',
    copyDone: 'Disalin!',
    copyLabelNote: 'Not',
    copyLabelGerman: 'Sistem Jerman',
    copyLabelFreq: 'Frekuensi',
    copyLabelAnsi: 'Oktav Ilmiah',
    copyLabelUrl: 'URL',
    naLabel: 'N/A',
  },
  seo: [
    {
      type: 'summary',
      title: 'Penerjemah Not Musik Multibahasa',
      items: [
        '<strong>3 sistem secara bersamaan</strong>: Latin, Anglo-Saxon, dan Jermanik dalam sekejap.',
        '<strong>Piano interaktif</strong>: Klik tuts mana saja untuk melihat semua kesetaraannya.',
        '<strong>Frekuensi tepat</strong>: Setiap not menunjukkan Hz-nya sesuai standar ISO 16.',
        '<strong>Enharmonik</strong>: Secara otomatis mengidentifikasi not dengan nama ganda.',
      ],
    },
    {
      type: 'title',
      text: 'Memahami kesetaraan not musik di berbagai sistem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Musik adalah bahasa universal, tetapi penulisan dan nomenklaturnya sangat bervariasi tergantung pada wilayah geografis dan konteks akademik. Sementara negara-negara berbahasa Latin dan tradisi klasik Eropa mendominasi dengan sistem Latin (Do, Re, Mi...), musik modern, jazz, dan dunia Anglo-Saxon telah menstandarkan notasi Amerika (C, D, E...). Selain itu, ada kekhasan sejarah di negara-negara yang dipengaruhi Jermanik di mana B natural disebut H dan Bes adalah B.',
    },
    {
      type: 'title',
      text: 'Tiga sistem penamaan musik utama',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Sistem Latin (Solfège):</strong> Digunakan di Spanyol, Italia, Perancis, dan sebagian besar Amerika Latin. Berdasarkan himne untuk St. Yohanes Pembaptis oleh Guido d'Arezzo. Menggunakan Do, Re, Mi, Fa, Sol, La, Si.",
        '<strong>Notasi Amerika (Anglo-Saxon):</strong> Standar dunia untuk jazz, pop, dan rock. Menetapkan tujuh huruf pertama alfabet (A-G) mulai dari A=La. C adalah huruf untuk Do.',
        '<strong>Sistem Jermanik:</strong> Digunakan di Jerman, Austria, dan negara-negara Eropa utara. Perbedaan utamanya adalah penggunaan H untuk B natural dan B untuk Bes.',
      ],
    },
    {
      type: 'title',
      text: 'Sejarah aneh B dan H dalam notasi Jerman',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Banyak pemula bertanya-tanya mengapa di Jerman not Si ditulis dengan H. Asalnya terletak pada kesalahan penyalin abad pertengahan. Dalam sistem huruf lama, huruf B digunakan untuk Si. Ada dua varian: <em>B quadratum</em> (persegi, untuk B natural) dan <em>B rotundum</em> (bulat, untuk Bes).",
    },
    {
      type: 'paragraph',
      html: 'Seiring waktu, bentuk <em>B quadratum</em> semakin menyerupai huruf h kecil di naskah-naskah Jerman. Evolusi grafis ini dikonsolidasikan dalam percetakan dan melahirkan nomenklatur Jerman saat ini: H untuk B natural dan B untuk Bes. Menariknya, pembedaan ini memungkinkan komposer seperti J.S. Bach untuk menandatangani karya mereka dengan motif "B-A-C-H" yang terkenal (Bes - A - C - B natural).',
    },
    {
      type: 'title',
      text: 'Tabel perbandingan kesetaraan not natural',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Not (Latin)', 'Notasi (Anglo)', 'Jerman (Jermanik)', 'Asal'],
      rows: [
        ['Do', 'C', 'C', 'Frekuensi dasar'],
        ['Re', 'D', 'D', 'Not kedua'],
        ['Mi', 'E', 'E', 'Not ketiga'],
        ['Fa', 'F', 'F', 'Not keempat'],
        ['Sol', 'G', 'G', 'Not kelima'],
        ['La', 'A', 'A', 'Not penyeteman'],
        ['Si', 'B', 'H', 'Varian besar'],
      ],
    },
    {
      type: 'title',
      text: 'Kres, Mol, dan konsep Enharmoni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam musik Barat kita menggunakan 12 suara per oktav. Lima not tambahan diwakili oleh alterasi: kres (#) dan mol (b). Kres menaikkan not setengah nada, sedangkan mol menurunkannya setengah nada.',
    },
    {
      type: 'paragraph',
      html: 'Ini membawa kita ke <strong>Enharmoni</strong>: dua not yang memiliki nama berbeda tetapi suaranya persis sama dan menempati tuts piano yang sama. Misalnya, C# dan Db adalah enharmonik. Kalkulator kami secara otomatis menyoroti kesetaraan ini, yang sangat penting untuk memahami mengapa sebuah partitur mungkin meminta F# sementara yang lain meminta Gb dalam tangga nada yang sama.',
    },
    {
      type: 'title',
      text: 'Oktav: Notasi Ilmiah vs Perancis-Belgia',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Notasi Ilmiah Internasional (ANSI): C tengah disebut C4. Ini adalah standar dalam synthesizer, DAW, dan perangkat lunak musik (MIDI).",
        'Notasi Perancis-Belgia: Digunakan secara luas di konservatori klasik. Dalam sistem ini, C tengah adalah Do3.',
        "Sistem Helmholtz: Menggunakan huruf besar, huruf kecil, dan tanda petik (C, c, c', c''). Lebih umum dalam literatur teknik lama dan akustik Jerman.",
      ],
    },
    {
      type: 'tip',
      title: 'Tips untuk produser',
      html: 'Hati-hati dengan DAW: beberapa produsen (seperti Yamaha) menganggap C tengah sebagai C3, sementara yang lain (seperti Roland atau FL Studio) menganggapnya C4 atau bahkan C5. Jika synthesizer Anda terdengar selisih satu oktav, verifikasi standar notasi ilmiah mana yang diikuti oleh perangkat lunak tersebut.',
    },
    {
      type: 'title',
      text: 'Frekuensi dalam Hertz (Hz) dan penyeteman standar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dari perspektif fisik, setiap not sesuai dengan frekuensi tertentu yang diukur dalam hertz (siklus per detik). Standar penyeteman internasional (ISO 16) menetapkan bahwa <strong>A4</strong> bergetar tepat pada <strong>440 Hz</strong>.',
    },
    {
      type: 'list',
      items: [
        'Kalibrasi synthesizer analog yang mungkin mengalami drift teknis.',
        'Menyesuaikan equalizer bedah dalam mixing untuk menghilangkan resonansi pada not tertentu.',
        'Memahami hubungan antara titi nada fisik dan persepsi musikal.',
        'Mengonversi sampel secara presisi dengan menyesuaikan pitch dalam cents.',
      ],
    },
    {
      type: 'title',
      text: 'Kasus penggunaan praktis untuk kalkulator ini',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Terjemahan instan antar notasi untuk musisi sesi yang harus membaca grafik dalam bahasa Inggris.',
          con: 'Sistem ini tidak mempertimbangkan mikrotonalitas atau penyeteman non-Barat.',
        },
        {
          pro: 'Identifikasi not enharmonik untuk meningkatkan ejaan musikal dalam partitur.',
          con: 'Pemutaran audio adalah gelombang murni, tidak memiliki timbre instrumen asli.',
        },
        {
          pro: 'Konversi oktav Ilmiah ke Perancis-Belgia untuk siswa harmoni.',
          con: 'Hanya mengasumsikan penyeteman standar A4=440Hz, bukan penyeteman Barok (415 Hz).',
        },
        {
          pro: 'Visualisasi piano intuitif yang memudahkan pembelajaran tangga nada dan akord.',
          con: 'Membutuhkan pengetahuan teori dasar untuk menginterpretasikan alterasi mana yang terbaik dalam setiap konteks.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referensi glosarium teknis',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Setengah nada (Semitone): Jarak minimum antara dua not dalam sistem Barat (misalnya, dari E ke F).',
        'Nada (Tone): Jarak yang setara dengan dua semitone (misalnya, dari C ke D).',
        'Notasi: Sistem singkatan untuk mewakili not dan akord.',
        'Hertz (Hz): Satuan ukuran frekuensi suara.',
        'Oktav: Interval yang memisahkan dua not di mana frekuensi yang satu adalah dua kali lipat dari yang lain.',
        'Tanda mula (Key signature): Kumpulan alterasi di awal paranada yang menentukan nada dasar.',
      ],
    },
  ],
};
