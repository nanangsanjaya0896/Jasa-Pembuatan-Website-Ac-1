import { ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

export default function FounderNote() {
  return (
    <section className="relative bg-[#faf7f1] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Portrait */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-arctic/[0.08]" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src="/images/founder.jpg"
                alt="Rizky Ardiansyah — Pendiri ARKTIS Home Service"
                className="aspect-[4/4.6] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-arctic/60 to-transparent p-6 pt-16">
                <p className="font-hand text-3xl text-white/95">Rizky Ardiansyah</p>
                <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.24em] text-white/70">
                  Pendiri & CEO
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 animate-float rounded-2xl bg-white px-5 py-4 shadow-lift md:-right-8">
              <p className="display text-[26px] font-extrabold leading-none text-arctic">11<span className="text-flame">th</span></p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slatebody/70">
                pengalaman teknis
              </p>
            </div>
          </Reveal>

          {/* Message */}
          <div>
            <Reveal>
              <Eyebrow>Kata Pendiri</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-serif text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.15] text-navy">
                “Saya membangun ARKTIS karena saya{" "}
                <em className="italic text-glacier">lelah kecewa.</em>”
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 max-w-xl space-y-5 text-[15px] font-light leading-relaxed text-slatebody">
                <p>
                  Dulu, setiap kali saya memanggil tukang servis AC, selalu ada saja yang
                  mengecewakan — datang terlambat, harga berubah di tengah jalan, atau hasil
                  kerjanya tidak memuaskan. Dan saya tahu, jutaan keluarga Indonesia
                  merasakan hal yang sama.
                </p>
                <p>
                  Karena itu saya mendirikan ARKTIS. Bukan sekadar bisnis servis AC — tapi
                  sebuah komitmen bahwa layanan teknisi di Indonesia bisa, dan harus, sama
                  profesionalnya dengan standar internasional.
                </p>
                <p>
                  Setiap teknisi ARKTIS adalah orang yang saya pilih sendiri, saya latih
                  langsung, dan saya percaya untuk masuk ke rumah pelanggan kami. Karena
                  bagi saya, kepercayaan adalah segalanya.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-end gap-x-10 gap-y-6">
                <div>
                  <p className="font-hand -rotate-2 text-[2rem] leading-none text-navy">Rizky Ardiansyah</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slatebody/70">
                    Rizky Ardiansyah · Pendiri & CEO
                  </p>
                </div>
                <a
                  href="#kontak"
                  className="group inline-flex items-center gap-2 text-[13px] font-bold text-glacier"
                >
                  <span className="u-link">Baca kisah pendirian ARKTIS</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
