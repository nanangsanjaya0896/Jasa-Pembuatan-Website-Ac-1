import { ArrowUpRight, Clock3, Mail, MapPin, Music2, Phone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { LogoLockup, LogoMark } from "./Logo";
import {
  CONTACT,
  INFO_LINKS,
  LEGAL_LINKS,
  SERVICE_LINKS,
  SOCIALS,
  waLink,
} from "@/config/site";

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

const SOCIAL_ICONS: Record<string, (p: { className?: string }) => React.ReactElement> = {
  Instagram: InstagramIcon,
  TikTok: (p) => <Music2 className={p.className} />,
  YouTube: YoutubeIcon,
};

/* ── Satu item tautan footer ──────────────────────────────────────
 * Menangani dua kondisi:
 *   href terisi → tautan normal yang bisa diklik
 *   href kosong → tampil sebagai teks nonaktif (fitur belum dibuat),
 *                 sehingga tidak ada tautan yang melompat ke atas halaman
 */
function FooterLink({ label, href }: { label: string; href: string }) {
  if (!href) {
    return (
      <span
        className="cursor-default text-[13.5px] font-medium text-white/25 select-none"
        title="Segera hadir"
      >
        {label}
      </span>
    );
  }
  return (
    <a href={href} className="u-link text-[13.5px] font-medium text-white/60 transition-colors hover:text-white">
      {label}
    </a>
  );
}

/* ── Tombol media sosial ──────────────────────────────────────────
 * Bila akun belum diisi di config, ikon tampil redup dan tidak
 * bisa diklik — bukan tautan rusak.
 */
function SocialButton({ label, href }: { label: string; href: string }) {
  const Icon = SOCIAL_ICONS[label] ?? InstagramIcon;

  if (!href) {
    return (
      <span
        className="grid h-10 w-10 cursor-default place-items-center rounded-full border border-white/[0.06] text-white/25 select-none"
        title={`${label} — segera hadir`}
        aria-label={`${label} belum tersedia`}
      >
        <Icon className="h-4 w-4" />
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/50 hover:bg-white/5 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

/* QR asli — mengarah ke WhatsApp dengan pesan terisi otomatis */
function Qr() {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 p-3">
      <div className="rounded-lg bg-white p-2" aria-hidden="true">
        <QRCodeSVG
          value={waLink()}
          size={64}
          level="M"
          bgColor="#ffffff"
          fgColor="#0a1628"
        />
      </div>
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/80">Scan & Chat</p>
        <p className="mt-1 text-[11px] text-white/40">Arahkan kamera ke kode</p>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

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
              {CONTACT.area}
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} label={s.label} href={s.href} />
              ))}
            </div>
          </div>

          {/* Services */}
          <nav>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/35">Layanan</h4>
            <ul className="mt-6 space-y-3.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink label={l.label} href={l.href} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <nav>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/35">Informasi</h4>
            <ul className="mt-6 space-y-3.5">
              {INFO_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink label={l.label} href={l.href} />
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
                  <p className="font-bold text-white/85">{CONTACT.phone}</p>
                  <p className="text-[11.5px] text-white/40">{CONTACT.phoneNote}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-mint" />
                <a href={`mailto:${CONTACT.email}`} className="u-link font-medium text-white/70 hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                <div className="text-[12.5px] leading-relaxed text-white/55">
                  {CONTACT.hours.map((h) => (
                    <p key={h.day}>
                      {h.day}: {h.time}
                    </p>
                  ))}
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
          <p>© {year} ARKTIS HOME SERVICE. Semua hak dilindungi undang-undang.</p>
          <p className="font-semibold text-white/45">Dipercaya lebih dari 2.000 keluarga Indonesia.</p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((l) => (
              <FooterLink key={l.label} label={l.label} href={l.href} />
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
