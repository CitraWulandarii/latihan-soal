/**
 * Google Apps Script for Portal Pembelajaran Kimia
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com and create a new project.
 * 2. Paste this entire code.
 * 3. Replace the `SPREADSHEET_ID` with your Google Spreadsheet ID.
 *    (You can find the ID in the URL of your spreadsheet: https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit)
 * 4. Ensure your spreadsheet has two tabs named EXACTLY:
 *    - "users" (Columns A-F: Timestamp, Name, Kelas, Username, Password)
 *    - "result" (Columns A-D: Timestamp, Username, Quiz_ID, Score)
 * 5. Click Deploy > New deployment.
 * 6. Select type: "Web app".
 * 7. Execute as: "Me".
 * 8. Who has access: "Anyone".
 * 9. Click Deploy and copy the Web App URL.
 * 10. Paste the Web App URL into `assets/js/auth.js` and `assets/js/quiz.js`.
 */

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // GANTI DENGAN ID SPREADSHEET ANDA

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
    }
    
    return respond({ status: 'error', message: 'Action not found' });
  } catch (error) {
    return respond({ status: 'error', message: error.toString() });
  }
}

function handleRegister(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('users');
  
  if (!sheet) {
    return respond({ status: 'error', message: 'Sheet "users" tidak ditemukan' });
  }
  
  const name = e.parameter.name;
  const kelas = e.parameter.kelas;
  const username = e.parameter.username;
  const password = e.parameter.password;
  
  // Cek apakah username sudah ada
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) { // Skip header row
    if (data[i][3] == username) { // Index 3 is Username column (D)
      return respond({ status: 'error', message: 'Username sudah digunakan' });
    }
  }
  
  // Simpan data (Role default 'student' di kolom F)
  sheet.appendRow([new Date(), name, kelas, username, password, 'student']);
  return respond({ status: 'success', message: 'Registrasi berhasil' });
}

function handleLogin(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('users');
  
  if (!sheet) {
    return respond({ status: 'error', message: 'Sheet "users" tidak ditemukan' });
  }
  
  const username = e.parameter.username;
  const password = e.parameter.password;
  
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][3] == username && data[i][4] == password) {
      const role = data[i][5] || 'student';
      // Return user data (name, kelas, and role)
      return respond({ 
        status: 'success', 
        message: 'Login berhasil',
        data: {
          name: data[i][1],
          kelas: data[i][2],
          role: role
        }
      });
    }
  }
  
  return respond({ status: 'error', message: 'Username atau password salah' });
}

function handleSubmitScore(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('result');
  
  if (!sheet) {
    return respond({ status: 'error', message: 'Sheet "result" tidak ditemukan' });
  }
  
  const username = e.parameter.username;
  const quizId = e.parameter.quiz_id;
  const score = e.parameter.score;
  
  sheet.appendRow([new Date(), username, quizId, score]);
  return respond({ status: 'success', message: 'Skor berhasil disimpan' });
}

function handleGetAllResults(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const usersSheet = ss.getSheetByName('users');
  const resultsSheet = ss.getSheetByName('result');
  
  if (!usersSheet || !resultsSheet) {
    return respond({ status: 'error', message: 'Sheet "users" atau "result" tidak ditemukan' });
  }
  
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

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
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

  return html.evaluate()
    .setTitle('Latihan Soal')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}