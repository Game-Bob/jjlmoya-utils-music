import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FrequencyNoteConverterUI } from '../ui';

const slug = 'frekans-nota-donusturucu';
const title = 'Frekans Müzik Notası Dönüştürücü';
const description =
  'Hertz değerlerini anında müzik notalarına dönüştürün. Herhangi bir frekansın tam notasını belirleyin, cent cinsinden sapmayı ölçün, saf tonu dinleyin ve sentezleyici ile örnekleyicileri hassasiyetle akort edin.';

const faqData = [
  {
    question: '440 Hz frekansının hangi notaya karşılık geldiğini nasıl anlarım?',
    answer:
      '440 Hz, evrensel akort referans notası olan La4 (A4) notasına tam olarak karşılık gelir. Piyano üzerindeki orta Do\'nun üzerindeki La notasıdır. Bu frekans, 1939\'dan beri ISO 16 standardıdır ve dünya çapında orkestra enstrümanlarını akort etmek için kullanılır.',
  },
  {
    question: "Bir notanın '15 cent yukarıda' olması ne anlama gelir?",
    answer:
      'Cent, bir yarım sesin yüzde biridir. Bir notanın 15 cent üzerinde olmak, frekansın eşit mizaçlı sistemdeki tam notadan biraz daha tiz (keskin) olduğu anlamına gelir. Bir sentezleyicide bunu düzeltmek için -15 cent ince ayar (fine-tune) uygulamalısınız.',
  },
  {
    question: '440 Hz dışında neden 432 Hz ve 444 Hz referans seçenekleri var?',
    answer:
      'Farklı müzikal bağlamlar farklı akort referansları kullanır. 432 Hz, belirli prodüksiyon topluluklarında popülerdir. 444 Hz, Rönesans dönemi erken müzik kayıtlarında yaygındır. Bazı Avrupa orkestraları, daha parlak bir ses elde etmek için 441–444 Hz arasında akort yapar.',
  },
  {
    question: 'Etkileşimli piyano klavyesi ne işe yarar?',
    answer:
      'Etkileşimli piyano, notayı klavye üzerinde görsel olarak belirlemenize ve ayrıca doğrudan tuşlara basarak frekans girmenize olanak tanır. Bir tuşa basmak size o tuşun tam frekansını verir ve karşılaştırma için saf bir sinüs tonu çalar.',
  },
  {
    question: 'Hesaplayıcı tarafından gösterilen armonikleri nasıl kullanırım?',
    answer:
      'Armonikler (alt ve üst oktav), notanızla doğrudan ilişkili frekansları gösterir. Sentezleyici katmanları arasındaki çakışmaları önlemek, rezonans filtrelerini doğru notaya ayarlamak veya davul örneklerini doğru örnekleyici (sampler) oktavlarına atamak için kullanışlıdır.',
  },
  {
    question: 'Dinleme modu neden gerçek ses yerine bir sinüs tonu oluşturuyor?',
    answer:
      'Sinüs tonu, ek armonikler içermeyen, yalnızca temel frekansı içeren saf bir dalgadır. Bu, tını renginin akort yargısına müdahale etmesi olmadan gerçek enstrümanla temiz bir karşılaştırma yapılmasına olanak tanır. Elektronik iğneli akort cihazlarının ürettiği sinyalin aynısıdır.',
  },
  {
    question: 'Müzik notasının frekansı nasıl hesaplanır?',
    answer:
      'Frekans, eşit mizaca dayalı logaritmik bir formül kullanılarak hesaplanır. Referans La4 (440 Hz) notasından başlayarak, her yarım ses yukarı, ikinin on ikinci kökü (~1.05946) ile çarpılarak elde edilir ve her oktav frekansın iki katına çıkarılmasına eşittir.',
  },
  {
    question: '440 Hz frekansı hangi notadır?',
    answer:
      '440 Hz frekansı tam olarak La4 (A4) notasıdır. Yirminci yüzyılın ortalarından beri çoğu orkestra ve çağdaş müzisyen tarafından enstrümanlarını akort etmek için kullanılan standart referans notasıdır.',
  },
  {
    question: '440 Hz ve 432 Hz akordu arasındaki fark nedir?',
    answer:
      '440 Hz uluslararası standarttır (ISO 16). 432 Hz, bazı müzisyenlerin öznel sonik nedenlerle tercih ettiği, sıklıkla meditasyon müziğinde kullanılan alternatif bir akorttur; ancak 440 Hz ile karşılaştırıldığında net biyolojik faydalarına dair bilimsel bir kanıt yoktur.',
  },
];

const howToData = [
  {
    name: 'Frekansı girin',
    text: 'Ana giriş alanına hertz cinsinden frekansı yazın. Sonuç, nota adı ve bilimsel oktavı ile birlikte anında görünür.',
  },
  {
    name: 'Sonucu ve cent göstergesini okuyun',
    text: 'Görsel akort göstergesi, frekansınızın notanın üzerinde mi, altında mı yoksa tam üzerinde mi olduğunu gösterir. Cent değeri, enstrümanınızda veya eklentinizde ince ayarı ne kadar yapmanız gerektiğini söyler.',
  },
  {
    name: 'Katmanları akort etmek için armonikleri kullanın',
    text: 'Frekans çakışması olmadan ek osilatörleri, rezonans filtrelerini veya perküsyon katmanlarını yapılandırmak için alt ve üst oktav frekanslarını kontrol edin.',
  },
  {
    name: 'La4 referansını ayarlayın',
    text: 'Tüm hesaplamaların proje bağlamınızla tutarlı olması için La4 referansını 432 Hz, 444 Hz veya herhangi bir özel değere değiştirin.',
  },
  {
    name: 'Referans tonunu dinleyin',
    text: 'Girilen frekansta saf bir sinüs tonu oluşturmak için oynat düğmesine basın ve gerçek enstrümanınızı kulaktan akort edin.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    btnHzToNote: 'Hz\'den Notaya',
    btnNoteToHz: 'Notadan Hz\'e',
    labelRef: 'La4 Referansı',
    ariaRefCustom: 'Özel La4 referans frekansı',
    calInfo:
      '<strong>440 Hz</strong> uluslararası standarttır. <strong>432 Hz</strong> sıklıkla meditasyon müziğinde ve solfejde kullanılır.',
    labelFrequency: 'FREKANS',
    ariaFreqInput: 'Hertz cinsinden frekans girin',
    ariaPlay: 'Tonu dinle',
    copyNoteName: 'Notayı kopyala',
    labelOctaveDown: 'Alt oktav',
    labelInputFreq: 'Giriş frekansı',
    labelOctaveUp: 'Üst oktav',
    labelNoteInput: 'NOTA ADI (örn. La4, Do#3, Do4)',
    placeholderNote: 'Notayı yazın...',
    labelSetNote: 'NOTAYI AYARLA',
    labelSetOctave: 'OKTAVI AYARLA',
    labelSelectedNote: 'Seçilen nota',
    copyHz: 'Hz\'i kopyala',
    btnListenNote: 'Notayı dinle',
    pianoLabel: 'Etkileşimli piyano — frekansını görmek için bir tuşa basın',
    pianoAria: 'Etkileşimli piyano klavyesi',
    historyTitle: 'Geçmiş',
    historyClear: 'Temizle',
    historyEmpty: 'Son dönüştürme yok',
    historyLoadAria: '%s Hz yükle',
    tuned: 'Akortlu',
    sharp: 'tiz (sharp)',
    flat: 'pes (flat)',
    unitHzExact: 'tam Hz',
    noteNames: 'Do,Do#,Re,Re#,Mi,Fa,Fa#,Sol,Sol#,La,La#,Si',
    noteOptions: 'Do (C)|Do# / Reb|Re (D)|Re# / Mib|Mi (E)|Fa (F)|Fa# / Solb|Sol (G)|Sol# / Lab|La (A)|La# / Sib|Si (B)',
    pianoOctave: 'Okt',
    copyFeedback: 'Kopyalandı',
  },
  seo: [
    {
      type: 'summary',
      title: 'Hesaplayıcı özellikleri',
      items: [
        'Çift yönlü dönüştürme: Aynı araçta Hz\'den notaya ve notadan Hz\'e',
        'Ayarlanabilir La4 referansı (440 / 432 / 444 Hz) ile tam hassasiyet',
        'Tiz / pes / akortlu göstergeli görsel cent ölçer',
        'Armonik gösterimi (temel, alt oktav, üst oktav)',
        'Karşılık gelen tuşu vurgulayan etkileşimli piyano klavyesi',
        'Yamalar ve örnekler arasında hızlı karşılaştırma için arama geçmişi',
      ],
    },
    {
      type: 'title',
      text: 'Bir müzik notasının frekansı nedir ve neden önemlidir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her müzik notası, özünde havanın periyodik bir titreşimidir. Bir gitar teli saniyede 440 kez titreştiğinde, evrensel akort referans notası olan La4\'ü üretir. Hertz ve notalar arasındaki bu yazışma keyfi değildir: oktavı matematiksel bir perspektiften mükemmel şekilde eşit uzaklıktaki on iki yarım sese bölen, Batı müziğindeki baskın akort sistemi olan <strong>eşit mizaç</strong> tarafından tanımlanır.',
    },
    {
      type: 'paragraph',
      html: 'Her notanın tam frekansını bilmek ses sentezi, müzik prodüksiyonu, ses mühendisliği ve enstrüman yapımında temeldir. Bir sentezleyicinin akortlu bir notayı yeniden üretmek için her osilatörün hangi frekansta titreşmesi gerektiğini bilmesi gerekir. Bir miks mühendisinin, bir enstrümanın temel sesini etkilemeden bir uğultuyu gidermek için ekolayzır ile nerede kesim yapması gerektiğini bilmesi gerekir.',
    },
    {
      type: 'title',
      text: 'Dönüştürmenin arkasındaki matematiksel formül',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eşit mizaç geometrik bir ilerlemeye dayanır. Her yarım ses, frekansın ikinin on ikinci kökü ile çarpılmasına eşittir. La4\'e göre yarım ses cinsinden mesafesinden herhangi bir notanın frekansını elde etmek için formül şöyledir:',
    },
    {
      type: 'code',
      code: 'f = La4 × 2^((n - 69) / 12)',
      ariaLabel: 'MIDI nota numarasını Hz cinsinden frekansa dönüştürme formülü',
    },
    {
      type: 'paragraph',
      html: 'Burada <em>n</em> MIDI nota numarasıdır (La4 = 69) ve <em>La4</em> referans frekansıdır (genellikle 440 Hz). Bu formülü tersine çevirmek, girilen herhangi bir frekansa en yakın notayı ve cent cinsinden sapmayı verir.',
    },
    {
      type: 'title',
      text: 'Cent: Müzisyenler ve mühendisler için hassasiyet birimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir yarım ses 100 cente bölünmüştür. Bu birim, herhangi bir akort sapmasının ondalık hassasiyetle tanımlanmasına olanak tanır. 10 centlik bir sapma eğitimli bir kulak tarafından zaten fark edilebilir; 20 centin üzerinde çoğu dinleyiciye açıkça akortsuz gelir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mükemmel akort',
          description:
            'Sapma, tam eşit mizaç frekansından 5 centten az olduğunda bir nota mükemmel şekilde akortludur.',
        },
        {
          title: 'DAW\'da Cent',
          description:
            'Örnekleyiciler, sentezleyiciler ve perde kaydırma (pitch-shifting) eklentileri, ince ayar için centleri kullanır ve örneklerin yapaylık (artifact) olmadan tam notalarına ayarlanmasına olanak tanır.',
        },
        {
          title: 'İnsan eşiği',
          description:
            'Akortsuz notalar için algı eşiği, enstrümana, dinamiklere ve armonik bağlama bağlı olarak 5 ile 15 cent arasında değişir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'La4 referansı: 440 Hz, 432 Hz ve akort savaşları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La4 = 440 Hz referans frekansı 1939\'da uluslararası olarak standartlaştırılmıştır (ISO 16). Ancak Barok müzisyenleri tipik olarak 415 Hz referanslarıyla çalışır ve 432 Hz\'i tercih eden ve büyüyen bir yapımcı topluluğu vardır. Berlin Filarmoni gibi seçkin orkestralar, daha parlak ve nüfuz edici bir ses için düzenli olarak 443 Hz kullanır.',
    },
    {
      type: 'paragraph',
      html: 'Müzik prodüksiyonunda referans, canlı kaydedilmiş akustik enstrümanları sanal enstrümanlarla karıştırırken önemlidir. Kaydedilen piyano 442 Hz\'e akort edilmişse ancak sentezleyici varsayılan olarak 440 Hz ise, tüm örneklerin cent cinsinden düzeltilmesi gerekecektir.',
    },
    {
      type: 'tip',
      title: 'Profesyonel örnekleyici (sampler) ipucu',
      html: 'Kontakt veya Decent Sampler gibi bir örnekleyiciye bir örnek aktarırken, örnek frekansını bu hesaplayıcıya girin. Akort ölçerde gösterilen cent değeri, notanın mükemmel şekilde akortlu çalınması için örnekleyiciye girilecek tam <em>fine-tune</em> değerini size söyler.',
    },
    {
      type: 'title',
      text: 'Oktava göre referans frekans tablosu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu tablo, modüler sentezleyici osilatörlerini yapılandırmak veya bir enstrümanın aralığını doğrulamak için yararlı olan, La4 = 440 Hz ile eşit mizaçtaki her Do notasının tam frekanslarını gösterir:',
    },
    {
      type: 'table',
      headers: ['Nota', 'Frekans (Hz)', 'MIDI Notası', 'Tipik enstrüman aralığı'],
      rows: [
        ['Do0', '16.35', '12', 'Kontrbas, org pedalı'],
        ['Do1', '32.70', '24', 'Kontrbas, bas gitar alt tel'],
        ['Do2', '65.41', '36', 'Çello, bas gitar'],
        ['Do3', '130.81', '48', 'Viyola, tenor saksafon, gitar'],
        ['Do4', '261.63', '60', 'Orta Do, piyano, tenor ses'],
        ['Do5', '523.25', '72', 'Flüt, keman, soprano ses'],
        ['Do6', '1046.50', '84', 'Pikolo flüt, yüksek keman kayıtları'],
        ['Do7', '2093.00', '96', 'Flüt armonikleri, sentezleyici'],
        ['Do8', '4186.01', '108', '88 tuşlu klavye, teknik limit'],
      ],
    },
    {
      type: 'title',
      text: 'Armonikler ve 2:1 ilişki olarak oktav',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Müzikal akustikteki en önemli ilişkilerden biri oktavdır: frekansı iki katına çıkarmak bir oktav üstte aynı notayı üretir ve yarıya indirmek bir oktav alta indirir. Bu 2:1 ilişkisi, herhangi bir akustik enstrümanın doğal armoniklerinin temelidir.',
    },
    {
      type: 'paragraph',
      html: 'Sentezlemede, bir frekansın doğrudan armoniklerini bilmek, bir ses katmanındaki osilatörler arasındaki spektral çakışmayı önlemenin anahtarıdır. Bu hesaplayıcı, girilen her frekans için her zaman üst ve alt oktavı gösterir.',
    },
    {
      type: 'title',
      text: 'Müzisyenler ve yapımcılar için gerçek dünyadaki kullanım durumları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Analog osilatörleri akort etme: Çıkış frekansını ölçün ve kaba (coarse) veya ince (fine) ayarı kaç cent ayarlamanız gerektiğini öğrenmek için hesaplayıcı ile karşılaştırın.',
        'Örnekleri notalara atama: 55 Hz\'de kaydedilmiş bir kick davulu La1\'dir. Bu araç size bir örnekleyicide onu tam olarak nerede eşleyeceğinizi söyler.',
        'Sorunlu rezonansları tespit etme: Bir oda 80 Hz\'de rezonansa giriyorsa hesaplayıcı bunun Mi2 olduğunu doğrular ve basa zarar vermeden onu zayıflatmak için EQ kullanımına rehberlik eder.',
        'Subwoofer\'ları senkronize etme: Birden fazla subwoofer\'ın aynı notayı ürettiğini doğrulamak, parazit nedeniyle oluşan güçlenmeleri veya sönümlenmeleri önler.',
        'Çanları ve belirli perdeli perküsyonları akort etme: Parçanın tonalitesine entegre etmek için temel prensibi belirleyin.',
        'Rezonans filtre tasarımı: 349.23 Hz\'de yüksek Q değerli bir bant geçiren filtre Fa4\'te zirve yapacak ve armonik tasarım kararlarını kolaylaştıracaktır.',
      ],
    },
    {
      type: 'title',
      text: 'Anında görsel referans olarak piyano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Piyano klavyesi, müzikal spektrumun en sezgisel görsel haritasıdır. Beyaz (doğal) ve siyah (diyez/bemol) tuş dizilimi, gamların, akorların ve aralıkların modellerinin bir bakışta tanınmasını sağlar. Etkileşimli piyano, her frekansa karşılık gelen tuşu vurgulayarak sayıyı evrensel klavyedeki konumuna bağlar.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Matematiksel hassasiyet: ISO 16 eşit mizaç formülünü kullanır.',
          con: 'Sınırlama: Yalnızca eşit mizaç için geçerlidir, orta ses (meantone) gibi tarihsel akortlar için geçerli değildir.',
        },
        {
          pro: 'Serbest kalibrasyon: 400 ile 480 Hz arasındaki La4 referanslarını destekler.',
          con: 'Sinüs tonu enstrümanın gerçek tınısını değil, sadece temel frekansını üretir.',
        },
        {
          pro: 'Çift yönlü dönüştürme: Aynı araçta Hz\'den notaya ve notadan Hz\'e.',
          con: 'Cent ölçer, tam veya saf mizaca değil, en yakın yarım sese göredir.',
        },
        {
          pro: 'Arama geçmişi: Birden fazla yamanın veya örneğin hızlı bir şekilde karşılaştırılmasına olanak tanır.',
          con: 'İşitilebilir aralığın (20 Hz – 20 kHz) dışındaki frekansların pratik kullanımı sınırlıdır.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu aracı kullanmak için temel terimler sözlüğü',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Hz (Hertz): saniyedeki döngü sayısı. Bir ses dalgasının frekansını ölçer.',
        'MIDI notası: MIDI standardındaki her notayı tanımlayan 0 ile 127 arasında tam sayı. La4 = 69.',
        'Bilimsel oktav: nota isminin sonuna oktav numarasını ekleyen adlandırma sistemi (La4, Do3).',
        'Cent: bir yarım sesin yüzde biri. Akort sapmalarının hassasiyetle ifade edilmesini sağlar.',
        'Eşit mizaç (Equal temperament): tüm yarım seslerin eşit olduğu akort sistemi (oran 2^(1/12)).',
        'La4: referans notası. Uluslararası standart: 440 Hz (ISO 16, 1975).',
        'Armonik (Harmonize): akustik enstrümanlar tarafından doğal olarak üretilen, temel frekansın tam sayı katlarındaki frekanslar.',
        'Fine-tune: sentezleyici ve örnekleyici üzerinde akordu cent cinsinden ayarlamak için kullanılan parametre.',
      ],
    },
  ],
};
