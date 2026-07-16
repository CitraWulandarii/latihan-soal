export const title = "Latihan Soal Tata Nama Senyawa Basa";

export const theme = `--pri-50:#fffdf3; --pri-100:#fff8de; --pri-150:#fff2c4; --pri-200:#ffe9a0;
  --pri-300:#ffd866; --gold:#f5a623; --gold-deep:#e08a0b;
  --blue-300:#9cc2f5; --blue-400:#6aa6f0; --blue-500:#4f86ec; --blue-600:#3f74e0;
  --ink:#463f31; --ink-soft:#6b6250; --muted:#9b9179; --line:#f1e7c8;
  --green:#1fb583; --green-soft:#e6faf2; --mint:#d4f5de; --mint-line:#a6e3ba; --mint-ink:#168a5a;
  --red:#ec5b76; --red-soft:#ffeef0; --gray-chip:#ececdf;
  --card:#ffffff; --glass:rgba(255,255,255,.76);
  --shadow-sm:0 4px 16px -6px rgba(190,140,20,.22);
  --shadow-md:0 16px 40px -16px rgba(190,140,20,.30);
  --shadow-lg:0 30px 70px -24px rgba(180,130,20,.38);
  --r-lg:28px; --r-md:20px; --r-sm:14px;
  --grad:linear-gradient(135deg,#5b9bf0 0%,#4f86ec 50%,#3f74e0 100%);
  --grad-warm:linear-gradient(135deg,#ffd64d,#ffc02e,#f5a31f);`;

export const QUIZ = [
 {
  q:'Nama senyawa dari rumus kimia <span class="formula">LiOH</span> adalah…',
  opt:['Litium oksida','Litium hidroksida','Litium hidrida','Litium peroksida','Litium karbonat'],
  c:1,
  exp:'<span class="formula">LiOH</span> tersusun dari kation logam litium (<span class="formula">Li<sup>+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>). Keberadaan ion <span class="formula">OH<sup>−</sup></span> menunjukkan senyawa ini bersifat <b>basa</b>. Litium adalah logam golongan IA dengan muatan tetap +1, sehingga cukup disebut "litium". Penamaan basa: sebut nama logam dulu, lalu nama anionnya → <b>litium hidroksida</b>.',
  key:'Logam + <span class="formula">OH<sup>−</sup></span> → "(nama logam) hidroksida".'
 },
 {
  q:'Senyawa dengan rumus kimia <span class="formula">KOH</span> memiliki nama…',
  opt:['Kalium oksida','Kalium klorida','Kalium hidroksida','Kalium karbonat','Kalium nitrat'],
  c:2,
  exp:'<span class="formula">KOH</span> tersusun dari kation kalium (<span class="formula">K<sup>+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>), sehingga bersifat basa. Kalium adalah logam golongan IA bermuatan tetap +1, cukup disebut "kalium". Maka namanya <b>kalium hidroksida</b>.',
  key:'Logam gol IA (muatan +1) + <span class="formula">OH<sup>−</sup></span> → kalium hidroksida.'
 },
 {
  q:'Nama yang tepat untuk senyawa <span class="formula">Ca(OH)<sub>2</sub></span> adalah…',
  opt:['Kalsium hidroksida','Kalium oksida','Kalsium peroksida','Kalium karbonat','Kalsium bikarbonat'],
  c:0,
  exp:'<span class="formula">Ca(OH)<sub>2</sub></span> tersusun dari kation kalsium (<span class="formula">Ca<sup>2+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>). Kalsium adalah logam golongan IIA bermuatan tetap +2, sehingga dibutuhkan dua ion <span class="formula">OH<sup>−</sup></span> agar netral. Penamaannya cukup nama logam diikuti nama anion → <b>kalsium hidroksida</b>.',
  key:'<span class="formula">Ca<sup>2+</sup></span> (gol IIA) butuh 2 <span class="formula">OH<sup>−</sup></span> → <span class="formula">Ca(OH)<sub>2</sub></span>.'
 },
 {
  q:'Nama senyawa dari rumus kimia <span class="formula">Al(OH)<sub>3</sub></span> adalah…',
  opt:['Aluminium oksida','Aluminium sulfat','Aluminium karbonat','Aluminium hidroksida','Aluminium nitrat'],
  c:3,
  exp:'<span class="formula">Al(OH)<sub>3</sub></span> tersusun dari kation aluminium (<span class="formula">Al<sup>3+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>), sehingga bersifat basa. Aluminium (golongan IIIA) bermuatan tetap +3, maka satu <span class="formula">Al<sup>3+</sup></span> butuh tiga <span class="formula">OH<sup>−</sup></span> karena (+3) + 3(−1) = 0 → <b>aluminium hidroksida</b>.',
  key:'<span class="formula">Al<sup>3+</sup></span> + 3 <span class="formula">OH<sup>−</sup></span> → <span class="formula">Al(OH)<sub>3</sub></span> (netral).'
 },
 {
  q:'Senyawa kalium hidroksida (<span class="formula">KOH</span>) termasuk senyawa basa karena…',
  opt:['Menghasilkan ion H<sup>+</sup> dalam air','Tersusun dari dua unsur nonlogam','Menghasilkan ion hidroksida (OH<sup>−</sup>) saat dilarutkan dalam air','Memiliki rasa asam','Tidak dapat terionisasi dalam air'],
  c:2,
  exp:'Kalium hidroksida (<span class="formula">KOH</span>) tersusun dari kation kalium (<span class="formula">K<sup>+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>). Menurut teori Arrhenius, basa adalah zat yang menghasilkan ion <span class="formula">OH<sup>−</sup></span> ketika dilarutkan dalam air. Karena itu KOH bersifat basa.',
  key:'Basa Arrhenius = zat penghasil <span class="formula">OH<sup>−</sup></span> dalam air.'
 },
 {
  q:'Rumus kimia yang tepat untuk <b>magnesium hidroksida</b> adalah…',
  opt:['MgOH','Mg(OH)<sub>2</sub>','Mg<sub>2</sub>OH','MgO','Mg<sub>2</sub>(OH)<sub>3</sub>'],
  optFormula:true,
  c:1,
  exp:'Magnesium hidroksida tersusun dari kation magnesium (<span class="formula">Mg<sup>2+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>). Karena <span class="formula">Mg<sup>2+</sup></span> bermuatan +2, diperlukan dua ion <span class="formula">OH<sup>−</sup></span> (−1) agar senyawa netral. Maka rumusnya <span class="formula">Mg(OH)<sub>2</sub></span>.',
  key:'<span class="formula">Mg<sup>2+</sup></span> butuh 2 <span class="formula">OH<sup>−</sup></span> → <span class="formula">Mg(OH)<sub>2</sub></span>.'
 },
 {
  q:'<b>Barium hidroksida</b> memiliki rumus kimia…',
  opt:['BaOH','BaO','Ba(OH)<sub>2</sub>','Ba<sub>2</sub>OH','BaOH<sub>2</sub>'],
  optFormula:true,
  c:2,
  exp:'Barium hidroksida terbentuk dari kation barium (<span class="formula">Ba<sup>2+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>). Ion barium bermuatan +2 dan hidroksida −1, sehingga diperlukan dua <span class="formula">OH<sup>−</sup></span> untuk setiap satu <span class="formula">Ba<sup>2+</sup></span> → <span class="formula">Ba(OH)<sub>2</sub></span>.',
  key:'Ion gol IIA (<span class="formula">Ba<sup>2+</sup></span>) → <span class="formula">(OH)<sub>2</sub></span>.'
 },
 {
  q:'Rumus kimia dari senyawa <b>stronsium hidroksida</b> adalah…',
  opt:['SrOH','Sr(OH)<sub>2</sub>','Sr(OH)<sub>3</sub>','SrO','Sr<sub>2</sub>(OH)<sub>3</sub>'],
  optFormula:true,
  c:1,
  exp:'Stronsium hidroksida tersusun dari ion stronsium (<span class="formula">Sr<sup>2+</sup></span>) dan ion hidroksida (<span class="formula">OH<sup>−</sup></span>). Agar senyawa ion netral, muatan positif dan negatif harus seimbang: <span class="formula">Sr<sup>2+</sup></span> (+2) memerlukan dua <span class="formula">OH<sup>−</sup></span> (masing-masing −1) → <span class="formula">Sr(OH)<sub>2</sub></span>.',
  key:'<span class="formula">Sr<sup>2+</sup></span> (gol IIA) + 2 <span class="formula">OH<sup>−</sup></span> → <span class="formula">Sr(OH)<sub>2</sub></span>.'
 },
 {
  q:'Senyawa <b>timbal(II) hidroksida</b> memiliki rumus kimia…',
  opt:['PbOH','Pb(OH)<sub>3</sub>','PbO','Pb<sub>2</sub>(OH)<sub>2</sub>','Pb(OH)<sub>2</sub>'],
  optFormula:true,
  c:4,
  exp:'<span class="formula">Pb(OH)<sub>2</sub></span> terbentuk dari ion timbal(II) (<span class="formula">Pb<sup>2+</sup></span>) dan ion hidroksida (<span class="formula">OH<sup>−</sup></span>). Angka Romawi (II) menunjukkan muatan ion timbal adalah +2, sehingga diperlukan dua <span class="formula">OH<sup>−</sup></span> untuk menetralkannya → <span class="formula">Pb(OH)<sub>2</sub></span>.',
  key:'Angka Romawi (II) = muatan +2 → butuh 2 <span class="formula">OH<sup>−</sup></span>.'
 },
 {
  q:'Natrium hidroksida (<span class="formula">NaOH</span>) memiliki karakteristik sebagai senyawa basa karena…',
  opt:['Menghasilkan ion H<sup>+</sup> dalam air','Memiliki rasa asam','Menghasilkan ion hidroksida (OH<sup>−</sup>) saat dilarutkan dalam air','Tersusun dari dua unsur nonlogam','Tidak membentuk ion dalam air'],
  c:2,
  exp:'Natrium hidroksida (<span class="formula">NaOH</span>) tersusun dari kation natrium (<span class="formula">Na<sup>+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>). Saat dilarutkan dalam air, senyawa ini menghasilkan ion <span class="formula">OH<sup>−</sup></span> sehingga menunjukkan sifat basa menurut teori Arrhenius.',
  key:'<span class="formula">NaOH</span> → <span class="formula">Na<sup>+</sup></span> + <span class="formula">OH<sup>−</sup></span>; penghasil <span class="formula">OH<sup>−</sup></span> = ciri basa.'
 }
];
