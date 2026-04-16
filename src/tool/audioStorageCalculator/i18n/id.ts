import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'kalkulator-penyimpanan-audio';
const title = 'Kalkulator Penyimpanan Audio: Ukuran File WAV, FLAC, dan MP3';
const description =
  'Estimasi ruang disk yang dibutuhkan untuk rekaman audio Anda dalam format WAV, FLAC, dan MP3 berdasarkan sample rate dan bit depth.';

const faqData = [
  {
    question: 'Berapa banyak ruang yang dibutuhkan untuk satu jam audio pada 44.1 kHz 16-bit?',
    answer:
      'Dalam format stereo (kualitas CD), satu jam audio membutuhkan sekitar 635 MB ruang disk yang tidak dikompresi (WAV/AIFF).',
  },
  {
    question: 'Mengapa format WAV memakan begitu banyak ruang?',
    answer:
      'WAV adalah format "lossless" yang tidak dikompresi, artinya ia menyimpan setiap sampel audio secara individual untuk menjaga kesetiaan maksimum tanpa mengurangi data.',
  },
  {
    question: 'Apa yang lebih baik untuk menghemat ruang: FLAC atau MP3?',
    answer:
      'FLAC menghemat hingga 50% ruang tanpa mengurangi kualitas (kompresi lossless). MP3 menghemat hingga 80-90% tetapi menghapus informasi audio yang tidak terdengar (kompresi lossy).',
  },
  {
    question: 'Bagaimana cara menghitung ruang yang dibutuhkan untuk podcast selama 2 jam?',
    answer:
      'Jika Anda merekam dalam format Mono pada 48 kHz / 24-bit, Anda akan membutuhkan sekitar 988 MB. Kalkulator ini memungkinkan Anda menyesuaikan parameter ini secara tepat untuk peralatan Anda.',
  },
];

const howToData = [
  {
    name: 'Konfigurasi audio',
    text: 'Pilih sample rate (kHz), bit depth, dan jumlah saluran.',
  },
  {
    name: 'Masukkan durasi',
    text: 'Masukkan jam, menit, dan detik dari estimasi durasi rekaman Anda.',
  },
  {
    name: 'Analisis hasil',
    text: 'Lihat ukuran hasil dalam MB atau GB dan bandingkan dengan berbagai format seperti FLAC atau MP3.',
  },
  {
    name: 'Evaluasi kapasitas',
    text: 'Periksa berapa persentase penyimpanan kartu SD atau hard drive Anda yang akan digunakan oleh rekaman tersebut.',
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

export const content: ToolLocaleContent<AudioStorageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi Teknis',
  bibliography: [
    {
      name: 'Kedalaman bit audio – Wikipedia',
      url: 'https://id.wikipedia.org/wiki/Kedalaman_bit_audio',
    },
    {
      name: 'Laju sampel – Wikipedia',
      url: 'https://id.wikipedia.org/wiki/Laju_sampel',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Konfigurasi Audio',
    labelHz: 'Sample Rate (kHz)',
    labelBits: 'Bit Depth',
    labelChannels: 'Saluran',
    labelDuration: 'Durasi Rekaman',
    labelHours: 'Jam',
    labelMinutes: 'Menit',
    labelSeconds: 'Detik',
    labelCapacity: 'Penyimpanan Tersedia (dalam GB)',
    toggleLabelSpace: 'Hitung berapa banyak yang bisa saya rekam dengan ruang kosong saya',
    labelComparison: 'Perbandingan Format & Penyimpanan',
    thFormat: 'Format',
    thQuality: 'Kualitas',
    thSize: 'Estimasi Ukuran',
    qualityWav: 'Tanpa Kompresi (Lossless)',
    qualityFlac: 'Kompresi Lossless',
    qualityMp3High: 'Kualitas Tinggi (Lossy)',
    qualityMp3Std: 'Kualitas Standar / Suara',
    labelDevices: 'Persentase yang digunakan pada perangkat umum',
    device32: 'Kartu SD 32GB',
    device128: 'Penyimpanan 128GB',
    device1tb: 'Hard Drive 1TB',
    btnCopy: 'Salin Ringkasan',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Standar Video)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Resolusi Tinggi)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standar)',
    optBits24: '24-bit (Produser / Film)',
    optBits32: '32-bit (Floating Point)',
    optCh1: 'Mono (1 saluran)',
    optCh2: 'Stereo (2 saluran)',
    optCh6: '5.1 Surround (6 saluran)',
    optCh8: '7.1 Surround (8 saluran)',
    labelDurationSet: 'Durasi dikonfigurasi: {time}',
    labelRecordingPossible: 'Rekaman dimungkinkan dengan konfigurasi {gb} GB',
    toggleLabelTime: 'Kembali ke perhitungan durasi',
    labelSpaceAvailable: 'Ruang Tersedia',
    copyDone: 'Ringkasan Disalin!',
    summarySpace:
      'Rekaman selama {t} pada {bits}-bit/{hz} dalam mode {channels} akan memakan waktu sekitar {result}.',
    summaryTime:
      'Dengan {space} GB tersedia, Anda dapat merekam hingga {result} audio pada {bits}-bit/{hz} {channels}.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Kalkulator Penyimpanan Suara Digital',
      items: [
        '<strong>WAV ke MP3</strong>: Hitung ukuran file dengan dan tanpa kompresi.',
        '<strong>Resolusi Audio</strong>: Sesuaikan frekuensi (kHz) and bit (16/24/32).',
        '<strong>Perhitungan terbalik</strong>: Berapa banyak yang bisa saya rekam dengan sisa ruang saya?',
        '<strong>Format Profesional</strong>: Estimasi untuk FLAC dan mastering 192kHz.',
      ],
    },
    { type: 'title', text: 'Bagaimana ukuran rekaman audio dihitung?', level: 2 },
    {
      type: 'paragraph',
      html: 'Ukuran file audio digital yang tidak dikompresi (seperti WAV atau AIFF) bergantung pada tiga faktor teknis mendasar: <strong>Sample Rate</strong> — seberapa sering per detik gelombang suara "diukur" (misalnya 44.1 kHz atau 48 kHz); <strong>Bit Depth</strong> — resolusi setiap pengukuran, dengan rentang dinamis yang lebih besar dan noise yang lebih rendah pada bit yang lebih tinggi; dan <strong>Saluran</strong> — apakah rekaman tersebut Mono (1), Stereo (2) atau Multisaluran (Surround). Rumus matematika standarnya adalah <strong>Bitrate</strong>; dikalikan dengan durasi dalam detik, akan menghasilkan total ukuran file mentah.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Kualitas CD',
          description:
            '16-bit / 44.1 kHz. Membutuhkan sekitar 10.1 MB per menit dalam format stereo. Standar bersejarah dalam industri musik.',
        },
        {
          title: 'Rekaman Pro',
          description:
            '24-bit / 48 kHz. Standar untuk video dan film. Membutuhkan sekitar 16.5 MB per menit. Lebih banyak headroom untuk mixing.',
        },
        {
          title: 'Resolusi Tinggi',
          description:
            '24-bit / 96 kHz. Digunakan dalam mastering. Menggandakan ukuran rekaman standar hingga 33 MB per menit.',
        },
      ],
    },
    { type: 'title', text: 'Mengapa audio 24-bit memakan ruang 50% lebih banyak daripada 16-bit?', level: 2 },
    {
      type: 'paragraph',
      html: 'Setiap sampel audio dalam 16-bit menggunakan 2 byte (16 ÷ 8) untuk menyimpan amplitudo. Audio dalam 24-bit menggunakan 3 byte per sampel. Ini berarti bahwa, untuk sample rate yang sama, file 24-bit akan berukuran tepat 50% lebih besar daripada file 16-bit. Jika rekaman satu jam pada 16-bit/44.1kHz memakan 635 MB, rekaman yang sama pada 24-bit/44.1kHz akan meningkat menjadi 953 MB.',
    },
    {
      type: 'tip',
      title: 'Apakah ruang ekstra itu sepadan?',
      html: 'Meskipun memakan lebih banyak ruang, audio 24-bit menawarkan rentang dinamis 144 dB dibandingkan 96 dB untuk 16-bit. Ini memberikan "noise floor" yang jauh lebih rendah, memungkinkan sinyal yang lebih lemah direkam tanpa noise latar belakang menjadi masalah — sangat penting selama proses mixing dan mastering profesional.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: Dampak pada disk', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong> adalah format tanpa kompresi yang menjaga setiap bit dari rekaman asli tetapi merupakan yang terberat. <strong>FLAC</strong> menerapkan kompresi lossless, mengurangi ukuran asli sebesar 40-60% tanpa mengorbankan kualitas. <strong>MP3 / AAC</strong> menerapkan kompresi lossy, menghilangkan frekuensi yang tidak terdengar; sebuah MP3 pada 320 kbps memakan sekitar 22% dari WAV asli.',
    },
    {
      type: 'table',
      headers: ['Kualitas', 'Frekuensi', 'Bit', 'MB per Menit (Stereo)'],
      rows: [
        ['Panggilan Telepon', '8 kHz', '8-bit', '0.94 MB'],
        ['Radio FM', '32 kHz', '16-bit', '7.32 MB'],
        ['CD Asli', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Studio Video', '48 kHz', '24-bit', '16.48 MB'],
        ['High Fidelity', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Rumus perhitungan untuk teknisi', level: 2 },
    {
      type: 'paragraph',
      html: 'Jika Anda perlu melakukan perhitungan secara manual atau menerapkannya dalam perangkat lunak Anda sendiri, ini adalah logika yang diikuti oleh kalkulator kami:',
    },
    {
      type: 'code',
      ariaLabel: 'Logika perhitungan penyimpanan audio',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Kasus penggunaan untuk alat ini', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Hindari kehabisan ruang pada perekam portabel Anda selama wawancara panjang.',
        'Studio Musik: Hitung berapa GB ruang kosong yang Anda butuhkan sebelum membuka sesi 40 track pada 96kHz.',
        'Digital Sound Engineering: Verifikasi bahwa bitrate transfer kompatibel dengan perangkat keras Anda.',
        'Post-produksi Film: Estimasi ukuran pengambilan gambar multisaluran 5.1 untuk pengiriman file jaringan.',
        'Pengarsipan: Tentukan kapasitas yang dibutuhkan untuk mendigitalkan koleksi kaset analog pada kualitas Master.',
      ],
    },
  ],
};
