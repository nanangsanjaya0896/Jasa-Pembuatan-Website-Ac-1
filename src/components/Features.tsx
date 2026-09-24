import { BadgeCheck, Leaf, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

type Feature = {
  id: string;
  icon: React.ElementType;
  title: string;
  body: string;
  micro: string;
  img: string;
  pos: string;
  chips: { icon: React.ElementType; text: string }[];
  alt: string;
};

const FEATURES: Feature[] = [
  {
    id: "01",
    icon: BadgeCheck,
    title: "Teknisi Bersertifikat & Terverifikasi",
    body: "Setiap teknisi ARKTIS telah melalui pelatihan intensif 200+ jam, ujian sertifikasi resmi, dan pemeriksaan latar belakang menyeluruh. Kamu bisa melihat ID resmi mereka sebelum masuk rumah.",
    micro: "Sertifikat No. ARTK-2024 tertera di setiap ID",
    img: "/images/hero.jpg",
    pos: "object-[74%_28%]",
    chips: [
      { icon: BadgeCheck, text: "ID ARTK-2024-117 terverifikasi" },
      { icon: ShieldCheck, text: "200+ jam pelatihan intensif" },
    ],
    alt: "Teknisi berseragam ARKTIS yang rapi",
  },
  {
    id: "02",
    icon: Wrench,
    title: "Peralatan Profesional Kelas Industri",
    body: "Kami menggunakan peralatan berteknologi tinggi yang sama dengan teknisi industri besar. Bukan alat seadanya — tapi presisi yang sesungguhnya.",
    micro: "Semua cairan pembersih ramah lingkungan & food-grade",
    img: "/images/tools.jpg",
    pos: "object-center",
    chips: [{ icon: Leaf, text: "Cairan food-grade, aman untuk keluarga" }],
    alt: "Peralatan servis AC profesional ARKTIS",
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Bersih Sebelum, Bersih Sesudah",
    body: "Kami datang rapi, bekerja rapi, dan pergi rapi. Lantai, dinding, dan perabotan di sekitar AC selalu kami lindungi — dan kami bersihkan kembali sebelum meninggalkan rumahmu.",
    micro: "Area kerja dilindungi plastik & dibersihkan pasca-servis",
    img: "/images/after.jpg",
    pos: "object-[50%_85%]",
    chips: [{ icon: ShieldCheck, text: "100% area kerja terlindungi" }],
    alt: "Unit AC bersih setelah servis tanpa sisa kotoran",
  },
  {
    id: "04",
    icon: Smartphone,
    title: "Booking 3 Menit, Konfirmasi 15 Menit",
    body: "Tidak perlu telepon berjam-jam atau antri panjang. Booking online, pilih jadwal, dan tim kami mengonfirmasi dalam 15 menit — lengkap dengan detail teknisi yang akan datang.",
    micro: "Tersedia via Website · WhatsApp · Telepon",
    img: "/images/booking.jpg",
    pos: "object-center",
    chips: [{ icon: Smartphone, text: "Konfirmasi diterima · 09.42" }],
    alt: "Aplikasi booking ARKTIS di smartphone",
  },
];

export default function Features() {
  return (
    <section id="cara-kerja" className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Standar Kerja Kami</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold text-arctic">
              Detail yang Membuat{" "}
              <em className="font-serif font-normal italic text-glacier">Perbedaan</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {FEATURES.map((f, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={f.id} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Image */}
                <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-arctic/[0.06]">
                      <img src={f.img} alt={f.alt} className={`aspect-[4/3.1] w-full object-cover ${f.pos}`} />
                    </div>
                    {/* ghost index */}
                    <span
                      className={`display pointer-events-none absolute -top-12 select-none text-[7rem] font-extrabold text-ice lg:text-[8.5rem] ${
                        flip ? "-right-2" : "-left-2"
                      }`}
                    >
                      {f.id}
                    </span>
                    {/* chips */}
                    <div className={`absolute flex flex-col gap-3 ${flip ? "-left-3 md:-left-8" : "-right-3 md:-right-8"} bottom-8`}>
                      {f.chips.map((c, ci) => (
                        <div
                          key={c.text}
                          className={`flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift ring-1 ring-arctic/5 backdrop-blur ${ci % 2 === 1 ? "translate-x-4" : ""}`}
                        >
                          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ice text-glacier">
                            <c.icon className="h-4.5 w-4.5" />
                          </span>
                          <span className="text-[12.5px] font-bold text-arctic">{c.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Copy */}
                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal>
                    <span className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-mint">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-ice text-glacier">
                        <f.icon className="h-4 w-4" />
                      </span>
                      Fitur {f.id}
                    </span>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h3 className="display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-arctic">
                      {f.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slatebody">{f.body}</p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-ice px-4 py-2 text-[11.5px] font-bold tracking-wide text-glacier">
                      <Leaf className="h-3.5 w-3.5 text-[#3e9b93]" />
                      {f.micro}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
