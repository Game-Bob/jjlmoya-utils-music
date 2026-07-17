import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhaseDistanceUI } from '../ui';

const slug = 'faz-mesafesi-hesaplayicisi';
const title = 'Mikrofonlar için Faz Mesafesi Hesaplayıcı';
const description =
  'Mikrofonları hizalamak için gereken gecikmeyi ve telafiyi hesaplayın. Örneklem hassasiyetinde doğruluk ve sıcaklık ayarı ile faz iptalini ve tarak filtrelemeyi önleyin.';

const faqData = [
  {
    question: 'Ses sinyalinde faz iptali nedir?',
    answer:
      'Aynı kaynaktan gelen iki sinyalin farklı zamanlarda ulaşmasıyla ortaya çıkan akustik bir olaydır. Dalgalar birbirini etkiler ve 180 derece uyumsuz olduklarında birbirlerini sönümleyerek sesin zayıf ve gövdesiz çıkmasına neden olurlar.',
  },
  {
    question: 'Sıcaklık hesaplamayı neden etkiler?',
    answer:
      'Çünkü ses havada yayılır ve havanın yoğunluğu sıcaklıkla değişir. Hava ne kadar sıcaksa, ses o kadar hızlı yayılır. Hassas bir sıcaklık ayarı, ayrı mikrofonlar arasındaki tam gecikmeyi hesaplamanızı sağlar.',
  },
  {
    question: 'Fazı ters çevirmek, polariteyi ters çevirmekle aynı şey midir?',
    answer:
      'Teknik olarak hayır, ancak bu terimler birbirinin yerine kullanılır. Polarite elektriksel bir değişimdir (180° döndürme), faz ise zamansal bir kaymadır. Aracımız, en yüksek ses uyumunu bulmanız için her ikisini de simüle etmenize olanak tanır.',
  },
  {
    question: 'Tarak Filtreleme (Comb Filtering) nedir?',
    answer:
      'Bir sinyalin kendisinin geciktirilmiş bir versiyonuyla birleştirilmesinden kaynaklanan frekans tepkisidir. Enstrümanın tınısını büyük ölçüde değiştiren, tarak dişlerine benzeyen bir dizi tepe ve çukur oluşturur.',
  },
  {
    question: 'Mikrofon tekniğinde 3 ila 1 kuralı nedir?',
    answer:
      'Faz sorunlarını en aza indirmek için kullanılan bir yöntemdir: farklı kaynaklar için iki mikrofon kullanırken, mikrofonlar arasındaki mesafe, her bir mikrofonun kendi kaynağına olan mesafesinin en az üç katı olmalıdır.',
  },
  {
    question: 'Mikrofonları fiziksel olarak mı yoksa yazılımla mı hizalamak daha iyidir?',
    answer:
      'Kayıt sırasında iyi bir fiziksel hizalama, yapay sesleri önlemek açısından her zaman tercih edilir. Ancak, DAW\'daki dijital gecikme, mikrofonları elle hareket ettirerek elde edilmesi neredeyse imkansız olan örneklem düzeyinde bir hassasiyet sağlar.',
  },
];

const howToData = [
  {
    name: 'Mesafeleri ölçün',
    text: 'Ses kaynağından (örneğin trampet) kullandığınız mikrofonların her birine olan fiziksel mesafeyi ölçün.',
  },
  {
    name: 'Ortamı ayarlayın',
    text: 'Gerçek fizik kurallarına dayalı hesaplamalar elde etmek için oda sıcaklığını ve projenizin örnekleme hızını girin.',
  },
  {
    name: 'Grafiği analiz edin',
    text: 'Duyulabilir aralıktaki olası kritik iptalleri belirlemek için frekans tepkisi görselleştiricisine bakın.',
  },
  {
    name: 'Telafiyi uygulayın',
    text: 'Milisaniye veya örnek değerini kopyalayın ve kanalları mükemmel şekilde hizalamak için kanalınızdaki gecikme eklentisine girin.',
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

export const content: ToolLocaleContent<PhaseDistanceUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    labelTemp: 'Sıcaklık (°C) / Ses',
    btnAuto: 'Oto',
    labelSampleRate: 'Örnekleme Hızı (kHz)',
    labelUnits: 'Birim Sistemi',
    optMetric: 'Metrik (m/cm)',
    optImperial: 'İmparatorluk (ft/in)',
    labelDistA: 'Mikrofon A Mesafesi',
    labelDistB: 'Mikrofon B Mesafesi',
    labelPresets: 'Hızlı Hazır Ayarlar',
    presetCoincident: 'Çakışık (XY)',
    presetSnare: 'Trampet',
    presetAmbient: 'Ortam (Ambient)',
    btnInvert: 'Fazı Ters Çevir (Φ)',
    labelGain: 'Mikrofon B Göreli Kazancı:',
    btnCopy: 'Örnekleri Kopyala',
    labelDelay: 'Gereken Gecikme',
    unitMs: 'milisaniye (ms)',
    labelCompensation: 'Telafi',
    unitSamples: 'Örnekler',
    labelPhaseStatus: 'Faz Durumu',
    textLoading: 'Yükleniyor...',
    statusInPhase: 'FAZDA',
    statusInPhaseDesc: 'Sinyaller mükemmel şekilde hizalandı.',
    statusCritical: 'KRİTİK İPTAL',
    statusCriticalDesc: 'Alt/orta frekanslarda belirgin tarak filtreleme.',
    statusOffAxis: 'EKSEN DIŞI',
    statusOffAxisDesc: 'Hafif faz kayması. Doku değişti.',
    warningCritical: 'OLASI KRİTİK İPTAL',
    labelSoundSpeed: 'Ses Hızı',
    labelDistDiff: 'Mesafe Farkı',
    labelNullFreq: 'İlk Çukurlar',
    textNone: 'Yok',
    chartTitle: 'FREKANS TEPKİSİ (H) - TARAK FİLTRELEME',
    promptSoundSpeed: 'Ses Hızı (m/s):',
    copyFeedback: 'Kopyalandı!',
  },
  seo: [
    {
      type: 'summary',
      title: 'Hesaplayıcı Özellikleri',
      items: [
        'Ses hızı için sıcaklık ayarlı kesin fiziksel hesaplama',
        'DAW telafisi için milisaniye ve örnek cinsinden sonuç',
        'Duyulabilir tüm spektrumda tarak filtrelemenin grafik görselleştiricisi',
        'Mikrofon hazır ayarları (XY çakışık, trampet, ortam)',
        'Faz ters çevirme simülasyonu ve göreli kazanç kontrolü',
        'Metrik ve emperyal birim desteği',
      ],
    },
    {
      type: 'title',
      text: 'Faz iptali nedir ve mikslerinizi neden bozar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ses mühendisliği dünyasında faz, en kritik kavramlardan biridir ve paradoksal olarak yeni başlayanlar tarafından en çok göz ardı edilenlerden biridir. Bir ses kaynağını (örneğin bir bateri kiti veya gitar amfisi) farklı mesafelere yerleştirilmiş iki veya daha fazla mikrofonla kaydettiğinizde, ses dalgaları mikrofon kapsüllerine aynı anda ulaşmaz. Bu küçük zaman farkı, <strong>faz kayması</strong> olarak bilinen bir olguya neden olur.',
    },
    {
      type: 'title',
      text: 'Tarak filtreleme olgusu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İki özdeş sinyal aralarında hafif bir gecikmeyle birleştirildiğinde, frekans tepkisinde bir dizi çukur ve tepe belirir. Spektrum analizöründe bakıldığında, desen bir tarağın dişlerini andırır - bu yüzden bu adı almıştır. Bu etki, enstrümanın doğal tınısını yıkıcı bir şekilde değiştirir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Alt Frekanslara Etkisi',
          description:
            'Faz iptali, sesin gövdesinin tamamen yok olduğu düşük frekanslarda en yıkıcı etkiye sahiptir.',
        },
        {
          title: 'Metalik Doku',
          description:
            'Tarak filtreleme, kulağa boş gelen veya aşırı işlenmiş gibi gelen yapay bir renklenme ekler.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sıcaklığın hesaplamaya etkisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Birçok ses mühendisi, havanın fiziksel bir ortam olduğunu ve yoğunluğunun sıcaklıkla değiştiğini unutur. Ses hızı değişmez bir sabit değildir; 20°C\'de saniyede yaklaşık 343 metre hızla yayılır.',
    },
    {
      type: 'code',
      code: 'v = 331.3 + (0.606 × T)',
      ariaLabel: 'Sıcaklığın bir fonksiyonu olarak ses hızı formülü',
    },
    {
      type: 'tip',
      title: 'Cerrahi Telafi',
      html: 'Birkaç derecelik fark, iptal noktalarını birkaç hertz kaydırabilir. Hesaplayıcımızı stüdyonuzun gerçek sıcaklığıyla kullanmak, DAW\'da mükemmel hizalamayı garanti eder.',
    },
    {
      type: 'title',
      text: 'Kritik kayıt senaryoları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Trampet (Üst ve Alt): Vuruş etkisini en üst düzeye çıkarmak için her iki deriyi zamansal olarak hizalayın.',
        'Overheads ve yakın mikrofonlar: Yakın mikrofonları, overhead\'lerin fazıyla eşleşecek şekilde geciktirin.',
        'Çoklu mikrofonlu gitarlar: Alt-orta frekansları kaybetmeden bir dinamik ve bir şerit mikrofonu karıştırın.',
        'Bas DI ve mikrofonu: Güçlü bir ses elde etmek için doğrudan sinyali amfi mikrofonuyla senkronize edin.',
      ],
    },
    {
      type: 'title',
      text: 'Fiziksel Hizalama vs. Dijital İşlem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aracımız kayıt sonrasında DAW\'ınızda fazı düzeltmeniz için değerleri sağlasa da, her zaman stüdyoda mümkün olan en iyi fiziksel hizalamayı yapmaya çalışmanızı öneririz. Bir mikrofonu birkaç milimetre hareket ettirmek, herhangi bir dijital işlemden daha etkili olabilir.',
    },
    {
      type: 'stats',
      items: [
        { label: '20°C\'deki Hız', value: '343.2 m/s' },
        { label: 'Milisaniye/cm', value: '0.029 ms' },
        { label: '48kHz\'deki Örnekler', value: 'cm başına 1.4' },
      ],
    },
    {
      type: 'title',
      text: 'Referans tablosu: Mesafe vs. İlk Çukur',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Fark (cm)', 'Gecikme (ms)', '1. Çukur (Hz)', 'Etkilediği...'],
      rows: [
        ['1 cm', '0.029', '17160', 'Aşırı tiz frekanslar'],
        ['5 cm', '0.146', '3432', 'Üst orta frekanslar (Varlık)'],
        ['10 cm', '0.291', '1716', 'Orta frekanslar (Varlık)'],
        ['30 cm', '0.874', '572', 'Alt orta frekanslar (Gövde)'],
        ['1 metre', '2.914', '172', 'Bas frekanslar (Temel Ton)'],
      ],
    },
    {
      type: 'title',
      text: 'Düzeltme yöntemlerinin artıları ve eksileri',
      level: 2,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Fiziksel hizalama: Orijinal sinyalde daha az bozulma.',
          con: 'Fiziksel hizalama: Mikroskobik hassasiyetle ayarlanması zordur.',
        },
        {
          pro: 'Dijital düzeltme: Örneklem düzeyinde mutlak hassasiyet.',
          con: 'Dijital düzeltme: Yanlış uygulanırsa ön yankı oluşturabilir.',
        },
        {
          pro: 'Polarite ters çevirme: 180° iptaller için anında çözüm.',
          con: 'Polarite ters çevirme: Ara faz kaymalarını düzeltmez.',
        },
        {
          pro: 'Zaman telafisi: Kaybedilen darbe ve dinamikleri geri kazandırır.',
          con: 'Zaman telafisi: Her bir mikrofonun mesafesinin tam olarak ölçülmesini gerektirir.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Faz sorunları kulakla nasıl tespit edilir?',
      html: '"Fazı Ters Çevir" düğmesine (Φ) basın. Etkinleştirmek sesin gövde ve alt frekanslar kazanmasını sağlıyorsa, mikrofonlarınız faz dışı demektir. Ses kayboluyor veya inceliyorsa doğru hizalanmışlardır.',
    },
    {
      type: 'title',
      text: 'Mono Uyumluluk ve Stereo Algı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Stereo kayıtlarda faz ilişkisi, ses görüntüsünün kararlılığını tanımlar. Ciddi tutarsızlıklar varsa, miks mono bir sistemde çalındığında ses tamamen yok olabilir. Hesaplayıcımız, kanallar toplandığında hangi frekansların en çok zarar göreceğini tahmin etmenize yardımcı olur.',
    },
  ],
};
