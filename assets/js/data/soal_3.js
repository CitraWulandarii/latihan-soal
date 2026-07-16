export const title = "Latihan Soal Tata Nama Senyawa Kovalen Biner";

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
  q:'Nama yang tepat untuk senyawa <span class="formula">SF<sub>4</sub></span> adalah…',
  opt:['Sulfur fluorida','Sulfur tetrafluorida','Sulfur difluorida','Sulfur oksida','Sulfur tetraoksida'],
  c:1,
  exp:'<span class="formula">SF<sub>4</sub></span> adalah senyawa kovalen dari dua unsur nonlogam: sulfur (S) dan fluor (F). Sulfur berjumlah satu atom sehingga cukup disebut "sulfur" (tanpa awalan), sedangkan fluorin berjumlah empat atom sehingga diberi awalan <b>tetra-</b>. Unsur terakhir diberi akhiran <b>-ida</b>, maka namanya <b>sulfur tetrafluorida</b>.',
  key:'Awalan Yunani sesuai jumlah atom; unsur pertama tanpa "mono-". tetra = 4.'
 },
 {
  q:'Senyawa dengan rumus kimia <span class="formula">N<sub>2</sub>O<sub>4</sub></span> memiliki nama…',
  opt:['Nitrogen oksida','Dinitrogen oksida','Dinitrogen tetraoksida','Nitrogen dioksida','Dinitrogen pentaoksida'],
  c:2,
  exp:'<span class="formula">N<sub>2</sub>O<sub>4</sub></span> tersusun dari nitrogen (N) dan oksigen (O), keduanya nonlogam. Nitrogen 2 atom → awalan <b>di-</b>; oksigen 4 atom → awalan <b>tetra-</b>; unsur terakhir berakhiran <b>-ida</b> → <b>dinitrogen tetraoksida</b>.',
  key:'di = 2, tetra = 4 → dinitrogen tetraoksida.'
 },
 {
  q:'Nama yang tepat untuk senyawa <span class="formula">P<sub>4</sub>O<sub>7</sub></span> adalah…',
  opt:['Tetrafosfor heptaoksida','Fosfor oksida','Tetrafosfor oksida','Difosfor heptaoksida','Fosfor heptaoksida'],
  c:0,
  exp:'<span class="formula">P<sub>4</sub>O<sub>7</sub></span> tersusun dari fosfor (P) dan oksigen (O). Fosfor 4 atom → awalan <b>tetra-</b>; oksigen 7 atom → awalan <b>hepta-</b>; akhiran <b>-ida</b> pada unsur terakhir → <b>tetrafosfor heptaoksida</b>.',
  key:'tetra = 4, hepta = 7.'
 },
 {
  q:'Senyawa <span class="formula">NCl<sub>3</sub></span> tersusun atas unsur nonlogam dan nonlogam. Nama senyawa tersebut adalah…',
  opt:['Nitrogen klorida','Nitrogen monoksida','Nitrogen diklorida','Mononitrogen klorida','Nitrogen triklorida'],
  c:4,
  exp:'<span class="formula">NCl<sub>3</sub></span> tersusun dari nitrogen (N) dan klorin (Cl). Nitrogen 1 atom → cukup "nitrogen" (tanpa mono-); klorin 3 atom → awalan <b>tri-</b>; akhiran <b>-ida</b> → <b>nitrogen triklorida</b>.',
  key:'tri = 3; unsur pertama 1 atom tanpa "mono-".'
 },
 {
  q:'Rumus kimia yang tepat untuk <b>karbon tetraklorida</b> adalah…',
  opt:['CCl','CCl<sub>2</sub>','CCl<sub>3</sub>','CCl<sub>4</sub>','C<sub>2</sub>Cl<sub>4</sub>'],
  optFormula:true,
  c:3,
  exp:'Karbon tetraklorida tersusun dari karbon (C) dan klorin (Cl). Awalan <b>tetra-</b> berarti empat, menunjukkan 4 atom klorin. Unsur pertama (karbon) tidak memakai awalan "mono-" sehingga berjumlah satu. Maka rumusnya <span class="formula">CCl<sub>4</sub></span>.',
  key:'"tetra-" = 4 atom Cl, karbon = 1 → <span class="formula">CCl<sub>4</sub></span>.'
 },
 {
  q:'<b>Disulfur diklorida</b> memiliki rumus kimia…',
  opt:['SCl<sub>2</sub>','S<sub>2</sub>Cl','S<sub>2</sub>Cl<sub>2</sub>','SCl<sub>4</sub>','S<sub>2</sub>Cl<sub>4</sub>'],
  optFormula:true,
  c:2,
  exp:'Disulfur diklorida tersusun dari sulfur (S) dan klorin (Cl). Awalan <b>di-</b> berarti dua: "disulfur" → 2 atom S, "diklorida" → 2 atom Cl. Maka rumusnya <span class="formula">S<sub>2</sub>Cl<sub>2</sub></span>.',
  key:'di = 2 untuk kedua unsur → <span class="formula">S<sub>2</sub>Cl<sub>2</sub></span>.'
 },
 {
  q:'Karakteristik yang tepat untuk senyawa <span class="formula">SF<sub>4</sub></span> adalah…',
  opt:['Tersusun dari unsur logam dan nonlogam','Membentuk ikatan ion','Tersusun dari unsur-unsur nonlogam','Menghasilkan ion bebas dalam bentuk padat','Memiliki titik leleh sangat tinggi seperti senyawa ion'],
  c:2,
  exp:'<span class="formula">SF<sub>4</sub></span> tersusun dari sulfur (S) dan fluorin (F) yang keduanya nonlogam. Gabungan sesama unsur nonlogam umumnya membentuk <b>ikatan kovalen</b>. Karena itu SF<sub>4</sub> berkarakteristik sebagai senyawa dari unsur-unsur nonlogam.',
  key:'Senyawa kovalen biner = gabungan dua unsur nonlogam.'
 },
 {
  q:'Rumus kimia senyawa <b>nitrogen dioksida</b> adalah…',
  opt:['NO','N<sub>2</sub>O','NO<sub>2</sub>','N<sub>2</sub>O<sub>2</sub>','NO<sub>3</sub>'],
  optFormula:true,
  c:2,
  exp:'Nitrogen dioksida tersusun dari nitrogen (N) dan oksigen (O). Awalan "mono-" tidak dipakai pada unsur pertama, sehingga nitrogen cukup ditulis N (1 atom). Awalan <b>di-</b> pada "dioksida" menunjukkan 2 atom oksigen. Maka rumusnya <span class="formula">NO<sub>2</sub></span>.',
  key:'"mono-" tak dipakai di unsur pertama; di = 2 → <span class="formula">NO<sub>2</sub></span>.'
 },
 {
  q:'Senyawa <b>silikon tetraklorida</b> memiliki rumus kimia…',
  opt:['SiCl','SiCl<sub>2</sub>','Si<sub>2</sub>Cl<sub>4</sub>','SiCl<sub>4</sub>','SiCl<sub>3</sub>'],
  optFormula:true,
  c:3,
  exp:'Silikon tetraklorida tersusun dari silikon (Si) dan klorin (Cl). Awalan "mono-" tidak dituliskan pada unsur pertama → silikon 1 atom. Awalan <b>tetra-</b> berarti empat → 4 atom klorin. Maka rumusnya <span class="formula">SiCl<sub>4</sub></span>.',
  key:'tetra = 4 → <span class="formula">SiCl<sub>4</sub></span>.'
 },
 {
  q:'<b>Karbon disulfida</b> termasuk senyawa kovalen karena…',
  opt:['Tersusun dari unsur logam dan nonlogam','Dapat membentuk ion positif','Tersusun dari dua unsur nonlogam','Menghasilkan elektron bebas','Memiliki titik leleh sangat tinggi seperti logam'],
  c:2,
  exp:'Karbon disulfida tersusun dari karbon (C) dan sulfur (S) yang keduanya nonlogam. Senyawa kovalen terbentuk melalui <b>penggunaan pasangan elektron bersama</b> antaratom nonlogam, bukan melalui perpindahan elektron seperti pada senyawa ion. Karena itu karbon disulfida termasuk senyawa kovalen.',
  key:'Kovalen = berbagi pasangan elektron antar unsur nonlogam.'
 }
];
