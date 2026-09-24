export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  // Abstract AC fan blade composed as a thin ice crystal star
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4 L28.5 19.5 L24 24 L19.5 19.5 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M24 44 L28.5 28.5 L24 24 L19.5 28.5 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M6.7 14 L20.6 21.5 L24 24 L16 26.6 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M41.3 34 L27.4 26.5 L24 24 L32 21.4 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M6.7 34 L16 21.4 L24 24 L20.6 26.5 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M41.3 14 L32 26.6 L24 24 L27.4 21.5 Z" fill="currentColor" fillOpacity="0.14" />
      </g>
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
    </svg>
  );
}

export function LogoLockup({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#atas" className="group flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl transition-colors duration-300 ${
          dark ? "bg-white/10 text-sky group-hover:bg-white/15" : "bg-arctic text-white group-hover:bg-navy"
        }`}
      >
        <LogoMark className="h-6 w-6" />
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-[0.18em] ${dark ? "text-white" : "text-arctic"}`}>
          ARKTIS
        </span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[0.32em] ${dark ? "text-sky" : "text-glacier"}`}>
          HOME SERVICE
        </span>
      </span>
    </a>
  );
}
