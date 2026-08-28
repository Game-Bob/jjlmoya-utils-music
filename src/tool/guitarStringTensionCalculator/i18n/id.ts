import { createGuitarStringTensionContent } from './content-factory';

const title = 'Kalkulator tegangan senar gitar';
const slug = 'kalkulator-tegangan-senar-gitar';
const description = 'Perkirakan tegangan setiap senar gitar dari ukuran senar, skala dan tuning. Bandingkan satu set senar secara offline dalam satuan metrik atau imperial.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: 'Metrik', imperial: 'Imperial', metricLength: 'Skala dalam mm', imperialLength: 'Skala dalam inci', metricGauge: 'Ukuran dalam mm', imperialGauge: 'Ukuran dalam mil', metricTension: 'kg gaya', imperialTension: 'pon gaya', chooseSet: 'Pilih satu set senar', scaleLength: 'Skala', tuning: 'Tuning', material: 'Bahan senar', customSet: 'Edit ukuran senar', presetHint: 'Mulai dari set yang paling mendekati', gauge: 'Ukuran', note: 'Nada', frequency: 'Frekuensi', tension: 'Tegangan', status: 'Rasa main', totalTension: 'Tarikan total pada leher', averageTension: 'Rata-rata per senar', tensionSpread: 'Selisih senar terlemah hingga terkuat', low: 'Longgar', balanced: 'Seimbang', high: 'Kencang', standard: 'E standar', halfStepDown: 'Turun setengah nada', dropD: 'Drop D', wholeStepDown: 'Turun satu nada', openG: 'Open G', steel: 'Baja', nickel: 'Baja berlapis nikel', phosphorBronze: 'Perunggu fosfor', nylon: 'Nilon', presetExtraLight: 'Ekstra ringan', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: 'Edit ukuran senar', shortScale: 'Skala pendek 24,75 inci', fenderScale: 'Skala Fender 25,5 inci', martinScale: 'Skala Martin 25,4 inci', customScale: 'Skala kustom', customScaleHint: 'Gunakan panjang bergetar dari nut ke bridge', formulaNote: 'Perkiraan memakai T = 4L²f²μ, dengan μ sebagai massa per panjang yang diturunkan dari diameter dan kepadatan bahan.', modelNote: 'Perkiraan offline ini memakai model kepadatan baja. Inti, lilitan, lapisan dan berat per panjang dari produsen dapat mengubah tegangan nyata. Periksa data produsen sebelum mengubah setup instrumen.', faqTitle: 'Pertanyaan tentang tegangan senar gitar', bibliographyTitle: 'Sumber model tegangan', tableLabel: 'Pembacaan tegangan setiap senar', tensionMapLabel: 'Profil tegangan keenam senar',
  },
  faq: [
    { question: 'Apa yang dibutuhkan kalkulator tegangan senar gitar?', answer: 'Kalkulator membutuhkan skala bergetar, tinggi nada setiap senar, ukuran senar dan perkiraan kepadatan bahan yang konsisten. Preset mengisi enam ukuran, sedangkan tuning mengubah frekuensi tujuan.' },
    { question: 'Apakah skala gitar yang lebih panjang menaikkan tegangan?', answer: 'Ya. Dengan ukuran dan nada yang sama, tegangan bertambah mengikuti kuadrat panjang bergetar. Set 10-46 yang sama dapat terasa lebih kencang pada skala 25,5 inci dibanding 24,75 inci.' },
    { question: 'Bagaimana perubahan tuning memengaruhi tegangan?', answer: 'Menurunkan nada mengurangi tegangan mengikuti kuadrat rasio frekuensi. Turun satu nada menyisakan sekitar 79 persen tegangan awal, sedangkan turun setengah nada sekitar 89 persen.' },
    { question: 'Apakah hasilnya tepat untuk senar wound?', answer: 'Tidak. Model memperlakukan senar sebagai silinder dengan kepadatan bahan. Senar wound memiliki inti, lilitan dan lapisan, sehingga tabel berat per panjang dari produsen lebih tepat.' },
    { question: 'Berapa tegangan senar gitar yang nyaman?', answer: 'Tidak ada target universal. Tool ini menandai nilai di bawah 8 pon sebagai longgar dan di atas 25 pon sebagai kencang agar ekstrem mudah terlihat. Gaya bermain, setup dan instrumen tetap menentukan.' },
    { question: 'Bisakah hasil ini dipakai untuk menyetujui set senar baru?', answer: 'Gunakan untuk membandingkan skenario, bukan sebagai jaminan keamanan. Periksa panduan pembuat instrumen dan spesifikasi produsen senar sebelum mengubah ukuran atau tuning secara besar.' },
  ],
  howTo: [
    { name: 'Pilih sistem pengukuran', text: 'Pilih Metrik untuk milimeter dan kilogram gaya, atau Imperial untuk inci, mil dan pon gaya. Setup fisik tetap sama saat berpindah sistem.' },
    { name: 'Pilih skala dan tuning', text: 'Pilih panjang skala terdekat lalu tuning yang benar-benar digunakan. Gunakan Skala kustom jika panjang bergetar diketahui.' },
    { name: 'Pilih atau edit ukuran', text: 'Mulai dengan preset 9-42, 10-46, 11-49 atau 12-54. Buka Edit ukuran senar untuk set campuran atau senar rendah kustom.' },
    { name: 'Baca profil tegangan', text: 'Bandingkan tiap senar, tarikan total pada leher dan selisih ekstrem. Label Longgar dan Kencang menunjukkan nilai yang perlu diperiksa.' },
  ],
  seo: [
    { type: 'summary', title: 'Yang dibandingkan kalkulator ini', items: ['Tegangan keenam senar dari preset atau ukuran buatan sendiri', 'Perubahan skala dan tuning sebagai profil tegangan baru', 'Pembacaan metrik dan imperial dalam kilogram gaya atau pon gaya', 'Penanda longgar dan kencang untuk menemukan ekstrem'] },
    { type: 'title', text: 'Apa yang dikatakan tegangan tentang setup gitar', level: 2 },
    { type: 'paragraph', html: 'Tegangan adalah gaya tarik untuk menahan senar pada nada tertentu. Tegangan bukan hanya soal ukuran: nada dan panjang bergetar juga mengubah gaya. Profil satu set membantu melihat senar yang jauh lebih longgar atau kencang dari tetangganya.' },
    { type: 'title', text: 'Model fisik di balik perkiraan', level: 2 },
    { type: 'paragraph', html: 'Senar bergetar menghubungkan frekuensi, panjang bergetar dan massa linear. Hubungan T = 4L²f²μ menjadi model yang dipakai. Massa linear diperkirakan dari penampang lingkaran dan model kepadatan baja.' },
    { type: 'title', text: 'Mengapa data produsen tetap penting', level: 2 },
    { type: 'paragraph', html: 'Senar wound memiliki inti dan lilitan; lapisan serta konstruksinya mengubah berat per panjang. Gunakan hasil ini sebagai laboratorium perbandingan dan tabel produsen sebagai acuan pemasangan. Dengan begitu Anda dapat membandingkan rasa set sebelum memasangnya dan melihat perubahan yang paling berpengaruh.' },
    { type: 'list', items: ['Ambil panjang skala dari spesifikasi instrumen atau ukur dari nut ke bridge.', 'Pilih tuning yang benar-benar digunakan.', 'Mulai dari preset ukuran terdekat dan edit hanya senar yang ingin diubah.', 'Periksa nilai individual dan selisihnya lalu cocokkan dengan data produsen.'] },
  ],
});
