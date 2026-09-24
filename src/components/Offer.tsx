import { ArrowRight, Check, Clock3, Flame, Gem } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

type Service = {
  name: string;
  sub: string;
  includes: string[];
  price: string;
  priceNote?: string;
  priceUnit: string;
  duration: string;
  img: string;
  pos: string;
  tint: string;
  badge?: { text: string; tone: "flame" | "navy" };
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    name: "Cuci AC Standard",
    sub: "Bersih menyeluruh, cepat selesai",
    includes: ["Bongkar cover AC", "Semprot tekanan air bersih", "Bersihkan filter & kisi-kisi", "Pasang kembali & uji fungsi"],
    price: "Rp 80.000",
    priceUnit: "/ unit",
    duration: "± 45 menit",
    img: "/images/after.jpg",
    pos: "object-center",
    tint: "from-sky/50 via-ice/10 to-transparent",
    badge: { text: "Paling Populer", tone: "flame" },
    featured: true,
  },
  {
    name: "Cuci AC Deep Cleaning",
    sub: "Pembersihan mendalam hingga akar kotoran",
    includes: ["Bongkar total semua komponen", "Rendam kimia anti-jamur & bakteri", "Sterilisasi UV (opsional)", "Bilas bersih & keringkan sempurna", "Uji performa pendinginan"],
    price: "Rp 150.000",
    priceUnit: "/ unit",
    duration: "± 90 menit",
    img: "/images/tools.jpg",
    pos: "object-left",
    tint: "from-glacier/60 via-glacier/10 to-transparent",
    badge: { text: "Terbaik untuk AC Lama", tone: "navy" },
  },
  {
    name: "Servis & Perbaikan AC",
    sub: "Diagnosa akurat, perbaikan tepat sasaran",
    includes: ["Diagnosa menyeluruh semua komponen", "Penggantian komponen bermasalah", "Pengecekan sistem kelistrikan", "Uji fungsi pasca-perbaikan"],
    price: "Rp 100.000",
    priceNote: "belum termasuk spare part",
    priceUnit: "",
    duration: "± 60–120 menit",
    img: "/images/hero.jpg",
    pos: "object-[72%_30%]",
    tint: "from-navy/70 via-navy/15 to-transparent",
  },
  {
    name: "Isi Ulang Freon AC",
    sub: "Dingin maksimal seperti pertama kali",
    includes: ["Cek tekanan sistem freon", "Isi freon R32 / R410A bergaransi", "Uji performa pendinginan", "Laporan tekanan tertulis"],
    price: "Rp 200.000",
    priceUnit: "/ unit",
    duration: "± 30–60 menit",
    img: "/images/tools.jpg",
    pos: "object-[70%_60%]",
    tint: "from-mint/50 via-ice/10 to-transparent",
  },
  {
    name: "Pasang AC Baru",
    sub: "Pemasangan rapi, presisi & bergaransi",
    includes: ["Bracket dinding premium", "Pipa instalasi 3 meter", "Kabel power & instalasi", "Finishing casing rapi & bersih", "Garansi pemasangan 90 hari"],
    price: "Rp 350.000",
    priceUnit: "/ unit",
    duration: "± 2–3 jam",
    img: "/images/hero.jpg",
    pos: "object-[18%_20%]",
    tint: "from-slatebody/50 via-clean/10 to-transparent",
  },
  {
    name: "Perawatan Berkala Tahunan",
    sub: "Perlindungan sepanjang tahun, satu harga",
    includes: ["4x servis cuci dalam setahun", "2x pengecekan sistem gratis", "Prioritas booking tanpa antri", "Diskon 20% semua spare part", "Laporan kondisi AC per kunjungan"],
    price: "Rp 600.000",
    priceUnit: "/ tahun / unit",
    duration: "4 kunjungan / tahun",
    img: "/images/family.jpg",
    pos: "object-center",
    tint: "from-arctic/70 via-arctic/15 to-transparent",
    badge: { text: "Hemat hingga 40%", tone: "flame" },
  },
];

function ServiceCard({ s, i }: { s: Service; i: number }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <article
        className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift ${
          s.featured ? "shadow-lift ring-flame/30" : "shadow-card ring-arctic/[0.06] hover:ring-arctic/10"
        }`}
      >
        {/* Image header */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={s.img}
            alt={s.name}
            className={`h-full w-full object-cover ${s.pos} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]`}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${s.tint} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          {s.badge && (
            <span
              className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg ${
                s.badge.tone === "flame" ? "bg-flame" : "bg-navy"
              }`}
            >
              {s.badge.tone === "flame" ? <Flame className="h-3 w-3" /> : <Gem className="h-3 w-3" />}
              {s.badge.text}
            </span>
          )}
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[10.5px] font-bold tracking-wide text-white backdrop-blur-md">
            <Clock3 className="h-3 w-3" /> {s.duration}
          </span>
          <span className="absolute bottom-4 right-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/70">
            ARKTIS·{String(i + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-[19px] font-extrabold tracking-tight text-arctic">{s.name}</h3>
          <p className="mt-1 text-[12.5px] font-semibold text-glacier">{s.sub}</p>

          <ul className="mt-5 space-y-2.5 pt-5">
            {s.includes.map((inc) => (
              <li key={inc} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-mint/15 text-[#3e9b93]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[13px] font-medium leading-snug text-slatebody">{inc}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slatebody/70">Mulai</span>
              <span className="display text-[24px] font-extrabold text-arctic">{s.price}</span>
              {s.priceUnit && <span className="text-[12px] font-semibold text-slatebody/70">{s.priceUnit}</span>}
            </div>
            {s.priceNote && <p className="mt-0.5 text-[11px] text-slatebody/60">({s.priceNote})</p>}

            <a
              href="#booking"
              className="mt-5 flex items-center justify-between rounded-full bg-ice py-3 pl-5 pr-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-glacier transition-all duration-300 hover:bg-arctic hover:text-white"
            >
              {i === 5 ? "Daftar Paket Tahunan" : "Pesan Layanan Ini"}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-glacier shadow-sm transition-colors duration-300 group-hover:bg-flame">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Offer() {
  return (
    <section id="layanan" className="relative bg-ice py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Paket Layanan"
          title={
            <>
              Solusi Lengkap untuk Setiap{" "}
              <em className="font-serif font-normal italic text-glacier">Kebutuhan AC-mu</em>
            </>
          }
          sub="Pilih paket yang paling sesuai dengan kondisimu — harga transparan, tanpa biaya tersembunyi."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
