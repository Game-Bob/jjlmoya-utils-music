import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'konverter-frekuensi-ke-nota';
const title = 'Konverter Frekuensi ke Nota Musik';
const description =
  'Konversikan hertz ke nota musik secara instan. Identifikasi nota tepat dari frekuensi apa pun, ukur deviasi dalam cents, dengarkan nada murni, dan stem synthesizer serta sampler dengan presisi.';

const faqData = [
  {
    question: 'Bagaimana cara mengetahui frekuensi 440 Hz sesuai dengan nota apa?',
    answer:
      '440 Hz sesuai persis dengan A4, nota referensi stem universal. Ini adalah nada A di atas C tengah pada piano. Frekuensi ini telah menjadi standar ISO 16 sejak 1939 dan digunakan untuk menyetem instrumen orkestra di seluruh dunia.',
  },
  {
    question: "Apa artinya jika sebuah nota '15 cents di atas'?",
    answer:
      'Satu cent adalah seperseratus dari semitone. Berada 15 cents di atas sebuah nota berarti frekuensinya sedikit lebih tajam daripada nota yang tepat dalam temperamen merata. Pada synthesizer, Anda harus menerapkan -15 cents fine-tune untuk mengoreksinya.',
  },
  {
    question: 'Mengapa ada opsi referensi 432 Hz dan 444 Hz selain 440 Hz?',
    answer:
      'Konteks musik yang berbeda menggunakan referensi stem yang berbeda. 432 Hz populer di kalangan komunitas produksi tertentu. 444 Hz umum digunakan dalam rekaman musik awal Renaisans. Beberapa orkestra Eropa menyetem antara 441–444 Hz untuk suara yang lebih cerah.',
  },
  {
    question: 'Untuk apa keyboard piano interaktif digunakan?',
    answer:
      'Piano interaktif memungkinkan Anda mengidentifikasi nota secara visual pada keyboard dan juga memasukkan frekuensi dengan menekan tombol secara langsung. Menekan tombol akan memberikan frekuensi tepatnya dan memainkan nada sinus murni untuk perbandingan.',
  },
  {
    question: 'Bagaimana cara menggunakan harmonik yang ditunjukkan oleh kalkulator?',
    answer:
      'Harmonik (oktaf bawah dan atas) menunjukkan frekuensi yang terkait langsung dengan nota Anda. Berguna untuk menghindari konflik antara lapisan synthesizer, mengatur filter resonansi ke nota yang benar, atau memetakan sampel drum ke oktaf sampler yang tepat.',
  },
  {
    question: 'Mengapa mode dengar menghasilkan nada sinus daripada suara asli?',
    answer:
      'Nada sinus adalah gelombang murni yang hanya berisi frekuensi fundamental tanpa harmonik tambahan. Ini memungkinkan perbandingan yang bersih dengan instrumen asli tanpa warna timbre yang mengganggu penilaian stem. Ini adalah sinyal yang sama seperti yang dihasilkan oleh tuner jarum elektronik.',
  },
  {
    question: 'Bagaimana cara menghitung frekuensi sebuah nota musik?',
    answer:
      'Frekuensi dihitung menggunakan rumus logaritmik berdasarkan temperamen merata. Dimulai dari referensi A4 (440 Hz), setiap semitone naik diperoleh dengan mengalikan akar dua belas dari dua (~1,05946), dan setiap oktaf setara dengan menggandakan frekuensi.',
  },
  {
    question: 'Nota apa yang memiliki frekuensi 440 Hz?',
    answer:
      'Frekuensi 440 Hz adalah tepat nota A4. Ini adalah nota referensi standar yang digunakan oleh sebagian besar orkestra dan musisi kontemporer untuk menyetem instrumen mereka sejak pertengahan abad kedua puluh.',
  },
  {
    question: 'Apa perbedaan antara stem 440 Hz dan 432 Hz?',
    answer:
      '440 Hz adalah standar internasional (ISO 16). 432 Hz adalah stem alternatif yang lebih disukai oleh beberapa musisi karena alasan sonik subjektif, sering digunakan dalam musik meditasi, meskipun tidak ada bukti ilmiah tentang manfaat biologis yang jelas dibandingkan dengan 440 Hz.',
  },
];

const howToData = [
  {
    name: 'Masukkan frekuensi',
    text: 'Ketik frekuensi dalam hertz di kolom input utama. Hasilnya segera muncul dengan nama nota dan oktaf ilmiahnya.',
  },
  {
    name: 'Baca hasil dan meteran cents',
    text: 'Indikator tuner visual menunjukkan apakah frekuensi Anda di atas, di bawah, atau tepat pada nota. Nilai cents memberi tahu Anda seberapa banyak harus menyesuaikan fine-tune pada instrumen atau plugin Anda.',
  },
  {
    name: 'Gunakan harmonik untuk menyetem lapisan',
    text: 'Periksa frekuensi oktaf bawah dan atas untuk mengonfigurasi osilator tambahan, filter resonansi, atau lapisan perkusi tanpa konflik frekuensi.',
  },
  {
    name: 'Sesuaikan referensi A4',
    text: 'Ubah referensi A4 ke 432 Hz, 444 Hz, atau nilai khusus apa pun sehingga semua perhitungan konsisten dengan konteks proyek Anda.',
  },
  {
    name: 'Dengarkan nada referensi',
    text: 'Tekan tombol putar untuk menghasilkan nada sinus murni pada frekuensi yang dimasukkan dan stem instrumen asli Anda dengan pendengaran.',
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
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi teknis',
  bibliography: [
    {
      name: 'ISO 16:1975 — Acoustics — Standard tuning frequency',
      url: 'https://www.iso.org/standard/3601.html',
    },
    {
      name: 'The Physics of Sound — Musical Acoustics (MIT)',
      url: 'https://musictech.mit.edu/musical-acoustics-synthesis-and-audio-effects/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz ke Nota',
    btnNoteToHz: 'Nota ke Hz',
    labelRef: 'Referensi A4',
    ariaRefCustom: 'Frekuensi referensi A4 khusus',
    calInfo:
      '<strong>440 Hz</strong> adalah standar internasional. <strong>432 Hz</strong> sering digunakan dalam musik meditasi dan solfeggio.',
    labelFrequency: 'FREKUENSI',
    ariaFreqInput: 'Masukkan frekuensi dalam hertz',
    ariaPlay: 'Dengarkan nada',
    copyNoteName: 'Salin nota',
    labelOctaveDown: 'Oktaf bawah',
    labelInputFreq: 'Frekuensi input',
    labelOctaveUp: 'Oktaf atas',
    labelNoteInput: 'NAMA NOTA (misal: A4, C#3, Do4)',
    placeholderNote: 'Ketik nota...',
    labelSetNote: 'ATUR NOTA',
    labelSetOctave: 'ATUR OKTAF',
    labelSelectedNote: 'Nota terpilih',
    copyHz: 'Salin Hz',
    btnListenNote: 'Dengarkan nota',
    pianoLabel: 'Piano interaktif — tekan tombol untuk melihat frekuensinya',
    pianoAria: 'Keyboard piano interaktif',
    historyTitle: 'Riwayat',
    historyClear: 'Bersihkan',
    historyEmpty: 'Tidak ada konversi terbaru',
    historyLoadAria: 'Muat %s Hz',
    tuned: 'Stem',
    sharp: 'tajam',
    flat: 'datar',
    unitHzExact: 'Hz tepat',
    noteNames: 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B',
    noteOptions: 'C (Do)|C# / Db|D (Re)|D# / Eb|E (Mi)|F (Fa)|F# / Gb|G (Sol)|G# / Ab|A (La)|A# / Bb|B (Si)',
    pianoOctave: 'Okt',
    copyFeedback: 'Tersalin',
  },
  seo: [
    {
      type: 'summary',
      title: 'Fitur kalkulator',
      items: [
        'Konversi dua arah: Hz ke nota dan nota ke Hz dalam alat yang sama',
        'Presisi akurat sampel dengan referensi A4 yang dapat disesuaikan (440 / 432 / 444 Hz)',
        'Meteran cents visual dengan indikator tajam / datar / tepat',
        'Tampilan harmonik (fundamental, oktaf bawah, oktaf atas)',
        'Keyboard piano interaktif yang menyoroti tombol yang sesuai',
        'Riwayat pencarian untuk perbandingan cepat patch dan sampel',
      ],
    },
    {
      type: 'title',
      text: 'Apa itu frekuensi nota musik dan mengapa itu penting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setiap nota musik, pada intinya, adalah getaran udara yang periodik. Ketika senar gitar bergetar pada 440 siklus per detik, itu menghasilkan A4, nota referensi stem universal. Korespondensi antara hertz dan nota ini tidak sembarang: itu didefinisikan oleh <strong>temperamen merata</strong>, sistem penyeteman dominan dalam musik Barat, yang membagi oktaf menjadi dua belas semitone yang sangat berjarak sama dari perspektif matematika.',
    },
    {
      type: 'paragraph',
      html: 'Mengetahui frekuensi tepat dari setiap nota adalah fundamental dalam sintesis suara, produksi musik, teknik audio, dan pembuatan instrumen. Sebuah synthesizer perlu tahu pada frekuensi berapa setiap osilator harus bergetar untuk mereproduksi nota yang disetem. Seorang insinyur mixing perlu tahu di mana harus memotong dengan equalizer untuk menghilangkan dengung tanpa memengaruhi fundamental suatu instrumen.',
    },
    {
      type: 'title',
      text: 'Rumus matematika di balik konversi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Temperamen merata didasarkan pada progresi geometris. Setiap semitone sama dengan mengalikan frekuensi dengan akar dua belas dari dua. Rumus untuk mendapatkan frekuensi nota apa pun dari jarak semitone relatif terhadap A4 adalah:',
    },
    {
      type: 'code',
      code: 'f = A4 × 2^((n - 69) / 12)',
      ariaLabel: 'Rumus untuk mengonversi nomor nota MIDI ke frekuensi dalam Hz',
    },
    {
      type: 'paragraph',
      html: 'Di mana <em>n</em> adalah nomor nota MIDI (A4 = 69) dan <em>A4</em> adalah frekuensi referensi, biasanya 440 Hz. Membalikkan rumus ini memberikan nota terdekat dengan frekuensi yang dimasukkan, serta deviasi dalam cents.',
    },
    {
      type: 'title',
      text: 'Cents: unit presisi untuk musisi dan insinyur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebuah semitone dibagi menjadi 100 cents. Unit ini memungkinkan deviasi stem apa pun untuk dijelaskan dengan presisi desimal. Deviasi 10 cents sudah dapat dirasakan oleh telinga yang terlatih; di atas 20 cents terdengar jelas sumbang bagi sebagian besar pendengar.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Stem sempurna',
          description:
            'Sebuah nota disetem sempurna ketika deviasinya kurang dari 5 cents dari frekuensi temperamen merata yang tepat.',
        },
        {
          title: 'Cents di DAW',
          description:
            'Sampler, synthesizer, dan plugin pitch-shifting menggunakan cents untuk fine-tune, memungkinkan sampel disesuaikan dengan nota tepatnya tanpa artefak.',
        },
        {
          title: 'Ambang batas manusia',
          description:
            'Ambang batas persepsi untuk nota sumbang bervariasi antara 5 dan 15 cents tergantung pada instrumen, dinamika, dan konteks harmonik.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Referensi A4: 440 Hz, 432 Hz dan perang penyeteman',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Frekuensi referensi A4 = 440 Hz distandarisasi secara internasional pada tahun 1939 (ISO 16). Namun, musisi barok biasanya bekerja dengan referensi 415 Hz, dan ada komunitas produser yang berkembang yang lebih menyukai 432 Hz. Orkestra elit seperti Berlin Philharmonic secara rutin menggunakan 443 Hz untuk suara yang lebih cerah dan lebih tajam.',
    },
    {
      type: 'paragraph',
      html: 'Dalam produksi musik, referensi penting saat mencampur instrumen akustik yang direkam secara langsung dengan instrumen virtual. Jika piano yang direkam disetem ke 442 Hz tetapi synthesizer default ke 440 Hz, semua sampel perlu dikoreksi dalam cents.',
    },
    {
      type: 'tip',
      title: 'Trik sampler profesional',
      html: 'Saat mengimpor sampel ke sampler seperti Kontakt atau Decent Sampler, masukkan frekuensi sampel ke kalkulator ini. Nilai cents yang ditunjukkan pada meteran tuning memberi tahu Anda nilai <em>fine-tune</em> yang tepat untuk dimasukkan ke sampler agar nota dimainkan dengan setelan yang sempurna.',
    },
    {
      type: 'title',
      text: 'Tabel frekuensi referensi per oktaf',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tabel ini menunjukkan frekuensi tepat dari setiap nota C dalam temperamen merata dengan A4 = 440 Hz, berguna untuk mengonfigurasi osilator synthesizer modular atau memverifikasi rentang instrumen:',
    },
    {
      type: 'table',
      headers: ['Nota', 'Frekuensi (Hz)', 'Nota MIDI', 'Rentang instrumen tipikal'],
      rows: [
        ['C0', '16.35', '12', 'Contrabass, pedal organ'],
        ['C1', '32.70', '24', 'Double bass, bass gitar senar rendah'],
        ['C2', '65.41', '36', 'Cello, bass gitar'],
        ['C3', '130.81', '48', 'Viola, sax tenor, gitar'],
        ['C4', '261.63', '60', 'C tengah, piano, suara tenor'],
        ['C5', '523.25', '72', 'Flute, violin, suara sopran'],
        ['C6', '1046.50', '84', 'Piccolo, register tinggi violin'],
        ['C7', '2093.00', '96', 'Harmonik flute, synthesizer'],
        ['C8', '4186.01', '108', 'Keyboard 88 tuts, batas teknis'],
      ],
    },
    {
      type: 'title',
      text: 'Harmonik dan oktaf sebagai hubungan 2:1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salah satu hubungan terpenting dalam akustik musik adalah oktaf: menggandakan frekuensi menghasilkan nota yang sama satu oktaf lebih tinggi, dan membaginya menjadi dua membawanya turun satu oktaf. Hubungan 2:1 ini adalah dasar dari harmonik alami instrumen akustik apa pun.',
    },
    {
      type: 'paragraph',
      html: 'Dalam sintesis, mengetahui harmonik langsung dari sebuah frekuensi adalah kunci untuk menghindari tabrakan spektral antara osilator dalam lapisan suara. Kalkulator ini selalu menunjukkan oktaf atas dan bawah dari frekuensi apa pun yang dimasukkan.',
    },
    {
      type: 'title',
      text: 'Kasus penggunaan di dunia nyata untuk musisi dan produser',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Menyetel osilator analog: ukur frekuensi keluaran dan bandingkan dengan kalkulator untuk mengetahui berapa cents yang harus disesuaikan pada coarse atau fine tune.',
        'Menetapkan sampel ke nota: kick drum yang direkam pada 55 Hz adalah A1. Alat ini memberi tahu Anda di mana tepatnya memetakannya dalam sampler.',
        'Mendeteksi resonansi bermasalah: jika sebuah ruangan beresonansi pada 80 Hz, kalkulator mengonfirmasi bahwa itu adalah E2, memandu penggunaan EQ untuk melemahkannya tanpa merusak bass.',
        'Menyinkronkan subwoofer: memverifikasi bahwa beberapa sub mereproduksi nota yang sama menghindari penguatan atau pembatalan dari interferensi.',
        'Menyetel lonceng dan perkusi nada pasti: identifikasi fundamental untuk mengintegrasikannya ke dalam tonalitas karya.',
        'Desain filter resonansi: filter bandpass Q-tinggi pada 349.23 Hz akan mencapai puncak pada F4, membuat keputusan desain harmonik lebih mudah.',
      ],
    },
    {
      type: 'title',
      text: 'Piano sebagai referensi visual langsung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keyboard piano adalah peta visual paling intuitif dari spektrum musik. Tata letak tombol putih (alami) dan hitam (tajam/datar) memungkinkan pola tangga nada, akor, dan interval dikenali secara instan. Piano interaktif menyoroti tombol yang sesuai untuk setiap frekuensi, menghubungkan angka ke posisinya di keyboard universal.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Presisi matematis: menggunakan rumus temperamen merata ISO 16.',
          con: 'Batasan: hanya berlaku untuk temperamen merata, bukan penyeteman historis seperti meantone.',
        },
        {
          pro: 'Kalibrasi bebas: mendukung referensi A4 antara 400 dan 480 Hz.',
          con: 'Nada sinus tidak mereproduksi timbre asli instrumen, hanya frekuensi fundamental.',
        },
        {
          pro: 'Konversi dua arah: Hz ke nota dan nota ke Hz dalam alat yang sama.',
          con: 'Meteran cents relatif terhadap semitone terdekat, bukan temperamen murni atau adil.',
        },
        {
          pro: 'Riwayat pencarian: memungkinkan perbandingan cepat beberapa patch atau sampel.',
          con: 'Frekuensi di luar rentang yang dapat didengar (20 Hz - 20 kHz) memiliki manfaat praktis yang terbatas.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Glosarium penting untuk menggunakan alat ini',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): siklus per detik. Mengukur frekuensi gelombang suara.',
        'Nota MIDI: bilangan bulat dari 0 hingga 127 yang mengidentifikasi setiap nota dalam standar MIDI. A4 = 69.',
        'Oktaf ilmiah: sistem penamaan yang menambahkan nomor oktaf ke nota (A4, C3).',
        'Cents: seperseratus semitone. Memungkinkan deviasi penyeteman dinyatakan dengan presisi.',
        'Temperamen merata: sistem penyeteman di mana semua semitone sama (rasio 2^(1/12)).',
        'A4: nota referensi. Standar internasional: 440 Hz (ISO 16, 1975).',
        'Harmonik: frekuensi kelipatan bulat dari fundamental yang dihasilkan secara alami oleh instrumen akustik.',
        'Fine-tune: parameter synthesizer dan sampler untuk menyesuaikan tuning dalam cents.',
      ],
    },
  ],
};
