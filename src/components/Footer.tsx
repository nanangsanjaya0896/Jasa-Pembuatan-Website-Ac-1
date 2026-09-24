import { ArrowUpRight, Clock3, Mail, MapPin, Music2, Phone } from "lucide-react";
import { LogoLockup, LogoMark } from "./Logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="2.5" y="6" width="19" height="12.5" rx="3.5" />
      <path d="M10.2 9.8v5l4.6-2.5-4.6-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SERVICE_LINKS = ["Cuci AC Standard", "Cuci AC Deep Cleaning", "Servis & Perbaikan AC", "Isi Ulang Freon", "Pasang AC Baru", "Perawatan Berkala"];
const INFO_LINKS = ["Cara Kerja", "Area Jangkauan Kami", "Harga & Paket", "Blog Tips AC", "Karir — Jadi Teknisi", "Kebijakan Privasi"];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: YoutubeIcon, label: "YouTube" },
  {
    icon: (p: { className?: string }) => (
      <svg viewBox="0 0 24 24" className={p.className} fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.5-.6c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.7a11.6 11.6 0 0 0 4.5 4.2c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.1Z" />
      </svg>
    ),
    label: "WhatsApp",
  },
];

/* Minimal hairline-framed QR motif */
function Qr() {
  const cells = [
    "1110111", "1010101", "1111101", "0001010", "1101110", "1010011", "1110111",
  ];
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 p-3">
      <div className="grid grid-cols-7 gap-[2.5px] rounded-lg bg-white p-2">
        {cells.flatMap((row, y) =>
          row.split("").map((c, x) => (
            <span key={`${x}-${y}`} className={`h-[5px] w-[5px] rounded-[1px] ${c === "1" ? "bg-arctic" : "bg-transparent"}`} />
          ))
        )}
      </div>
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/80">Scan & Chat</p>
        <p className="mt-1 text-[11px] text-white/40">WhatsApp QR resmi</p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-coal text-white/60">
      <div className="relative z-[2] mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8 md:pt-28">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <LogoLockup dark />
            <p className="mt-6 text-[13.5px] leading-relaxed text-white/55">
              Certified AC Service. Fast. Clean. Guaranteed.
              <br />
              <span className="text-white/40">Servis AC bersertifikat. Cepat. Bersih. Bergaransi.</span>
            </p>
            <p className="mt-5 flex items-start gap-2 text-[12.5px] font-semibold text-white/45">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" />
              Jabodetabek · Bandung · Surabaya · Semarang
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#atas"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/50 hover:bg-white/5 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/35">Layanan</h4>
            <ul className="mt-6 space-y-3.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <a href="#layanan" className="u-link text-[13.5px] font-medium text-white/60 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <nav>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/35">Informasi</h4>
            <ul className="mt-6 space-y-3.5">
              {INFO_LINKS.map((l) => (
                <li key={l}>
                  <a href="#atas" className="u-link text-[13.5px] font-medium text-white/60 transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/35">Kontak</h4>
            <ul className="mt-6 space-y-4 text-[13.5px]">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-mint" />
                <div>
                  <p className="font-bold text-white/85">+62 812-ARKTIS-1</p>
                  <p className="text-[11.5px] text-white/40">0800-ARKTIS — bebas pulsa</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-mint" />
                <a href="mailto:halo@arktisservice.id" className="u-link font-medium text-white/70 hover:text-white">
                  halo@arktisservice.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                <div className="text-[12.5px] leading-relaxed text-white/55">
                  <p>Senin–Sabtu: 07.00–20.00 WIB</p>
                  <p>Minggu: 08.00–17.00 WIB</p>
                </div>
              </li>
            </ul>
            <div className="mt-7">
              <Qr />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 pt-8 text-[12px] text-white/35 md:flex-row">
          <p>© 2025 ARKTIS HOME SERVICE. Semua hak dilindungi undang-undang.</p>
          <p className="font-semibold text-white/45">Dipercaya lebih dari 2.000 keluarga Indonesia.</p>
          <div className="flex items-center gap-6">
            {["Kebijakan Privasi", "Syarat Layanan", "Sitemap"].map((l) => (
              <a key={l} href="#atas" className="u-link transition-colors hover:text-white/70">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="pointer-events-none relative select-none" aria-hidden="true">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 md:px-8">
          <span className="display -mb-[0.16em] text-[clamp(4.5rem,17vw,15rem)] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]">
            ARKTIS
          </span>
          <LogoMark className="-mb-4 h-16 w-16 text-white/[0.05] md:h-24 md:w-24" />
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#atas"
        className="group absolute right-6 top-8 grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white md:right-10"
        aria-label="Kembali ke atas"
      >
        <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-45" />
      </a>
    </footer>
  );
}
