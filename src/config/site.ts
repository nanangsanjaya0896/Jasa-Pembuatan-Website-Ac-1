/**
 * ═══════════════════════════════════════════════════════════════
 *  KONFIGURASI SITUS — ARKTIS HOME SERVICE
 * ═══════════════════════════════════════════════════════════════
 *
 *  Ini adalah SATU-SATUNYA tempat untuk mengubah data bisnis.
 *  Ganti nilainya di sini, dan otomatis berubah di seluruh halaman.
 *
 *  ⚠️ PROYEK DEMO — nilai di bawah masih contoh.
 *     Untuk dipakai sungguhan, ganti dengan data asli.
 */

/** Nomor WhatsApp dalam format internasional TANPA tanda + dan tanpa spasi.
 *  Contoh: nomor 0812-3456-7890 → "6281234567890" */
export const WHATSAPP_NUMBER = "6281200000001";

/** Nomor ini HANYA untuk demo. Saat true, tombol WhatsApp menampilkan
 *  peringatan di konsol agar pengembang sadar nomornya belum diganti. */
export const IS_DEMO = true;

/** Pesan pembuka otomatis saat pelanggan klik tombol WhatsApp.
 *  {layanan} akan diganti dengan nama layanan yang sedang dilihat. */
export const waMessage = (layanan?: string) =>
  layanan
    ? `Halo ARKTIS, saya mau pesan *${layanan}*. Bisa dibantu jadwalnya?`
    : "Halo ARKTIS, saya mau tanya soal servis AC. Bisa dibantu?";

/** URL lengkap untuk membuka WhatsApp dengan pesan terisi otomatis. */
export const waLink = (layanan?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage(layanan))}`;

/* ─── Kontak ─────────────────────────────────────────────────── */
export const CONTACT = {
  /** Ditampilkan di footer */
  phone: "+62 812-ARKTIS-1",
  phoneNote: "0800-ARKTIS — bebas pulsa",
  email: "halo@arktisservice.id",
  /** Area layanan yang ditampilkan di footer & FAQ */
  area: "Jabodetabek · Bandung · Surabaya · Semarang",
  hours: [
    { day: "Senin–Sabtu", time: "07.00–20.00 WIB" },
    { day: "Minggu", time: "08.00–17.00 WIB" },
  ],
} as const;

/* ─── Domain ─────────────────────────────────────────────────── */
/** Ganti dengan domain asli sebelum dipublikasikan.
 *  Dipakai untuk alamat surel, SEO, dan gambar pratinjau saat tautan dibagikan. */
export const SITE_URL = "https://arktisservice.id";

/* ─── Media sosial ───────────────────────────────────────────── */
/** Biarkan href kosong ("") bila akun belum ada.
 *  Ikon dengan href kosong akan tampil tetapi tidak bisa diklik,
 *  sehingga tidak ada tautan rusak yang membingungkan pengunjung. */
export const SOCIALS = [
  { label: "Instagram", href: "" },
  { label: "TikTok", href: "" },
  { label: "YouTube", href: "" },
] as const;

/* ─── Tautan footer ──────────────────────────────────────────── */
/** href berisi "#..." → menggulir ke bagian di halaman ini.
 *  href berisi ""   → item tampil nonaktif (fitur belum dibuat). */
export const SERVICE_LINKS = [
  { label: "Cuci AC Standard", href: "#layanan" },
  { label: "Cuci AC Deep Cleaning", href: "#layanan" },
  { label: "Servis & Perbaikan AC", href: "#layanan" },
  { label: "Isi Ulang Freon", href: "#layanan" },
  { label: "Pasang AC Baru", href: "#layanan" },
  { label: "Perawatan Berkala", href: "#layanan" },
] as const;

export const INFO_LINKS = [
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga & Paket", href: "#layanan" },
  { label: "Testimoni Pelanggan", href: "#testimoni" },
  { label: "Area Jangkauan Kami", href: "#kontak" },
  { label: "Blog Tips AC", href: "" },
  { label: "Karir — Jadi Teknisi", href: "" },
] as const;

export const LEGAL_LINKS = [
  { label: "Kebijakan Privasi", href: "" },
  { label: "Syarat Layanan", href: "" },
] as const;
