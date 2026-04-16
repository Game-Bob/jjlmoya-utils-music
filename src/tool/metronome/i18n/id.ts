import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronom';
const title = 'Metronom Online: Presisi Tinggi Visual dan Audio';
const description =
  'Metronom online gratis untuk musisi. Presisi milidetik dengan Web Audio API. Visual, audio dan Tap Tempo. Sempurna untuk latihan instrumen.';

const faqData = [
  {
    question: 'Apakah metronom ini cukup akurat untuk penggunaan profesional?',
    answer:
      'Ya. Kami menggunakan Web Audio API, yang menjadwalkan suara langsung pada jam perangkat keras perangkat. Ini menghindari mikro-delay yang biasa terjadi pada aplikasi web lain dan menjamin presisi milidetik, bahkan selama sesi yang lama.',
  },
  {
    question: 'Apa itu Tap Tempo dan bagaimana cara menggunakannya?',
    answer:
      'Ini adalah fitur yang memungkinkan Anda menghitung BPM dengan mengetuk secara ritmis. Cukup klik tombol \'TAP\' atau tekan bilah spasi sesuai ketukan musik yang sedang Anda dengarkan, dan dapatkan tempo tepatnya secara instan.',
  },
  {
    question: 'Bisakah saya mengubah tanda birama dan aksen?',
    answer:
      'Ya, Anda dapat mengonfigurasi tanda birama yang berbeda (2/4, 3/4, 4/4, 6/8, dll.) dan menyesuaikan aksen ketukan agar sesuai dengan gaya musik yang sedang Anda latih.',
  },
  {
    question: 'Mengapa saya tidak bisa mendengar apa pun di iPhone atau iPad saya?',
    answer:
      'Pada perangkat iOS, teknologi Web Audio menghormati sakelar bisu fisik. Pastikan ponsel Anda tidak dalam mode senyap dan kencangkan volume media untuk mendengar klik.',
  },
];

const howToData = [
  {
    name: 'Atur BPM',
    text: 'Gunakan slider atau tombol fine-tune untuk mengatur kecepatan yang diinginkan dalam ketukan per menit (BPM).',
  },
  {
    name: 'Konfigurasi tanda birama',
    text: 'Pilih jumlah ketukan (misal: 4/4 atau 3/4) agar metronom memberikan aksen dengan benar pada ketukan pertama setiap birama.',
  },
  {
    name: 'Sinkronkan dengan musik eksternal (Tap)',
    text: 'Jika Anda perlu menemukan tempo lagu yang sedang Anda dengarkan, ketuk tombol TAP bersama dengan drum atau denyut utama.',
  },
  {
    name: 'Mulai berlatih',
    text: 'Tekan tombol mulai. Indikator visual akan membantu Anda menjaga ketukan bahkan jika Anda tidak dapat mendengar suara dengan jelas di lingkungan Anda.',
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

export const content: ToolLocaleContent<MetronomeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    {
      name: 'Web Audio API – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'AudioContext – MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext',
    },
    {
      name: 'A Tale of Two Clocks – Scheduling Web Audio with Precision (web.dev)',
      url: 'https://web.dev/articles/audio-scheduling',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTempo: 'Tempo',
    labelBpmMin: '40 BPM',
    labelBpmMax: '240 BPM',
    labelTime: 'Tanda Birama',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Tidak ada suara?',
    warningText:
      'Jika Anda menggunakan iPhone/iPad, pastikan sakelar bisu samping tidak aktif. Teknologi Web Audio menghormati mode senyap sistem pada banyak perangkat.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Fitur metronom',
      items: [
        'Mesin Web Audio API — presisi milidetik, tanpa drift',
        'Tap Tempo: hitung BPM dengan mengetuk sesuai ketukan',
        'Tanda birama yang dapat dikonfigurasi dari 1 hingga 12 ketukan dengan aksen otomatis',
        'Indikator visual kontras tinggi dengan efek riak (ripple)',
        'Kontrol volume dan tombol fine-tune ±1/±5 BPM',
      ],
    },
    {
      type: 'title',
      text: 'Presisi Ritmik di Browser Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Selamat datang di <strong>Metronom Online Definitif</strong>. Kami membangun alat ini dengan satu tujuan: <em>keandalan</em>. Tidak seperti metronom web lain yang menderita "drift" (penundaan kumulatif kecil) karena beban prosesor, mesin suara kami dibangun langsung pada <strong>Web Audio API</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Ini berarti pulsa suara dijadwalkan sebelumnya pada jam perangkat keras perangkat Anda, menjamin <strong>presisi milidetik yang tak tergoyahkan</strong>, bahkan jika Anda meminimalkan tab atau komputer Anda sedang sibuk.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Visualisasi Jelas',
          description:
            'Indikator visual yang besar dan kontras tinggi dengan efek "ripple". Dirancang untuk dirasakan dengan penglihatan tepi Anda, membiarkan Anda tetap fokus pada lembaran musik atau instrumen tanpa kehilangan ketukan.',
        },
        {
          title: 'Smart Tap Tempo',
          description:
            'Mendengarkan lagu dan ingin tahu kecepatannya? Tekan tombol TAP atau tombol Spasi bersama dengan musik. Algoritme akan menghitung rata-rata tepat dari ketukan Anda.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Panduan Master: Cara Berlatih dengan Metronom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Metronom bukan sekadar jam yang berdetak; itu adalah hakim paling tidak memihak atas teknik Anda. Berikut adalah metodologi yang terbukti untuk meningkatkan kecepatan dan kebersihan permainan Anda:',
    },
    {
      type: 'title',
      text: '1. Metode Tangga',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika tujuan Anda adalah bermain pada <strong>120 BPM</strong>, jangan langsung mencoba pada kecepatan itu. Sangat mudah untuk merasa frustrasi; kemajuan membutuhkan strategi.',
    },
    {
      type: 'list',
      items: [
        'Mulai pada 50% dari kecepatan target Anda (misal: 60 BPM).',
        'Mainkan bagian tersebut dengan sempurna 3 kali berturut-turut. Jika Anda meleset satu nada, penghitung akan diulang.',
        'Naikkan metronom hanya sebanyak 5 BPM.',
        'Ulangi sampai Anda mencapai kecepatan target.',
      ],
    },
    {
      type: 'title',
      text: '2. Pemindahan Aksen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gunakan pemilih tanda birama kami untuk menggeser aksen. Melatih bagian 4/4 dengan metronom yang diatur ke 3/4 berarti aksen (klik tajam) jatuh di tempat yang berbeda dalam pemenggalan kalimat Anda, memaksa Anda untuk menginternalisasi waktu absolut daripada mengandalkan ketukan "satu".',
    },
    {
      type: 'title',
      text: '3. Keheningan Strategis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Teknik tingkat lanjut adalah mengatur metronom pada setengah kecepatan (misal: 60 BPM jika Anda bermain di 120) dan merasakan setiap klik sebagai ketukan 1 dan 3. Bahkan lebih sulit: rasakan hanya sebagai ketukan lemah (off-beats). Ini membangun <strong>jam internal</strong> Anda.',
    },
    {
      type: 'title',
      text: 'Fakta Menarik tentang Tempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tempo secara radikal memengaruhi persepsi emosional terhadap musik.',
    },
    {
      type: 'table',
      headers: ['Istilah Italia', 'Perkiraan BPM', 'Karakter'],
      rows: [
        ['Largo', '40 – 60', 'Lambat dan khidmat'],
        ['Andante', '76 – 108', 'Kecepatan jalan kaki, tenang'],
        ['Allegro', '120 – 156', 'Cepat, cerah dan ceria'],
        ['Presto', '168 – 200', 'Sangat cepat, hingar bingar'],
      ],
    },
    {
      type: 'title',
      text: 'Teknologi di Balik Metronom Ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ini bukan pemutar MP3 yang berulang-ulang. Kami menghasilkan gelombang sinus murni secara real-time. Osilator utama menghasilkan nada <strong>1000 Hz</strong> untuk aksen dan <strong>800 Hz</strong> untuk ketukan lemah, dengan amplop ADSR ultra-pendek untuk pukulan maksimal. Ini memastikan serangan suara instan.',
    },
    {
      type: 'paragraph',
      html: 'Apakah Anda seorang drummer yang mengunci groove, seorang pianis yang melatih tangga nada, atau seorang gitaris yang menyempurnakan solo, metronom ini adalah mitra bisu Anda (sampai Anda menekan tombol putar).',
    },
    {
      type: 'tip',
      title: 'Tidak bisa mendengar suara di ponsel?',
      html: 'Jika Anda menggunakan iPhone/iPad, pastikan <strong>sakelar bisu samping</strong> tidak diaktifkan. Teknologi Web Audio menghormati mode senyap sistem pada banyak perangkat.',
    },
  ],
};
