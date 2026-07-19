/**
 * main.js - SPA Controller (ES6 Module)
 * Handles routing between screens (auth, dashboard, quiz, admin)
 * and dynamically loads quiz data modules.
 */

// ─── Quiz Registry ───────────────────────────────────────────────────────────
const QUIZ_LIST = [
  { id: 'soal_1', label: 'Latihan 1', desc: 'Tata Nama Senyawa Ionik' },
  { id: 'soal_2', label: 'Latihan 2', desc: 'Tata Nama Senyawa Kovalen' },
  { id: 'soal_3', label: 'Latihan 3', desc: 'Tata Nama Senyawa Poliatomik' },
  { id: 'soal_4', label: 'Latihan 4', desc: 'Tata Nama Senyawa Asam' },
  { id: 'soal_5', label: 'Latihan 5', desc: 'Tata Nama Senyawa Basa' },
  { id: 'soal_6', label: 'Latihan 6', desc: 'Tata Nama Senyawa Anorganik' },
];

// ─── DOM Helpers ─────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const screens = ['auth-screen', 'dashboard-screen', 'quiz-screen', 'admin-screen'];

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

/** Show or hide the "Latihan Soal" nav button (hidden for admin role) */
function setHeaderNav(role) {
  const navBtn = $('btn-nav-dashboard');
  if (!navBtn) return;
  navBtn.style.display = role === 'admin' ? 'none' : '';
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
async function renderDashboard() {
  const grid = $('quiz-grid');
  if (!grid) return;
  
  // Show loading animation
  grid.innerHTML = '<div style="text-align:center; padding: 40px; grid-column: 1/-1;"><span class="spinner" style="display:inline-block; border-color:var(--green); border-bottom-color:transparent; width:30px; height:30px; margin-bottom:15px;"></span><br><div style="color:var(--ink-soft); font-weight:bold;">Memuat progres kuis...</div></div>';
  
  // Disable clicks while loading
  grid.style.pointerEvents = 'none';
  grid.style.opacity = '0.7';

  let userProgress = {};
  const gasUrl = localStorage.getItem('citra_gas_url') || (typeof getGasUrl !== 'undefined' ? getGasUrl : window.GAS_URL_DEFAULT);
  const username = localStorage.getItem('citra_username');

  // Fetch progress if not in dev mode
  if (username && gasUrl && (!window.GAS_URL_DEFAULT || gasUrl !== window.GAS_URL_DEFAULT)) {
    try {
      const formData = new URLSearchParams();
      formData.append('action', 'get_user_progress');
      formData.append('username', username);
      
      const res = await fetch(gasUrl, { method: 'POST', body: formData });
      const json = await res.json();
      if (json.status === 'success' && json.data) {
        userProgress = json.data;
      }
    } catch (err) {
      console.error('Gagal memuat progres dashboard:', err);
    }
  }

  // Clear loading and restore pointer events
  grid.style.pointerEvents = 'auto';
  grid.style.opacity = '1';
  grid.innerHTML = '';

  QUIZ_LIST.forEach((quiz, idx) => {
    let progressHtml = '';
    
    // Check if we have progress for this quiz
    if (userProgress[quiz.id]) {
      try {
        const state = JSON.parse(userProgress[quiz.id]);
        const total = state.length;
        const answered = state.filter(s => s.sub).length;
        
        if (total > 0 && answered > 0) {
          const pct = Math.round((answered / total) * 100);
          progressHtml = `
            <div style="margin-top:12px; font-size:12px; color:var(--ink-soft); width:100%;">
              <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-weight:600;">
                <span>Progres: ${answered}/${total}</span>
                <span style="color:var(--green)">${pct}%</span>
              </div>
              <div style="background:var(--gray-chip); border-radius:10px; height:6px; overflow:hidden;">
                <div style="background:var(--green); height:100%; width:${pct}%; transition: width 0.5s ease;"></div>
              </div>
            </div>
          `;
        }
      } catch(e) {}
    }

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
      ${progressHtml}
    `;
    card.addEventListener('click', () => loadQuiz(quiz.id, card));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') loadQuiz(quiz.id, card); });
    grid.appendChild(card);
  });
}

// ─── Quiz Loader ─────────────────────────────────────────────────────────────
let quizModule = null;

async function loadQuiz(id, cardElement = null) {
  try {
    if (cardElement) {
      cardElement.style.opacity = '0.5';
      cardElement.style.pointerEvents = 'none';
      const titleEl = cardElement.querySelector('.quiz-title');
      if (titleEl) {
        titleEl.dataset.orig = titleEl.textContent;
        titleEl.textContent = 'Memuat...';
      }
    }
    // Dynamically import the quiz data module
    quizModule = await import(`./data/${id}.js`);

    // Apply theme CSS variables dynamically
    applyTheme(quizModule.theme);

    // Expose QUIZ globally so quiz.js can access it
    window.QUIZ = quizModule.QUIZ;
    // Expose quiz ID globally so quiz.js can submit score with correct key
    window.currentQuizId = id;

    // Update page title
    document.title = quizModule.title || 'Kuis Kimia';

    // Fetch progress from GAS if logged in
    let savedState = null;
    const username = localStorage.getItem('citra_username');
    const gasUrl = typeof getGasUrl !== 'undefined' ? getGasUrl : localStorage.getItem('citra_gas_url');
    
    // GAS_URL_DEFAULT in index.html is mapped to getGasUrl check
    if (username && gasUrl && (!window.GAS_URL_DEFAULT || gasUrl !== window.GAS_URL_DEFAULT)) {
      try {
        const formData = new URLSearchParams();
        formData.append('action', 'get_progress');
        formData.append('username', username);
        formData.append('quiz_id', id);
        
        const res = await fetch(gasUrl, { method: 'POST', body: formData });
        const json = await res.json();
        if (json.status === 'success' && json.data) {
          savedState = JSON.parse(json.data);
        }
      } catch (err) {
        console.error('Gagal memuat progres:', err);
      }
    }

    if (cardElement) {
      cardElement.style.opacity = '1';
      cardElement.style.pointerEvents = 'auto';
      const titleEl = cardElement.querySelector('.quiz-title');
      if (titleEl && titleEl.dataset.orig) titleEl.textContent = titleEl.dataset.orig;
    }

    // Show quiz screen
    showScreen('quiz-screen');

    // Init the quiz engine
    initQuizEngine(savedState);

  } catch (err) {
    if (cardElement) {
      cardElement.style.opacity = '1';
      cardElement.style.pointerEvents = 'auto';
      const titleEl = cardElement.querySelector('.quiz-title');
      if (titleEl && titleEl.dataset.orig) titleEl.textContent = titleEl.dataset.orig;
    }
    console.error('Gagal memuat kuis:', err);
    alert('Kuis tidak bisa dimuat. Coba lagi.');
  }
}

function applyTheme(themeVars) {
  if (!themeVars) return;
  let styleTag = document.getElementById('dynamic-theme');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'dynamic-theme';
    document.head.appendChild(styleTag);
  }
  styleTag.textContent = `:root { ${themeVars} }`;
}

// ─── Quiz Engine (quiz.js logic wired here) ──────────────────────────────────
function initQuizEngine(savedState = null) {
  if (savedState && Array.isArray(savedState)) {
    window._quizState = savedState;
    // Find first unanswered
    const firstUnanswered = window._quizState.findIndex(s => !s.sub);
    window._quizCur = firstUnanswered === -1 ? 0 : firstUnanswered;
  } else {
    window._quizCur = 0;
    window._quizState = window.QUIZ.map((_, i) => ({ no: i + 1, sel: null, sub: false }));
  }
  quizShowScreen('screen-start');
  buildNav();
}

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

// ─── Admin Data ──────────────────────────────────────────────────────────────
const QUIZ_IDS = ['soal_1', 'soal_2', 'soal_3', 'soal_4', 'soal_5', 'soal_6'];

async function loadAdminData() {
  const tbody = $('admin-table-body');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:24px;color:var(--ink-soft)">Memuat data rekap...</td></tr>';

  const gasUrl = localStorage.getItem('citra_gas_url') || GAS_URL_DEFAULT;

  if (gasUrl === GAS_URL_DEFAULT) {
    // Dev mode: render mock student data
    renderAdminTable([
      { name: 'Budi Santoso', kelas: 'X MIPA 1', username: 'budi' },
      { name: 'Siti Rahayu', kelas: 'X MIPA 2', username: 'siti' },
      { name: 'Ahmad Fauzi', kelas: 'X MIPA 1', username: 'ahmad' },
    ], [
      { username: 'budi', quiz_id: 'soal_1', score: 80 },
      { username: 'budi', quiz_id: 'soal_2', score: 90 },
      { username: 'budi', quiz_id: 'soal_3', score: 70 },
      { username: 'siti', quiz_id: 'soal_1', score: 100 },
      { username: 'siti', quiz_id: 'soal_4', score: 60 },
      { username: 'ahmad', quiz_id: 'soal_2', score: 50 },
      { username: 'ahmad', quiz_id: 'soal_5', score: 100 },
    ]);
    return;
  }

  try {
    const formData = new URLSearchParams();
    formData.append('action', 'get_all_results');
    const res = await fetch(gasUrl, { method: 'POST', body: formData });
    const json = await res.json();
    if (json.status === 'success') {
      renderAdminTable(json.data.students, json.data.scores);
    } else {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:24px;color:var(--red)">${json.message || 'Gagal memuat data.'}</td></tr>`;
    }
  } catch (err) {
    console.error(err);
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:24px;color:var(--red)">Terjadi kesalahan koneksi.</td></tr>';
  }
}

function renderAdminTable(students, scores) {
  const tbody = $('admin-table-body');
  if (!tbody) return;

  if (!students || students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:24px;color:var(--ink-soft)">Belum ada data siswa.</td></tr>';
    return;
  }

  // Build a lookup: { username: { soal_1: score, soal_2: score, ... } }
  const scoreMap = {};
  scores.forEach(s => {
    const u = s.username;
    if (!scoreMap[u]) scoreMap[u] = {};
    // Keep the highest score for each quiz
    const existing = scoreMap[u][s.quiz_id];
    if (existing === undefined || Number(s.score) > Number(existing)) {
      scoreMap[u][s.quiz_id] = Number(s.score);
    }
  });

  tbody.innerHTML = students.map((student, idx) => {
    const cells = QUIZ_IDS.map(qId => {
      const sc = scoreMap[student.username]?.[qId];
      if (sc === undefined) return `<td><span class="score-badge empty">-</span></td>`;
      let cls = sc >= 90 ? 'perfect' : sc >= 70 ? 'good' : 'fair';
      return `<td><span class="score-badge ${cls}">${sc}</span></td>`;
    }).join('');

    return `<tr>
      <td style="font-weight:800;color:var(--ink)">${idx + 1}</td>
      <td style="font-weight:800;color:var(--ink)">${student.name}</td>
      <td>${student.kelas}</td>
      ${cells}
    </tr>`;
  }).join('');
}

// ─── Logout ──────────────────────────────────────────────────────────────────
function logout() {
  localStorage.removeItem('citra_username');
  localStorage.removeItem('citra_name');
  localStorage.removeItem('citra_kelas');
  localStorage.removeItem('citra_role');
  showHeader(false);
  showScreen('auth-screen');
  document.body.style.paddingTop = '0';
}

// ─── Auth Success Callback (called from auth.js) ──────────────────────────────
window.onLoginSuccess = function(userData) {
  const role = userData.role || 'student';
  setHeaderUser(userData.name);
  setHeaderNav(role);
  showHeader(true);
  document.body.style.paddingTop = '60px';

  if (role === 'admin') {
    showScreen('admin-screen');
    loadAdminData();
  } else {
    renderDashboard();
    showScreen('dashboard-screen');
  }
};

// Back to dashboard from quiz result
window.backToDashboard = function() {
  showScreen('dashboard-screen');
  renderDashboard();
  const cv = $('confetti');
  if (cv) cv.style.display = 'none';
};

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Logout button
  const logoutBtn = $('btn-logout');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  // Refresh admin data button
  const refreshBtn = $('btn-refresh-admin');
  if (refreshBtn) refreshBtn.addEventListener('click', loadAdminData);

  // Dashboard Nav button (student only)
  const navDashboardBtn = $('btn-nav-dashboard');
  if (navDashboardBtn) {
    navDashboardBtn.addEventListener('click', () => {
      if (typeof window.backToDashboard === 'function') window.backToDashboard();
    });
  }

  // Check if already logged in
  const savedUser = localStorage.getItem('citra_username');
  const savedName = localStorage.getItem('citra_name');
  const savedRole = localStorage.getItem('citra_role') || 'student';
  if (savedUser) {
    setHeaderUser(savedName || savedUser);
    setHeaderNav(savedRole);
    showHeader(true);
    document.body.style.paddingTop = '60px';
    if (savedRole === 'admin') {
      showScreen('admin-screen');
      loadAdminData();
    } else {
      renderDashboard();
      showScreen('dashboard-screen');
    }
  }
});
