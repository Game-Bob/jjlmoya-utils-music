import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MetronomeUI } from '../ui';

const slug = 'metronom-tr';
const title = 'Çevrimiçi Metronom: Yüksek Hassasiyetli Görsel ve İşitsel';
const description =
  'Müzisyenler için ücretsiz çevrimiçi metronom. Web Audio API ile milisaniye hassasiyeti. Görsel, işitsel ve Tap Tempo. Enstrüman pratiği için mükemmel.';

const faqData = [
  {
    question: 'Bu metronom profesyonel kullanım için yeterince hassas mı?',
    answer:
      'Evet. Sesleri doğrudan cihaz donanım saatinde planlayan Web Audio API\'yi kullanıyoruz. Bu, diğer web uygulamalarında görülen mikro gecikmeleri önler ve uzun oturumlarda bile milisaniye hassasiyetini garanti eder.',
  },
  {
    question: 'Tap Tempo nedir ve nasıl kullanılır?',
    answer:
      'Ritmik olarak dokunarak BPM hesaplamanızı sağlayan bir özelliktir. Dinlediğiniz müziğin ritmine göre "TAP" düğmesine tıklayın veya boşluk tuşuna basın, tam tempoyu anında elde edin.',
  },
  {
    question: 'Zaman işaretini ve vurguları değiştirebilir miyim?',
    answer:
      'Evet, farklı zaman işaretlerini (2/4, 3/4, 4/4, 6/8 vb.) yapılandırabilir ve vuruş vurgularını çalıştığınız müzik stiline göre kişiselleştirebilirsiniz.',
  },
  {
    question: 'iPhone veya iPad\'imde neden ses duyamıyorum?',
    answer:
      'iOS cihazlarda Web Audio teknolojisi fiziksel sessiz anahtarına uyar. Telefonunuzun sessiz modda olmadığından emin olun ve tık seslerini duymak için medya sesini açın.',
  },
];

const howToData = [
  {
    name: 'BPM\'i Ayarlayın',
    text: 'Dakikadaki vuruş sayısını (BPM) ayarlamak için kaydırıcıyı veya hassas ayar düğmelerini kullanın.',
  },
  {
    name: 'Zaman İşaretini Yapılandırın',
    text: 'Metronomun her ölçünün ilk vuruşunu doğru bir şekilde vurgulaması için vuruş sayısını (örneğin 4/4 veya 3/4) seçin.',
  },
  {
    name: 'Harici Müzikle Senkronize Edin (Tap)',
    text: 'Dinlediğiniz bir şarkının temposunu bulmanız gerekiyorsa, davul veya ana nabızla birlikte TAP düğmesine dokunun.',
  },
  {
    name: 'Pratiğe Başlayın',
    text: 'Başlat düğmesine basın. Görsel göstergeler, ortamdaki sesi net duyamasanız bile ritmi tutmanıza yardımcı olacaktır.',
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
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Teknik Referanslar',
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
    labelTime: 'Zaman İş.',
    labelTap: 'Tap Tempo',
    btnTap: 'TAP',
    warningTitle: 'Ses yok mu?',
    warningText:
      'iPhone/iPad kullanıyorsanız, yan sessiz anahtarının aktif olmadığından emin olun. Web Audio teknolojisi birçok cihazda sistem sessiz moduna uyar.',
  },
  seo: [
    {
      type: 'summary',
      title: 'Metronom özellikleri',
      items: [
        'Web Audio API motoru — milisaniye hassasiyeti, kayma yok',
        'Tap Tempo: Ritme vurarak BPM hesaplayın',
        'Otomatik vurgulu 1 ile 12 vuruş arası yapılandırılabilir zaman işareti',
        'Dalgalanma efektli yüksek kontrastlı görsel gösterge',
        'Ses kontrolü ve ±1/±5 BPM hassas ayar düğmeleri',
      ],
    },
    {
      type: 'title',
      text: 'Tarayıcınızda Ritmik Hassasiyet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kesin Çevrimiçi Metronom</strong>\'a hoş geldiniz. Bu aracı tek bir amaçla oluşturduk: <em>güvenilirlik</em>. İşlemci yükü nedeniyle "kayma" (küçük birikimli gecikmeler) yaşayan diğer web metronomlarının aksine, ses motorumuz doğrudan <strong>Web Audio API</strong> üzerine kurulmuştur.',
    },
    {
      type: 'paragraph',
      html: 'Bu, ses darbelerinin cihaz donanım saatinizde vaktinden önce planlandığı anlamına gelir; sekmenizi simge durumuna küçültseniz veya bilgisayarınız meşgul olsa bile <strong>sarsılmaz milisaniye hassasiyeti</strong> garanti edilir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Net Görselleştirme',
          description:
            '"Dalgalanma" efektli büyük, yüksek kontrastlı görsel göstergeler. Çevresel görüşünüzle algılanacak şekilde tasarlandı, böylece ritmi kaybetmeden gözlerinizi notalarınızda veya enstrümanınızda tutabilirsiniz.',
        },
        {
          title: 'Akıllı Tap Tempo',
          description:
            'Bir şarkı dinliyorsunuz ve hızını mı bilmek istiyorsunuz? Müzikle birlikte TAP düğmesine veya Boşluk tuşuna basın. Algoritma, dokunuşlarınızın tam ortalamasını hesaplayacaktır.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ustalık Rehberi: Metronomla Nasıl Çalışılır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Metronom sadece tıklayan bir saat değildir; tekniğinizin en tarafsız yargıcıdır. İşte hızınızı ve temizliğinizi geliştirmek için kanıtlanmış bir metodoloji:',
    },
    {
      type: 'title',
      text: '1. Merdiven Yöntemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hedefiniz <strong>120 BPM</strong>\'de çalmaksa, bu hızda denemeye başlamayın. Hayal kırıklığına uğramak kolaydır; ilerlemek strateji gerektirir.',
    },
    {
      type: 'list',
      items: [
        'Hedef hızınızın %50\'si ile başlayın (örneğin 60 BPM).',
        'Pasajı arka arkaya 3 kez mükemmel bir şekilde çalın. Bir notayı kaçırırsanız sayaç sıfırlanır.',
        'Metronomu sadece 5 BPM artırın.',
        'Hedef hızınıza ulaşana kadar tekrarlayın.',
      ],
    },
    {
      type: 'title',
      text: '2. Vurgu Kaydırma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vurguyu kaydırmak için zaman işareti seçicimizi kullanın. 4/4\'lük bir pasajı metronom 3/4\'e ayarlıyken çalışmak, vurgunun (keskin klik sesinin) ifadeniz içinde farklı yerlere düşmesi anlamına gelir ve sizi "birinci" vuruşa güvenmek yerine mutlak zamanı içselleştirmeye zorlar.',
    },
    {
      type: 'title',
      text: '3. Stratejik Sessizlikler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gelişmiş bir teknik de metronomu yarı hıza ayarlamak (örneğin 120\'de çalıyorsanız 60 BPM) ve her kliği 1. ve 3. vuruşlar olarak hissetmektir. Daha da zoru: Sadece zayıf vuruşlar (off-beats) olarak hissedin. Bu, <strong>dahili saatinizi</strong> geliştirir.',
    },
    {
      type: 'title',
      text: 'Tempo Hakkında İlginç Gerçekler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tempo, müziğin duygusal algısını radikal bir şekilde etkiler.',
    },
    {
      type: 'table',
      headers: ['İtalyanca Terim', 'Yaklaşık BPM', 'Karakter'],
      rows: [
        ['Largo', '40 – 60', 'Yavaş ve görkemli'],
        ['Andante', '76 – 108', 'Yürüyüş hızı, sakin'],
        ['Allegro', '120 – 156', 'Hızlı, parlak ve neşeli'],
        ['Presto', '168 – 200', 'Çok hızlı, telaşlı'],
      ],
    },
    {
      type: 'title',
      text: 'Bu Metronomun Arkasındaki Teknoloji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu, döngüye giren bir MP3 oynatıcı değildir. Gerçek zamanlı olarak saf sinüs dalgaları üretiyoruz. Ana osilatör vurgu için <strong>1000 Hz</strong>, zayıf vuruşlar için <strong>800 Hz</strong> ton oluşturur ve maksimum vuruş gücü için ultra kısa bir ADSR zarfına sahiptir. Bu, anında ses atağı sağlar.',
    },
    {
      type: 'paragraph',
      html: 'İster ritmi yakalayan bir davulcu, ister gamlar üzerinde çalışan bir piyanist, ister bir soloyu mükemmelleştiren bir gitarist olun, bu metronom (siz oynat düğmesine basana kadar) sessiz ortağınızdır.',
    },
    {
      type: 'tip',
      title: 'Mobilde ses duyamıyor musunuz?',
      html: 'iPhone/iPad kullanıyorsanız, <strong>yan sessiz anahtarının</strong> etkinleştirilmediğinden emin olun. Web Audio teknolojisi birçok cihazda sistem sessiz moduna uyar.',
    },
  ],
};
