import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'kalkulator-bpm-ke-ms';
const title = 'Kalkulator BPM ke Milidetik untuk Delay dan Reverb';
const description =
  'Konversikan tempo proyek Anda (BPM) menjadi waktu delay (ms) dan frekuensi (Hz) yang akurat. Alat penting untuk mengatur delay, reverb, dan kompresor dengan presisi ritmik.';

const faqData = [
  {
    question: 'Apa itu Pre-delay dalam sebuah reverb?',
    answer:
      'Pre-delay adalah waktu antara suara langsung (sumber) dan awal dari ekor reverb. Mengaturnya secara ritmik memungkinkan sumber asli tetap jernih sebelum efek spasial mengambil alih — sangat penting untuk vokal dan perkusi.',
  },
  {
    question: 'Bagaimana cara kerja Tap Tempo?',
    answer:
      'Tap Tempo mendeteksi tempo dengan mengklik secara ritmik mengikuti sebuah lagu. Setiap klik dihitung waktunya dan sistem akan merata-ratakan intervalnya untuk memberikan BPM yang tepat. Ini adalah cara tercepat untuk menyinkronkan efek ke trek eksternal.',
  },
  {
    question: 'Mengapa menggunakan milidetik alih-alih sinkronisasi otomatis?',
    answer:
      "Ada tiga alasan utama: menggunakan perangkat keras analog tanpa MIDI, menyempurnakan pre-delay agar reverb 'bernapas', dan penyesuaian 'groove' di mana efek digeser sedikit keluar dari grid untuk menghindari kesan statis dan robotik.",
  },
  {
    question: 'Untuk apa nilai Hz ritmik digunakan?',
    answer:
      'Nilai Hertz memberi tahu Anda berapa kali sesuatu terjadi per detik. Sangat penting untuk mengonfigurasi osilator LFO, kecepatan sapuan phaser, atau modulasi filter pada synthesizer yang tidak memiliki sinkronisasi tempo bawaan.',
  },
];

const howToData = [
  {
    name: 'Masukkan BPM',
    text: 'Ketik tempo proyek Anda di kolom tengah atau gunakan tombol Tap Tempo.',
  },
  {
    name: 'Temukan subdivisi',
    text: 'Cari not yang Anda butuhkan (seperempat, seperdelapan, dll.) pada tabel not biasa, bertitik (dotted), atau triplet.',
  },
  {
    name: 'Salin nilainya',
    text: 'Klik ikon salin di sebelah nilai milidetik untuk menempelkannya langsung ke plugin atau perangkat keras Anda.',
  },
  {
    name: 'Atur Pre-delay',
    text: 'Gunakan bagian bawah untuk nilai ultra-pendek, ideal untuk memisahkan reverb dari vokal utama.',
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

export const content: ToolLocaleContent<BpmCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi teknis',
  bibliography: [
    {
      name: 'The Art of Mixing: A Visual Guide to Recording, Engineering, and Production',
      url: 'https://exellon.net/book/The%20Art%20Of%20Mixing%20A%20Visual%20Guide%20To%20Recording%20Engineering%20And%20Production%20(1997)%20-%20David%20Gibson%20Mix%20Books.pdf',
    },
    {
      name: 'BPM to MS Conversion Formula — Tuneform',
      url: 'https://tuneform.com/tools/time-tempo-bpm-to-milliseconds-ms',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'TEMPO (BPM)',
    btnTap: 'TAP TEMPO',
    sectionDelay: 'Waktu Delay',
    sectionDotted: 'Not Bertitik (Dotted)',
    sectionTriplets: 'Not Triplet',
    sectionReverb: 'Desain Reverb (Pre-delay)',
    colNote: 'Not',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-delay</strong> memisahkan attack asli dari ekor reverb untuk mendapatkan kejelasan.',
    copyAriaMs: 'Salin milidetik',
    copyAriaPreDelay: 'Salin pre-delay',
    copyFeedback: 'Tersalin!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Fitur kalkulator',
      items: [
        'Perhitungan instan untuk not biasa, bertitik, dan triplet',
        'Nilai milidetik dan Hz untuk setiap subdivisi ritmik',
        'Bagian Pre-delay untuk desain reverb dengan presisi musikal',
        'Tap Tempo: deteksi BPM dengan mengetuk mengikuti musik',
        'Salin dengan satu klik ke clipboard untuk DAW atau plugin apa pun',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Kalkulator BPM ke Milidetik sangat penting?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam produksi musik modern, presisi ritmik membedakan mix amatir dari profesional. Meskipun sebagian besar DAW seperti Ableton Live, FL Studio, atau Logic Pro menyertakan sinkronisasi otomatis untuk efek mereka, ada banyak situasi di mana kontrol manual jauh lebih unggul.',
    },
    {
      type: 'title',
      text: 'Pentingnya Pre-delay dalam Reverb',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salah satu kegunaan paling kritis dari alat ini adalah menyesuaikan <strong>pre-delay</strong>. Jika Anda menerapkan reverb pada vokal tanpa pre-delay, ekor efek dimulai secara instan, mengaburkan konsonan dan mengurangi kejernihan. Dengan menghitung pre-delay ritmik (seperti not 1/64 atau 1/128), Anda membiarkan vokal asli bernapas sebelum ruang akustik buatan mengambil alih. Ini menciptakan kesan kedalaman tanpa mengorbankan kehadiran sumber suara.',
    },
    {
      type: 'title',
      text: 'Delay Analog dan Perangkat Keras Eksternal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda mengoleksi pedal delay analog atau synthesizer vintage, Anda tahu banyak yang tidak memiliki input MIDI clock. Mengatur tape delay secara manual membutuhkan pengetahuan tepat tentang berapa milidetik yang sesuai dengan not seperdelapan atau seperempat bertitik. Kalkulator kami memberikan nilai-nilai tersebut secara instan, memungkinkan Anda mengatur perangkat keras dengan presisi bedah.',
    },
    {
      type: 'title',
      text: 'Efek di Luar Grid dan Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Terkadang kesempurnaan matematis terdengar membosankan. Banyak produser menggunakan nilai milidetik sebagai titik awal dan kemudian menggesernya sedikit ke atas atau ke bawah. Menggeser delay 5 hingga 10 ms keluar dari grid dapat menambah <em>swing</em> manusiawi atau <em>groove</em> unik yang tidak akan pernah bisa ditiru oleh kuantitasasi yang kaku.',
    },
    {
      type: 'title',
      text: 'Sinkronisasi Kompresi dan LFO',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tahukah Anda bahwa waktu <strong>Attack</strong> dan <strong>Release</strong> dari sebuah kompresor juga bisa bersifat ritmik? Mengatur release kompresor bus drum Anda berakhir tepat sebelum pukulan kick berikutnya menciptakan efek "pumping" atau <em>bernapas</em> yang memperkuat ritme lagu. Demikian pula, nilai Hz sangat penting untuk mengonfigurasi osilator frekuensi rendah (LFO) pada synth tanpa sinkronisasi tempo bawaan.',
    },
    {
      type: 'tip',
      title: 'Cara menggunakan Tap Tempo',
      html: 'Fitur <strong>Tap Tempo</strong> ideal untuk situasi live atau saat Anda mendengarkan trek eksternal yang temponya tidak Anda ketahui. Cukup klik tombol secara ritmik mengikuti denyut musik. Kami merekomendasikan setidaknya 4 atau 5 ketukan agar algoritme dapat merata-ratakan nilai dengan lebih akurat.',
    },
    {
      type: 'title',
      text: 'Rumus Matematika Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rumus dasarnya sederhana: <code>ms = 60.000 / BPM</code>. Dari sana, pengali diterapkan untuk setiap subdivisi.',
    },
    {
      type: 'list',
      items: [
        'Not biasa: berdasarkan pembagian biner (1, 0.5, 0.25, dst.).',
        'Bertitik (Dotted): kalikan nilai dasar dengan 1.5.',
        'Triplet: kalikan nilai dasar dengan 0.667 (2/3).',
      ],
    },
  ],
};
