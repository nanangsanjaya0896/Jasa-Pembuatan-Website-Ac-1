import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Star } from "lucide-react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Eyebrow micro label ---------- */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.28em] ${
          dark ? "text-mint" : "text-glacier"
        }`}
      >
        {children}
      </span>
    </span>
  );
}

/* ---------- Section header ---------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  dark = false,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      <Reveal>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`display mt-6 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold ${
            dark ? "text-white" : "text-arctic"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className={`mt-5 text-[15px] leading-relaxed md:text-base ${dark ? "text-white/60" : "text-slatebody"}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  value,
  format,
  className = "",
  duration = 2.2,
}: {
  value: number;
  format: (n: number) => string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [out, setOut] = useState(() => format(0));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration, ease: EASE });
    const unsub = mv.on("change", (v) => setOut(format(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}

/* ---------- Star row ---------- */
export function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-flame">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

/* ---------- CTA buttons ---------- */
export function PrimaryBtn({
  children,
  href = "#booking",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-flame px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_16px_36px_-12px_rgba(232,114,12,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d66408] hover:shadow-[0_22px_44px_-12px_rgba(232,114,12,0.6)] ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostBtn({
  children,
  href,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full border px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "border-white/25 text-white hover:border-white/60 hover:bg-white/5"
          : "border-glacier/40 text-glacier hover:border-glacier hover:bg-ice"
      } ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------- WhatsApp tertiary link ---------- */
export function WaLink({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <a
      href="https://wa.me/6281200000001"
      target="_blank"
      rel="noreferrer"
      className={`u-link inline-flex items-center gap-2 text-[13px] font-semibold ${
        dark ? "text-white/70 hover:text-white" : "text-slatebody hover:text-arctic"
      }`}
    >
      <span className="grid h-5 w-5 place-items-center rounded-full bg-[#25D366]">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.5-.6c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.7a11.6 11.6 0 0 0 4.5 4.2c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.1Z" />
        </svg>
      </span>
      {children}
    </a>
  );
}
