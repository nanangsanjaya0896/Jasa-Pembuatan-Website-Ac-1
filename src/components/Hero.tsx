import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { EASE } from "./ui";

export default function Hero() {
  return (
    <section id="atas" className="relative min-h-[100svh] overflow-hidden bg-arctic">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero.jpg"
          alt="Teknisi ARKTIS memeriksa unit AC di ruang tamu modern"
          className="kb h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        {/* Cinematic veils */}
        <div className="absolute inset-0 bg-gradient-to-r from-arctic/85 via-arctic/45 to-arctic/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-arctic/80 via-transparent to-arctic/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-arctic to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-mint ring-1 ring-white/15 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
            Servis AC Profesional Langsung di Rumahmu
          </span>
        </motion.div>

        <h1 className="display max-w-4xl text-[clamp(2.9rem,7.6vw,6.4rem)] font-extrabold text-white">
          {["Rumahmu Layak", "Mendapatkan Udara", "yang Lebih Bersih."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: EASE }}
              >
                {i === 2 ? (
                  <>
                    yang <em className="font-serif font-normal italic text-sky">Lebih Bersih.</em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: EASE }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg"
        >
          Udara bersih. Rumah nyaman. Tangan terpercaya — teknisi bersertifikat
          dengan standar internasional, datang langsung ke depan pintumu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 rounded-full bg-flame px-8 py-[18px] text-[13px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_20px_44px_-12px_rgba(232,114,12,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d66408]"
          >
            Pesan Servis Hari Ini
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a
            href="#layanan"
            className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-[18px] text-[13px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/5"
          >
            Lihat Paket Layanan
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>

      </div>


    </section>
  );
}
