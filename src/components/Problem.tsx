import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight, CircleCheck, Sparkles, XCircle } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const PROBLEMS = [
  "AC sudah lebih dari 3 bulan tidak pernah dibersihkan",
  "Ruangan terasa pengap meski AC sudah dinyalakan",
  "AC mengeluarkan bau tidak sedap atau apek",
  "Tagihan listrik membengkak tanpa sebab yang jelas",
  "AC tidak sedingin dulu meski suhu sudah diatur rendah",
  "Keluarga sering bersin atau alergi di dalam rumah",
  "Ada bunyi aneh atau tetesan air dari unit AC",
];

/* ---------- Interactive Before / After slider ---------- */
function CompareSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(54);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(94, Math.max(6, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    move(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) move(e.clientX);
  };
  const stop = () => (dragging.current = false);

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerLeave={stop}
      className="group relative aspect-[4/3.4] cursor-ew-resize touch-none select-none overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-arctic/10 md:aspect-[4/4.2]"
    >
      {/* BEFORE (base) */}
      <img src="/images/before.jpg" alt="AC sebelum diservis — filter penuh debu" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      {/* AFTER (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src="/images/after.jpg" alt="AC sesudah diservis ARKTIS — bersih mengkilap" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 bg-gradient-to-t from-arctic/30 via-transparent to-transparent" />
      </div>

      {/* Labels */}
      <span className="absolute left-5 top-5 rounded-full bg-black/45 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white backdrop-blur-md">
        Sebelum
      </span>
      <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-glacier backdrop-blur-md">
        <Sparkles className="h-3 w-3" />
        Sesudah ARKTIS
      </span>

      {/* Handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
        <div className="absolute top-1/2 -ml-[22px] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-glacier shadow-lift transition-transform duration-200 group-active:scale-95">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>

      {/* bottom captions */}
      <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
        <XCircle className="h-3.5 w-3.5 text-red-300" /> Udara berat & berdebu
      </div>
      <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
        <CircleCheck className="h-3.5 w-3.5 text-mint" /> Udara ringan & sehat
      </div>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Slider */}
          <Reveal className="order-2 lg:order-1">
            <CompareSlider />
            <p className="mt-5 text-center text-[11.5px] font-semibold uppercase tracking-[0.2em] text-slatebody/60">
              Geser untuk membandingkan — kondisi nyata unit pelanggan
            </p>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>Identifikasi Masalah</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold text-arctic">
                Kapan Terakhir Kali AC-mu{" "}
                <em className="font-serif font-normal italic text-glacier">Dicuci?</em>
              </h2>
            </Reveal>

            <div className="mt-9 space-y-1">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p} delay={0.1 + i * 0.05}>
                  <div className="flex items-start gap-3.5 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-red-50/60">
                    <XCircle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-red-400/90" />
                    <p className="text-[14.5px] font-medium leading-relaxed text-slatebody">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8 rounded-2xl bg-ice/70 px-6 py-5">
                <p className="text-[14.5px] font-semibold leading-relaxed text-navy">
                  Jika kamu mengangguk pada salah satu poin di atas, AC-mu sudah
                  waktunya mendapatkan perhatian profesional.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
