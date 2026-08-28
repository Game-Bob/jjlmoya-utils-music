import { createGuitarStringTensionContent } from './content-factory';

const title = 'Gitar tel gerilimi hesaplayıcısı';
const slug = 'gitar-tel-gerilimi-hesaplayici';
const description = 'Her gitar telinin gerilimini tel kalınlığı, mensur ve akort bilgisine göre tahmin edin. Tam tel setlerini metrik veya emperyal birimlerle çevrimdışı karşılaştırın.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metrik', imperial: 'Emperyal', metricLength: 'Mensur mm', imperialLength: 'Mensur inç', metricGauge: 'Kalınlık mm', imperialGauge: 'Kalınlık mil', metricTension: 'kg kuvvet', imperialTension: 'libre kuvvet', chooseSet: 'Bir tel seti seçin', scaleLength: 'Mensur', tuning: 'Akort', material: 'Tel malzemesi', customSet: 'Kalınlıkları düzenle', presetHint: 'En yakın setle başlayın', gauge: 'Kalınlık', note: 'Nota', frequency: 'Frekans', tension: 'Gerilim', status: 'Hissettirdiği', totalTension: 'Sap üzerindeki toplam çekiş', averageTension: 'Tel başına ortalama', tensionSpread: 'En gevşek ile en sıkı arasındaki fark', low: 'Gevşek', balanced: 'Dengeli', high: 'Sıkı', standard: 'Standart E', halfStepDown: 'Yarım ses aşağı', dropD: 'Drop D', wholeStepDown: 'Bir tam ses aşağı', openG: 'Open G', steel: 'Çelik', nickel: 'Nikel kaplı çelik', phosphorBronze: 'Fosfor bronz', nylon: 'Naylon', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Kalınlıkları düzenle', shortScale: 'Kısa mensur 24,75 inç', fenderScale: 'Fender mensur 25,5 inç', martinScale: 'Martin mensur 25,4 inç', customScale: 'Özel mensur', customScaleHint: 'Üst eşik ile köprü arasındaki titreşen uzunluğu kullanın', formulaNote: 'Tahmin, μ değerini çap ve malzeme yoğunluğundan çıkararak T = 4L²f²μ formülünü kullanır.', modelNote: 'Bu çevrimdışı tahmin bir çelik yoğunluk modeli kullanır. Çekirdek, sarım, kaplama ve üreticinin doğrusal kütlesi gerçek gerilimi değiştirebilir. Enstrüman ayarını değiştirmeden önce üretici verilerini kontrol edin.', faqTitle: 'Gitar teli gerilimi hakkında sorular', bibliographyTitle: 'Gerilim modeli kaynakları', tableLabel: 'Her tel için gerilim okuması', tensionMapLabel: 'Altı telin gerilim profili',
  },
  faq: [
    { question: 'Gitar teli gerilim hesaplayıcısı neye ihtiyaç duyar?', answer: 'Titreşen mensura, her telin nota yüksekliğine, tel kalınlığına ve tutarlı bir malzeme yoğunluğu tahminine ihtiyaç duyar. Preset altı kalınlığı sağlar, akort ise hedef frekansları değiştirir.' },
    { question: 'Daha uzun gitar mensuru tel gerilimini artırır mı?', answer: 'Evet. Aynı kalınlık ve nota için gerilim titreşen uzunluğun karesiyle artar. Bu nedenle aynı 10-46 seti 25,5 inç mensurda 24,75 inç mensurdan daha sıkı hissedilebilir.' },
    { question: 'Akort değişikliği gerilimi nasıl etkiler?', answer: 'Bir teli pesleştirmek gerilimi frekans oranının karesiyle azaltır. Bir tam ses aşağıda ilk gerilimin yaklaşık yüzde 79 u, yarım ses aşağıda yaklaşık yüzde 89 u kalır.' },
    { question: 'Sonuçlar sarımlı gitar telleri için kesin midir?', answer: 'Hayır. Model teli malzeme yoğunluğuna sahip bir silindir olarak ele alır. Sarımlı tellerin çekirdeği, sarımı ve kaplaması vardır; bu yüzden üreticinin doğrusal kütle tabloları daha kesindir.' },
    { question: 'Hangi tel gerilimi rahat hissettirir?', answer: 'Evrensel bir hedef yoktur. Araç, uç değerleri görmek için 8 librenin altını gevşek, 25 librenin üstünü sıkı olarak işaretler. Hissi çalım, ayar ve enstrüman da belirler.' },
    { question: 'Sonucu yeni bir tel setini onaylamak için kullanabilir miyim?', answer: 'Senaryoları karşılaştırmak için kullanın, güvenlik garantisi olarak değil. Kalınlık veya akordu ciddi biçimde değiştirmeden önce enstrüman ve tel üreticisinin verilerini kontrol edin.' },
  ],
  howTo: [
    { name: 'Ölçüm sistemini seçin', text: 'Milimetre ve kilogram kuvvet için Metrik, inç, mil ve libre kuvvet için Emperyal seçin. Sistem değişince fiziksel ayar aynı kalır.' },
    { name: 'Mensur ve akordu seçin', text: 'En yakın mensuru, ardından gerçekten kullandığınız akordu seçin. Titreşen uzunluğu biliyorsanız Özel mensur kullanın.' },
    { name: 'Kalınlıkları seçin veya düzenleyin', text: '9-42, 10-46, 11-49 ya da 12-54 presetlerinden biriyle başlayın. Karışık set veya özel kalın tel için Kalınlıkları düzenle bölümünü açın.' },
    { name: 'Gerilim profilini okuyun', text: 'Her teli, sap üzerindeki toplam çekişi ve uçlar arasındaki farkı karşılaştırın. Gevşek ve Sıkı etiketleri kontrol edilmesi gereken değerleri gösterir.' },
  ],
  seo: [
    { type: 'summary', title: 'Bu hesaplayıcı neyi karşılaştırır', items: ['Preset veya kendi kalınlıklarınızdan altı telin gerilimi', 'Mensur ve akort değişikliklerinin yeni gerilim profili', 'Kilogram veya libre kuvvet cinsinden metrik ve emperyal okumalar', 'Uç değerleri bulmayı kolaylaştıran gevşek ve sıkı işaretleri'] },
    { type: 'title', text: 'Tel gerilimi gitar ayarı hakkında ne söyler', level: 2 },
    { type: 'paragraph', html: 'Tel gerilimi, teli seçilen nota yüksekliğinde tutan çekiş kuvvetidir. Yalnızca kalınlığa bağlı değildir; nota ve titreşen uzunluk da kuvveti değiştirir. Profil, bir telin komşularından çok daha gevşek veya sıkı olup olmadığını gösterir.' },
    { type: 'title', text: 'Tahminin arkasındaki fiziksel model', level: 2 },
    { type: 'paragraph', html: 'Titreşen tel frekans, titreşen uzunluk ve doğrusal kütleyi ilişkilendirir. Burada T = 4L²f²μ bağıntısı kullanılır; doğrusal kütle dairesel kesit ve çelik yoğunluk modeliyle tahmin edilir.' },
    { type: 'title', text: 'Üretici verileri neden hâlâ önemli', level: 2 },
    { type: 'paragraph', html: 'Sarımlı teller çekirdek ve sarımdan oluşur; kaplama ve yapı uzunluk başına kütleyi değiştirir. Sonucu karşılaştırma laboratuvarı, üretici tablosunu ise kurulum referansı olarak kullanın. Böylece parmak altındaki direnci önceden değerlendirebilir ve yeni bir setin hangi telleri daha çok etkileyeceğini görebilirsiniz.' },
    { type: 'list', items: ['Mensuru enstrüman özelliklerinden alın veya üst eşikten köprüye ölçün.', 'Gerçekte kullandığınız akordu seçin.', 'En yakın kalınlık presetinden başlayıp yalnızca planlanan telleri değiştirin.', 'Tek tek değerleri ve farkı kontrol edip üretici verileriyle karşılaştırın.'] },
  ],
});
