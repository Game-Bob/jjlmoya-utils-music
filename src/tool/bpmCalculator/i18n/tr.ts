import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BpmCalculatorUI } from '../ui';

const slug = 'bpm-ms-hesaplayici';
const title = 'Delay ve Reverb için BPM Milisaniye Hesaplayıcı';
const description =
  'Proje temponuzu (BPM) tam gecikme sürelerine (ms) ve frekanslara (Hz) dönüştürün. Delay, reverb ve kompresörleri ritmik hassasiyetle ayarlamak için temel araç.';

const faqData = [
  {
    question: 'Reverb biriminde Pre-delay nedir?',
    answer:
      'Pre-delay, doğrudan ses (kaynak) ile reverb kuyruğunun başlangıcı arasındaki süredir. Bunu ritmik olarak ayarlamak, mekansal efekt devreye girmeden önce orijinal kaynağın net kalmasını sağlar; vokal ve perküsyon için hayati önem taşır.',
  },
  {
    question: 'Tap Tempo nasıl çalışır?',
    answer:
      'Tap Tempo, bir şarkıyla birlikte ritmik olarak tıklayarak tempoyu algılar. Her tıklamanın zamanı ölçülür ve sistem, size tam BPM\'i vermek için aralıkların ortalamasını alır. Efektleri harici bir parça ile senkronize etmenin en hızlı yoludur.',
  },
  {
    question: 'Neden otomatik senkronizasyon yerine milisaniye kullanmalıyım?',
    answer:
      "Üç ana neden vardır: MIDI girişi olmayan analog donanım kullanmak, reverb'ün 'nefes alması' için pre-delay ayarlarını ince ayar yapmak ve statik, robotik bir histen kaçınmak için efektlerin ızgaradan hafifçe kaydırıldığı 'groove' ayarlamaları.",
  },
  {
    question: 'Ritmik Hz değeri ne için kullanılır?',
    answer:
      'Hertz değerleri size saniyede bir şeyin kaç kez gerçekleştiğini söyler. Yerel tempo senkronizasyonu olmayan sentezleyicilerde LFO osilatörlerini, phaser sweep hızlarını veya filtre modülasyonunu yapılandırmak için gereklidir.',
  },
];

const howToData = [
  {
    name: 'BPM\'i girin',
    text: 'Proje temponuzu merkezi alana yazın veya Tap Tempo düğmesini kullanın.',
  },
  {
    name: 'Alt bölümü bulun',
    text: 'Basit, noktalı veya üçlemeli tablolarda ihtiyacınız olan notayı (dörtlük, sekizlik vb.) bulun.',
  },
  {
    name: 'Değeri kopyalayın',
    text: 'Milisaniye değerinin yanındaki kopyala simgesine tıklayarak doğrudan eklentinize veya donanımınıza yapıştırın.',
  },
  {
    name: 'Pre-delay\'i ayarlayın',
    text: 'Reverb\'ü ana vokalden ayırmak için ideal olan ultra kısa değerler için alt bölümü kullanın.',
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
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik referanslar',
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
    sectionDelay: 'Gecikme Süreleri',
    sectionDotted: 'Noktalı Notalar',
    sectionTriplets: 'Üçlemeler',
    sectionReverb: 'Reverb Tasarımı (Pre-delay)',
    colNote: 'Nota',
    colMs: 'ms',
    colHz: 'Hz',
    infoPreDelay:
      '<strong>Pre-delay</strong>, netlik kazanmak için orijinal vuruşu reverb kuyruğundan ayırır.',
    copyAriaMs: 'Milisaniyeyi kopyala',
    copyAriaPreDelay: 'Pre-delay\'i kopyala',
    copyFeedback: 'Kopyalandı!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Hesaplayıcı özellikleri',
      items: [
        'Basit, noktalı ve üçlemeli notalar için anında hesaplama',
        'Her ritmik alt bölüm için milisaniye ve Hz değerleri',
        'Müzikal hassasiyetle reverb tasarımı için pre-delay bölümü',
        'Tap Tempo: müziğe eşlik ederek BPM\'i tespit edin',
        'Herhangi bir DAW veya eklenti için panoya tek tıkla kopyalama',
      ],
    },
    {
      type: 'title',
      text: 'BPM - Milisaniye Hesaplayıcı neden gereklidir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Modern müzik prodüksiyonunda ritmik hassasiyet, amatör bir miksi profesyonel olandan ayırır. Ableton Live, FL Studio veya Logic Pro gibi çoğu DAW, efektleri için otomatik senkronizasyon içerse de, manuel kontrolün daha üstün olduğu sayısız durum vardır.',
    },
    {
      type: 'title',
      text: 'Reverb\'de Pre-delay\'in Önemi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu aracın en kritik kullanımlarından biri <strong>pre-delay</strong> ayarıdır. Bir vokale pre-delay olmadan reverb uygularsanız, efekt kuyruğu hemen başlar, ünsüz harfleri bulandırır ve netliği azaltır. Ritmik bir pre-delay (64\'lük veya 128\'lik nota gibi) hesaplayarak, yapay akustik mekan devreye girmeden önce orijinal sesin nefes almasını sağlarsınız. Bu, kaynağın varlığından ödün vermeden bir derinlik hissi yaratır.',
    },
    {
      type: 'title',
      text: 'Analog Delay ve Harici Donanım',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Analog gecikme pedalları veya vintage sentezleyiciler koleksiyonunuz varsa, birçoğunun MIDI saat girişinden yoksun olduğunu bilirsiniz. Bir bant gecikmesini (tape delay) manuel olarak ayarlamak, bir sekizlik veya noktalı dörtlük notaya tam olarak kaç milisaniyenin karşılık geldiğini bilmeyi gerektirir. Hesaplayıcımız size bu değerleri anında vererek donanımınızı cerrahi hassasiyetle ayarlamanıza olanak tanır.',
    },
    {
      type: 'title',
      text: 'Izgara Dışı Efektler ve Groove',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bazen matematiksel mükemmellik sıkıcı tınlar. Birçok yapımcı milisaniye değerlerini bir başlangıç noktası olarak kullanır ve ardından bunları hafifçe yukarı veya aşağı kaydırır. Bir gecikmeyi ızgaradan 5 ila 10 ms uzağa kaydırmak, katı kuantizasyonun (quantization) asla taklit edemeyeceği insani bir <em>salınım</em> (swing) veya benzersiz bir <em>groove</em> ekleyebilir.',
    },
    {
      type: 'title',
      text: 'Senkronize Kompresyon ve LFO\'lar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir kompresörün <strong>Attack</strong> ve <strong>Release</strong> sürelerinin de ritmik olabileceğini biliyor muydunuz? Davul bus kompresörünüzün release süresini tam bir sonraki kick vuruşundan önce bitecek şekilde ayarlamak, şarkı ritmini güçlendiren bir "pumping" veya <em>nefes alma</em> etkisi yaratır. Aynı şekilde Hz değeri, yerel tempo senkronizasyonu olmayan sentezleyicilerde düşük frekanslı osilatörleri (LFO\'lar) yapılandırmak için çok önemlidir.',
    },
    {
      type: 'tip',
      title: 'Tap Tempo nasıl kullanılır?',
      html: '<strong>Tap Tempo</strong> özelliği, canlı durumlar veya temposunu bilmediğiniz harici bir parçayı dinlediğiniz anlar için idealdir. Müziğin vuruşunu takip ederek düğmeye ritmik olarak tıklamanız yeterlidir. Algoritmanın değeri daha doğru bir şekilde ortalayabilmesi için en az 4 veya 5 tıklama yapmanızı öneririz.',
    },
    {
      type: 'title',
      text: 'Tempo Matematik Formülleri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Temel formül basittir: <code>ms = 60.000 / BPM</code>. Buradan her alt bölüm için çarpanlar uygulanır.',
    },
    {
      type: 'list',
      items: [
        'Basit notalar: ikili bölünmeye dayalı (1, 0.5, 0.25 vb.).',
        'Noktalı: temel değeri 1.5 ile çarpın.',
        'Üçlemeler: temel değeri 0.667 (2/3) ile çarpın.',
      ],
    },
  ],
};
