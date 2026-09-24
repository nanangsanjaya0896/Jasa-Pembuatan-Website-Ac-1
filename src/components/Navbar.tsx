import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { LogoLockup } from "./Logo";

const LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Hubungi Kami", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-white/85 shadow-[0_1px_0_rgba(10,22,40,0.06)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <LogoLockup dark={!scrolled && !open} />

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`u-link text-[13px] font-semibold tracking-wide transition-colors ${
                  scrolled ? "text-slatebody hover:text-arctic" : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-arctic px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-flame"
            >
              Booking
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-arctic/10 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 rounded-3xl bg-white p-6 shadow-lift ring-1 ring-arctic/5 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-[15px] font-semibold text-arctic transition-colors hover:bg-ice"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-flame px-6 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white"
              >
                Booking Sekarang <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
