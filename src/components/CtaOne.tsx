import { ArrowDown, ArrowRight, BadgeCheck, Clock3, Zap } from "lucide-react";
import { Eyebrow, Reveal, WaLink } from "./ui";

export default function CtaOne() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ice via-clean to-silver/40 py-24 md:py-36">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-sky/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-mint/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <Eyebrow>Mulai Sekarang</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold text-arctic">
              Jadwalkan Servis AC-mu{" "}
              <em className="font-serif font-normal italic text-glacier">Sekarang.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.24em] text-slatebody/80">
              Cepat · Mudah · Tanpa Antri Panjang
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-3 rounded-full bg-flame px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_-12px_rgba(232,114,12,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d66408]"
            >
              Pesan Servis Hari Ini
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#layanan"
              className="group inline-flex items-center gap-3 rounded-full border border-glacier/40 bg-white/60 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-glacier backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-glacier hover:bg-white"
            >
              Lihat Semua Paket
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-7">
              <WaLink>Atau chat langsung via WhatsApp</WaLink>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-white/70 px-4 py-2 text-[12px] font-semibold text-slatebody ring-1 ring-arctic/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-flame opacity-60" />
                <span className="h-2 w-2 rounded-full bg-flame" />
              </span>
              Slot servis hari ini terbatas — amankan jadwalmu sekarang.
            </p>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.15} className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/60">
              <img
                src="/images/booking.jpg"
                alt="Booking servis ARKTIS lewat smartphone"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/5.4]"
              />
            </div>

            {/* floating cards */}
            <div className="absolute -left-4 top-8 animate-float rounded-2xl bg-white/90 px-5 py-4 shadow-lift ring-1 ring-arctic/5 backdrop-blur-md md:-left-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ice text-glacier">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] font-extrabold text-arctic">Konfirmasi &lt; 15 menit</p>
                  <p className="text-[11px] font-medium text-slatebody">langsung setelah booking</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-6 rounded-2xl bg-arctic/95 px-5 py-4 shadow-lift backdrop-blur-md md:right-10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-mint">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] font-extrabold text-white">Teknisi terverifikasi</p>
                  <p className="text-[11px] font-medium text-white/55">ID resmi sebelum masuk rumah</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-2 md:flex">
              <Clock3 className="h-3.5 w-3.5 text-glacier/60" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier/60">
                3 menit booking
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
