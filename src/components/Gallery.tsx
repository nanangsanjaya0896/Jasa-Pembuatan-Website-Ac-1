import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, MapPin, X } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./ui";

type Project = {
  img: string;
  title: string;
  location: string;
  tag: string;
  desc: string;
};

const PROJECTS: Project[] = [
  {
    img: "/images/hero.jpg",
    title: "Deep Clean 3 Unit — Rumah Keluarga Pratama",
    location: "Pondok Indah, Jakarta Selatan",
    tag: "Deep Cleaning",
    desc: "Tiga unit AC split yang sudah 18 bulan tanpa servis — dikembalikan seperti baru dalam satu kunjungan.",
  },
  {
    img: "/images/after.jpg",
    title: "Evaporator Bersih Sempurna — Hasil Cuci ARKTIS",
    location: "BSD City, Tangerang Selatan",
    tag: "Cuci AC Standard",
    desc: "Fin evaporator aluminium mengkilap sempurna setelah proses deep wash bertekanan tinggi.",
  },
  {
    img: "https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Perbaikan Sistem Freon — Unit Outdoor",
    location: "Kelapa Gading, Jakarta Utara",
    tag: "Servis & Repair",
    desc: "Diagnosa kebocoran freon pada unit outdoor, perbaikan dan pengisian ulang R32 bergaransi.",
  },
  {
    img: "/images/tools.jpg",
    title: "Toolkit Profesional Standar ARKTIS",
    location: "Standar Semua Teknisi",
    tag: "Peralatan",
    desc: "Setiap teknisi kami dilengkapi toolkit kelas industri — nozzle tekanan tinggi, manometer digital, UV sterilizer, dan cairan food-grade.",
  },
  {
    img: "/images/booking.jpg",
    title: "Instalasi AC Baru — Kamar Anak Keluarga Wibowo",
    location: "Bekasi Barat, Jawa Barat",
    tag: "Pasang AC Baru",
    desc: "Pemasangan unit AC Daikin 1PK lengkap dengan pipa, bracket premium, dan casing rapi — selesai dalam 2 jam.",
  },
  {
    img: "https://images.pexels.com/photos/5463582/pexels-photo-5463582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Maintenance Rutin — Klien Annual Care",
    location: "Cibubur, Jakarta Timur",
    tag: "Perawatan Berkala",
    desc: "Kunjungan servis berkala ke-3 dari paket Annual Care — pengecekan sistem, cuci ringan, dan laporan kondisi digital.",
  },
  {
    img: "/images/family.jpg",
    title: "Rumah Sejuk & Bahagia — Keluarga Prasetyo",
    location: "Tangerang Selatan",
    tag: "Hasil Akhir",
    desc: "Setelah deep clean 3 unit AC dan perawatan berkala, keluarga Prasetyo menikmati udara segar setiap hari.",
  },
  {
    img: "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Perbaikan Unit Outdoor — Apartemen Surabaya",
    location: "Surabaya, Jawa Timur",
    tag: "Servis & Repair",
    desc: "Penggantian kapasitor dan pembersihan kondensor outdoor di lantai 12 — kembali dingin maksimal.",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Deep Cleaning": "bg-glacier/15 text-glacier",
  "Cuci AC Standard": "bg-sky/15 text-sky",
  "Servis & Repair": "bg-flame/15 text-flame",
  "Peralatan": "bg-navy/15 text-navy",
  "Pasang AC Baru": "bg-mint/15 text-[#3e9b93]",
  "Perawatan Berkala": "bg-glacier/15 text-glacier",
  "Hasil Akhir": "bg-mint/15 text-[#3e9b93]",
};

/* ---------- Lightbox ---------- */
function Lightbox({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-arctic/85 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative mx-4 max-h-[90svh] max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.img}
            alt={project.title}
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-arctic/60 to-transparent p-6 pt-20">
            <span className={`inline-block rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] ${TAG_COLORS[project.tag] || "bg-ice text-glacier"}`}>
              {project.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-arctic shadow-lg transition-transform hover:scale-105"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
        <div className="p-7 md:p-9">
          <h3 className="display text-[22px] font-extrabold text-arctic md:text-[26px]">{project.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-[13px] font-medium text-slatebody/80">
            <MapPin className="h-3.5 w-3.5 text-glacier" />
            {project.location}
          </p>
          <p className="mt-4 text-[14.5px] leading-relaxed text-slatebody">{project.desc}</p>
        </div>
        {/* Nav */}
        <div className="flex items-center justify-between px-7 pb-7 md:px-9 md:pb-9">
          <button
            onClick={onPrev}
            className="group flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-glacier transition-colors hover:text-arctic"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ice transition-colors group-hover:bg-glacier group-hover:text-white">
              <ArrowLeft className="h-4 w-4" />
            </span>
            Sebelumnya
          </button>
          <button
            onClick={onNext}
            className="group flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-glacier transition-colors hover:text-arctic"
          >
            Selanjutnya
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ice transition-colors group-hover:bg-glacier group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Gallery ---------- */
export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const openLightbox = (i: number) => setActive(i);
  const closeLightbox = () => setActive(null);
  const prev = () => setActive((v) => (v !== null ? (v - 1 + PROJECTS.length) % PROJECTS.length : null));
  const next = () => setActive((v) => (v !== null ? (v + 1) % PROJECTS.length : null));

  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Galeri Proyek"
          title={
            <>
              Galeri Proyek{" "}
              <em className="font-serif font-normal italic text-glacier">Kami</em>
            </>
          }
          sub="Hasil nyata dari setiap kunjungan teknisi ARKTIS — bukan janji, tapi bukti."
        />

        {/* Masonry-inspired grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROJECTS.map((p, i) => {
            // Vary heights for visual rhythm
            const tall = i === 0 || i === 3 || i === 6;
            return (
              <Reveal key={p.title} delay={(i % 4) * 0.06} className={tall ? "sm:row-span-2" : ""}>
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-[1.5rem] bg-ice text-left shadow-card ring-1 ring-arctic/[0.05] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift focus:outline-none"
                >
                  <div className={`relative w-full overflow-hidden ${tall ? "aspect-[3/4.2]" : "aspect-[4/3]"}`}>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arctic/70 via-arctic/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Hover overlay content */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className={`inline-block rounded-full px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em] ${TAG_COLORS[p.tag] || "bg-ice text-glacier"}`}>
                        {p.tag}
                      </span>
                      <h3 className="mt-2.5 text-[15px] font-extrabold leading-snug tracking-tight text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                        <MapPin className="h-3 w-3" />
                        {p.location}
                      </p>
                    </div>

                    {/* Expand icon */}
                    <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-glacier opacity-0 shadow-lg transition-all duration-400 group-hover:opacity-100 group-hover:scale-100 scale-75">
                      <Expand className="h-4 w-4" />
                    </span>

                    {/* Index */}
                    <span className="absolute left-4 top-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom stat */}
        <Reveal delay={0.15}>
          <p className="mt-12 text-center text-[12px] font-bold uppercase tracking-[0.22em] text-slatebody/50">
            2.847+ proyek selesai · Dokumentasi lengkap setiap kunjungan · Before & After tersedia
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <Lightbox
            project={PROJECTS[active]}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
