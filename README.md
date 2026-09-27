# 🚀 Portofolio Personal Dylan Dev (Dylan Edlyano)

Website profil pribadi dan portofolio profesional dengan estetika **Modern Dark Glassmorphism** (Cyberpunk Executive). Dibangun dengan HTML5 semantik, CSS3 modern berkinerja tinggi, dan JavaScript ES6+ interaktif tanpa ketergantungan library berat.

---

## 🌟 Fitur Utama & Pembaruan

### 1. 🎨 Desain & UI/UX Mutakhir
- **Glassmorphism Layered System**: Efek kaca buram (*backdrop-filter: blur*), pencahayaan ambient orbs multi-warna yang melayang (*floating animated glow orbs*), dan tekstur noise futuristik.
- **Tipografi Profesional**: Kombinasi font Google Fonts `Plus Jakarta Sans` (keterbacaan tinggi) + `Space Grotesk` (futuristik tech) + `JetBrains Mono` (spesifikasi kode).
- **Custom Cursor Pintar**: Mengikuti gerakan kursor dengan animasi *lag smooth* dan efek membesar (*magnet*) saat menyentuh elemen interaktif. **Aman untuk HP / Touchscreen**: otomatis nonaktif pada perangkat layar sentuh sehingga interaksi tetap normal tanpa bug.

### 2. 📱 Navigasi & Responsivitas Penuh
- **Sticky Glass Navbar & ScrollSpy**: Menu navigasi otomatis mendeteksi posisi scroll dan menandai section yang sedang aktif.
- **Mobile Drawer Navigation**: Menu geser samping (*slide-out drawer*) untuk pengguna smartphone dengan animasi hamburger modern, tombol close, dan backdrop interaktif.
- **100% Responsif**: Dioptimalkan untuk semua ukuran layar (Mobile 360px–480px, Tablet 768px, Laptop 1024px, hingga Desktop 4K).

### 3. 💼 Bagian Konten & Portofolio
- **Hero Section**: 
  - Status badge radar hijau: *"Available for Freelance & Projects"*.
  - Animasi ketik otomatis (*typewriter*) dengan rotasi peran (*Fullstack Developer*, *UI/UX Craftsperson*, *Flutter Creator*, dll).
  - Tombol aksi cepat: *Eksplorasi Proyek*, *Download CV*, dan *Mari Berdiskusi*.
  - Tautan media sosial: GitHub, LinkedIn, Instagram, WhatsApp, dan Email.
- **Tech Stack Infinite Marquee**: Baris teknologi berjalan tanpa henti (*infinite seamless scroll*) dengan ikon Remix Icon. Otomatis berhenti (*pause*) saat disentuh atau diarahkan kursor.
- **About Me (Bento Grid)**:
  - Kartu profil lengkap dengan avatar berputar (*animated neon ring*), badge terverifikasi, dan tanda tangan digital.
  - **4 Counter Statistik Interaktif**: Menghitung otomatis saat discroll (*20+ Proyek*, *3+ Tahun Pengalaman*, *100% Kepuasan*, *99% Kualitas Kode*). Suffix `+` dan `%` sudah diperbaiki dan bekerja akurat.
  - Fokus & prinsip kerja (*Clean Architecture, Intuitive UX, Practical Problem Solving*).
  - Daftar tools harian (*VS Code, Figma, Git, Postman, Vercel, Docker, dll*).
- **Keahlian & Spesialisasi (Skills Matrix)**:
  - Dibagi dalam 4 kategori: *Frontend Engineering*, *Backend & Database*, *Mobile & Emerging Tech*, dan *Tools & Methodologies*.
  - Dilengkapi *progress bar* dengan gradient glow sesuai kategori.
- **Karya Unggulan (Selected Works - Bento Grid)**:
  - **Tab Filter Kategori**: *Semua*, *Web App*, *Mobile & AI*, *IoT & Tools*.
  - **Flagship Project**: *Dylan Story Super App* (dengan mockup interaktif visual feed & sinkronisasi live).
  - Proyek lainnya: *E-Commerce Analytics Hub*, *Face Recognition Attendance System* (dengan animasi laser scanner), *IoT Smart Sensor Telemetry* (dengan simulasi pulsa live), *Gadget Store*, dan *CloudNexus Server Monitor*.
  - **Project Detail Modal**: Klik *"Detail Proyek"* pada setiap kartu untuk membuka popup lengkap berisi deskripsi mendalam, fitur utama, teknologi yang digunakan, serta link demo & repository.
- **Layanan Profesional**: 4 paket penawaran (*Web App*, *UI/UX Design*, *Mobile Apps*, *AI & IoT System*).
- **Timeline Karier & Perjalanan**: Jejak langkah dari tahun 2022 hingga sekarang.
- **Testimoni Klien**: Ulasan dengan rating bintang 5 dan profil pemberi rekomendasi.
- **Kontak Terintegrasi**:
  - Salin email instan (*1-click copy*) dengan notifikasi toast.
  - Tautan langsung ke chat WhatsApp.
  - **Formulir Kontak Cerdas**: Dilengkapi validasi field, efek tombol loading, penyimpanan lokal (*localStorage log*), dan popup notifikasi toast berhasil.
  - Tombol alternatif *"Kirim Langsung via WhatsApp"* yang otomatis merangkai nama, subjek, dan pesan ke format chat WhatsApp!
- **Modal Resume / CV**: Tampilan pop-up CV profesional yang siap dicetak langsung atau disimpan ke PDF dengan format rapi (*clean print stylesheet*).
- **Back to Top Button**: Tombol melayang di pojok kanan bawah yang muncul setelah scroll untuk kembali ke puncak halaman dengan halus.

---

## 📁 Struktur File Proyek

```
Web_Profil_Pribadi/
│
├── index.html        # Struktur semantik HTML5, meta SEO, & Open Graph
├── style.css         # Desain sistem CSS3, tema Glassmorphism, & responsivitas
├── script.js         # Logika interaktif JS, animasi, modal, form, & custom cursor
└── README.md         # Dokumentasi panduan penggunaan & deployment
```

---

## 💻 Cara Menjalankan & Menguji

### Cara 1: Langsung di Browser
Klik dua kali file `index.html` pada File Explorer. Website akan langsung terbuka di browser (Chrome, Edge, Firefox, Brave, Safari) dan semua fitur langsung aktif normal.

### Cara 2: Menggunakan VS Code Live Server
1. Buka folder ini di **VS Code**.
2. Pasang ekstensi **Live Server** (jika belum ada).
3. Klik kanan pada `index.html` dan pilih **"Open with Live Server"**.
4. Website akan terbuka di `http://127.0.0.1:5500/index.html`.

### Cara 3: Menggunakan Python Web Server (Terminal)
Buka terminal/PowerShell di folder ini dan jalankan:
```bash
python -m http.server 8000
```
Buka browser di `http://localhost:8000`.

---

## ⚙️ Panduan Penyesuaian Data Dylan

1. **Mengubah Kontak WhatsApp**:
   - Buka `index.html` dan `script.js`.
   - Cari nomor `6281234567890` lalu ubah menjadi nomor WhatsApp aktif Anda (awali dengan kode negara `62` tanpa tanda `+`).

2. **Mengubah Alamat Email**:
   - Cari `dylanedlyano@gmail.com` di `index.html` dan `script.js`, lalu sesuaikan dengan email Anda.

3. **Mengubah Foto Profil**:
   - Pada `index.html` baris kartu profil (`.profile-img`), ganti URL `src` gambar dengan path foto pribadi Anda (misal simpan foto di folder `assets/foto-dylan.jpg`).

4. **Menambah / Mengedit Proyek**:
   - Pada `index.html`, edit elemen `.bento-card` di dalam `#projectGrid`.
   - Pada `script.js`, tambahkan data detail proyek di dalam objek `projectDatabase`.

---

## 🌐 Cara Deploy Online Gratis

### Opsi A: Vercel (Rekomendasi - Paling Cepat & Gratis)
1. Buka [vercel.com](https://vercel.com) dan masuk dengan akun GitHub Anda.
2. Unggah repo ini atau *drag & drop* folder proyek ke dashboard Vercel.
3. Klik **Deploy**. Website langsung online dalam 10 detik dengan HTTPS otomatis!

### Opsi B: GitHub Pages
1. Buat repository baru di GitHub bernama `profil-dylan` atau `username.github.io`.
2. Push file `index.html`, `style.css`, `script.js` ke branch `main`.
3. Buka tab **Settings** > **Pages** di repository GitHub Anda, pilih branch `main`, lalu klik **Save**.
4. Website Anda siap diakses di `https://username.github.io/profil-dylan`.

### Opsi C: Netlify
1. Buka [netlify.com](https://netlify.com).
2. Tarik (*drag & drop*) folder ini ke area Netlify Drop.
3. Website langsung aktif dengan domain kustom gratis.
