# Latihan Soal Tata Nama Senyawa Ionik

Latihan soal interaktif untuk mempermudah siswa dalam memahami tata nama senyawa ionik.

## Fitur
- 5 tingkat kesulitan
- Pembelajaran langkah demi langkah
- Latihan soal dengan feedback real-time
- Pembelajaran visual dengan ilustrasi
- Lencana dan poin untuk motivasi

## Teknologi yang digunakan
- HTML
- CSS
- Vanilla JavaScript

## Cara menggunakan
1. Buka file HTML di browser web
2. Ikuti instruksi pada layar
3. Pelajari konsep tata nama senyawa ionik
4. Latih keterampilan Anda dengan latihan soal
5. Dapatkan feedback real-time pada setiap jawaban

## Pengaturan Database (Google Sheets & Google Apps Script)

Aplikasi ini menggunakan Google Sheets sebagai database utama yang dihubungkan melalui Web App dari Google Apps Script (GAS). Untuk menghubungkan aplikasi dengan database, pastikan URL *endpoint* GAS telah diatur (misalnya pada variabel `gasUrl` atau disimpan di localStorage dengan key `citra_gas_url`).

Anda perlu menyiapkan sebuah *spreadsheet* (Google Sheets) dengan 3 *sheet* (lembar kerja) utama sebagai berikut:

### 1. Sheet `users`
Sheet ini digunakan untuk menyimpan data pendaftaran dan melakukan validasi saat autentikasi (login) siswa.
- **Struktur Kolom yang disarankan**:
  - `nama`: Nama Lengkap Siswa
  - `kelas`: Kelas
  - `username`: Username unik untuk login
  - `password`: Kata sandi akun
  - `role`: Peran pengguna (misalnya: `student` atau `admin`)

### 2. Sheet `result` (Skor Akhir)
Sheet ini digunakan untuk merekam nilai atau skor akhir saat siswa telah menyelesaikan kuis.
- **Struktur Kolom yang disarankan**:
  - `username`: Username siswa (sebagai identitas)
  - `quiz_id`: ID kuis yang dikerjakan (contoh: `soal_1`, `soal_2`, dst)
  - `score`: Skor akhir yang didapatkan siswa (dari 0 hingga 100)
  - `timestamp`: Waktu penyelesaian (bisa diisi otomatis oleh script sisi peladen GAS)

### 3. Sheet `progress` (Progress Jawaban Sementara)
Sheet ini menyimpan *state* atau status jawaban sementara selama siswa sedang mengerjakan kuis. Data progress ini akan diselamatkan setiap kali siswa mengklik tombol Submit sehingga siswa dapat melanjutkan kuisnya dari soal terakhir yang dikerjakan.
- **Struktur Kolom yang disarankan**:
  - `username`: Username siswa
  - `quiz_id`: ID kuis yang sedang dikerjakan
  - `state`: String JSON yang memuat detail jawaban per soal. Format ini memiliki struktur array objek yang memuat elemen-elemen berikut:
    ```json
    [
      {"no": 1, "sel": 2, "sub": true},
      {"no": 2, "sel": null, "sub": false}
    ]
    ```
    *(Keterangan: `no` = Nomor soal, `sel` = Indeks opsi yang dipilih, `sub` = Status sudah disubmit (true/false))*
  - `timestamp`: Waktu terakhir progress diperbarui (otomatis diisi saat update data)

### Cara Kerja Komunikasi Database
Data-data di atas dikirim oleh *client-side* (JavaScript di browser) menggunakan HTTP `POST` (*fetch*) ke endpoint Google Apps Script. Data yang dikirim selalu memuat parameter form `action` untuk menentukan jenis proses:
- `action=register`: Menambahkan baris baru di sheet `users`.
- `action=login`: Membaca dan memvalidasi `username` dan `password` di sheet `users`.
- `action=submit_score`: Menambahkan baris baru ke sheet `result`.
- `action=save_progress`: Melakukan pembaruan (update) atau menambahkan baris ke sheet `progress` berdasarkan `username` dan `quiz_id`.