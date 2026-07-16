/**
 * main.js - SPA Controller (ES6 Module)
 * Handles routing between screens (auth, dashboard, quiz)
 * and dynamically loads quiz data modules.
 */

// ─── Quiz Registry ───────────────────────────────────────────────────────────
const QUIZ_LIST = [
  { id: 'soal_1', label: 'Latihan 1', desc: 'Tata Nama Senyawa Kovalen Biner' },
  { id: 'soal_2', label: 'Latihan 2', desc: 'Tata Nama Senyawa Kovalen Biner' },
  { id: 'soal_3', label: 'Latihan 3', desc: 'Tata Nama Senyawa Kovalen Biner' },
  { id: 'soal_4', label: 'Latihan 4', desc: 'Tata Nama Senyawa Kovalen Biner' },
  { id: 'soal_5', label: 'Latihan 5', desc: 'Tata Nama Senyawa Kovalen Biner' },
  { id: 'soal_6', label: 'Latihan 6', desc: 'Tata Nama Senyawa Kovalen Biner' },
];

// ─── DOM Helpers ─────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const screens = ['auth-screen', 'dashboard-screen', 'quiz-screen'];

export function showScreen(id) {
  screens.forEach(s => {
    const el = $(s);
    if (el) el.classList.remove('active');
  });
  const target = $(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Header ──────────────────────────────────────────────────────────────────
function showHeader(show) {
  const header = $('global-header');
  if (!header) return;
  header.style.display = show ? 'flex' : 'none';
}

function setHeaderUser(name) {
  const el = $('header-name');
  if (el) el.textContent = name || 'Siswa';
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
function renderDashboard() {
  const grid = $('quiz-grid');
  if (!grid) return;
  grid.innerHTML = '';

  QUIZ_LIST.forEach((quiz, idx) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="quiz-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-14v4l3 3"/>
        </svg>
      </div>
      <div class="quiz-title">${quiz.label}</div>
      <div class="quiz-desc">${quiz.desc}</div>
    `;
    card.addEventListener('click', () => loadQuiz(quiz.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') loadQuiz(quiz.id); });
    grid.appendChild(card);
  });
}

// ─── Quiz Loader ─────────────────────────────────────────────────────────────
let quizModule = null;

async function loadQuiz(id) {
  try {
    // Dynamically import the quiz data module
    quizModule = await import(`./data/${id}.js`);

    // Apply theme CSS variables dynamically
    applyTheme(quizModule.theme);

    // Expose QUIZ globally so quiz.js can access it
    window.QUIZ = quizModule.QUIZ;

    // Update page title
    document.title = quizModule.title || 'Kuis Kimia';

    // Show quiz screen
    showScreen('quiz-screen');

    // Init the quiz engine
    initQuizEngine();

  } catch (err) {
    console.error('Gagal memuat kuis:', err);
    alert('Kuis tidak bisa dimuat. Coba lagi.');
  }
}

function applyTheme(themeVars) {
  if (!themeVars) return;
  // themeVars is a template literal string containing CSS variable declarations
  // We parse it and apply to :root via a style tag
  let styleTag = document.getElementById('dynamic-theme');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'dynamic-theme';
    document.head.appendChild(styleTag);
  }
  styleTag.textContent = `:root { ${themeVars} }`;
}

// ─── Quiz Engine (quiz.js logic wired here) ──────────────────────────────────
function initQuizEngine() {
  // Reset state
  window._quizCur = 0;
  window._quizState = window.QUIZ.map(() => ({ sel: null, sub: false }));

  // Show start screen
  quizShowScreen('screen-start');
  buildNav();
}

// These functions mirror quiz.js but are called here after QUIZ is available
function quizShowScreen(id) {
  document.querySelectorAll('#quiz-screen .screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function buildNav() {
  const n = $('navNums');
  if (!n) return;
  n.innerHTML = '';
  window.QUIZ.forEach((_, i) => {
    const b = document.createElement('button');
    b.textContent = i + 1;
    b.onclick = () => { window._quizCur = i; window._quizRender(); };
    n.appendChild(b);
  });
}

// ─── Logout ──────────────────────────────────────────────────────────────────
function logout() {
  localStorage.removeItem('citra_username');
  localStorage.removeItem('citra_name');
  localStorage.removeItem('citra_kelas');
  showHeader(false);
  showScreen('auth-screen');
  document.body.style.paddingTop = '0';
}

// ─── Auth Success Callback (called from auth.js) ──────────────────────────────
window.onLoginSuccess = function(userData) {
  setHeaderUser(userData.name);
  showHeader(true);
  document.body.style.paddingTop = '60px';
  renderDashboard();
  showScreen('dashboard-screen');
};

// Back to dashboard from quiz result
window.backToDashboard = function() {
  showScreen('dashboard-screen');
  // Reset confetti canvas
  const cv = $('confetti');
  if (cv) cv.style.display = 'none';
};

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Logout button
  const logoutBtn = $('btn-logout');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  // Dashboard Nav button
  const navDashboardBtn = $('btn-nav-dashboard');
  if (navDashboardBtn) {
    navDashboardBtn.addEventListener('click', () => {
      if (typeof window.backToDashboard === 'function') {
        window.backToDashboard();
      }
    });
  }

  // Check if already logged in
  const savedUser = localStorage.getItem('citra_username');
  const savedName = localStorage.getItem('citra_name');
  if (savedUser) {
    setHeaderUser(savedName || savedUser);
    showHeader(true);
    document.body.style.paddingTop = '60px';
    renderDashboard();
    showScreen('dashboard-screen');
  }
});
