import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'muzik',
  title: 'Çevrimiçi Müzik Araçları',
  description:
    'Müzisyenler, yapımcılar ve meraklılar için ücretsiz müzik yardımcı programları. Metronom, BPM hesaplayıcı, frekans dönüştürücü, nota eşdeğerliği ve daha fazlası.',
  seo: [
    {
      type: 'summary',
      title: 'Bu kategoride neler bulacaksınız',
      items: [
        'Web Audio API ile çevrimiçi metronom — milisaniye hassasiyeti',
        'Gecikmeler ve yankı için BPM milisaniye hesaplayıcı',
        'Frekansı müzik notasına dönüştürücü (Hz, sent ve akort bozukluğu)',
        'Mikrofon hizalaması için faz mesafesi hesaplayıcı',
        'Latin, Amerikan ve Alman sistemleri arasında nota eşdeğerliği',
        'Dijital ses depolama hesaplayıcı',
      ],
    },
    {
      type: 'title',
      text: 'Yaratıcı Sürecin Her Aşaması için Müzik Araçları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İlk provaadan son masteringe kadar her müzisyen ve yapımcı her zaman kullanılabilir hassas araçlara ihtiyaç duyar. <strong>Çevrimiçi müzik yardımcı programları</strong> koleksiyonumuz tek bir net hedefle tasarlandı: minimum sürtüşmeyle maksimum teknik hassasiyet.',
    },
    {
      type: 'paragraph',
      html: 'Kurulum gerekmez. Tüm araçlar tarayıcınızda doğrudan çalışır, tamamen ücretsizdir ve gizliliğinizi korur: hiçbir veri cihazınızı terk etmez.',
    },
    {
      type: 'title',
      text: 'Pratik Yapan Müzisyen için',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Çevrimiçi metronom</strong>, eğitim veya çalışma sırasındaki her müzisyen için temel araçtır. Metronommuz, milisaniye hassasiyetini garanti etmek, sürüklenmeyi ortadan kaldırmak ve dalgalanma efektiyle görsel geri bildirim sağlamak için Web Audio API kullanır. <strong>Tap Tempo</strong> özelliği herhangi bir şarkının BPM\'ini anında bulmanızı sağlar.',
    },
    {
      type: 'title',
      text: 'Müzik Yapımcısı için',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>BPM milisaniye hesaplayıcı</strong> her mixing seansında vazgeçilmezdir. Bir gecikme veya yankıyı şarkı temposuna senkronize etmek, nefes alan bir mix ile yapay ses çıkaran bir mix arasındaki farkı yaratır. Benzer şekilde, <strong>faz mesafesi hesaplayıcı</strong> mikrofon hizalamasını örnekleme düzeyinde hassasiyetle yapar ve çok mikrofonlu kayıtlarda faz iptalini önler.',
    },
    {
      type: 'title',
      text: 'Ses Mühendisi için',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Frekans müzik notası dönüştürücüsü</strong> herhangi bir Hz değerini eşdeğer notasına dönüştürür ve sent cinsinden sapmayı da gösterir. Analog sentezleyicileri akort etmek, bir odadaki sorunlu rezonansları belirlemek veya yanlış ses örnekleriyle çalışmak için mükemmeldir. <strong>Dijital ses depolama hesaplayıcı</strong> kayıt projelerini planlamaya ve disk alanını hassas bir şekilde yönetmeye yardımcı olur.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Teknik Hassasiyet',
          description:
            'Tüm araçlar matematiksel olarak doğrulanmış algoritmalara dayanmaktadır. Yaklaşım yok: sonuçlar kesin ve tekrarlanabilir.',
        },
        {
          title: 'Tam Gizlilik',
          description:
            'İşlem cihazınızda gerçekleşir. Hiçbir ses, dosya veya kişisel veri herhangi bir sunucuya iletilmez.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Müziğin Evrensel Dili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Müzik, birden fazla nota sistemi olan bir dildir. <strong>Nota eşdeğerliği</strong> aracı, Latin sistemi (Do, Re, Mi…), Amerikan sistemi (C, D, E…) ve Alman sistemi (B yerine H ile C, D, E…) arasında anında çeviri yapar; farklı geleneklerden müzisyenlerle iletişim kurarken veya farklı ülkelerden notaları okurken karışıklığı önler.",
    },
    {
      type: 'tip',
      title: 'Kurulum gerekmez',
      html: 'Tüm araçlar tarayıcıda doğrudan çalışır, plugin veya ek uygulama gerektirmez. Oturumlarınız sırasında her zaman elinizin altında olmaları için bu sayfayı yer imlerine ekleyin.',
    },
  ],
};
