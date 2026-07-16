/**
 * auth.js - Login & Registration Logic
 * Works as a global script (non-module).
 * Calls window.onLoginSuccess(userData) when login succeeds.
 */

// ─── View Switching ───────────────────────────────────────────────────────────
const loginView = document.getElementById('login-view');
const registerView = document.getElementById('register-view');
const switchBtnLogin = document.getElementById('switch-login');
const switchBtnRegister = document.getElementById('switch-register');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');

function showAuthView(view) {
  loginView.classList.remove('view-active');
  registerView.classList.remove('view-active');
  
  if (tabLogin) tabLogin.classList.remove('active');
  if (tabRegister) tabRegister.classList.remove('active');

  if (view === 'login') {
    loginView.classList.add('view-active');
    if (tabLogin) tabLogin.classList.add('active');
  } else {
    registerView.classList.add('view-active');
    if (tabRegister) tabRegister.classList.add('active');
  }
}

if (switchBtnLogin) switchBtnLogin.addEventListener('click', e => { e.preventDefault(); showAuthView('login'); });
if (switchBtnRegister) switchBtnRegister.addEventListener('click', e => { e.preventDefault(); showAuthView('register'); });
if (tabLogin) tabLogin.addEventListener('click', () => showAuthView('login'));
if (tabRegister) tabRegister.addEventListener('click', () => showAuthView('register'));

// ─── UI Helpers ──────────────────────────────────────────────────────────────
function showAlert(form, type, message) {
  const alertEl = form.querySelector('.alert');
  if (!alertEl) return;
  alertEl.className = 'alert ' + type;
  alertEl.textContent = message;
}

function setLoading(button, isLoading) {
  if (isLoading) {
    button.classList.add('loading');
    button.disabled = true;
  } else {
    button.classList.remove('loading');
    button.disabled = false;
  }
}

// ─── Login ────────────────────────────────────────────────────────────────────
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = new URLSearchParams();
    data.append('action', 'login');
    for (const [key, value] of formData) data.append(key, value);

    const btn = loginForm.querySelector('button[type="submit"]');
    setLoading(btn, true);

    const url = getGasUrl();

    if (url === GAS_URL_DEFAULT) {
      // Dev mode: skip GAS, use localStorage mock login
      setLoading(btn, false);
      const username = formData.get('username');
      // Dev mode: username 'admin' or 'guru' auto-gets admin role
      const role = (username.toLowerCase() === 'admin' || username.toLowerCase() === 'guru') ? 'admin' : 'student';
      localStorage.setItem('citra_username', username);
      localStorage.setItem('citra_name', username);
      localStorage.setItem('citra_kelas', '-');
      localStorage.setItem('citra_role', role);
      if (typeof window.onLoginSuccess === 'function') {
        window.onLoginSuccess({ name: username, kelas: '-', role: role });
      }
      return;
    }

    fetch(url, { method: 'POST', body: data })
      .then(r => r.json())
      .then(res => {
        setLoading(btn, false);
        if (res.status === 'success') {
          showAlert(loginForm, 'success', 'Login berhasil!');
          const role = res.data.role || 'student';
          localStorage.setItem('citra_username', formData.get('username'));
          localStorage.setItem('citra_name', res.data.name);
          localStorage.setItem('citra_kelas', res.data.kelas);
          localStorage.setItem('citra_role', role);
          if (typeof window.onLoginSuccess === 'function') {
            window.onLoginSuccess({ name: res.data.name, kelas: res.data.kelas, role: role });
          }
        } else {
          showAlert(loginForm, 'error', res.message || 'Login gagal.');
        }
      })
      .catch(err => {
        setLoading(btn, false);
        console.error(err);
        showAlert(loginForm, 'error', 'Terjadi kesalahan koneksi.');
      });
  });
}

// ─── Register ─────────────────────────────────────────────────────────────────
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const data = new URLSearchParams();
    data.append('action', 'register');
    for (const [key, value] of formData) data.append(key, value);

    const btn = registerForm.querySelector('button[type="submit"]');
    setLoading(btn, true);

    const url = getGasUrl();

    if (url === GAS_URL_DEFAULT) {
      setLoading(btn, false);
      showAlert(registerForm, 'error', 'URL Google Script belum diatur. Hubungi administrator.');
      return;
    }

    fetch(url, { method: 'POST', body: data })
      .then(r => r.json())
      .then(res => {
        setLoading(btn, false);
        if (res.status === 'success') {
          showAlert(registerForm, 'success', 'Pendaftaran berhasil! Silakan login.');
          registerForm.reset();
          setTimeout(() => {
            showAuthView('login');
            showAlert(loginForm, 'success', 'Akun berhasil dibuat. Silakan masuk.');
          }, 1500);
        } else {
          showAlert(registerForm, 'error', res.message || 'Pendaftaran gagal.');
        }
      })
      .catch(err => {
        setLoading(btn, false);
        console.error(err);
        showAlert(registerForm, 'error', 'Terjadi kesalahan koneksi.');
      });
  });
}

// ─── Prefill ──────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('citra_username');
  if (savedUser && loginForm) {
    const input = loginForm.querySelector('input[name="username"]');
    if (input) input.value = savedUser;
  }
});
