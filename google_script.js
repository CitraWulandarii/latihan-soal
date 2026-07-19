const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // GANTI DENGAN ID SPREADSHEET ANDA
const VERSION_GIT = 'latest'; // Defaultnya yang terbaru, bisa diganti dengan versi release repo github

function doPost(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'register') {
      return handleRegister(e);
    } else if (action === 'login') {
      return handleLogin(e);
    } else if (action === 'submit_score') {
      return handleSubmitScore(e);
    } else if (action === 'get_all_results') {
      return handleGetAllResults(e);
    } else if (action === 'save_progress') {
      return handleSaveProgress(e);
    } else if (action === 'get_progress') {
      return handleLoadProgress(e);
    } else if (action === 'get_user_progress') {
      return handleGetUserProgress(e);
    } else if (action === 'get_student_progress') {
      return handleGetStudentProgress(e);
    }
    
    return respond({ status: 'error', message: 'Action not found' });
  } catch (error) {
    return respond({ status: 'error', message: error.toString() });
  }
}

function handleRegister(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'users');
  
  const name = e.parameter.name;
  const kelas = e.parameter.kelas;
  const username = e.parameter.username;
  const password = e.parameter.password; // sudah di-hash dari client (SHA-256 hex)
  
  // Cek apakah username sudah ada
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) { // Skip header row
    if (data[i][3] == username) { // Index 3 is Username column (D)
      return respond({ status: 'error', message: 'Username sudah digunakan' });
    }
  }
  
  // Simpan data (Role default 'student' di kolom F)
  // Password sudah berupa SHA-256 hash dari client
  sheet.appendRow([new Date(), name, kelas, username, password, 'student']);
  return respond({ status: 'success', message: 'Registrasi berhasil' });
}


function handleLogin(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'users');
  
  const username = e.parameter.username;
  const password = e.parameter.password; // sudah di-hash dari client (SHA-256 hex)
  
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][3] == username) {
      let storedPassword = String(data[i][4]);

      // Auto-migrate: jika password di DB masih plain text (bukan hash),
      // hash dulu lalu simpan kembali ke sheet
      if (!isHashed(storedPassword)) {
        storedPassword = hashPassword(storedPassword);
        sheet.getRange(i + 1, 5).setValue(storedPassword); // kolom E (index 4 → kolom ke-5)
      }

      // Bandingkan hash
      if (storedPassword === password) {
        const role = data[i][5] || 'student';
        return respond({ 
          status: 'success', 
          message: 'Login berhasil',
          data: {
            name: data[i][1],
            kelas: data[i][2],
            role: role
          }
        });
      } else {
        break; // username ketemu tapi password salah
      }
    }
  }
  
  return respond({ status: 'error', message: 'Username atau password salah' });
}


function handleSubmitScore(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'result');
  
  const username = e.parameter.username;
  const quizId = e.parameter.quiz_id;
  const score = e.parameter.score;
  
  sheet.appendRow([new Date(), username, quizId, score]);
  return respond({ status: 'success', message: 'Skor berhasil disimpan' });
}

function handleGetAllResults(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const usersSheet = getSheetOrCreate(ss, 'users');
  const resultsSheet = getSheetOrCreate(ss, 'result');
  
  const usersData = usersSheet.getDataRange().getValues();
  const resultsData = resultsSheet.getDataRange().getValues();
  
  const students = [];
  for (let i = 1; i < usersData.length; i++) {
    const role = usersData[i][5] || 'student';
    if (role === 'student') {
      students.push({
        name: usersData[i][1],
        kelas: usersData[i][2],
        username: usersData[i][3]
      });
    }
  }
  
  const scores = [];
  for (let j = 1; j < resultsData.length; j++) {
    scores.push({
      username: resultsData[j][1],
      quiz_id: resultsData[j][2],
      score: resultsData[j][3],
      timestamp: resultsData[j][0]
    });
  }
  
  return respond({
    status: 'success',
    data: {
      students: students,
      scores: scores
    }
  });
}

function handleSaveProgress(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'progress');
  
  const username = e.parameter.username;
  const quizId = e.parameter.quiz_id;
  const stateStr = e.parameter.state;
  
  const data = sheet.getDataRange().getValues();
  let foundIndex = -1;
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] == username && data[i][2] == quizId) {
      foundIndex = i + 1;
      break;
    }
  }
  
  if (foundIndex > -1) {
    sheet.getRange(foundIndex, 1).setValue(new Date());
    sheet.getRange(foundIndex, 4).setValue(stateStr);
  } else {
    sheet.appendRow([new Date(), username, quizId, stateStr]);
  }
  
  return respond({ status: 'success', message: 'Progres berhasil disimpan' });
}

function handleLoadProgress(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'progress');
  
  const username = e.parameter.username;
  const quizId = e.parameter.quiz_id;
  
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] == username && data[i][2] == quizId) {
      return respond({ status: 'success', data: data[i][3] });
    }
  }
  
  return respond({ status: 'success', data: null, message: 'Tidak ada progres' });
}

function handleGetUserProgress(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'progress');
  
  const username = e.parameter.username;
  const data = sheet.getDataRange().getValues();
  
  const progressMap = {};
  // Skip header row
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] == username) {
      const quizId = data[i][2];
      const stateStr = data[i][3];
      progressMap[quizId] = stateStr;
    }
  }
  
  return respond({ status: 'success', data: progressMap });
}

/**
 * Ambil seluruh progress quiz seorang siswa — digunakan oleh admin.
 * Return: { soal_1: stateJSON, soal_2: stateJSON, ... }
 */
function handleGetStudentProgress(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getSheetOrCreate(ss, 'progress');

  const username = e.parameter.username; // username siswa yang dilihat admin
  const data = sheet.getDataRange().getValues();

  const progressMap = {};
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] == username) {
      progressMap[data[i][2]] = data[i][3]; // quiz_id → stateJSON
    }
  }

  return respond({ status: 'success', data: progressMap });
}


function getSheetOrCreate(ss, sheetName) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (sheetName === 'users') {
      sheet.appendRow(['Timestamp', 'Name', 'Kelas', 'Username', 'Password', 'Role']);
    } else if (sheetName === 'result') {
      sheet.appendRow(['Timestamp', 'Username', 'Quiz_ID', 'Score']);
    } else if (sheetName === 'progress') {
      sheet.appendRow(['Timestamp', 'Username', 'Quiz_ID', 'State_JSON']);
    }
  }
  return sheet;
}

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── Password Hashing (SHA-256) ─────────────────────────────────────────────────────────────

/**
 * Menghasilkan SHA-256 hash dari string, dikembalikan sebagai hex lowercase.
 * Menggunakan Utilities.computeDigest bawaan Google Apps Script — tanpa library.
 */
function hashPassword(plainText) {
  const bytes = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    plainText,
    Utilities.Charset.UTF_8
  );
  return bytes.map(b => ('0' + (b & 0xff).toString(16)).slice(-2)).join('');
}

/**
 * Deteksi apakah string sudah berupa SHA-256 hash:
 * - Panjangnya tepat 64 karakter
 * - Hanya berisi karakter hex lowercase (0-9, a-f)
 * Jika kondisi ini TIDAK terpenuhi, berarti masih plain text.
 */
function isHashed(str) {
  return /^[0-9a-f]{64}$/.test(str);
}


// Untuk menghindari CORS saat preflight OPTIONS (jika diperlukan)
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const html = HtmlService.createTemplateFromFile('index');
  // Inject parameter ke html template
  html.action = e && e.parameter && e.parameter.action ? e.parameter.action : '';
  html.email = e && e.parameter && e.parameter.email ? e.parameter.email : '';
  html.token = e && e.parameter && e.parameter.token ? e.parameter.token : '';

  let gasUrl = '';
  try {
    gasUrl = ScriptApp.getService().getUrl();
  } catch (err) {
    // Fallback jika dijalankan langsung di editor Apps Script tanpa status Web App
  }
  html.gasUrl = gasUrl;
  html.versiGit = VERSION_GIT;

  return html.evaluate()
    .setTitle('Latihan Soal')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}