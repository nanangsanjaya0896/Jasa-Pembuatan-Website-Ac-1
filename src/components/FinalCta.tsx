import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, CheckCircle2, Loader2, Lock, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal, WaLink } from "./ui";

const inputCls =
  "w-full rounded-xl border-0 bg-clean px-4 py-3.5 text-[14px] font-medium text-arctic ring-1 ring-arctic/10 placeholder:font-normal placeholder:text-slatebody/50 focus:outline-none focus:ring-2 focus:ring-glacier transition-shadow";

export default function FinalCta() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    window.setTimeout(() => setState("done"), 1400);
  };

  return (
    <section id="booking" className="noise-dark relative overflow-hidden bg-arctic py-24 md:py-36">
      {/* Ambient image + glows */}
      <div className="absolute inset-0 opacity-[0.14]">
        <img src="/images/family.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-arctic via-arctic/60 to-arctic" />
      </div>
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-glacier/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-flame/10 blur-[130px]" />

      <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow dark>Saatnya Bertindak</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 max-w-xl text-[clamp(2.3rem,4.8vw,3.9rem)] font-extrabold text-white">
              Berikan Keluargamu Udara Terbaik yang Mereka{" "}
              <em className="font-serif font-normal italic text-sky">Layak Dapatkan.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/65">
              Jangan tunggu hingga AC rusak total atau keluarga jatuh sakit karena
              udara yang tidak bersih. Satu langkah kecil hari ini, manfaatnya
              dirasakan setahun penuh.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-9 space-y-4">
            {[
              { icon: ShieldCheck, text: "Garansi 30 hari — kembali gratis jika ada masalah" },
              { icon: CalendarCheck2, text: "Reschedule gratis hingga 2 jam sebelum jadwal" },
            ].map((r) => (
              <div key={r.text} className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.07] text-mint ring-1 ring-white/10">
                  <r.icon className="h-4.5 w-4.5" />
                </span>
                <p className="text-[13.5px] font-semibold text-white/75">{r.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 pt-7">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white/40">
                Lebih suka via WhatsApp?
              </p>
              <WaLink dark>Chat dengan Tim ARKTIS</WaLink>
            </div>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={0.15}>
          <div className="relative rounded-[2rem] bg-white p-7 shadow-lift md:p-9">
            {state === "done" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[430px] flex-col items-center justify-center text-center"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-mint/15 text-[#3e9b93]">
                  <CheckCircle2 className="h-10 w-10" strokeWidth={1.6} />
                </span>
                <h3 className="display mt-7 text-2xl font-extrabold text-arctic">
                  Jadwalmu Sedang Diamankan.
                </h3>
                <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-slatebody">
                  Tim ARKTIS akan menghubungimu via WhatsApp dalam{" "}
                  <strong className="text-navy">15 menit</strong> untuk konfirmasi detail
                  teknisi dan jadwal.
                </p>
                <p className="mt-6 rounded-full bg-ice px-5 py-2.5 text-[11.5px] font-bold tracking-wide text-glacier">
                  Ref Booking: ARTK-{new Date().getFullYear()}-0847
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="display text-[22px] font-extrabold text-arctic">Form Booking Cepat</h3>
                  <span className="rounded-full bg-mint/15 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#3e9b93]">
                    3 Menit
                  </span>
                </div>
                <p className="mt-2 text-[13px] text-slatebody">
                  Isi data cepat — booking selesai dalam 3 menit.
                </p>

                <form onSubmit={submit} className="mt-7 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slatebody/80">
                      Nama Lengkap
                    </label>
                    <input required placeholder="cth: Budi Santoso" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slatebody/80">
                      Nomor WhatsApp Aktif
                    </label>
                    <div className="flex overflow-hidden rounded-xl ring-1 ring-arctic/10 transition-shadow focus-within:ring-2 focus-within:ring-glacier">
                      <span className="grid place-items-center bg-ice px-4 text-[13px] font-bold text-glacier">+62</span>
                      <input required inputMode="tel" placeholder="812 3456 7890" className="w-full bg-clean px-4 py-3.5 text-[14px] font-medium text-arctic placeholder:font-normal placeholder:text-slatebody/50 focus:outline-none" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slatebody/80">
                        Pilih Layanan
                      </label>
                      <select required defaultValue="" className={inputCls}>
                        <option value="" disabled>Pilih…</option>
                        <option>Cuci AC Standard</option>
                        <option>Cuci AC Deep Cleaning</option>
                        <option>Servis & Perbaikan AC</option>
                        <option>Isi Ulang Freon</option>
                        <option>Pasang AC Baru</option>
                        <option>Perawatan Tahunan</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-slatebody/80">
                        Tanggal Diinginkan
                      </label>
                      <select required defaultValue="" className={inputCls}>
                        <option value="" disabled>Pilih…</option>
                        <option>Hari ini</option>
                        <option>Besok</option>
                        <option>Lusa</option>
                        <option>Akhir pekan ini</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-flame py-4.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_-12px_rgba(232,114,12,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d66408] disabled:opacity-80"
                  >
                    {state === "loading" ? (
                      <>
                        <Loader2 className="h-4.5 w-4.5 animate-spin" />
                        Memproses…
                      </>
                    ) : (
                      <>
                        Amankan Jadwal Saya Sekarang
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </>
                    )}
                  </button>

                  <p className="flex items-start justify-center gap-2 pt-1 text-center text-[11px] leading-relaxed text-slatebody/70">
                    <Lock className="mt-0.5 h-3 w-3 shrink-0" />
                    Data pribadimu aman. Tidak ada spam. Tidak ada komitmen sebelum kamu konfirmasi.
                  </p>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
