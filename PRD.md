# PRD — ARKTIS Home Service
## Website Pemesanan Jasa Servis AC Berbasis Landing Page Konversi

| Field | Keterangan |
|---|---|
| **Nama Produk** | ARKTIS Home Service — Website Pemesanan Servis AC |
| **Versi Dokumen** | 1.0 |
| **Tanggal** | 24 September 2026 |
| **Status** | Draft untuk direview pemilik bisnis |
| **Pemilik Produk** | Pemilik bisnis ARKTIS Home Service |
| **Disusun berdasarkan** | Audit menyeluruh atas kode `nanangsanjaya0896/Jasa-Pembuatan-Website-Ac-1` |
| **Basis kode** | React 19 + Vite 7 + TypeScript 5.9 + Tailwind CSS 4 + Framer Motion |
| **Tipe rilis** | Single-page marketing & conversion site (landing page) |

---

## 1. Ringkasan Eksekutif

ARKTIS Home Service adalah bisnis jasa servis, pembersihan, perbaikan, dan pemasangan AC yang melayani pelanggan rumah tangga secara *home service* (teknisi datang ke rumah). Saat ini bisnis belum memiliki kanal pemesanan digital terstruktur — calon pelanggan harus menghubungi lewat pesan pribadi, yang menyebabkan kebocoran prospek (*lead leakage*), jadwal tidak terkendali, dan sulitnya mengukur efektivitas promosi.

Produk ini adalah sebuah **website landing page satu halaman** berbahasa Indonesia yang berfungsi sebagai:

1. **Etalase kepercayaan** — membangun kredibilitas bisnis jasa yang rentan terhadap keraguan (teknisi masuk ke rumah orang).
2. **Mesin konversi** — mengubah pengunjung menjadi pemesanan melalui 2 jalur utama: Form Booking dan WhatsApp.
3. **Alat kualifikasi** — menyaring calon pelanggan berdasarkan jenis layanan, jumlah unit, dan area jangkauan.
4. **Aset pemasaran** — menjadi *landing destination* untuk iklan Meta/Google Ads, Instagram bio, dan Google Business Profile.

**Kondisi saat ini:** struktur visual, konten, dan alur konversi sudah terbangun dan berjalan secara teknis (build bersih, 0 error TypeScript). Namun website **belum siap produksi** karena form booking belum benar-benar mengirim data, seluruh data kontak masih placeholder, dan terdapat sejumlah klaim serta tautan yang belum valid. Detail lengkap ada di **Bagian 12 (Gap Analysis)** dan **Bagian 14 (Roadmap)**.

**Estimasi kesiapan produksi:** 1 sprint (± 2 minggu) untuk mencapai *Production Ready v1.0*, dengan syarat data kontak & aset dari pemilik bisnis tersedia lebih dulu.

---

## 2. Latar Belakang & Pernyataan Masalah

### 2.1 Konteks Bisnis

Industri jasa servis AC di Indonesia sangat padat dan bersifat **low-trust**: pelanggan tidak bisa menilai kualitas sebelum membeli, harga tidak transparan, dan teknisi masuk ke ruang privat rumah. Riset perilaku konsumen jasa menunjukkan tiga hambatan utama keputusan pembelian pada kategori ini:

| Hambatan | Pertanyaan di kepala pelanggan |
|---|---|
| Kepercayaan | "Teknisinya orang beneran bukan? Aman nggak masuk ke rumah saya?" |
| Harga | "Berapa biayanya? Nanti dibohongin nggak sih di tengah jalan?" |
| Hasil | "Hasilnya beneran bersih atau cuma dielu-elukan saja?" |

### 2.2 Masalah Saat Ini

| ID | Masalah | Dampak Bisnis |
|---|---|---|
| M-01 | Tidak ada kanal pemesanan digital; semua lewat chat manual | Prospek hilang di luar jam kerja; waktu admin habis menjawab pertanyaan berulang |
| M-02 | Calon pelanggan tidak tahu harga sebelum menghubungi | Banyak chat masuk yang tidak jadi transaksi; biaya akuisisi tinggi |
| M-03 | Tidak ada dokumentasi hasil kerja (before/after) yang tersaji meyakinkan | Sulit membedakan diri dari kompetitor lokal |
| M-04 | Tidak terukur: tidak diketahui dari mana pelanggan datang | Sulit mengalokasikan anggaran iklan |
| M-05 | Jadwal & volume kunjungan tidak terprediksi | Teknisi idle atau kelebihan beban di hari yang sama |

### 2.3 Mengapa Landing Page (dan bukan dulu aplikasi)

Landing page adalah bentuk produk dengan *time-to-value* tercepat, biaya terendah, dan dampak langsung pada konversi. Aplikasi seluler tidak dibutuhkan karena keputusan pembelian pelanggan bersifat *low-frequency* (2–4 kali per tahun) dan lebih nyaman diselesaikan lewat browser + WhatsApp.

---

## 3. Tujuan Produk & Metrik Keberhasilan

### 3.1 Tujuan (Goals)

| ID | Tujuan | Indikator |
|---|---|---|
| G-01 | Meningkatkan jumlah permintaan servis yang masuk secara digital | Jumlah booking tervalidasi per bulan |
| G-02 | Menurunkan friksi pemesanan | Tingkat penyelesaian form booking |
| G-03 | Membangun kepercayaan calon pelanggan | Tingkat interaksi pada bagian bukti sosial & galeri |
| G-04 | Menjadi basis pengukuran pemasaran | Setiap prospek dapat dilacak sumbernya |
| G-05 | Mengurangi beban admin | Persentase prospek yang datang dengan data lengkap |

### 3.2 Metrik Utama (North Star & KPI)

**North Star Metric:** Jumlah booking tervalidasi (dikonfirmasi oleh admin) per bulan.

| ID | Metrik | Baseline | Target 90 hari | Cara Ukur |
|---|---|---|---|---|
| K-01 | Tingkat konversi pengunjung → prospek (form + klik WhatsApp) | Belum terukur | ≥ 5% | Analitik event |
| K-02 | Tingkat penyelesaian form booking | Belum terukur | ≥ 70% dari yang mulai mengisi | Event form_start vs form_submit |
| K-03 | Booking tervalidasi / bulan | 0 (manual) | ≥ 40 | Catatan admin |
| K-04 | Waktu muat halaman (LCP) di 4G | Perlu diukur | ≤ 2,5 detik | Lighthouse / Core Web Vitals |
| K-05 | Skor aksesibilitas | Perlu diukur | ≥ 90 | Lighthouse |
| K-06 | Rasio pelanggan baru dari website | 0% | ≥ 30% | Analitik + catatan admin |
| K-07 | Tingkat *bounce* halaman | Belum terukur | ≤ 55% | Analitik |

### 3.3 Non-Goals (Yang Sengaja TIDAK Dikerjakan)

- ❌ Aplikasi mobile native (iOS/Android)
- ❌ Akun pelanggan & login
- ❌ Pembayaran online / payment gateway (transaksi tetap tunai/transfer setelah servis)
- ❌ Multi-bahasa (Indonesia saja untuk v1)
- ❌ E-commerce produk fisik (AC, spare part)
- ❌ Sistem absensi/payroll teknisi

---

## 4. Target Pengguna & Persona

### Persona 1 — "Ratna" · Ibu Rumah Tangga (Prioritas Utama, ± 60% trafik)

| Atribut | Detail |
|---|---|
| Usia | 30–50 tahun |
| Perangkat | Smartphone Android, sering buka dari Instagram/Facebook Ads |
| Konteks | AC kamar sudah lama tidak dibersihkan; anak sering bersin; ingin cepat beres |
| Kebutuhan | Harga jelas, teknisi aman & sopan, tidak repot, hasil bisa dilihat |
| Kekhawatiran | Harga berubah di tengah jalan; teknisi tidak profesional; rumah kotor setelah servis |
| Pemicu konversi | Testimoni dari orang seperti dirinya + harga transparan + WhatsApp yang cepat dibalas |

### Persona 2 — "Dani" · Pekerja Kantor / Kepala Keluarga (± 25%)

| Atribut | Detail |
|---|---|
| Usia | 28–45 tahun |
| Perangkat | Desktop saat jam kerja, mobile saat malam |
| Konteks | Ingin jadwal di akhir pekan; membandingkan 2–3 jasa sebelum memutuskan |
| Kebutuhan | Bisa memilih jadwal, reschedule tanpa drama, invoice/laporan tertulis |
| Kekhawatiran | Waktu tunggu tidak sesuai; tidak ada bukti pengerjaan |
| Pemicu konversi | Form booking cepat + garansi 30 hari + laporan digital |

### Persona 3 — "Andi & Sari" · Pemilik Beberapa Unit (± 15%)

| Atribut | Detail |
|---|---|
| Usia | 35–55 tahun |
| Konteks | 3–5 unit AC di rumah; ingin solusi tahunan, tidak mau mikir berulang |
| Kebutuhan | Paket perawatan berkala, penjadwalan otomatis, harga khusus volume |
| Kekhawatiran | Kualitas tidak konsisten antar kunjungan |
| Pemicu konversi | Paket tahunan + diskon loyalitas + riwayat servis terdokumentasi |

### Persyaratan Persona → Fitur

| Kebutuhan Persona | Fitur yang Melayani | Status |
|---|---|---|
| Harga transparan | Bagian Paket Layanan | ✅ Ada |
| Bukti kualitas | Before/After Slider + Galeri Proyek | ✅ Ada |
| Kepercayaan teknisi | Jaminan & Sertifikasi + Fitur | ✅ Ada |
| Chat cepat | Tombol WhatsApp (mengambang + 3 titik lain) | ⚠️ Nomor masih placeholder |
| Pesan tanpa chat | Form Booking Cepat | ❌ Belum berfungsi |
| Pelanggan berulang | Paket Perawatan Tahunan | ✅ Ada |

---

## 5. Ruang Lingkup

### 5.1 In-Scope v1.0 — Sudah Terbangun (Perlu Divalidasi)

Satu halaman tunggal dengan 18 bagian berurutan sebagai berikut:

| No | Bagian | Komponen | Tujuan dalam Funnel | Status Teknis |
|---|---|---|---|---|
| 1 | Bilah Navigasi | `Navbar.tsx` | Navigasi + CTA persisten | ✅ Berfungsi |
| 2 | Hero | `Hero.tsx` | Menarik perhatian, menjanjikan hasil | ✅ Berfungsi |
| 3 | Sub-headline | `SubHeadline.tsx` | Memperkuat masalah (udara kotor) | ✅ Berfungsi |
| 4 | CTA Pertama | `CtaOne.tsx` | Menangkap minat awal | ✅ Berfungsi |
| 5 | Bukti Sosial (angka) | `SocialProof.tsx` | Validasi massal | ⚠️ Angka perlu diverifikasi |
| 6 | Identifikasi Masalah | `Problem.tsx` | Agitasi masalah + slider before/after | ✅ Berfungsi |
| 7 | Paket Layanan | `Offer.tsx` | Menyajikan 6 paket + harga | ⚠️ Harga perlu konfirmasi |
| 8 | Standar Kerja (4 fitur) | `Features.tsx` | Diferensiasi kualitas | ⚠️ Klaim sertifikat perlu bukti |
| 9 | Manfaat Nyata | `Benefits.tsx` | Menerjemahkan fitur → manfaat | ✅ Berfungsi |
| 10 | Testimoni | `Testimonials.tsx` | Bukti sosial naratif | ❌ Perlu testimoni asli |
| 11 | Galeri Proyek | `Gallery.tsx` + lightbox | Bukti visual hasil kerja | ⚠️ 3 foto dari sumber eksternal |
| 12 | Bonus | `Bonus.tsx` | Mendorong keputusan | ✅ Berfungsi |
| 13 | Kata Pendiri | `FounderNote.tsx` | Membangun kepercayaan personal | ⚠️ Identitas perlu konfirmasi |
| 14 | CTA Final + Form | `FinalCta.tsx` | **Konversi utama** | ❌ Belum mengirim data |
| 15 | Jaminan & Kepercayaan | `Trust.tsx` | Menghilangkan keraguan terakhir | ⚠️ Klaim perlu bukti |
| 16 | FAQ | `Faq.tsx` | Menangani keberatan | ✅ Berfungsi |
| 17 | Footer | `Footer.tsx` | Informasi kontak & legal | ⚠️ Banyak tautan mati |
| 18 | WhatsApp Mengambang | `App.tsx` (`WaFloat`) | Konversi alternatif selalu tersedia | ⚠️ Nomor placeholder |

### 5.2 In-Scope v1.0 — Yang Masih Harus Dibangun (Blocker Produksi)

| Prioritas | Item | Alasan |
|---|---|---|
| **P0** | Form booking benar-benar mengirim data | Tanpa ini, website tidak menghasilkan apa pun |
| **P0** | Integrasi WhatsApp dengan pesan terisi otomatis | Mengurangi friksi & menstandarkan data masuk |
| **P0** | Data kontak asli (WA, telepon, email, jam operasional) | Nomor placeholder = prospek hilang total |
| **P0** | Pemasangan analitik + pelacakan konversi | Tanpa ini, tidak ada pembelajaran |
| **P1** | Metadata SEO: favicon, Open Graph, Twitter Card, canonical | Berbagi tautan di WhatsApp tampil tanpa gambar |
| **P1** | Halaman Kebijakan Privasi & Syarat Layanan | Wajib: website mengumpulkan nama & nomor telepon |
| **P1** | Penanganan tautan mati + tautan sosial asli | Merusak kredibilitas |
| **P2** | Data terstruktur LocalBusiness + sitemap + robots.txt | SEO lokal |
| **P2** | Optimasi gambar (WebP/AVIF, ukuran responsif) | Performa |
| **P2** | Dukungan keyboard pada lightbox & slider | Aksesibilitas |

### 5.3 Out-of-Scope v1.0

- Dashboard admin / CMS
- Penjadwalan otomatis berdasarkan ketersediaan slot teknisi
- Pembayaran online
- Notifikasi WhatsApp otomatis (template pesan)
- Halaman blog (walaupun sudah tertaut di footer)
- Multi-cabang / multi-bahasa

---

## 6. Perjalanan Pengguna & Corong Konversi

### 6.1 Titik Masuk (Traffic Sources)

| Sumber | Ekspektasi Perilaku |
|---|---|
| Instagram/Facebook Ads | Mobile, langsung ke Hero, perhatian singkat ± 15 detik |
| Google Search ("servis ac [area]") | Niat tinggi, sering langsung mencari harga/booking |
| Google Business Profile | Mobile, ingin tahu area & jam operasional |
| WhatsApp status / broadcast | Sudah percaya, langsung cari tombol chat |
| Rekomendasi mulut ke mulut | Butuh validasi kredibilitas cepat |

### 6.2 Alur Konversi Utama (Jalur A — Form)

```
Hero (janji + tombol "Pesan Servis Hari Ini")
   ↓  klik
Form Booking Cepat (Nama → WhatsApp → Layanan → Tanggal)
   ↓  submit
[sistem menyimpan data + memberi tahu admin]      ← ❌ BELUM ADA
   ↓
Layar konfirmasi ("Tim menghubungi dalam 15 menit")
   ↓
Admin menghubungi via WhatsApp → jadwal dikonfirmasi
```

### 6.3 Alur Konversi Alternatif (Jalur B — WhatsApp)

```
Tombol WhatsApp (di 4 titik: mengambang, CTA-1, FAQ, CTA final)
   ↓
WhatsApp terbuka dengan pesan terisi otomatis    ← ❌ Belum ada template pesan
   ↓
Admin balas → kualifikasi → jadwal
```

### 6.4 Poin Keberatan & Penanganannya

| Tahap | Keberatan Muncul | Bagian yang Menangani |
|---|---|---|
| Sadar masalah | "AC saya memang kotor ya?" | Identifikasi Masalah + Slider |
| Mencari solusi | "Berapa biayanya?" | Paket Layanan |
| Membandingkan | "Kenapa harus ARKTIS?" | Standar Kerja + Manfaat |
| Ragu | "Aman nggak?" | Jaminan & Kepercayaan + Testimoni |
| Siap | "Gimana caranya?" | Form Booking + WhatsApp |
| Tertunda | "Yang gagal gimana?" | Jaminan 30 hari + FAQ |

**Rekomendasi urutan:** struktur saat ini sudah selaras dengan model psikologis di atas. Tidak perlu restrukturisasi besar.

---

## 7. Spesifikasi Fungsional

### 7.1 FR-01 · Navigasi & Orientasi

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-01.1 | Navigasi tetap di atas yang berubah tampilan saat digulir | P1 | ✅ Ada |
| FR-01.2 | Menu seluler dalam bentuk laci | P1 | ✅ Ada |
| FR-01.3 | Tautan jangkar menuju bagian: Layanan, Cara Kerja, Testimoni, Hubungi Kami | P1 | ✅ Semua target ada |
| FR-01.4 | Tombol "Booking" selalu terlihat di navigasi desktop | P0 | ✅ Ada |
| FR-01.5 | Menu seluler harus menutup otomatis setelah tautan diklik | P2 | ✅ Ada |
| FR-01.6 | Menu seluler harus mengunci gulir latar & mengembalikan fokus | P2 | ❌ Belum |
| FR-01.7 | Atribut `aria-expanded` pada tombol menu | P2 | ❌ Belum |

### 7.2 FR-02 · Hero

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-02.1 | Judul utama menarik dengan janji hasil (*outcome*) | P0 | ✅ "Rumahmu Layak Mendapatkan Udara yang Lebih Bersih" |
| FR-02.2 | Dua CTA: primer (booking) + sekunder (lihat paket) | P0 | ✅ Ada |
| FR-02.3 | Lencana jam operasional/status | P3 | ✅ "Servis AC Profesional…" |
| FR-02.4 | Gambar latar harus cukup tajam di desktop besar | P1 | ⚠️ Aset hanya 1376×768 → berisiko pecah di layar ≥ 1920px |
| FR-02.5 | Elemen yang mengindikasikan kecepatan respons (mis. "dibalas < 5 menit") | P2 | ❌ Belum ada (disarankan) |

### 7.3 FR-03 · Kredibilitas (Statistik & Sertifikasi)

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-03.1 | Angka statistik beranimasi saat masuk viewport | P2 | ✅ Ada |
| FR-03.2 | **Semua angka harus akurat & dapat dibuktikan** | **P0** | ❌ Angka saat ini berstatus contoh — wajib divalidasi |
| FR-03.3 | Sertifikasi yang ditampilkan harus milik entitas bisnis yang sah | **P0** | ❌ Belum terverifikasi |
| FR-03.4 | Nama & jabatan pendiri harus benar | **P0** | ❌ Belum dikonfirmasi |

> **Catatan kepatuhan:** Menampilkan angka pelanggan, rating, penghargaan, atau keanggotaan asosiasi yang tidak dapat dibuktikan berisiko melanggar UU No. 8/1999 tentang Perlindungan Konsumen (larangan iklan menyesatkan) dan merusak kepercayaan jika ditemukan pelanggan. **Wajib diganti dengan data riil atau dihapus.**

### 7.4 FR-04 · Paket Layanan

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-04.1 | Minimal 6 jenis layanan dengan cakupan pekerjaan tertulis | P0 | ✅ Ada |
| FR-04.2 | Harga ditampilkan sebagai "Mulai dari" dengan satuan yang jelas | P0 | ✅ Ada |
| FR-04.3 | Estimasi durasi per layanan | P1 | ✅ Ada |
| FR-04.4 | Penanda paket unggulan | P2 | ✅ Ada |
| FR-04.5 | Catatan biaya tambahan (mis. spare part) | **P0** | ⚠️ Hanya pada 1 layanan |
| FR-04.6 | Tombol pesan per layanan yang membawa konteks layanan ke form | P1 | ❌ Belum (tombol tidak mengisi pilihan layanan otomatis) |
| FR-04.7 | Kebijakan biaya kunjungan / pembatalan | P1 | ❌ Belum ada |

### 7.5 FR-05 · Slider Perbandingan Before/After

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-05.1 | Bisa digeser dengan sentuhan & tetikus | P1 | ✅ Ada |
| FR-05.2 | Mendukung papan tik (panah kiri/kanan) | P2 | ❌ Belum |
| FR-05.3 | Memiliki peran ARIA `slider` beserta nilainya | P2 | ❌ Belum |
| FR-05.4 | Foto before/after harus dari pekerjaan asli ARKTIS | **P0** | ❌ Belum terverifikasi |

### 7.6 FR-06 · Galeri Proyek

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-06.1 | Grid 8 proyek dengan label jenis pekerjaan & lokasi | P1 | ✅ Ada |
| FR-06.2 | Lightbox dengan navigasi sebelumnya/berikutnya | P2 | ✅ Ada |
| FR-06.3 | Menutup lightbox dengan kunci `Esc` | P2 | ❌ Belum |
| FR-06.4 | Navigasi lightbox dengan tombol panah papan tik | P2 | ❌ Belum |
| FR-06.5 | Perangkap fokus di dalam lightbox | P2 | ❌ Belum |
| FR-06.6 | Semua gambar disajikan dari domain sendiri | P1 | ❌ 3 gambar diambil langsung dari Pexels |
| FR-06.7 | Judul & lokasi proyek harus faktual | **P0** | ❌ Belum terverifikasi |

### 7.7 FR-07 · Bonus

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-07.1 | Menampilkan 4 bonus dengan estimasi nilai | P1 | ✅ Ada |
| FR-07.2 | Nilai bonus harus konsisten dengan penjumlahan itemnya | **P0** | ⚠️ Perlu cek: Rp 50.000 + Rp 30.000 + 2 bonus tanpa nilai nominal = klaim "Rp 130.000+" perlu penjelasan |
| FR-07.3 | Syarat & ketentuan bonus ditulis eksplisit | P1 | ⚠️ Belum ada detail masa berlaku |

### 7.8 FR-08 · Form Booking — **KRITIS**

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-08.1 | Kolom: Nama Lengkap | P0 | ✅ Ada (belum tersimpan) |
| FR-08.2 | Kolom: Nomor WhatsApp (dengan awalan +62) | P0 | ✅ Ada (belum tersimpan) |
| FR-08.3 | Kolom: Pilihan Layanan (6 opsi) | P0 | ✅ Ada (belum tersimpan) |
| FR-08.4 | Kolom: Tanggal yang Diinginkan | P0 | ✅ Ada (belum tersimpan) |
| FR-08.5 | **Data benar-benar terkirim ke sistem penerima** | **P0** | ❌ **Tidak ada** — hanya simulasi jeda waktu |
| FR-08.6 | Simpan data ke basis data atau kirim notifikasi ke admin | **P0** | ❌ Belum |
| FR-08.7 | Kolom tambahan: alamat/kecamatan (untuk cek area) | P0 | ❌ Belum ada |
| FR-08.8 | Kolom tambahan: jumlah unit AC | P1 | ❌ Belum ada |
| FR-08.9 | Kolom catatan bebas (kondisi AC, keluhan) | P2 | ❌ Belum ada |
| FR-08.10 | Validasi format nomor telepon Indonesia | P1 | ❌ Belum |
| FR-08.11 | Pencegahan pengiriman ganda (anti-spam & anti-klik-ganda) | P1 | ❌ Belum |
| FR-08.12 | Nomor referensi unik per pemesanan | P1 | ❌ **Nomor saat ini statis** — selalu menampilkan angka yang sama setiap kali |
| FR-08.13 | Persetujuan pemrosesan data pribadi (centang) | **P0** | ❌ Belum ada |
| FR-08.14 | Pesan kesalahan yang jelas per kolom bila tidak valid | P1 | ❌ Belum |
| FR-08.15 | Fallback ke WhatsApp bila pengiriman gagal | P1 | ❌ Belum |
| FR-08.16 | Layar sukses menampilkan langkah selanjutnya yang spesifik | P1 | ✅ Ada (teks) |

### 7.9 FR-09 · Integrasi WhatsApp

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-09.1 | Nomor WhatsApp asli & aktif | **P0** | ❌ Masih placeholder (`6281200000001`) di 2 lokasi |
| FR-09.2 | Pesan terisi otomatis saat WhatsApp dibuka | P1 | ❌ Belum |
| FR-09.3 | Pesan otomatis menyertakan konteks asal klik (mis. "Saya lihat paket Deep Cleaning") | P2 | ❌ Belum |
| FR-09.4 | Nomor hanya dikelola dari satu sumber (bukan disalin di beberapa berkas) | P1 | ❌ Masih tersebar di 3 tempat |
| FR-09.5 | Nomor cadangan/alternatif bila nomor utama tidak aktif | P2 | ❌ Belum |
| FR-09.6 | Jam operasional disebut agar pelanggan tahu kapan dibalas | P1 | ✅ Ada di footer |

### 7.10 FR-10 · Footer & Legal

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-10.1 | Alamat/area layanan | P1 | ⚠️ Klaim area perlu dikonfirmasi |
| FR-10.2 | Nomor telepon & email aktif | **P0** | ❌ Placeholder |
| FR-10.3 | Jam operasional | P1 | ✅ Ada |
| FR-10.4 | Tautan media sosial ke akun asli | P1 | ❌ Semua mengarah ke halaman itu sendiri |
| FR-10.5 | Tautan Informasi (Cara Kerja, Area, Harga, Blog, Karir, Privasi) | P1 | ❌ Semua mengarah ke halaman itu sendiri |
| FR-10.6 | Halaman Kebijakan Privasi | **P0** | ❌ Belum ada (wajib — ada pengumpulan data) |
| FR-10.7 | Halaman Syarat Layanan | P1 | ❌ Belum ada |
| FR-10.8 | Kode QR yang benar-benar dapat dipindai & mengarah ke WhatsApp | P1 | ❌ QR saat ini hanya gambar dekoratif, bukan QR valid — berlabel "QR resmi" sehingga berpotensi menyesatkan |
| FR-10.9 | Tahun hak cipta diperbarui otomatis | P2 | ⚠️ Tertulis 2025 secara statis |
| FR-10.10 | Tautan "Sitemap" | P3 | ❌ Belum ada berkasnya |

### 7.11 FR-11 · FAQ

| ID | Kebutuhan | Prioritas | Status |
|---|---|---|---|
| FR-11.1 | 8 pertanyaan relevan dengan akordeon | P1 | ✅ Ada |
| FR-11.2 | Satu item terbuka secara bawaan | P3 | ✅ Ada |
| FR-11.3 | Data terstruktur FAQ untuk mesin pencari | P2 | ❌ Belum |
| FR-11.4 | Jawaban area layanan harus akurat | **P0** | ⚠️ Perlu dikonfirmasi dengan jangkauan nyata |

---

## 8. Kebutuhan Non-Fungsional

### 8.1 Performa

| ID | Kebutuhan | Target | Status |
|---|---|---|---|
| NFR-01 | Largest Contentful Paint pada 4G | ≤ 2,5 detik | ❓ Belum diukur |
| NFR-02 | Total Blocking Time | ≤ 200 ms | ❓ Belum diukur |
| NFR-03 | Cumulative Layout Shift | ≤ 0,1 | ❓ Belum diukur |
| NFR-04 | Ukuran bundel awal (JS+CSS, gzip) | ≤ 150 kB | ✅ 144 kB |
| NFR-05 | Total bobot halaman | ≤ 2 MB | ⚠️ ±1,7 MB (didominasi gambar) |
| NFR-06 | Format gambar modern (WebP/AVIF) dengan `srcset` | Wajib | ❌ Masih JPG tunggal |
| NFR-07 | Pemuatan malas untuk gambar di bawah lipatan | Wajib | ⚠️ Hanya di galeri; 7 komponen lain belum |
| NFR-08 | Gambar hero dimuat dengan prioritas tinggi | P1 | ❌ Belum ada `fetchpriority` |
| NFR-09 | Sumber daya pihak ketiga dikurangi | P1 | ⚠️ Font Google + 3 gambar Pexels |

### 8.2 Aksesibilitas (WCAG 2.2 Level AA)

| ID | Kebutuhan | Status |
|---|---|---|
| NFR-10 | Kontras teks memenuhi 4,5:1 | ⚠️ Perlu audit (banyak teks putih transparan di atas gelap) |
| NFR-11 | Semua gambar memiliki teks alternatif bermakna | ✅ Sebagian besar ada |
| NFR-12 | Seluruh fungsi dapat dioperasikan keyboard | ❌ Lightbox & slider belum |
| NFR-13 | Fokus terlihat jelas pada semua elemen interaktif | ⚠️ Beberapa tombol menghapus garis fokus tanpa pengganti |
| NFR-14 | Menghormati preferensi pengurangan gerak | ❌ Belum ada |
| NFR-15 | Struktur judul berjenjang benar (satu H1 per halaman) | ✅ Terpenuhi |
| NFR-16 | Teks pada QR/label kecil tetap terbaca | ⚠️ Beberapa label 9–10px berisiko |

### 8.3 SEO

| ID | Kebutuhan | Status |
|---|---|---|
| NFR-17 | Judul & deskripsi halaman relevan | ✅ Ada & baik |
| NFR-18 | Favicon | ❌ Belum ada |
| NFR-19 | Open Graph + Twitter Card | ❌ Belum ada — **tautan yang dibagikan di WhatsApp akan tampil polos tanpa gambar** |
| NFR-20 | URL kanonik | ❌ Belum ada |
| NFR-21 | Data terstruktur `LocalBusiness` / `HVACBusiness` | ❌ Belum ada |
| NFR-22 | Data terstruktur `FAQPage` | ❌ Belum ada |
| NFR-23 | `robots.txt` & `sitemap.xml` | ❌ Belum ada |
| NFR-24 | Bahasa halaman `lang="id"` | ✅ Ada |
| NFR-25 | Judul bagian menggunakan kata kunci lokal (kota/area) | ❌ Belum — peluang SEO lokal terbesar belum dimanfaatkan |

### 8.4 Keamanan & Privasi

| ID | Kebutuhan | Status |
|---|---|---|
| NFR-26 | Pengumpulan data pribadi (nama, nomor telepon) disertai dasar hukum & persetujuan | ❌ Belum |
| NFR-27 | Kepatuhan UU No. 27/2022 tentang Pelindungan Data Pribadi | ❌ Belum |
| NFR-28 | Transportasi terenkripsi (HTTPS) | ⚠️ Tergantung hosting |
| NFR-29 | Perlindungan dari spam pada endpoint form | ❌ Belum |
| NFR-30 | Kredensial integrasi tidak ditulis di kode klien | ➖ Belum relevan (belum ada integrasi) |

### 8.5 Kompatibilitas & Kualitas

| ID | Kebutuhan | Status |
|---|---|---|
| NFR-31 | Chrome, Safari, Firefox, Edge versi 2 terakhir | ⚠️ Perlu uji manual |
| NFR-32 | iOS Safari & Android Chrome | ⚠️ Perlu uji manual |
| NFR-33 | Lebar 320px hingga 2560px tanpa gulir horizontal | ⚠️ Perlu uji manual |
| NFR-34 | Kompilasi TypeScript tanpa galat | ✅ Terpenuhi |
| NFR-35 | Proses build produksi berhasil | ✅ Terpenuhi |
| NFR-36 | Halaman 404 khusus | ❌ Belum ada |

---

## 9. Arsitektur Teknis

### 9.1 Tumpukan Teknologi Saat Ini

| Lapisan | Teknologi | Catatan |
|---|---|---|
| Kerangka | React 19.2 | Komponen fungsional + hook |
| Build | Vite 7.3 | Keluaran berkas tunggal (`vite-plugin-singlefile`) |
| Bahasa | TypeScript 5.9 | Mode ketat, tanpa galat |
| Gaya | Tailwind CSS 4.1 | Konfigurasi tema di `src/index.css` (`@theme`) |
| Animasi | Framer Motion 13 | Reveal, slider, lightbox |
| Ikon | Lucide React | Konsisten |
| Font | Plus Jakarta Sans · Instrument Serif · Caveat | Google Fonts (sumber eksternal) |

**Sistem desain warna (sudah terdefinisi):** `arctic` (biru malam), `navy`, `glacier`, `sky`, `ice`, `clean`, `mint` (aksen positif), `flame` (aksen CTA/konversi).

> **Catatan arsitektur penting:** keluaran build saat ini adalah **satu berkas HTML** dengan JS/CSS disisipkan. Ini bagus untuk pemuatan cepat, tetapi memiliki konsekuensi: seluruh kode termuat sekaligus, sulit di-cache bertahap, dan gambar tetap menjadi berkas terpisah. Untuk v1.0 hal ini dapat diterima. Pertimbangkan mematikan mode berkas tunggal bila halaman berkembang (blog, banyak halaman).

### 9.2 Arsitektur Target v1.0

```
Pengunjung (Ponsel/Desktop)
        │
        ├── Form Booking ──► Endpoint penerima (serverless function)
        │                          ├──► Basis data prospek (mis. Google Sheets / Airtable)
        │                          └──► Notifikasi admin (WhatsApp/email)
        │
        └── Klik WhatsApp ──► wa.me/?text=...  ──► Admin (HP)
                               + pencatatan event
        │
   Analitik (Google Analytics 4 + Meta Pixel) ──► Laporan konversi
```

### 9.3 Opsi Penerima Data Form (Direkomendasikan: Opsi A)

| Opsi | Kompleksitas | Biaya | Kelebihan | Kekurangan |
|---|---|---|---|---|
| **A. Layanan formulir (mis. Formspree/Web3Forms)** | Rendah | Gratis–murah | Selesai dalam hitungan jam, notifikasi email bawaan | Bergantung pihak ketiga |
| **B. Google Sheets + Apps Script** | Sedang | Gratis | Data langsung berupa tabel, mudah diolah admin | Perlu sedikit konfigurasi |
| **C. Serverless function sendiri** | Tinggi | Murah | Kontrol penuh, bisa integrasi WhatsApp Business API | Perlu pemeliharaan |
| **D. Kirim langsung ke WhatsApp** | Sangat rendah | Gratis | Tanpa backend; prospek langsung masuk chat | Tidak ada basis data; tidak cocok untuk analisis |

**Rekomendasi:** mulai dengan **Opsi A atau D** untuk rilis cepat, migrasi ke **Opsi C** saat volume ≥ 150 pemesanan/bulan.

### 9.4 Struktur Repositori

```
/
├── index.html              # Templat HTML + metadata
├── package.json
├── tsconfig.json
├── vite.config.ts          # Konfigurasi build & server
├── PRD.md                  # Dokumen ini
├── public/
│   └── images/             # 10 berkas gambar (1,6 MB)
└── src/
    ├── main.tsx            # Titik masuk React
    ├── App.tsx             # Komposisi 18 bagian + tombol WA mengambang
    ├── index.css           # Token desain, animasi, utilitas
    ├── utils/cn.ts         # Penggabung kelas
    └── components/
        ├── ui.tsx          # Primitif bersama (Reveal, Eyebrow, Counter, tombol)
        ├── Logo.tsx
        └── [16 komponen bagian]
```

---

## 10. Konten & Aset yang Dibutuhkan

Dokumen ini tidak dapat diselesaikan tanpa data dari pemilik bisnis. **Tabel berikut adalah daftar serah-terima yang menjadi penghambat rilis.**

### 10.1 Data Bisnis (Penghambat P0)

| No | Data | Digunakan di | Contoh Format |
|---|---|---|---|
| 1 | Nomor WhatsApp aktif | Hero, CTA, FAQ, mengambang, footer | `62812xxxxxxx` (format internasional) |
| 2 | Nomor telepon kantor/HP | Footer | `+62 812-xxxx-xxxx` |
| 3 | Alamat email | Footer | `halo@domainanda.id` |
| 4 | Nama domain resmi | SEO, email | `arktisservice.id` |
| 5 | Nama badan usaha (PT/CV/perorangan) | Footer, legal | |
| 6 | Jam operasional per hari | Footer, FAQ | Senin–Sabtu 07.00–20.00 |
| 7 | Area layanan nyata (daftar kota/kecamatan) | Footer, FAQ | |
| 8 | Kebijakan biaya kunjungan & pembatalan | Paket Layanan, FAQ | |
| 9 | Nama & jabatan pendiri | Kata Pendiri | |
| 10 | Foto pendiri asli | Kata Pendiri | |

### 10.2 Aset Visual

| No | Aset | Jumlah | Catatan |
|---|---|---|---|
| 11 | Foto hero resolusi tinggi | 1 | Minimal 2560×1440; saat ini hanya 1376×768 |
| 12 | Foto before/after pasangan asli | ≥ 3 pasang | Harus dari pekerjaan nyata |
| 13 | Foto galeri proyek asli | 8 | Ganti foto stok/eksternal |
| 14 | Logo vektor (SVG) | 1 | Saat ini logo dibuat dari kode SVG — perlu versi final |
| 15 | Favicon (32×32, 180×180, 512×512) | 3 | Belum ada |
| 16 | Foto avatar testimoni asli | 3 | Perlu izin pelanggan |
| 17 | Gambar pratinjau saat dibagikan (1200×630) | 1 | Untuk Open Graph |

### 10.3 Konten Teks

| No | Konten | Catatan |
|---|---|---|
| 18 | Testimoni asli (3–6 buah) | Sertakan nama, area, layanan, tanggal, izin publikasi |
| 19 | Tulisan ulasan pelanggan asli | Untuk ditampilkan sebagai bukti |
| 20 | Statistik riil (jumlah rumah, rating, ulasan) | Harus dapat dibuktikan |
| 21 | Bukti sertifikasi & pelatihan teknisi | Sertifikat, nama lembaga |
| 22 | Penghargaan/keanggotaan asosiasi (bila ada) | Bila tidak ada → hapus klaim |
| 23 | Kebijakan Privasi | Wajib |
| 24 | Syarat & Ketentuan Layanan | Wajib |
| 25 | Kebijakan garansi 30 hari (tertulis) | Termasuk apa yang tidak dicakup |
| 26 | Syarat bonus (masa berlaku, minimum transaksi) | |

---

## 11. Analitik & Pengukuran

### 11.1 Spesifikasi Pelacakan Peristiwa

| Peristiwa | Pemicu | Parameter | Tujuan |
|---|---|---|---|
| `page_view` | Halaman dimuat | `source`, `medium`, `campaign` | Melacak asal trafik |
| `scroll_depth` | 25 / 50 / 75 / 100% | `percent` | Mengetahui bagian yang menarik |
| `cta_click` | Semua tombol CTA diklik | `cta_label`, `section`, `destination` | Mengukur CTA terbaik |
| `wa_click` | Tautan WhatsApp diklik | `location` (float/cta1/faq/final), `service_context` | Mengukur jalur WhatsApp |
| `form_start` | Kolom pertama difokuskan | | Mengukur niat |
| `form_field_error` | Validasi gagal | `field`, `error_type` | Memperbaiki form |
| `form_submit` | Tombol kirim diklik | `service`, `unit_count`, `area` | Mengukur konversi |
| `form_success` | Server mengembalikan sukses | `booking_ref` | Konversi final |
| `form_error` | Server gagal | `error_code` | Deteksi gangguan |
| `gallery_open` | Lightbox dibuka | `project_title`, `tag` | Mengetahui konten menarik |
| `faq_open` | Item FAQ dibuka | `question` | Mengetahui keberatan umum |
| `package_view` | Kartu paket masuk viewport | `service_name`, `price` | Minat per paket |

### 11.2 Pelaporan yang Dibutuhkan

- Laporan mingguan: pengunjung, sumber, konversi per sumber, paket terpopuler
- Laporan bulanan: biaya per prospek (bila beriklan), biaya per booking, tingkat konversi per kanal
- Papan pemantauan real-time untuk admin (jumlah prospek masuk hari ini)

---

## 12. Gap Analysis — Temuan Audit Kode

Hasil pemeriksaan langsung terhadap basis kode pada 24 September 2026.

### 12.1 Yang Sudah Baik ✅

| No | Temuan |
|---|---|
| 1 | Struktur komponen rapi: 1 komponen per bagian, penamaan konsisten |
| 2 | Sistem desain warna & tipografi terdefinisi terpusat di `index.css` |
| 3 | Kompilasi TypeScript bersih (0 galat) |
| 4 | Build produksi berhasil (3,8 detik; 496 kB / 144 kB gzip) |
| 5 | Seluruh tautan jangkar navigasi (`#layanan`, `#cara-kerja`, `#testimoni`, `#kontak`, `#booking`, `#atas`) memiliki target yang benar — tidak ada tautan rusak internal |
| 6 | Alur konversi psikologis sudah benar (masalah → solusi → bukti → penawaran → CTA) |
| 7 | Bahasa Indonesia konsisten, nada bicara profesional dan meyakinkan |
| 8 | Responsif dengan pendekatan *mobile-first* |
| 9 | Animasi halus dan tidak berlebihan |
| 10 | Primitif bersama (`Reveal`, `Counter`, `WaLink`) mengurangi duplikasi kode |
| 11 | Area sentuh tombol memadai untuk mobile |
| 12 | Struktur judul (H1 → H2 → H3) berjenjang dengan benar |

### 12.2 Temuan yang Harus Diperbaiki

| Sev | Temuan | Lokasi | Dampak | Tindakan |
|---|---|---|---|---|
| 🔴 Kritis | Form booking tidak mengirim data apa pun — hanya menjalankan jeda waktu 1,4 detik lalu menampilkan layar sukses | `FinalCta.tsx` | Prospek mengira sudah memesan padahal data hilang sepenuhnya. **Kerugian langsung.** | Integrasikan endpoint penerima + notifikasi |
| 🔴 Kritis | Nomor WhatsApp masih placeholder `6281200000001` | `App.tsx`, `ui.tsx` | Semua tombol chat mengarah ke nomor tidak aktif. 4 titik konversi mati. | Ganti dengan nomor asli |
| 🔴 Kritis | Nomor referensi booking statis (selalu sama, hanya tahun yang berubah) | `FinalCta.tsx` | Menyesatkan; tidak dapat dipakai untuk pelacakan | Buat nomor unik per pemesanan |
| 🔴 Kritis | Klaim yang belum diverifikasi: rating 4,9/5 dari "1.847 ulasan", "2.847 rumah dilayani", "98% pelanggan kembali", "0 klaim tak diselesaikan", penghargaan, keanggotaan asosiasi, "Top Rated Service — Google 2024" | `SocialProof.tsx`, `Trust.tsx`, `Gallery.tsx` | Risiko hukum (iklan menyesatkan) + risiko reputasi bila pelanggan menanyakan buktinya | Verifikasi & dokumentasikan, atau ganti dengan angka riil, atau hapus |
| 🟠 Tinggi | Testimoni menyebut pelanggan dengan nama, kota, dan tanggal spesifik (Okt–Nov 2024) — perlu dipastikan benar dan ada izin | `Testimonials.tsx` | Risiko hukum & etika bila fiktif | Konfirmasi + simpan surat izin |
| 🟠 Tinggi | Tautan media sosial (Instagram, TikTok, YouTube, WhatsApp) semuanya mengarah ke `#atas` — kembali ke halaman sendiri | `Footer.tsx` | Pengunjung mengira situs rusak | Isi tautan akun asli atau hapus |
| 🟠 Tinggi | 6 tautan Informasi + 3 tautan legal di footer semuanya mengarah ke `#atas`; halamannya tidak ada | `Footer.tsx` | Kredibilitas turun; tidak ada halaman privasi | Buat halamannya atau hapus tautan |
| 🟠 Tinggi | Kode QR di footer hanyalah pola kotak dekoratif, bukan QR yang dapat dipindai, namun berlabel "WhatsApp QR resmi" | `Footer.tsx` | Menyesatkan pengunjung yang mencoba memindai | Buat QR asli atau ganti dengan tautan biasa |
| 🟠 Tinggi | Tidak ada halaman Kebijakan Privasi padahal mengumpulkan nama & nomor telepon | Seluruh situs | Ketidakpatuhan UU PDP No. 27/2022 | Buat halaman + kotak persetujuan di form |
| 🟠 Tinggi | Tidak ada favicon, Open Graph, atau Twitter Card | `index.html` | Tautan yang dibagikan di WhatsApp/grup tampil polos tanpa gambar — menurunkan rasio klik secara signifikan | Tambahkan metadata lengkap |
| 🟡 Sedang | 3 gambar galeri diambil langsung dari server pihak ketiga (Pexels) | `Gallery.tsx` | Bergantung pada pihak luar; bisa gagal dimuat / lambat; hak pakai perlu dipastikan | Unduh & sajikan dari domain sendiri |
| 🟡 Sedang | Gambar hero hanya 1376×768 | `public/images/` | Tampak pecah pada monitor besar; hero adalah kesan pertama | Sediakan versi minimal 2560×1440 |
| 🟡 Sedang | Gambar belum format modern; total 1,6 MB; hanya galeri yang memakai pemuatan malas | `public/images/` | Lambat di jaringan seluler, berdampak pada konversi | Konversi WebP/AVIF + `srcset` + pemuatan malas menyeluruh |
| 🟡 Sedang | Beberapa foto dipakai berulang di bagian berbeda (hero 3×, tools 3×, after 3×) | Berbagai komponen | Terlihat tidak profesional pada pengunjung yang teliti | Tambah variasi foto |
| 🟡 Sedang | Lightbox galeri tidak mendukung `Esc`, tombol panah, atau perangkap fokus | `Gallery.tsx` | Tidak dapat digunakan pengguna papan tik | Tambahkan penanganan papan tik |
| 🟡 Sedang | Slider before/after tidak mendukung papan tik dan tidak memiliki peran ARIA | `Problem.tsx` | Tidak dapat diakses sebagian pengguna | Tambahkan peran `slider` + penanganan panah |
| 🟡 Sedang | Tidak ada penghormatan terhadap `prefers-reduced-motion` | Seluruh situs | Pengguna dengan sensitivitas gerak terganggu | Tambahkan media query |
| 🟡 Sedang | Beberapa tombol menghapus garis fokus tanpa pengganti yang jelas | `Gallery.tsx` | Sulit dinavigasi dengan papan tik | Tambahkan cincin fokus yang terlihat |
| 🟡 Sedang | Tidak ada analitik sama sekali | Seluruh situs | Konversi tidak dapat diukur | Pasang GA4 + Meta Pixel |
| 🟡 Sedang | Tidak ada `robots.txt`, `sitemap.xml`, data terstruktur LocalBusiness | `/public` | Peluang muncul di pencarian lokal hilang | Tambahkan |
| 🟢 Rendah | Tahun hak cipta tertulis statis (2025) | `Footer.tsx` | Terlihat tidak terawat seiring waktu | Gunakan tahun dinamis |
| 🟢 Rendah | Tidak ada halaman 404 | — | Pengalaman buruk bila salah URL | Tambahkan |
| 🟢 Rendah | Label teks 9–10px pada beberapa lencana | Beberapa komponen | Sulit dibaca di ponsel kecil | Perbesar minimal ke 11px |
| 🟢 Rendah | Kelas `text-[#3e9b93]` dan `[#d66408]` ditulis langsung, di luar sistem tema | 4 berkas | Tidak konsisten dengan token warna | Pindahkan ke token tema |
| 🟢 Rendah | Kelas `h-4.5`, `w-5.5`, `py-4.5` bukan kelas Tailwind standar | Beberapa komponen | Berpotensi gagal render pada versi Tailwind lain | Gunakan nilai standar |
| 🟢 Rendah | Berkas `README.md` hanya berisi judul | Akar repositori | Dokumentasi minim | Isi dengan panduan menjalankan & menyebarkan |

### 12.3 Ringkasan Kesiapan

| Aspek | Skor | Keterangan |
|---|---|---|
| Desain & pengalaman visual | 9/10 | Sangat baik, konsisten, terasa premium |
| Struktur konten & alur konversi | 9/10 | Selaras dengan psikologi pembelian |
| Kualitas kode | 8/10 | Rapi, bertipe, mudah dikembangkan |
| Fungsionalitas inti (booking) | 1/10 | **Belum berfungsi** |
| Data & konten (kesiapan produksi) | 2/10 | Mayoritas masih placeholder |
| SEO & keterbagian sosial | 2/10 | Metadata penting belum ada |
| Aksesibilitas | 4/10 | Perlu perbaikan papan tik & gerak |
| Kepatuhan & risiko hukum | 2/10 | Klaim & privasi belum beres |
| **Kesiapan produksi keseluruhan** | **± 45%** | **Belum siap rilis** — perlu 1 sprint |

---

## 13. Risiko & Mitigasi

| ID | Risiko | Dampak | Kemungkinan | Mitigasi |
|---|---|---|---|---|
| R-01 | Website dirilis dengan form yang tidak berfungsi | Prospek hilang tanpa disadari | Tinggi (bila tergesa) | Uji ujung-ke-ujung sebelum rilis; wajibkan prosedur penerimaan |
| R-02 | Klaim palsu ditemukan pelanggan / pesaing | Kerusakan reputasi, potensi sanksi | Sedang | Audit konten; hapus semua yang tidak dapat dibuktikan |
| R-03 | Kebocoran data pribadi pelanggan | Sanksi UU PDP, hilang kepercayaan | Rendah–Sedang | Simpan data minimal, batasi akses, buat kebijakan privasi |
| R-04 | Nomor WhatsApp diblokir karena volume pesan tinggi | Semua jalur konversi mati | Sedang | Gunakan WhatsApp Business; tambahkan jalur cadangan (telepon/email) |
| R-05 | Bergantung pada gambar pihak ketiga | Gambar gagal tampil | Sedang | Pindahkan semua aset ke domain sendiri |
| R-06 | Pemuatan lambat di jaringan seluler | Tingkat pantul tinggi | Sedang | Optimasi gambar + pemuatan malas + ukuran responsif |
| R-07 | Admin kewalahan saat prospek melonjak | Waktu respons naik, prospek kabur | Sedang | Standar waktu respons + templat balasan + pembagian jadwal |
| R-08 | Harga yang ditampilkan tidak lagi sesuai biaya operasional | Kerugian per transaksi | Sedang | Tinjau harga tiap kuartal; cantumkan masa berlaku |
| R-09 | Area layanan diklaim lebih luas dari kemampuan | Pesanan di luar jangkauan; pelanggan kecewa | Sedang | Kunci daftar area nyata; tambahkan pengecekan area di form |
| R-10 | Teknisi kurang jumlah saat permintaan puncak | Jadwal mundur | Sedang | Batasi kuota harian; tampilkan ketersediaan |
| R-11 | Biaya iklan naik tanpa hasil terukur | Anggaran terbuang | Sedang | Pasang analitik sebelum beriklan |
| R-12 | Kredensial integrasi bocor | Penyalahgunaan | Rendah | Simpan kunci di variabel lingkungan server |

---

## 14. Roadmap

### Fase 0 · Persiapan Data (Minggu 1) — **Penghambat utama**

Pemilik bisnis menyerahkan seluruh isi Bagian 10. Tanpa ini, fase berikutnya tidak dapat tuntas.

### Fase 1 · Production Ready v1.0 (Minggu 2–3) — **Kritis**

| Prioritas | Item | Kriteria Selesai |
|---|---|---|
| P0 | Integrasi form booking ke penerima data | Data uji coba benar-benar tersimpan & notifikasi terkirim |
| P0 | Ganti semua kontak placeholder | Tidak ada lagi nomor/email contoh di kode |
| P0 | Nomor referensi unik per pemesanan | Setiap kiriman menghasilkan nomor berbeda |
| P0 | Pemisahan data kontak ke satu berkas konfigurasi | Nomor WA hanya didefinisikan sekali |
| P0 | Kotak persetujuan + halaman Kebijakan Privasi | Ada dasar hukum pengumpulan data |
| P0 | Audit & bersihkan semua klaim | Setiap angka/kredensial punya bukti |
| P1 | Metadata: favicon, Open Graph, Twitter Card, canonical | Tautan dibagikan tampil dengan gambar & judul benar |
| P1 | Perbaiki/perbarui seluruh tautan footer | Tidak ada tautan yang kembali ke halaman yang sama |
| P1 | QR asli atau ganti dengan tautan biasa | Dapat dipindai dan mengarah ke WhatsApp |
| P1 | Pesan WhatsApp terisi otomatis | Konteks layanan terbawa ke chat |
| P2 | Kirim kolom tambahan (area, jumlah unit, catatan) | Data prospek lebih lengkap |
| P2 | Optimasi gambar (WebP + `srcset` + pemuatan malas) | Bobot halaman turun di bawah 1 MB |

### Fase 2 · Ukur & Optimalkan v1.1 (Bulan 2)

- Pasang Google Analytics 4 + Meta Pixel + pelacakan konversi lengkap
- Papan pemantauan prospek sederhana untuk admin
- Optimasi SEO lokal: data terstruktur, sitemap, `robots.txt`, judul berbasis area
- Perbaikan aksesibilitas (papan tik, `prefers-reduced-motion`, kontras)
- Uji A/B pada judul hero dan label tombol CTA
- Kumpulkan 10 testimoni asli + ulasan Google

### Fase 3 · Skala v1.2 (Bulan 3–4)

- Halaman per area layanan (untuk SEO lokal: "Servis AC Cianjur" dan sekitarnya)
- Halaman blog (panduan perawatan AC) untuk menarik trafik organik
- Integrasi ulasan Google secara otomatis
- Halaman "Lacak Pesanan"
- Program rujukan (referral) untuk pelanggan lama

### Fase 4 · Platform v2.0 (Bulan 5–6)

- Dashboard admin: daftar prospek, penetapan teknisi, status pekerjaan
- Penjadwalan berdasarkan ketersediaan slot
- Riwayat servis per pelanggan + pengingat otomatis (WhatsApp)
- Manajemen paket tahunan & penagihan
- Halaman karier untuk rekrutmen teknisi

---

## 15. Kriteria Penerimaan (Definition of Done) — v1.0

Rilis dinyatakan siap apabila **seluruh** poin berikut terpenuhi:

### Fungsional
- [ ] Mengisi form booking dan mengirim → data tercatat di sistem penerima **dan** admin menerima notifikasi dalam < 1 menit
- [ ] Nomor referensi berbeda pada setiap pemesanan
- [ ] Semua tombol WhatsApp (4 titik) membuka WhatsApp dengan nomor asli dan pesan terisi
- [ ] Tautan navigasi menggulir ke bagian yang benar di ponsel dan desktop
- [ ] Klik tombol pesan pada kartu paket mengisi pilihan layanan di form secara otomatis
- [ ] Tidak ada tautan yang mengarah ke halaman itu sendiri, kecuali navigasi jangkar yang memang disengaja
- [ ] QR footer dapat dipindai dan mengarah ke WhatsApp

### Konten
- [ ] Tidak ada teks placeholder yang tersisa di seluruh kode
- [ ] Setiap klaim angka, penghargaan, dan sertifikasi memiliki bukti pendukung
- [ ] Semua testimoni memiliki izin publikasi tertulis
- [ ] Halaman Kebijakan Privasi dan Syarat Layanan publikasi
- [ ] Gambar asli menggantikan semua aset stok/eksternal

### Kualitas
- [ ] Skor Lighthouse: Performa ≥ 85 (seluler), Aksesibilitas ≥ 90, Praktik Terbaik ≥ 90, SEO ≥ 95
- [ ] LCP ≤ 2,5 detik pada simulasi 4G
- [ ] Bobot halaman ≤ 2 MB
- [ ] Diuji pada Chrome, Safari, Firefox, Edge; iOS Safari; Android Chrome
- [ ] Diuji pada lebar 320px, 375px, 768px, 1024px, 1440px, 1920px — tanpa gulir horizontal
- [ ] Lightbox dapat dioperasikan penuh dengan papan tik
- [ ] Animasi dihentikan bila pengguna mengaktifkan pengurangan gerak
- [ ] Kompilasi TypeScript tanpa galat; build produksi berhasil
- [ ] Data uji coba dihapus dari sistem penerima

### Pengukuran
- [ ] Analitik aktif dan mencatat seluruh peristiwa pada Bagian 11.1
- [ ] Dapat menjawab: "Dari mana prospek bulan ini berasal?"
- [ ] Dapat menjawab: "Berapa yang mengisi form vs chat WhatsApp?"

---

## 16. Pertanyaan Terbuka

Pertanyaan yang perlu dijawab pemilik bisnis sebelum Fase 1 dimulai:

| No | Pertanyaan | Mengapa Penting |
|---|---|---|
| 1 | Berapa nomor WhatsApp resmi yang akan dipakai? Apakah nomor pribadi atau nomor bisnis? | Menentukan semua titik konversi |
| 2 | Apakah bisnis ini sudah berbadan usaha (PT/CV) atau masih perorangan? | Menentukan konten legal & footer |
| 3 | Area mana saja yang benar-benar dilayani? Apakah mencakup Cianjur, Sukabumi, Bogor, Bandung? | Mengubah klaim di footer & FAQ |
| 4 | Apakah semua angka pada bagian Bukti Sosial (2.847 rumah, rating 4,9, 98%) merupakan data nyata? | Menghindari iklan menyesatkan |
| 5 | Apakah penghargaan dan keanggotaan asosiasi yang ditampilkan benar-benar dimiliki? | Sama seperti di atas |
| 6 | Siapa nama pendiri sebenarnya, dan apakah "Rizky Ardiansyah" benar? | Kredibilitas & akurasi |
| 7 | Apakah ada testimoni asli dengan izin publikasi yang dapat ditampilkan? | Mengganti testimoni yang ada |
| 8 | Apakah 6 harga paket sudah final? Apakah berlaku biaya kunjungan? | Menghindari janji harga yang salah |
| 9 | Berapa jumlah teknisi & kapasitas servis per hari? | Menentukan kuota booking |
| 10 | Apakah nama domain `arktisservice.id` sudah dimiliki? | Menentukan email & SEO |
| 11 | Bila di luar area, apakah pesanan tetap diterima dengan biaya tambahan? | Kebijakan kualifikasi |
| 12 | Apakah ingin beriklan berbayar, dan berapa anggarannya? | Menentukan kebutuhan analitik & halaman arahan |
| 13 | Apakah garansi 30 hari berlaku tanpa syarat, termasuk kerusakan baru yang tidak terkait servis? | Konten jaminan & FAQ |
| 14 | Apakah bisnis menerima pelanggan korporat/kantor? | Menentukan apakah perlu halaman khusus |

---

## 17. Lampiran

### 17.1 Peta Bagian → Berkas Kode

| Bagian | Berkas | Baris Kode |
|---|---|---|
| Komposisi halaman | `src/App.tsx` | 70 |
| Primitif bersama | `src/components/ui.tsx` | 195 |
| Logo | `src/components/Logo.tsx` | 38 |
| Bilah navigasi | `Navbar.tsx` | 102 |
| Hero | `Hero.tsx` | 96 |
| Sub-headline | `SubHeadline.tsx` | 26 |
| CTA pertama | `CtaOne.tsx` | 109 |
| Bukti sosial | `SocialProof.tsx` | 52 |
| Masalah (+slider) | `Problem.tsx` | 135 |
| Paket layanan | `Offer.tsx` | 191 |
| Fitur / cara kerja | `Features.tsx` | 150 |
| Manfaat | `Benefits.tsx` | 78 |
| Testimoni | `Testimonials.tsx` | 94 |
| Galeri (+lightbox) | `Gallery.tsx` | 258 |
| Bonus | `Bonus.tsx` | 101 |
| Kata pendiri | `FounderNote.tsx` | 88 |
| CTA final + form | `FinalCta.tsx` | 184 |
| Jaminan | `Trust.tsx` | 84 |
| FAQ | `Faq.tsx` | 115 |
| Footer | `Footer.tsx` | 184 |
| **Total** | | **± 2.476** |

### 17.2 Inventaris Aset Gambar

| Berkas | Dimensi | Ukuran | Dipakai di |
|---|---|---|---|
| `hero.jpg` | 1376×768 | 150 KB | Hero, paket servis, fitur 01, galeri |
| `before.jpg` | 1408×768 | 227 KB | Slider perbandingan |
| `after.jpg` | 1408×768 | 154 KB | Slider, paket cuci, fitur 03, galeri |
| `tools.jpg` | 1376×768 | 237 KB | Paket deep cleaning & freon, fitur 02, galeri |
| `booking.jpg` | 1408×768 | 104 KB | CTA pertama, fitur 04, galeri |
| `family.jpg` | 1408×768 | 217 KB | Paket tahunan, CTA final, galeri |
| `founder.jpg` | 1408×768 | 97 KB | Kata pendiri |
| `avatar-ratna.jpg` | 1024×1024 | 130 KB | Testimoni 1 |
| `avatar-dani.jpg` | 1024×1024 | 142 KB | Testimoni 2 |
| `avatar-andisari.jpg` | 1024×1024 | 120 KB | Testimoni 3 |
| **Total** | | **± 1,6 MB** | |

### 17.3 Riwayat Versi Dokumen

| Versi | Tanggal | Perubahan | Penulis |
|---|---|---|---|
| 1.0 | 24 Sep 2026 | Draf awal berdasarkan audit kode lengkap | Agen Arena.ai |

---

**Dokumen ini adalah draf yang memerlukan persetujuan pemilik bisnis.** Bagian yang paling mendesak untuk dijawab adalah **Bagian 16 (Pertanyaan Terbuka)** — terutama nomor 1, 3, 4, dan 5, karena jawabannya menentukan kelayakan rilis.
