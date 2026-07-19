export const title = "Kuis Tata Nama Senyawa Anorganik";

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
    q: 'Senyawa ionik biner dengan rumus kimia <span class="formula">CaCl<sub>2</sub></span> memiliki nama senyawa yang tepat yaitu...',
    opt: ['Kalium klorat', 'Kalsium klorida', 'Kalsium oksida', 'Kalium klorit', 'Kalsium hipoklorit'],
    c: 1,
    exp: 'Senyawa <span class="formula">CaCl<sub>2</sub></span> tersusun dari kation kalsium <span class="formula">Ca<sup>2+</sup></span> dan anion klorida <span class="formula">Cl<sup>−</sup></span>. Penamaan senyawa ionik biner dilakukan dengan menyebutkan nama kation terlebih dahulu, kemudian nama anion dengan akhiran "-ida", sehingga nama senyawanya adalah kalsium klorida.',
    key: 'Kation logam + Anion nonlogam (-ida).'
  },
  {
    q: 'Tentukan benar atau salah pernyataan di bawah ini!<br><br>"Rumus kimia senyawa sulfur difluorida adalah <span class="formula">SF<sub>2</sub></span>"',
    opt: ['Benar', 'Salah'],
    c: 0,
    exp: 'Senyawa <span class="formula">SF<sub>2</sub></span> tersusun dari satu atom sulfur dan dua atom fluor. Penamaan senyawa kovalen dilakukan dengan menyebut nama unsur pertama, kemudian nama unsur kedua yang diakhiri "-ida" dan diberi awalan sesuai jumlah atomnya. Karena terdapat dua atom fluor, digunakan awalan "di-", sehingga nama senyawanya adalah sulfur difluorida. Oleh sebab itu, pernyataan tersebut benar.',
    key: 'di = 2 atom fluor.'
  },
  {
    q: 'Nama senyawa dari rumus kimia <span class="formula">NH<sub>4</sub>Cl</span> adalah...',
    opt: ['Amonium klorat', 'Amonium klorida', 'Amonium klorit', 'Aluminium klorida', 'Natrium klorida'],
    c: 1,
    exp: 'Senyawa <span class="formula">NH<sub>4</sub>Cl</span> terdiri atas ion amonium <span class="formula">NH<sub>4</sub><sup>+</sup></span> sebagai kation poliatomik dan ion klorida <span class="formula">Cl<sup>−</sup></span> sebagai anion. Penamaannya dilakukan dengan menyebut nama kation terlebih dahulu diikuti nama anion, sehingga diperoleh nama amonium klorida.',
    key: 'Kation poliatomik amonium + klorida.'
  },
  {
    q: 'Tentukan benar atau salah pernyataan di bawah ini!<br><br>"Nama senyawa dari <span class="formula">CH<sub>3</sub>COOH</span> adalah asam asetat."',
    opt: ['Benar', 'Salah'],
    c: 0,
    exp: 'Senyawa <span class="formula">CH<sub>3</sub>COOH</span> dikenal sebagai asam asetat. Senyawa ini memiliki gugus karboksil (COOH) yang menyebabkan sifat asamnya. Oleh sebab itu, pernyataan tersebut benar.',
    key: 'Gugus karboksil = asam organik (asetat).'
  },
  {
    q: 'Nama senyawa basa dari rumus kimia <span class="formula">Sr(OH)<sub>2</sub></span> adalah...',
    opt: ['Stronsium oksida', 'Stronsium hidroksit', 'Stronsium dihidroksida', 'Stronsium hidroksida', 'Distronsium hidroksida'],
    c: 3,
    exp: 'Senyawa <span class="formula">Sr(OH)<sub>2</sub></span> tersusun dari ion stronsium <span class="formula">Sr<sup>2+</sup></span> dan ion hidroksida <span class="formula">OH<sup>−</sup></span>. Penamaan senyawa basa dilakukan dengan menyebut nama logam terlebih dahulu kemudian diikuti kata "hidroksida". Karena itu, nama yang tepat adalah stronsium hidroksida.',
    key: 'Logam + hidroksida.'
  },
  {
    q: 'Pasangan nama senyawa yang tepat untuk <span class="formula">P<sub>4</sub>O<sub>7</sub></span>, <span class="formula">HBr</span>, dan <span class="formula">BrF<sub>3</sub></span> secara berturut-turut adalah...',
    opt: [
      'Fosfor oksida, asam bromida, brom fluorida',
      'Tetrafosfor heptaoksida, hidrogen bromida, brom trifluorida',
      'Tetrafosfor heptaoksida, brom trifluorida, hidrogen bromida',
      'Fosfor heptaoksida, hidrogen bromida, brom trifluorida',
      'Tetrafosfor oksida, hidrogen bromida, brom trifluorida'
    ],
    c: 1,
    exp: 'Sesuai aturan penamaan: <br>1. <span class="formula">P<sub>4</sub>O<sub>7</sub></span> memiliki 4 atom P (tetra) dan 7 atom O (hepta) -> Tetrafosfor heptaoksida.<br>2. <span class="formula">HBr</span> merupakan senyawa biner -> Hidrogen bromida.<br>3. <span class="formula">BrF<sub>3</sub></span> memiliki 3 atom F (tri) -> Brom trifluorida.',
    key: 'tetra = 4, hepta = 7, tri = 3.'
  },
  {
    q: 'Nama senyawa basa dari rumus kimia <span class="formula">Zn(OH)<sub>2</sub></span> adalah...',
    opt: ['Zink oksida', 'Zink hidroksida', 'Zink dioksida', 'Zink hidrogen oksida', 'Zink klorida'],
    c: 1,
    exp: 'Senyawa <span class="formula">Zn(OH)<sub>2</sub></span> terdiri atas kation seng <span class="formula">Zn<sup>2+</sup></span> dan anion hidroksida <span class="formula">OH<sup>−</sup></span>. Penamaan senyawa basa dilakukan dengan menyebut nama kation terlebih dahulu, kemudian diikuti kata "hidroksida". Karena zink memiliki muatan tetap yaitu +2, penamaannya cukup disebut zink hidroksida.',
    key: 'Kation Zn²⁺ + hidroksida.'
  },
  {
    q: 'Nama senyawa dari rumus kimia <span class="formula">KI</span> adalah...',
    opt: ['Kalium iodat', 'Kalium iodida', 'Kalium iodit', 'Kalsium iodida', 'Kalium oksida'],
    c: 1,
    exp: 'Senyawa KI tersusun dari ion kalium <span class="formula">K<sup>+</sup></span> dan ion iodida <span class="formula">I<sup>−</sup></span>. Karena kalium termasuk logam golongan IA yang memiliki muatan tetap +1, penamaannya cukup disebut "kalium", lalu diikuti nama anion "iodida", sehingga diperoleh nama kalium iodida.',
    key: 'Logam IA + nonlogam (-ida).'
  },
  {
    q: 'Nama senyawa dari rumus kimia <span class="formula">Na<sub>2</sub>SO<sub>4</sub></span> adalah...',
    opt: ['Natrium sulfit', 'Natrium sulfida', 'Natrium sulfat', 'Dinatrium sulfat', 'Natrium sulfur oksida'],
    c: 2,
    exp: 'Senyawa <span class="formula">Na<sub>2</sub>SO<sub>4</sub></span> tersusun dari ion natrium <span class="formula">Na<sup>+</sup></span> dan ion sulfat <span class="formula">SO<sub>4</sub><sup>2−</sup></span>. Penamaan senyawa ionik dilakukan dengan menyebut nama kation terlebih dahulu kemudian nama anion poliatomik. Oleh karena itu, nama senyawa tersebut adalah natrium sulfat.',
    key: 'SO₄²⁻ adalah ion sulfat.'
  },
  {
    q: 'Nama senyawa asam dari rumus kimia <span class="formula">H<sub>2</sub>S</span> adalah...',
    opt: ['Asam sulfat', 'Asam sulfit', 'Asam sulfida', 'Asam tiosulfat', 'Hidrogen sulfida'],
    c: 2,
    exp: 'Senyawa <span class="formula">H<sub>2</sub>S</span> merupakan senyawa asam biner yang tersusun dari hidrogen dan sulfur. Penamaan asam biner dilakukan dengan menuliskan kata "asam" diikuti nama unsur nonlogam dengan akhiran "-ida". Oleh karena itu, nama senyawa tersebut adalah asam sulfida.',
    key: 'Asam + Sulfur (-ida).'
  },
  {
    q: 'Tentukan benar atau salah pernyataan di bawah ini!<br><br>"Nama senyawa dari <span class="formula">Ca(OH)<sub>2</sub></span> adalah kalium hidroksida"',
    opt: ['Benar', 'Salah'],
    c: 1,
    exp: 'Senyawa <span class="formula">Ca(OH)<sub>2</sub></span> tersusun dari kation kalsium (<span class="formula">Ca<sup>2+</sup></span>) dan anion hidroksida (<span class="formula">OH<sup>−</sup></span>), sehingga nama senyawanya adalah kalsium hidroksida. Adapun kalium hidroksida merupakan senyawa yang tersusun dari ion kalium (<span class="formula">K<sup>+</sup></span>) dan hidroksida (<span class="formula">OH<sup>−</sup></span>) dengan rumus kimia KOH. Oleh karena itu, nama yang benar untuk <span class="formula">Ca(OH)<sub>2</sub></span> adalah kalsium hidroksida, bukan kalium hidroksida. Jadi, pernyataan tersebut salah.',
    key: 'Ca adalah simbol untuk Kalsium.'
  },
  {
    q: 'Nama senyawa dari rumus kimia <span class="formula">H<sub>2</sub>SO<sub>3</sub></span> adalah...',
    opt: ['Asam sulfat', 'Asam sulfida', 'Asam sulfit', 'Asam klorida', 'Asam tiosulfat'],
    c: 2,
    exp: 'Senyawa <span class="formula">H<sub>2</sub>SO<sub>3</sub></span> merupakan asam oksigen yang mengandung ion sulfit <span class="formula">SO<sub>3</sub><sup>2−</sup></span>. Penamaan asam oksigen dilakukan dengan menambahkan kata "asam" di depan nama anionnya. Karena anionnya adalah sulfit, maka nama senyawanya adalah asam sulfit.',
    key: 'SO₃²⁻ adalah ion sulfit.'
  },
  {
    q: 'Tentukan benar atau salah pernyataan di bawah ini!<br><br>"Rumus kimia senyawa natrium nitrit adalah <span class="formula">NaNO<sub>3</sub></span>"',
    opt: ['Benar', 'Salah'],
    c: 1,
    exp: 'Senyawa <span class="formula">NaNO<sub>3</sub></span> tersusun dari ion natrium <span class="formula">Na<sup>+</sup></span> dan ion nitrat <span class="formula">NO<sub>3</sub><sup>−</sup></span>. Ion <span class="formula">NO<sub>3</sub><sup>−</sup></span> disebut nitrat, sedangkan ion nitrit memiliki rumus <span class="formula">NO<sub>2</sub><sup>−</sup></span>. Oleh karena itu, nama yang benar untuk <span class="formula">NaNO<sub>3</sub></span> adalah natrium nitrat, sehingga pernyataan tersebut salah.',
    key: 'Nitrat = NO₃⁻, Nitrit = NO₂⁻.'
  },
  {
    q: 'Nama senyawa dari rumus kimia <span class="formula">PCl<sub>3</sub></span> adalah...',
    opt: ['Fosfor monoklorida', 'Fosfor diklorida', 'Fosfor triklorida', 'Difosfor triklorida', 'Fosfor heptaklorida'],
    c: 2,
    exp: 'Senyawa <span class="formula">PCl<sub>3</sub></span> tersusun dari unsur nonlogam fosfor dan klorin sehingga termasuk senyawa kovalen biner. Penamaan senyawa kovalen menggunakan awalan Yunani untuk menunjukkan jumlah atom. Pada senyawa ini terdapat satu atom fosfor dan tiga atom klorin, sehingga namanya adalah fosfor triklorida. Awalan "mono-" pada unsur pertama biasanya tidak digunakan.',
    key: 'tri = 3 atom klorin.'
  },
  {
    q: 'Tentukan benar atau salah pernyataan di bawah ini!<br><br>"Rumus kimia natrium oksida adalah <span class="formula">Na<sub>2</sub>O</span>."',
    opt: ['Benar', 'Salah'],
    c: 0,
    exp: 'Natrium oksida tersusun dari ion natrium <span class="formula">Na<sup>+</sup></span> dan ion oksida <span class="formula">O<sup>2−</sup></span>. Untuk menetralkan muatan diperlukan dua ion natrium untuk setiap satu ion oksida, sehingga rumus kimianya menjadi <span class="formula">Na<sub>2</sub>O</span>. Oleh karena itu, pernyataan tersebut benar.',
    key: 'Na⁺ (IA) dan O²⁻ (VIA).'
  }
];