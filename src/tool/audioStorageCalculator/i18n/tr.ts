import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioStorageCalculatorUI } from '../ui';

const slug = 'ses-depolama-hesaplayici';
const title = 'Ses Depolama Hesaplayıcı: WAV, FLAC ve MP3 Dosya Boyutu';
const description =
  'Örnekleme hızı ve bit derinliğine göre WAV, FLAC ve MP3 formatındaki ses kayıtlarınız için gereken disk alanını tahmin edin.';

const faqData = [
  {
    question: '44.1 kHz 16-bit kalitesinde bir saatlik ses ne kadar yer kaplar?',
    answer:
      'Stereo (CD kalitesi) modunda, bir saatlik ses sıkıştırılmamış olarak yaklaşık 635 MB disk alanı kaplar (WAV/AIFF).',
  },
  {
    question: 'WAV formatı neden bu kadar çok yer kaplıyor?',
    answer:
      'WAV, sıkıştırılmamış "kayıpsız" (lossless) bir formattır; yani veri azaltma yapmadan maksimum sadakati korumak için her ses örneğini ayrı ayrı saklar.',
  },
  {
    question: 'Yer tasarrufu için hangisi daha iyi: FLAC mı MP3 mü?',
    answer:
      'FLAC, kalite kaybı olmadan (kayıpsız sıkıştırma) %50\'ye kadar yer tasarrufu sağlar. MP3 %80-90\'a kadar tasarruf sağlar ancak algılanamayan ses bilgilerini kaldırır (kayıplı sıkıştırma).',
  },
  {
    question: '2 saatlik bir podcast için gereken alan nasıl hesaplanır?',
    answer:
      '48 kHz / 24-bit kalitesinde Mono olarak kayıt yaparsanız, yaklaşık 988 MB alana ihtiyacınız olacaktır. Hesaplayıcı, bu parametreleri ekipmanınıza göre hassas bir şekilde ayarlamanıza olanak tanır.',
  },
];

const howToData = [
  {
    name: 'Sesi yapılandırın',
    text: 'Örnekleme hızını (kHz), bit derinliğini ve kanal sayısını seçin.',
  },
  {
    name: 'Süreyi girin',
    text: 'Kaydın ne kadar süreceğini tahmin ettiğiniz saat, dakika ve saniye bilgilerini girin.',
  },
  {
    name: 'Sonuçları analiz edin',
    text: 'Oluşan boyutu MB veya GB cinsinden gözlemleyin ve FLAC veya MP3 gibi farklı formatlarla karşılaştırın.',
  },
  {
    name: 'Kapasiteyi değerlendirin',
    text: 'Kaydın SD kartınızın veya sabit sürücü depolama alanınızın yüzde kaçını kaplayacağını kontrol edin.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelConfig: 'Ses Yapılandırması',
    labelHz: 'Örnekleme Hızı (kHz)',
    labelBits: 'Bit Derinliği',
    labelChannels: 'Kanallar',
    labelDuration: 'Kayıt Süresi',
    labelHours: 'Saat',
    labelMinutes: 'Dakika',
    labelSeconds: 'Saniye',
    labelCapacity: 'Mevcut Depolama (GB)',
    toggleLabelSpace: 'Boş alanımla ne kadar kayıt yapabileceğimi hesapla',
    labelComparison: 'Format ve Depolama Karşılaştırması',
    thFormat: 'Format',
    thQuality: 'Kalite',
    thSize: 'Tahmini Boyut',
    qualityWav: 'Sıkıştırılmamış (Kayıpsız)',
    qualityFlac: 'Kayıpsız Sıkıştırma',
    qualityMp3High: 'Yüksek Kalite (Kayıplı)',
    qualityMp3Std: 'Standart Kalite / Ses',
    labelDevices: 'Yaygın cihazlarda kullanılan yüzde',
    device32: '32GB SD Kart',
    device128: '128GB Depolama',
    device1tb: '1TB Sabit Sürücü',
    btnCopy: 'Özeti Kopyala',
    optHz44100: '44.1 kHz (CD)',
    optHz48000: '48 kHz (Video Standardı)',
    optHz88200: '88.2 kHz',
    optHz96000: '96 kHz (Yüksek Çözünürlük)',
    optHz192000: '192 kHz (Ultra HD)',
    optBits16: '16-bit (CD / Standart)',
    optBits24: '24-bit (Yapımcılar / Film)',
    optBits32: '32-bit (Kayan Nokta)',
    optCh1: 'Mono (1 kanal)',
    optCh2: 'Stereo (2 kanal)',
    optCh6: '5.1 Surround (6 kanal)',
    optCh8: '7.1 Surround (8 kanal)',
    labelDurationSet: 'Yapılandırılan süre: {time}',
    labelRecordingPossible: '{gb} GB ile kayıt mümkün',
    toggleLabelTime: 'Süre hesaplamasına dön',
    labelSpaceAvailable: 'Mevcut Alan',
    copyDone: 'Özet Kopyalandı!',
    summarySpace:
      '{channels} modunda {bits}-bit/{hz} kalitesindeki {t} kayıt yaklaşık {result} yer kaplayacaktır.',
    summaryTime:
      '{space} GB boş alan ile {bits}-bit/{hz} {channels} kalitesinde {result} kadar kayıt yapabilirsiniz.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Dijital Ses Depolama Hesaplayıcı',
      items: [
        '<strong>WAV - MP3</strong>: Sıkıştırmalı ve sıkıştırmasız dosya boyutlarını hesaplayın.',
        '<strong>Ses Çözünürlüğü</strong>: Frekans (kHz) ve bit (16/24/32) ayarlarını yapın.',
        '<strong>Ters hesaplama</strong>: Kalan alanımla ne kadar kayıt yapabilirim?',
        '<strong>Profesyonel Formatlar</strong>: FLAC ve 192kHz mastering için tahmin.',
      ],
    },
    { type: 'title', text: 'Bir ses kaydının boyutu nasıl hesaplanır?', level: 2 },
    {
      type: 'paragraph',
      html: 'Sıkıştırılmamış bir dijital ses dosyasının (WAV veya AIFF gibi) boyutu üç temel teknik faktöre bağlıdır: <strong>Örnekleme Hızı</strong> — ses dalgasının saniyede kaç kez "ölçüldüğü" (örneğin 44.1 kHz veya 48 kHz); <strong>Bit Derinliği</strong> — daha yüksek bitlerde daha geniş dinamik aralık ve daha düşük gürültü ile her ölçümün çözünürlüğü; ve <strong>Kanallar</strong> — kaydın Mono (1), Stereo (2) veya Çok Kanallı (Surround) olup olmadığı. Standart matematiksel formül <strong>Bitrate</strong>\'tir; saniye cinsinden süre ile çarpıldığında toplam ham dosya boyutunu verir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'CD Kalitesi',
          description:
            '16-bit / 44.1 kHz. Stereo modunda dakikada yaklaşık 10.1 MB yer kaplar. Müzik endüstrisinin tarihi standardıdır.',
        },
        {
          title: 'Profesyonel Kayıt',
          description:
            '24-bit / 48 kHz. Video ve film için standarttır. Dakikada yaklaşık 16.5 MB yer kaplar. Miksaj için daha fazla tavan payı sunar.',
        },
        {
          title: 'Yüksek Çözünürlük',
          description:
            '24-bit / 96 kHz. Mastering işlemlerinde kullanılır. Standart kayıt boyutunu dakikada 33 MB\'a kadar ikiye katlar.',
        },
      ],
    },
    { type: 'title', text: '24-bit ses neden 16-bit\'ten %50 daha fazla yer kaplar?', level: 2 },
    {
      type: 'paragraph',
      html: '16-bit kalitesindeki her ses örneği, genliği saklamak için 2 bayt (16 ÷ 8) kullanır. 24-bit ses ise örnek başına 3 bayt kullanır. Bu, aynı örnekleme hızında 24-bit bir dosyanın 16-bit bir dosyadan tam olarak %50 daha büyük olacağı anlamına gelir. 16-bit/44.1kHz kalitesindeki bir saatlik kayıt 635 MB yer kaplıyorsa, aynı kayıt 24-bit/44.1kHz kalitesinde 953 MB\'a çıkacaktır.',
    },
    {
      type: 'tip',
      title: 'Ekstra alan buna değer mi?',
      html: 'Daha fazla yer kaplamasına rağmen, 24-bit ses, 16-bit için 96 dB olan dinamik aralığa kıyasla 144 dB sunar. Bu, çok daha düşük bir "gürültü tabanı" sağlayarak zayıf sinyallerin arka plan gürültüsü sorun olmadan kaydedilmesine olanak tanır; bu, profesyonel miksaj ve mastering sırasında hayati önem taşır.',
    },
    { type: 'title', text: 'WAV vs FLAC vs MP3: Diske etkisi', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>WAV / AIFF</strong>, orijinal kaydın her bitini koruyan ancak en ağır olan sıkıştırılmamış formatlardır. <strong>FLAC</strong>, kaliteden ödün vermeden orijinal boyutu %40-60 oranında azaltan kayıpsız sıkıştırma uygular. <strong>MP3 / AAC</strong>, algılanamayan frekansları kaldırarak kayıplı sıkıştırma uygular; 320 kbps hızındaki bir MP3, orijinal WAV dosyasının yaklaşık %22\'sini kaplar.',
    },
    {
      type: 'table',
      headers: ['Kalite', 'Frekans', 'Bit', 'Dakika Başına MB (Stereo)'],
      rows: [
        ['Telefon Görüşmesi', '8 kHz', '8-bit', '0.94 MB'],
        ['FM Radyo', '32 kHz', '16-bit', '7.32 MB'],
        ['Orijinal CD', '44.1 kHz', '16-bit', '10.09 MB'],
        ['Video Stüdyosu', '48 kHz', '24-bit', '16.48 MB'],
        ['Yüksek Sadakat', '96 kHz', '24-bit', '32.96 MB'],
      ],
    },
    { type: 'title', text: 'Teknisyenler için hesaplama formülü', level: 2 },
    {
      type: 'paragraph',
      html: 'Hesaplamayı manuel olarak yapmanız veya kendi yazılımınızda uygulamanız gerekiyorsa, hesaplayıcımızın izlediği mantık şudur:',
    },
    {
      type: 'code',
      ariaLabel: 'Ses depolama hesaplama mantığı',
      code: `const sampleRate = 48000;\nconst bitDepth = 24;\nconst channels = 2;\nconst seconds = 3600;\n\nconst bitsPerSecond = sampleRate * bitDepth * channels;\nconst totalBytes = (bitsPerSecond * seconds) / 8;`,
    },
    { type: 'title', text: 'Bu araç için kullanım örnekleri', level: 2 },
    {
      type: 'list',
      items: [
        'Podcasting: Uzun bir röportaj sırasında taşınabilir kaydedicinizde yer kalmamasından kaçının.',
        'Müzik Stüdyosu: 96kHz\'de 40 kanallı bir oturum açmadan önce kaç GB boş alana ihtiyacınız olduğunu hesaplayın.',
        'Dijital Ses Mühendisliği: Aktarım bit hızının donanımınızla uyumlu olduğunu doğrulayın.',
        'Film Post-prodüksiyonu: Ağ üzerinden dosya teslimi için 5.1 çok kanallı çekimlerin boyutunu tahmin edin.',
        'Arşivleme: Analog kaset koleksiyonunu Master kalitesinde dijitalleştirmek için gereken kapasiteyi belirleyin.',
      ],
    },
  ],
};
