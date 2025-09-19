# api-ulasan-film
tugas praktikum mini project kelompokkk

## Anggota Kelompok
Diana Eka Permata Sari (362458302090)
Intan Nur Annisa (362458302083)
Viona Dhini Olivia (362458302031)
Yasmin Fatimah Rosyiah (362458302026)

## Deskripsi Proyek
Studio Ghibli API adalah API publik yang menyediakan data tentang film-film animasi buatan Studio Ghibli. API ini dapat diakses tanpa autentikasi, dan mengembalikan data dalam format JSON.

 ## Cara Menjalankan Proyek 
1. Clone repository ini: ‘git clone https://github.com/ntvvio/api-ulasan-film.git‘
2. Masuk ke direktori: ‘cd \api-ulasan-film\api-ulasan-film‘
3. Install dependensi: ‘npm install‘
4. Jalankan server: ‘node server.js‘
Server akan berjalan di ‘http://localhost:3300‘.
5. Terus bisa diedit di postman

## Daftar Endpoint
1. GET/ ghibli https://ghibliapi.dev/films : cek list film ghibli
2. Get/ Review by ID (id=1) http://localhost:3300/reviews/1 : mengambil ulasan spesifik dari id 1
3. POST/ review http://localhost:3300/reviews : menambahkan ulasan film
4. GET/ Review by ID (id=3) http://localhost:3300/reviews/3 : mengambil ulasan spesifik film dari id 3
5. GET/ status http://localhost:3300/status : mengambil ulasan bahwa api berjalan dengan baik

