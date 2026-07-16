/**
 * quiz.js - Quiz Engine
 * Reads from window.QUIZ (set dynamically by main.js before initiation).
 * Exposes window._quizRender so main.js can trigger the first render.
 */

const LETT = ['A', 'B', 'C', 'D', 'E'];
const $ = id => document.getElementById(id);

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';
const CROSS = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const MK_OK = '<svg class="mark" viewBox="0 0 24 24" fill="none" stroke="#1fb583" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';
const MK_NO = '<svg class="mark" viewBox="0 0 24 24" fill="none" stroke="#ec5b76" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

// ─── Accessors (use window vars set by main.js) ───────────────────────────────
const getQUIZ = () => window.QUIZ || [];
const getCur = () => window._quizCur || 0;
const setCur = v => { window._quizCur = v; };
const getState = () => window._quizState || [];

const score = () => getState().reduce((s, a, i) => {
  const Q = getQUIZ()[i];
  if (!Q) return s;
  const ans = Q.a !== undefined ? Q.a : Q.c;
  return s + (a.sub && a.sel === ans ? 10 : 0);
}, 0);
const answered = () => getState().filter(a => a.sub).length;

// ─── Nav ─────────────────────────────────────────────────────────────────────
function buildNav() {
  const n = $('navNums');
  if (!n) return;
  n.innerHTML = '';
  getQUIZ().forEach((_, i) => {
    const b = document.createElement('button');
    b.textContent = i + 1;
    b.onclick = () => { setCur(i); render(); };
    n.appendChild(b);
  });
}

function refreshNav() {
  const nav = $('navNums');
  if (!nav) return;
  [...nav.children].forEach((b, i) => {
    b.className = '';
    if (getState()[i] && getState()[i].sub) b.classList.add('answered');
    if (i === getCur()) b.classList.add('active');
  });
}

// ─── Render ──────────────────────────────────────────────────────────────────
function render() {
  const QUIZ = getQUIZ();
  const cur = getCur();
  const Q = QUIZ[cur];
  const S = getState()[cur];
  if (!Q || !S) return;

  const qO = Q.o || Q.opt || [];
  const qA = Q.a !== undefined ? Q.a : Q.c;
  const qE = Q.e || Q.exp || '';
  const qK = Q.k || Q.key || '';

  $('curNum').textContent = cur + 1;
  $('qBadge').textContent = 'PERTANYAAN ' + (cur + 1);
  $('qText').innerHTML = Q.q;

  const wrap = $('options');
  wrap.innerHTML = '';
  qO.forEach((txt, i) => {
    const o = document.createElement('button');
    o.className = 'opt';
    o.innerHTML = '<span class="lett">' + LETT[i] + '</span><span class="otxt">' + txt + '</span>' + MK_OK + MK_NO;
    if (!S.sub && S.sel === i) o.classList.add('selected');
    if (S.sub) {
      o.classList.add('locked');
      if (i === qA) o.classList.add('correct');
      else if (i === S.sel) o.classList.add('wrong');
    } else {
      o.onclick = () => { S.sel = i; render(); };
    }
    wrap.appendChild(o);
  });

  const sub = $('btnSubmit');
  sub.disabled = S.sub || S.sel === null;
  sub.textContent = S.sub ? 'SUDAH DIJAWAB' : 'SUBMIT';
  sub.onclick = submit;

  const fb = $('feedback'), et = $('expToggle');
  if (S.sub) {
    const ok = S.sel === qA;
    fb.className = 'feedback show ' + (ok ? 'ok' : 'no');
    $('fbIcon').innerHTML = ok ? CHECK : CROSS;
    $('fbTitle').textContent = ok ? 'Jawaban Benar 🎉' : 'Jawaban Salah';
    $('fbSub').innerHTML = ok ? 'Skor +10 poin!' : 'Jawaban yang benar: <em>' + LETT[qA] + '. ' + qO[qA] + '</em>';
    et.classList.add('show');
    $('expBody').innerHTML = '<div class="exp-card"><h4><svg viewBox="0 0 24 24" fill="none" stroke="#d35c06" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/></svg>Pembahasan</h4><p>' + qE + '</p><div class="keybox"><span class="kicon"><svg viewBox="0 0 24 24" fill="none" stroke="#8a5300" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 6.9H22l-5.8 4.3 2.2 7L12 16.9 5.6 20.2l2.2-7L2 8.9h7.6Z"/></svg></span><div><b>Konsep Penting</b><span>' + qK + '</span></div></div></div>';
    $('expBody').classList.remove('open');
  } else {
    fb.className = 'feedback';
    et.classList.remove('show');
    $('expBody').classList.remove('open');
  }

  $('btnBack').disabled = cur === 0;
  $('btnNext').disabled = cur === getQUIZ().length - 1;
  $('finishWrap').classList.toggle('show', answered() === getQUIZ().length);
  refreshNav();
  updateTop();
}
window._quizRender = render;

// ─── Controls ─────────────────────────────────────────────────────────────────
function updateTop() {
  $('scoreVal').textContent = score();
  $('progBar').style.width = (answered() / getQUIZ().length * 100) + '%';
}

function submit() {
  const S = getState()[getCur()];
  if (S.sel === null || S.sub) return;
  S.sub = true;
  render();
  const chip = $('scoreChip');
  chip.classList.add('bump');
  setTimeout(() => chip.classList.remove('bump'), 320);
}

$('btnExp').onclick = () => $('expBody').classList.toggle('open');
$('btnBack').onclick = () => { if (getCur() > 0) { setCur(getCur() - 1); render(); } };
$('btnNext').onclick = () => { if (getCur() < getQUIZ().length - 1) { setCur(getCur() + 1); render(); } };

function showQuizScreen(id) {
  document.querySelectorAll('#quiz-screen .screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('btnStart').onclick = () => { showQuizScreen('screen-quiz'); buildNav(); render(); };
$('btnFinish').onclick = showResult;

// ─── Result ──────────────────────────────────────────────────────────────────
function showResult() {
  showQuizScreen('screen-result');
  const sc = score();
  const correct = sc / 10;
  const wrong = getQUIZ().length - correct;

  $('resCorrect').textContent = correct;
  $('resWrong').textContent = wrong;
  $('resPct').textContent = Math.round(correct / getQUIZ().length * 100) + '%';

  const bar = $('dialBar'), C = 2 * Math.PI * 85;
  bar.style.strokeDasharray = C;
  bar.style.strokeDashoffset = C;
  setTimeout(() => { bar.style.strokeDashoffset = C * (1 - sc / 100); }, 120);

  let shown = 0;
  const t = setInterval(() => {
    shown += 2;
    if (shown >= sc) { shown = sc; clearInterval(t); }
    $('resScore').textContent = shown;
  }, 22);

  let msg;
  if (sc === 100) msg = 'Sempurna! Kamu menguasai tata nama senyawa kovalen biner! 🏆';
  else if (sc >= 80) msg = 'Hebat! Pertahankan prestasimu! 🌟';
  else if (sc >= 60) msg = 'Bagus! Sedikit lagi menuju sempurna! 💪';
  else if (sc >= 40) msg = 'Lumayan! Yuk pelajari lagi pembahasannya. 📘';
  else msg = 'Jangan menyerah! Pelajari kembali lalu coba lagi. 🌱';
  $('resMsg').textContent = msg;

  buildRecap();
  if (sc >= 70) burstConfetti();

  // ── Save score to GAS in background ──────────────────────────────────────
  const username = localStorage.getItem('citra_username');
  const gasUrl = getGasUrl;
  if (username && gasUrl !== GAS_URL_DEFAULT) {
    const formData = new URLSearchParams();
    formData.append('action', 'submit_score');
    formData.append('username', username);
    formData.append('quiz_id', window.currentQuizId || document.title);
    formData.append('score', sc);
    fetch(gasUrl, { method: 'POST', body: formData })
      .then(r => r.json())
      .then(res => console.log('Score saved:', res))
      .catch(err => console.error('Failed to save score:', err));
  }
}

function buildRecap() {
  const list = $('recapList');
  list.innerHTML = '';
  getQUIZ().forEach((Q, i) => {
    const S = getState()[i];
    if (!S) return;
    const qO = Q.o || Q.opt || [];
    const qA = Q.a !== undefined ? Q.a : Q.c;
    const qE = Q.e || Q.exp || '';
    const ok = S.sel === qA;
    const yourTxt = S.sel === null ? 'Tidak dijawab' : (LETT[S.sel] + '. ' + qO[S.sel]);
    const corrTxt = LETT[qA] + '. ' + qO[qA];
    const div = document.createElement('div');
    div.className = 'acc';
    div.innerHTML = '<div class="acc-head"><span class="acc-stat ' + (ok ? 'c' : 'w') + '">' + (ok ? MK_OK : MK_NO) + '</span><span class="acc-q"><small>SOAL ' + (i + 1) + '</small>' + Q.q + '</span><span class="acc-chev"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></div><div class="acc-body"><div class="acc-inner"><div class="ans-line"><span class="tag">Jawabanmu</span><span class="val ' + (ok ? 'yc' : 'yw') + '">' + yourTxt + '</span></div><div class="ans-line"><span class="tag">Kunci</span><span class="val right">' + corrTxt + '</span></div><div class="acc-exp">' + qE + '</div></div></div>';
    div.querySelector('.acc-head').onclick = () => div.classList.toggle('open');
    list.appendChild(div);
  });
}

$('btnRestart').onclick = () => {
  window._quizCur = 0;
  window._quizState = getQUIZ().map(() => ({ sel: null, sub: false }));
  const cv = $('confetti');
  if (cv) cv.style.display = 'none';
  showQuizScreen('screen-start');
};

// "Kembali ke Menu" button - back to dashboard
const btnBackMenu = $('btnBackMenu');
if (btnBackMenu) {
  btnBackMenu.onclick = () => {
    if (typeof window.backToDashboard === 'function') window.backToDashboard();
  };
}

// ─── Confetti ─────────────────────────────────────────────────────────────────
function burstConfetti() {
  const cv = $('confetti');
  cv.style.display = 'block';
  const ctx = cv.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  function size() { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; } size();
  const cols = ['#fb852a', '#ffca5a', '#ff9d3f', '#1fb583', '#ec5b76', '#ffd76a', '#e56409'];
  let P = [];
  for (let i = 0; i < 150; i++) {
    P.push({ x: innerWidth / 2, y: innerHeight * 0.34, vx: (Math.random() - 0.5) * 14, vy: Math.random() * -15 - 4, g: 0.32 + Math.random() * 0.2, s: 6 + Math.random() * 7, c: cols[i % cols.length], r: Math.random() * 6, vr: (Math.random() - .5) * .3, life: 0 });
  }
  let frame = 0;
  function loop() {
    frame++;
    ctx.clearRect(0, 0, cv.width, cv.height);
    let alive = false;
    P.forEach(p => {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++;
      if (p.y < innerHeight + 40) alive = true;
      ctx.save(); ctx.translate(p.x * dpr, p.y * dpr); ctx.rotate(p.r);
      ctx.globalAlpha = Math.max(0, 1 - p.life / 150);
      ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2 * dpr, -p.s / 2 * dpr, p.s * dpr, p.s * 1.4 * dpr);
      ctx.restore();
    });
    if (alive && frame < 240) requestAnimationFrame(loop); else cv.style.display = 'none';
  }
  loop();
  addEventListener('resize', size, { once: true });
}
