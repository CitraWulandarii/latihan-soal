export const title = "Kuis Tata Nama Senyawa Biner";

export const theme = `--pri-50:#e9f6ee; --pri-100:#dcefE2; --pri-150:#cfe7d6; --pri-200:#b7e4c7;
  --pri-300:#83c59e; --pri-400:#59b583; --pri-500:#2fa36b; --pri-600:#1e7a4e; --pri-700:#173f2c;
  --yellow:#ffe08a; --yellow-active:#f3c64c; --yellow-line:#e5b432; --yellow-ink:#7a5b14;
  --ink:#33503e; --ink-soft:#5f7568; --muted:#93aa9c; --line:#dcefe2;
  --green:#2fa36b; --green-soft:#e4f6ec; --red:#e56a78; --red-soft:#fbe9eb; --gray-chip:#eef5f1;
  --card:#ffffff; --glass:rgba(255,255,255,.85);
  --shadow-sm:0 4px 14px -6px rgba(23,63,44,.18);
  --shadow-md:0 10px 30px -12px rgba(23,63,44,.22);
  --shadow-lg:0 24px 60px -20px rgba(23,63,44,.3);
  --r-lg:28px; --r-md:20px; --r-sm:14px;
  --grad:linear-gradient(135deg,#59b583 0%,#2fa36b 50%,#1e7a4e 100%);
  --grad-warm:linear-gradient(135deg,#f3c64c,#e5b432,#c39213);`;

export const QUIZ = [
 {q:"Senyawa dengan rumus kimia BaCl<sub>2</sub> memiliki nama senyawa yaitu \u2026",
  o:["Barium klorida","Barium diklorida","Barium klorat","Barium oksida","Barium perklorat"],a:0,
  e:"BaCl<sub>2</sub> tersusun dari barium (Ba) dan klor (Cl). Barium adalah logam golongan IIA yang hanya membentuk satu ion, yaitu Ba<sup>2+</sup>, sedangkan ion klorida bermuatan \u22121 (Cl<sup>\u2212</sup>). Karena barium hanya punya satu jenis muatan, angka Romawi tidak perlu dituliskan. Penamaannya cukup nama logam diikuti nama nonlogam berakhiran <b>-ida</b>.",
  k:"Logam golongan utama (IA, IIA, IIIA) muatannya tetap \u2192 <b>tanpa angka Romawi</b>."},

 {q:"Nama yang tepat untuk senyawa CrCl<sub>3</sub> adalah\u2026",
  o:["Kromium klorida","Kromium(II) klorida","Kromium(III) klorida","Kromium triklorida","Kromium(IV) klorida"],a:2,
  e:"CrCl<sub>3</sub> tersusun dari kromium (Cr) dan klorida (Cl<sup>\u2212</sup>). Kromium adalah logam transisi yang bisa membentuk lebih dari satu muatan. Di sini tiga Cl<sup>\u2212</sup> (total \u22123) diseimbangkan oleh satu Cr, sehingga kromium bermuatan +3 (Cr<sup>3+</sup>). Karena muatannya bisa bervariasi, muatan itu <b>wajib</b> ditulis dengan angka Romawi.",
  k:"Logam transisi bermuatan variabel \u2192 muatan <b>wajib</b> ditulis angka Romawi, mis. (III)."},

 {q:"Senyawa PbS tersusun atas unsur logam dan nonlogam. Nama senyawa tersebut adalah \u2026",
  o:["Timbal sulfida","Timbal(II) sulfida","Timbal sulfit","Timbal(IV) sulfida","Timbal sulfat"],a:1,
  e:"PbS tersusun dari timbal (Pb) dan sulfida (S<sup>2\u2212</sup>). Ion sulfida bermuatan \u22122, jadi agar netral timbal harus +2 (Pb<sup>2+</sup>). Timbal punya lebih dari satu muatan (+2 dan +4), sehingga muatannya dituliskan dengan angka Romawi menjadi timbal(II) sulfida.",
  k:"Tentukan muatan logam dari muatan anion: satu S<sup>2\u2212</sup> \u2192 Pb harus <b>+2</b>."},

 {q:"Karakteristik yang tepat untuk senyawa AgCl adalah\u2026",
  o:["Tersusun dari dua unsur nonlogam","Membentuk ikatan kovalen","Tersusun dari unsur logam perak (Ag) dan unsur nonlogam klor (Cl)","Tidak dapat menghantarkan listrik","Tersusun dari dua unsur logam"],a:2,
  e:"AgCl terbentuk dari perak (Ag) yang bersifat logam dan klor (Cl) yang bersifat nonlogam. Gabungan logam + nonlogam umumnya membentuk senyawa ion melalui serah-terima elektron dari logam ke nonlogam.",
  k:"Ciri senyawa ionik biner: <b>logam + nonlogam</b> dengan transfer elektron."},

 {q:"Nama senyawa dari rumus kimia K<sub>2</sub>O adalah\u2026",
  o:["Kalium oksigen","Kalium oksida","Dikalium oksida","Kalium peroksida","Kalium hidroksida"],a:1,
  e:"K<sub>2</sub>O tersusun dari kalium (K) dan oksigen (O). Kalium adalah logam golongan IA yang hanya membentuk K<sup>+</sup>, dan oksigen membentuk ion oksida O<sup>2\u2212</sup>. Karena muatan kalium tetap, tidak ada angka Romawi maupun awalan jumlah; cukup ditulis kalium oksida.",
  k:"Senyawa ionik <b>tidak memakai awalan angka</b> (di-, tri-) seperti senyawa kovalen."},

 {q:"Rumus kimia yang tepat untuk senyawa magnesium klorida adalah\u2026",
  o:["MgCl","Mg<sub>2</sub>Cl","MgCl<sub>2</sub>","Mg<sub>2</sub>Cl<sub>3</sub>","MgCl<sub>3</sub>"],a:2,
  e:"Magnesium klorida terbentuk dari Mg<sup>2+</sup> dan Cl<sup>\u2212</sup>. Untuk menetralkan satu ion +2 dibutuhkan dua ion \u22121, sehingga perbandingan atomnya 1 : 2 dan rumusnya MgCl<sub>2</sub>.",
  k:"Trik silang muatan: muatan kation jadi indeks anion, dan sebaliknya."},

 {q:"Senyawa timah(IV) oksida memiliki rumus kimia\u2026",
  o:["SnO","Sn<sub>2</sub>O","Sn<sub>2</sub>O<sub>4</sub>","Sn<sub>2</sub>O<sub>3</sub>","SnO<sub>2</sub>"],a:4,
  e:"Angka Romawi (IV) berarti timah bermuatan +4 (Sn<sup>4+</sup>), sedangkan oksida O<sup>2\u2212</sup>. Agar netral, satu Sn<sup>4+</sup> berpasangan dengan dua O<sup>2\u2212</sup>: (+4) + 2(\u22122) = 0. Perbandingan atom 1 : 2 memberi rumus SnO<sub>2</sub>.",
  k:"Angka Romawi = muatan kation. (IV) \u2192 Sn<sup>4+</sup> \u2192 seimbangkan dengan O<sup>2\u2212</sup>."},

 {q:"Besi(III) sulfida tersusun dari ion Fe<sup>3+</sup> dan S<sup>2\u2212</sup>. Rumus kimia yang benar untuk senyawa tersebut adalah \u2026",
  o:["Fe<sub>2</sub>S<sub>3</sub>","FeS","FeS<sub>2</sub>","Fe<sub>3</sub>S<sub>2</sub>","Fe<sub>3</sub>S"],a:0,
  e:"Fe<sup>3+</sup> dan S<sup>2\u2212</sup> harus diseimbangkan. Kelipatan persekutuan muatannya 6: dua Fe<sup>3+</sup> (2\u00d7+3 = +6) dengan tiga S<sup>2\u2212</sup> (3\u00d7\u22122 = \u22126). Perbandingan atom 2 : 3, sehingga rumusnya Fe<sub>2</sub>S<sub>3</sub>.",
  k:"Silang muatan: Fe<sup>3+</sup> + S<sup>2\u2212</sup> \u2192 indeks 2 dan 3 \u2192 Fe<sub>2</sub>S<sub>3</sub>."},

 {q:"Barium sulfida merupakan contoh senyawa ion karena \u2026",
  o:["Tersusun dari dua unsur logam","Memiliki ikatan antar atom yang lemah","Tersusun dari unsur logam barium (Ba) dan unsur nonlogam sulfur (S)","Tidak membentuk ion","Tersusun dari dua unsur nonlogam"],a:2,
  e:"Barium sulfida terbentuk dari barium (Ba) yang bersifat logam dan sulfur (S) yang bersifat nonlogam. Senyawa ion memang terbentuk dari ikatan logam\u2013nonlogam akibat serah-terima elektron.",
  k:"Senyawa ion = ikatan <b>logam + nonlogam</b> lewat perpindahan elektron."},

 {q:"Rumus kimia senyawa aluminium oksida yang tepat adalah\u2026",
  o:["AlO","Al<sub>2</sub>O","AlO<sub>2</sub>","Al<sub>3</sub>O<sub>2</sub>","Al<sub>2</sub>O<sub>3</sub>"],a:4,
  e:"Aluminium golongan IIIA membentuk Al<sup>3+</sup>, oksigen golongan VIA membentuk O<sup>2\u2212</sup>. Agar netral diperlukan dua Al<sup>3+</sup> (total +6) dan tiga O<sup>2\u2212</sup> (total \u22126). Perbandingan atom 2 : 3 memberi rumus Al<sub>2</sub>O<sub>3</sub>.",
  k:"Al<sup>3+</sup> + O<sup>2\u2212</sup> \u2192 silang muatan \u2192 Al<sub>2</sub>O<sub>3</sub>."}
];
