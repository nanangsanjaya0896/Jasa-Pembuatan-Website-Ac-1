import { Award, CalendarClock, HeartHandshake, Snowflake, Wind, Zap } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const BENEFITS = [
  {
    icon: Wind,
    title: "Udara Lebih Bersih & Sehat",
    desc: "Hilangkan debu, bakteri, dan jamur dari sirkulasi udara rumahmu. Napas lebih lega, tidur lebih nyenyak, alergi berkurang drastis.",
  },
  {
    icon: Zap,
    title: "Tagihan Listrik Lebih Hemat",
    desc: "AC yang bersih bekerja lebih efisien. Pelanggan kami rata-rata hemat 15–25% tagihan listrik setiap bulannya.",
  },
  {
    icon: CalendarClock,
    title: "AC Lebih Awet & Tahan Lama",
    desc: "Perawatan rutin memperpanjang usia AC hingga 2–3 kali lebih lama. Investasi kecil sekarang, hemat besar di masa depan.",
  },
  {
    icon: Snowflake,
    title: "Pendinginan Maksimal Kembali",
    desc: "Rasakan kembali kesejukan AC saat pertama kali dipasang. Suhu ruangan mencapai target lebih cepat dengan energi lebih rendah.",
  },
  {
    icon: HeartHandshake,
    title: "Ketenangan Pikiran untuk Keluarga",
    desc: "Garansi 30 hari di setiap servis. Jika ada masalah, kami kembali dan perbaiki tanpa biaya tambahan apapun.",
  },
  {
    icon: Award,
    title: "Pengalaman Servis Kelas Premium",
    desc: "Teknisi rapi, komunikatif, dan profesional. Kami tangani semuanya dari awal hingga akhir — tanpa kamu khawatir.",
  },
];

export default function Benefits() {
  return (
    <section className="noise-dark relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-glacier/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-mint/10 blur-[120px]" />

      <div className="relative z-[2] mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          dark
          eyebrow="Manfaat Nyata"
          title={
            <>
              Apa yang Kamu Rasakan{" "}
              <em className="font-serif font-normal italic text-sky">Setelah Servis ARKTIS</em>
            </>
          }
          sub="Bukan sekadar janji — tapi hasil nyata yang terasa sejak hari pertama."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="group relative h-full rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-sky/30 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky/15 text-sky ring-1 ring-sky/20 transition-colors duration-500 group-hover:bg-sky/25">
                    <b.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-[17px] font-extrabold tracking-tight text-white">{b.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">{b.desc}</p>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
