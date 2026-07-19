export const title = "Kuis Tata Nama Senyawa Poliatomik";

export const theme = `--pri-50:#fff8f0; --pri-100:#ffeeda; --pri-150:#ffe2c2; --pri-200:#ffd0a0;
  --pri-300:#ffb574; --pri-400:#ff9a45; --pri-500:#fb852a; --pri-600:#ef6d10; --pri-700:#d35c06;
  --yellow:#ffd76a; --yellow-active:#ffe6a3; --yellow-line:#f3cf6a; --yellow-ink:#8a5300;
  --ink:#4a3826; --ink-soft:#6e5b45; --muted:#a08a72; --line:#f6e4cd;
  --green:#1fb583; --green-soft:#e6faf2; --red:#ec5b76; --red-soft:#ffeef0; --gray-chip:#eee6da;
  --card:#ffffff; --glass:rgba(255,255,255,.78);
  --shadow-sm:0 4px 16px -6px rgba(220,120,20,.22);
  --shadow-md:0 16px 40px -16px rgba(220,110,15,.30);
  --shadow-lg:0 30px 70px -24px rgba(210,100,15,.38);
  --r-lg:28px; --r-md:20px; --r-sm:14px;
  --grad:linear-gradient(135deg,#ff9d3f 0%,#f5811a 50%,#e56409 100%);
  --grad-warm:linear-gradient(135deg,#ffca5a,#ffab3a,#fb852a);`;

export const QUIZ = [
 {
  q:'Nama senyawa dari rumus kimia <span class="formula">LiNO<sub>3</sub></span> adalah…',
  opt:['Litium nitrit','Litium nitrat','Litium karbonat','Litium sulfat','Litium fosfat'],
  c:1,
  exp:'<span class="formula">LiNO<sub>3</sub></span> merupakan senyawa ionik yang tersusun dari kation logam litium (Li) dan anion poliatomik nitrat (<span class="formula">NO<sub>3</sub><sup>−</sup></span>). Litium adalah unsur logam yang hanya membentuk satu jenis muatan tetap yaitu (+1), sehingga namanya cukup disebut "litium" tanpa perlu menggunakan angka Romawi. Nitrat merupakan ion poliatomik yang sudah memiliki nama baku. Dengan demikian, nama yang tepat untuk senyawa ini adalah <b>litium nitrat</b>.',
  key:'Kation logam muatan tetap + anion poliatomik → Litium nitrat.'
 },
 {
  q:'Senyawa dengan rumus kimia <span class="formula">CuCO<sub>3</sub></span> memiliki nama…',
  opt:['Tembaga karbonat','Tembaga(I) karbonat','Tembaga(II) karbonat','Tembaga bikarbonat','Tembaga oksalat'],
  c:2,
  exp:'<span class="formula">CuCO<sub>3</sub></span> tersusun dari kation logam tembaga (Cu) dan anion poliatomik karbonat (<span class="formula">CO<sub>3</sub><sup>2−</sup></span>). Tembaga merupakan logam transisi dengan lebih dari satu jenis muatan, sehingga muatannya wajib dituliskan dengan angka Romawi. Dalam senyawa ini, tembaga bermuatan +2 (<span class="formula">Cu<sup>2+</sup></span>) untuk menetralkan ion karbonat yang bermuatan -2. Nama senyawa yang tepat adalah <b>tembaga(II) karbonat</b>.',
  key:'Logam transisi Cu bermuatan +2 → tembaga(II) karbonat.'
 },
 {
  q:'Nama yang tepat untuk senyawa <span class="formula">KClO</span> adalah…',
  opt:['Kalium hipoklorit','Kalium klorida','Kalium klorat','Kalium perklorat','Kalium klorit'],
  c:0,
  exp:'<span class="formula">KClO</span> tersusun dari kation logam kalium (<span class="formula">K<sup>+</sup></span>) dan anion poliatomik hipoklorit (<span class="formula">ClO<sup>−</sup></span>). Kalium merupakan logam golongan IA yang hanya memiliki satu jenis muatan tetap (+1), sehingga tidak memerlukan angka Romawi dalam penamaannya. Penamaan cukup dilakukan dengan menggabungkan nama logam kalium dengan nama ion poliatomiknya menjadi <b>kalium hipoklorit</b>.',
  key:'Ion poliatomik ClO⁻ memiliki nama baku hipoklorit.'
 },
 {
  q:'Senyawa <span class="formula">Sn(NO<sub>3</sub>)<sub>2</sub></span> tersusun dari ion logam dan ion poliatomik. Nama senyawa tersebut adalah…',
  opt:['Timah nitrat','Timah(I) nitrat','Timah nitrit','Timah(II) nitrat','Timah(IV) nitrat'],
  c:3,
  exp:'<span class="formula">Sn(NO<sub>3</sub>)<sub>2</sub></span> tersusun dari kation logam timah (Sn) dan anion poliatomik nitrat (<span class="formula">NO<sub>3</sub><sup>−</sup></span>). Timah memiliki lebih dari satu jenis muatan, sehingga besarnya muatan harus dituliskan dengan angka Romawi. Satu ion timah berikatan dengan dua ion nitrat bermuatan -1, sehingga total muatan anion adalah -2. Untuk mencapai senyawa netral, timah harus bermuatan +2 (<span class="formula">Sn<sup>2+</sup></span>). Maka namanya adalah <b>timah(II) nitrat</b>.',
  key:'Dua ion NO3⁻ membutuhkan kation Sn bermuatan +2.'
 },
 {
  q:'Senyawa yang tersusun atas ion <span class="formula">Al<sup>3+</sup></span> dan <span class="formula">PO<sub>4</sub><sup>3−</sup></span> dinamakan…',
  opt:['Aluminium fosfit','Aluminium fosfat','Aluminium sulfat','Aluminium nitrat','Aluminium nitrit'],
  c:1,
  exp:'Senyawa <span class="formula">AlPO<sub>4</sub></span> tersusun dari kation logam aluminium (Al) dan anion poliatomik fosfat (<span class="formula">PO<sub>4</sub><sup>3−</sup></span>). Aluminium adalah unsur logam yang hanya memiliki satu jenis muatan tetap (+3), sehingga namanya cukup disebut "aluminium" tanpa angka Romawi. Anion <span class="formula">PO<sub>4</sub><sup>3−</sup></span> adalah ion poliatomik dengan nama baku "fosfat". Nama senyawa yang tepat adalah <b>aluminium fosfat</b>.',
  key:'Gabungan Al³⁺ dan PO4³⁻ membentuk aluminium fosfat.'
 },
 {
  q:'<b>Barium sulfat</b> memiliki rumus kimia…',
  opt:['BaSO<sub>3</sub>','BaS','BaSO<sub>4</sub>','Ba<sub>2</sub>SO<sub>4</sub>','Ba(SO<sub>4</sub>)<sub>2</sub>'],
  optFormula:true,
  c:2,
  exp:'Barium sulfat tersusun dari kation logam barium (Ba) dan anion poliatomik sulfat (<span class="formula">SO<sub>4</sub><sup>2−</sup></span>). Barium adalah unsur logam golongan IIA yang hanya memiliki satu jenis muatan tetap (+2), sedangkan ion sulfat memiliki muatan (-2). Karena besar muatannya sama (+2 dan -2), kedua ion dapat bergabung dalam perbandingan 1:1 untuk membentuk senyawa netral yaitu <span class="formula">BaSO<sub>4</sub></span>.',
  key:'Barium (+2) + Sulfat (-2) membentuk rumus 1:1 → BaSO₄.'
 },
 {
  q:'Rumus kimia dari <b>perak nitrat</b> adalah…',
  opt:['AgNO<sub>3</sub>','AgNO<sub>2</sub>','Ag<sub>2</sub>NO<sub>3</sub>','Ag(NO<sub>3</sub>)<sub>2</sub>','Ag<sub>2</sub>SO<sub>4</sub>'],
  optFormula:true,
  c:0,
  exp:'Perak nitrat tersusun dari kation logam perak (<span class="formula">Ag<sup>+</sup></span>) dan anion poliatomik nitrat (<span class="formula">NO<sub>3</sub><sup>−</sup></span>). Perak hanya memiliki satu muatan tetap yaitu (+1), sedangkan ion nitrat memiliki muatan (-1). Karena besar muatannya sama, kedua ion bergabung dalam perbandingan 1:1 untuk membentuk senyawa netral. Jadi, rumus kimia perak nitrat adalah <span class="formula">AgNO<sub>3</sub></span>.',
  key:'Perak (+1) + Nitrat (-1) bergabung 1:1 → AgNO₃.'
 },
 {
  q:'Senyawa <b>kalium klorat</b> memiliki rumus kimia…',
  opt:['KCl','KClO','KClO<sub>2</sub>','KClO<sub>3</sub>','KClO<sub>4</sub>'],
  optFormula:true,
  c:3,
  exp:'Kalium klorat tersusun dari kation logam kalium (<span class="formula">K<sup>+</sup></span>) dan anion poliatomik klorat (<span class="formula">ClO<sub>3</sub><sup>−</sup></span>). Kalium merupakan logam golongan IA yang hanya memiliki muatan tetap +1, sedangkan ion klorat memiliki muatan (-1). Karena besar muatannya sama, kedua ion bergabung dalam perbandingan 1:1 untuk membentuk senyawa netral. Jadi, rumus kimia kalium klorat adalah <span class="formula">KClO<sub>3</sub></span>.',
  key:'Klorat memiliki rumus ClO3⁻, bergabung dengan K⁺ → KClO₃.'
 },
 {
  q:'<b>Magnesium sulfat</b> termasuk senyawa ion yang mengandung ion poliatomik karena…',
  opt:['Tersusun dari unsur-unsur nonlogam','Tersusun dari unsur logam magnesium (Mg) dan ion poliatomik sulfat (SO<sub>4</sub><sup>2−</sup>)','Tidak dapat terurai menjadi ion','Membentuk ikatan kovalen','Tidak menghantarkan listrik dalam larutan'],
  c:1,
  exp:'Magnesium sulfat merupakan senyawa ion yang mengandung ion poliatomik karena tersusun dari ion magnesium (<span class="formula">Mg<sup>2+</sup></span>) sebagai kation logam dan ion sulfat (<span class="formula">SO<sub>4</sub><sup>2−</sup></span>) sebagai anion poliatomik. Adanya ion sulfat yang terdiri atas gabungan beberapa atom nonlogam (S dan O) dengan muatan kelompok menunjukkan karakteristik ion poliatomik.',
  key:'Tersusun atas kation logam Mg²⁺ dan anion poliatomik SO4²⁻.'
 },
 {
  q:'Rumus kimia dari senyawa <b>kalium fosfat</b> adalah…',
  opt:['K<sub>3</sub>PO<sub>4</sub>','KPO<sub>4</sub>','K<sub>2</sub>PO<sub>4</sub>','K<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>','KPO<sub>3</sub>'],
  optFormula:true,
  c:0,
  exp:'<span class="formula">K<sub>3</sub>PO<sub>4</sub></span> merupakan senyawa ionik yang terbentuk dari kation logam kalium (<span class="formula">K<sup>+</sup></span>) dan anion poliatomik fosfat (<span class="formula">PO<sub>4</sub><sup>3−</sup></span>). Kalium adalah unsur golongan IA bermuatan tetap +1, sedangkan ion fosfat bermuatan -3. Untuk membentuk senyawa netral, diperlukan tiga ion kalium untuk menyeimbangkan satu ion fosfat. Jadi, rumus kimianya adalah <span class="formula">K<sub>3</sub>PO<sub>4</sub></span>.',
  key:'Dibutuhkan 3 ion K⁺ untuk menetralkan 1 ion PO4³⁻ → K₃PO₄.'
 }
];