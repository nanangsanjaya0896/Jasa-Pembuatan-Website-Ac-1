import { ArrowRight, ClipboardCheck, Gift, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const BONUSES = [
  {
    icon: MessageCircle,
    title: "Konsultasi AC Gratis Sebelum Servis",
    value: "Rp 50.000",
    desc: "Ceritakan masalah AC-mu lewat WhatsApp — teknisi kami bantu diagnosa awal secara gratis sebelum jadwal dikonfirmasi.",
  },
  {
    icon: ClipboardCheck,
    title: "Laporan Kondisi AC Tertulis & Digital",
    value: "Rp 30.000",
    desc: "Setiap servis selesai, kamu menerima laporan digital via WhatsApp — lengkap dengan foto before-after dan rekomendasi perawatan.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Servis 30 Hari, Bukan 7 Hari",
    value: "Standar industri 7 hari",
    desc: "Standar industri hanya 7 hari. ARKTIS memberi garansi penuh 30 hari — jika ada masalah terkait servis, kami kembali gratis.",
  },
  {
    icon: HeartHandshake,
    title: "Diskon 10% untuk Servis Kedua & Seterusnya",
    value: "Setiap kunjungan",
    desc: "Begitu menjadi pelanggan ARKTIS, kamu otomatis mendapatkan harga loyalitas di semua servis selanjutnya. Tanpa syarat rumit.",
  },
];

export default function Bonus() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dcebf7] via-ice to-white py-24 md:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-mint/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          eyebrow="Bonus Eksklusif"
          title={
            <>
              Nilai Lebih yang{" "}
              <em className="font-serif font-normal italic text-glacier">Tidak Kamu Duga</em>
            </>
          }
          sub="Semua bonus ini otomatis kamu dapatkan di setiap pemesanan — tanpa minimum, tanpa syarat."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:gap-6">
          {BONUSES.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.08} className="h-full">
              <div className="group flex h-full gap-5 rounded-[1.5rem] bg-white/80 p-7 shadow-card ring-1 ring-white backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-arctic text-mint transition-colors duration-500 group-hover:bg-glacier group-hover:text-white">
                  <b.icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-[#3e9b93]">
                    Bonus {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 text-[16.5px] font-extrabold tracking-tight text-arctic">{b.title}</h3>
                  <p className="mt-2 text-[12.5px] font-bold">
                    <span className="text-slatebody/60 line-through">Senilai {b.value}</span>
                    <span className="ml-2 text-flame">— GRATIS</span>
                  </p>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-slatebody">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="noise-dark relative mt-8 overflow-hidden rounded-[1.75rem] bg-navy px-8 py-8 md:px-12 md:py-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-flame/20 blur-[80px]" />
            <div className="relative z-[2] flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-flame/20 text-flame ring-1 ring-flame/30">
                  <Gift className="h-5.5 w-5.5" />
                </span>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-mint">
                    Total nilai bonus yang kamu dapatkan
                  </p>
                  <p className="display mt-1.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-white">
                    Rp 130.000+ <span className="font-serif text-[0.75em] font-normal italic text-sky">— gratis, setiap pemesanan.</span>
                  </p>
                </div>
              </div>
              <a
                href="#booking"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-flame px-7 py-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d66408]"
              >
                Klaim Bonus Sekarang
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
