import { MapPin, Quote, Snowflake } from "lucide-react";
import { Reveal, SectionHead, Stars } from "./ui";

const TESTIMONIALS = [
  {
    img: "/images/avatar-ratna.jpg",
    name: "Ibu Ratna Sari",
    city: "Depok, Jawa Barat",
    date: "12 Oktober 2024",
    quote: "AC saya seperti baru lagi!",
    body: "AC saya sudah 2 tahun tidak pernah dicuci. Setelah pakai ARKTIS Deep Clean, udara di kamar jadi beda banget — segar dan tidak apek lagi. Teknisinya datang tepat waktu, rapi, sopan, dan membersihkan semua sisa air sebelum pulang. Pokoknya beres banget!",
    service: "Cuci AC Deep Cleaning — 2 unit",
  },
  {
    img: "/images/avatar-dani.jpg",
    name: "Bapak Dani Wibowo",
    city: "Bekasi, Jawa Barat",
    date: "3 November 2024",
    quote: "Pesan jam 9, datang jam 10.30. Luar biasa!",
    body: "Saya sudah coba beberapa jasa servis AC sebelumnya, tapi ARKTIS benar-benar beda. Harganya transparan — dikasih tahu dulu sebelum dikerjakan, tidak ada biaya tambahan yang mengejutkan di akhir. Teknisinya juga bisa menjelaskan masalah AC saya dengan bahasa yang mudah saya mengerti.",
    service: "Freon Refill + Service Repair",
  },
  {
    img: "/images/avatar-andisari.jpg",
    name: "Andi & Sari Prasetyo",
    city: "Tangerang Selatan",
    date: "28 November 2024",
    quote: "3 unit AC kami selalu prima, anak tidur nyenyak!",
    body: "Kami sudah berlangganan Paket Tahunan ARKTIS untuk 3 unit AC di rumah. Setiap kunjungan selalu profesional dan tepat waktu. Tagihan listrik kami turun sekitar 20% setelah rutin diservis. Yang paling penting, anak kami yang punya alergi jadi jauh lebih jarang bersin sejak pakai ARKTIS.",
    service: "Paket Annual Care — 3 unit",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative bg-gradient-to-b from-white via-clean to-ice py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Testimoni Pelanggan"
          title={
            <>
              Cerita Nyata dari Keluarga yang{" "}
              <em className="font-serif font-normal italic text-glacier">Sudah Merasakan</em>
            </>
          }
          sub="Bukan aktor, bukan endorser — pelanggan sungguhan dengan pengalaman sungguhan."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="relative flex h-full flex-col rounded-[1.75rem] bg-white p-8 shadow-card ring-1 ring-arctic/[0.05] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <Quote className="absolute right-7 top-7 h-8 w-8 text-ice" fill="currentColor" strokeWidth={0} />

                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-ice"
                  />
                  <div>
                    <figcaption className="text-[15px] font-extrabold tracking-tight text-arctic">{t.name}</figcaption>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[12px] font-medium text-slatebody/80">
                      <MapPin className="h-3 w-3 text-glacier" /> {t.city}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Stars />
                  <span className="text-[11.5px] font-medium text-slatebody/60">{t.date}</span>
                </div>

                <p className="mt-5 text-[16.5px] font-extrabold leading-snug tracking-tight text-navy">
                  “{t.quote}”
                </p>
                <blockquote className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slatebody">
                  {t.body}
                </blockquote>

                <div className="mt-6 pt-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ice px-3.5 py-2 text-[11px] font-bold tracking-wide text-glacier">
                    <Snowflake className="h-3 w-3" />
                    {t.service}
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
