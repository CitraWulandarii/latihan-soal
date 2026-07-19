export const title = "Kuis Tata Nama Senyawa Asam";

export const theme = `--lav-50:#f7f4ff; --lav-100:#efeaff; --lav-150:#e9e1ff; --lav-200:#ddd1ff;
  --pri-300:#c4b1ff; --pri-400:#a98cf7; --pri-500:#8b5cf6; --pri-600:#7a3ff0; --pri-700:#6726d6;
  --blue-300:#9cc7f5; --blue-400:#6db0f2; --blue-500:#4f86ec;
  --ink:#372b54; --ink-soft:#5c5277; --muted:#8a82a3; --line:#e7dffb;
  --green:#1fb583; --green-soft:#e6faf2; --red:#ec5b76; --red-soft:#ffeef0;
  --yellow:#ffe49c; --yellow-soft:#fff6d9; --gray-chip:#e9e6f2;
  --card:#ffffff; --glass:rgba(255,255,255,.74);
  --shadow-sm:0 4px 16px -6px rgba(123,76,200,.20);
  --shadow-md:0 16px 40px -16px rgba(108,68,200,.32);
  --shadow-lg:0 30px 70px -24px rgba(96,56,190,.42);
  --r-lg:28px; --r-md:20px; --r-sm:14px;
  --grad:linear-gradient(135deg,#8b5cf6 0%,#6f6cf0 48%,#5b95ee 100%);`;

export const QUIZ = [
 {
  q:'Nama senyawa asam dari rumus kimia <span class="formula">H<sub>2</sub>CO<sub>3</sub></span> adalah…',
  opt:['Asam sulfat','Asam karbonat','Asam nitrat','Asam klorat','Asam fosfat'],
  c:1,
  exp:'<span class="formula">H<sub>2</sub>CO<sub>3</sub></span> terbentuk dari kation hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion karbonat (<span class="formula">CO<sub>3</sub><sup>2−</sup></span>). Dalam tata nama senyawa asam, ion hidrogen di depan rumus dinyatakan dengan kata <b>"asam"</b>, lalu diikuti nama anionnya. Karena anion <span class="formula">CO<sub>3</sub><sup>2−</sup></span> bernama karbonat, namanya adalah <b>asam karbonat</b>.',
  key:'Ion <span class="formula">H<sup>+</sup></span> di depan → kata "asam"; anion <span class="formula">CO<sub>3</sub><sup>2−</sup></span> = karbonat.'
 },
 {
  q:'Senyawa dengan rumus kimia <span class="formula">HNO<sub>3</sub></span> memiliki nama…',
  opt:['Asam nitrit','Asam klorida','Asam nitrat','Asam sulfit','Asam karbonat'],
  c:2,
  exp:'<span class="formula">HNO<sub>3</sub></span> tersusun dari kation hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion nitrat (<span class="formula">NO<sub>3</sub><sup>−</sup></span>). Ion hidrogen di awal rumus dinyatakan dengan kata "asam", diikuti nama anionnya. Karena anion <span class="formula">NO<sub>3</sub><sup>−</sup></span> bernama nitrat, namanya adalah <b>asam nitrat</b>.',
  key:'Akhiran <b>-at</b> pada oksianion paling umum: <span class="formula">NO<sub>3</sub><sup>−</sup></span> = nitrat.'
 },
 {
  q:'Nama yang tepat untuk senyawa <span class="formula">H<sub>2</sub>SO<sub>4</sub></span> adalah…',
  opt:['Asam sulfat','Asam sulfit','Asam sulfida','Asam fosfat','Asam asetat'],
  c:0,
  exp:'<span class="formula">H<sub>2</sub>SO<sub>4</sub></span> terbentuk dari kation hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion sulfat (<span class="formula">SO<sub>4</sub><sup>2−</sup></span>). Ion hidrogen pada awal rumus diganti dengan kata "asam", diikuti nama anionnya. Anion <span class="formula">SO<sub>4</sub><sup>2−</sup></span> bernama sulfat, sehingga namanya <b>asam sulfat</b>.',
  key:'Anion <span class="formula">SO<sub>4</sub><sup>2−</sup></span> = sulfat (-at), bukan sulfit (-it).'
 },
 {
  q:'Nama yang tepat untuk senyawa <span class="formula">HClO</span> adalah…',
  opt:['Asam klorat','Asam perklorat','Asam klorida','Asam hipoklorit','Asam klorit'],
  c:3,
  exp:'<span class="formula">HClO</span> terdiri dari kation hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion hipoklorit (<span class="formula">ClO<sup>−</sup></span>). Keberadaan ion hidrogen di depan rumus dinyatakan dengan kata "asam", diikuti nama anionnya. Anion <span class="formula">ClO<sup>−</sup></span> memiliki nama baku hipoklorit, maka namanya <b>asam hipoklorit</b>.',
  key:'Jumlah O paling sedikit → awalan <b>hipo-</b> + akhiran <b>-it</b> (<span class="formula">ClO<sup>−</sup></span>).'
 },
 {
  q:'Senyawa <span class="formula">HF</span> termasuk senyawa asam karena…',
  opt:['Mengandung ion logam','Tersusun dari unsur logam dan nonlogam','Menghasilkan ion H<sup>+</sup> saat dilarutkan dalam air','Memiliki rasa pahit dan licin','Tidak dapat menghantarkan listrik'],
  c:2,
  exp:'Menurut teori Arrhenius, asam adalah zat yang meningkatkan konsentrasi ion hidrogen (<span class="formula">H<sup>+</sup></span>) dalam larutan. Saat <span class="formula">HF</span> larut dalam air, ia terionisasi membentuk <span class="formula">H<sup>+</sup></span> dan ion fluorida (<span class="formula">F<sup>−</sup></span>). Karena itu HF bersifat asam.',
  key:'Asam Arrhenius = zat penghasil <span class="formula">H<sup>+</sup></span> dalam air.'
 },
 {
  q:'Rumus kimia yang tepat untuk <b>asam fosfat</b> adalah…',
  opt:['H<sub>3</sub>PO<sub>4</sub>','HPO<sub>4</sub>','H<sub>2</sub>PO<sub>4</sub>','H<sub>3</sub>PO<sub>3</sub>','HPO<sub>3</sub>'],
  optFormula:true,
  c:0,
  exp:'Asam fosfat terbentuk dari kation hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion fosfat (<span class="formula">PO<sub>4</sub><sup>3−</sup></span>). Karena anion fosfat bermuatan −3, dibutuhkan tiga ion <span class="formula">H<sup>+</sup></span> (masing-masing +1) agar senyawa netral. Maka rumusnya <span class="formula">H<sub>3</sub>PO<sub>4</sub></span>.',
  key:'Menyeimbangkan muatan: <span class="formula">PO<sub>4</sub><sup>3−</sup></span> butuh 3 <span class="formula">H<sup>+</sup></span>.'
 },
 {
  q:'Larutan <b>asam iodida</b> memiliki rumus kimia…',
  opt:['KI','NaI','CaI<sub>2</sub>','AgI','HI'],
  optFormula:true,
  c:4,
  exp:'Asam iodida tersusun dari kation hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion iodida (<span class="formula">I<sup>−</sup></span>) yang bermuatan −1. Karena hanya butuh satu ion hidrogen untuk menyeimbangkan muatan, rumusnya adalah <span class="formula">HI</span>.',
  key:'Anion monoatomik <span class="formula">X<sup>−</sup></span> → asam <span class="formula">HX</span> (iodida → <span class="formula">HI</span>).'
 },
 {
  q:'Rumus kimia dari <b>asam nitrit</b> adalah…',
  opt:['HNO<sub>3</sub>','HNO<sub>2</sub>','H<sub>2</sub>SO<sub>4</sub>','HClO<sub>4</sub>','H<sub>2</sub>CO<sub>3</sub>'],
  optFormula:true,
  c:1,
  exp:'Asam nitrit tersusun dari ion hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion nitrit (<span class="formula">NO<sub>2</sub><sup>−</sup></span>) yang bermuatan −1. Hanya diperlukan satu ion hidrogen untuk membentuk senyawa netral, sehingga rumusnya <span class="formula">HNO<sub>2</sub></span>.',
  key:'Akhiran <b>-it</b> (nitrit <span class="formula">NO<sub>2</sub><sup>−</sup></span>) ≠ <b>-at</b> (nitrat <span class="formula">NO<sub>3</sub><sup>−</sup></span>).'
 },
 {
  q:'Rumus kimia dari senyawa <b>asam klorida</b> adalah…',
  opt:['HClO','HClO<sub>3</sub>','HClO<sub>4</sub>','HCl','HClO<sub>2</sub>'],
  optFormula:true,
  c:3,
  exp:'Asam klorida tersusun dari ion hidrogen (<span class="formula">H<sup>+</sup></span>) dan anion klorida (<span class="formula">Cl<sup>−</sup></span>) yang bermuatan −1. Satu ion hidrogen (+1) cukup menetralkan muatan −1 dari <span class="formula">Cl<sup>−</sup></span>, sehingga rumusnya <span class="formula">HCl</span>.',
  key:'Anion klorida <span class="formula">Cl<sup>−</sup></span> (monoatomik) → <span class="formula">HCl</span>, tanpa oksigen.'
 },
 {
  q:'<b>Asam bromida</b> memiliki karakteristik sebagai senyawa asam karena…',
  opt:['Menghasilkan ion OH<sup>−</sup> dalam air','Mengandung unsur logam','Dapat menghasilkan ion H<sup>+</sup> saat dilarutkan dalam air','Memiliki ikatan logam','Tidak larut dalam air'],
  c:2,
  exp:'Asam bromida (<span class="formula">HBr</span>) menghasilkan ion hidrogen (<span class="formula">H<sup>+</sup></span>) saat dilarutkan dalam air; ia terionisasi menjadi <span class="formula">H<sup>+</sup></span> dan ion bromida (<span class="formula">Br<sup>−</sup></span>). Kemampuan menghasilkan <span class="formula">H<sup>+</sup></span> dalam larutan adalah ciri utama senyawa asam.',
  key:'Ciri utama asam: menghasilkan <span class="formula">H<sup>+</sup></span> ketika larut dalam air.'
 }
];
