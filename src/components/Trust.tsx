import { Award, BadgeCheck, Leaf, Lock, ShieldCheck, Star, Tags } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "Garansi Servis 30 Hari Penuh",
    desc: "Jika ada masalah yang berkaitan langsung dengan pekerjaan kami dalam 30 hari, kami kembali dan perbaiki tanpa biaya. Tanpa syarat rumit, tanpa perdebatan.",
  },
  {
    icon: BadgeCheck,
    title: "Teknisi Terverifikasi & Bersertifikat",
    desc: "Setiap teknisi memiliki ID resmi ARKTIS yang bisa kamu verifikasi sebelum mereka masuk rumah — semua melalui pelatihan, sertifikasi, dan pemeriksaan latar belakang ketat.",
  },
  {
    icon: Tags,
    title: "Harga Transparan, Nol Kejutan",
    desc: "Harga yang tertera adalah harga yang kamu bayar. Semua biaya dikonfirmasi sebelum pekerjaan dimulai. Kamu yang memegang kendali penuh.",
  },
];

const CERTS = [
  { icon: Award, text: "Penghargaan Layanan Terbaik 2024" },
  { icon: BadgeCheck, text: "Anggota Asosiasi Teknisi AC Indonesia" },
  { icon: Leaf, text: "Certified Green Service — Ramah Lingkungan" },
  { icon: Star, text: "Top Rated Service — Google 2024" },
  { icon: Lock, text: "Terdaftar & Berizin Resmi" },
];

export default function Trust() {
  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Jaminan & Kepercayaan"
          title={
            <>
              Mengapa Kamu Bisa Percaya ARKTIS{" "}
              <em className="font-serif font-normal italic text-glacier">Sepenuhnya</em>
            </>
          }
          sub="Bukan sekadar kata-kata — ada bukti nyata di baliknya."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-7">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.09} className="h-full">
              <div className="group h-full rounded-[1.75rem] border border-arctic/[0.07] bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-glacier/25 hover:shadow-lift">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ice text-glacier transition-colors duration-500 group-hover:bg-glacier group-hover:text-white">
                  <g.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-[18px] font-extrabold tracking-tight text-arctic">{g.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slatebody">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certification marquee */}
      <Reveal delay={0.1}>
        <div className="mt-20 bg-clean/60 py-6">
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-14 pr-14">
              {[...CERTS, ...CERTS].map((c, i) => (
                <span key={i} className="flex shrink-0 items-center gap-3 text-slatebody/70">
                  <c.icon className="h-4.5 w-4.5 text-glacier/70" strokeWidth={1.8} />
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em]">{c.text}</span>
                  
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-10 text-center text-[11.5px] font-bold uppercase tracking-[0.24em] text-slatebody/60">
          2.847 rumah dilayani · 4.9/5 rating · 98% pelanggan kembali · 30 hari garansi · 0 klaim tak diselesaikan
        </p>
      </Reveal>
    </section>
  );
}
