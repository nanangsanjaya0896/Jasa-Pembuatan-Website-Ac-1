import { Counter, Eyebrow, Reveal } from "./ui";

const STATS = [
  {
    value: 2847,
    format: (n: number) => `${Math.round(n).toLocaleString("id-ID")}+`,
    label: "Rumah Telah Dilayani",
    sub: "dan terus bertambah setiap hari",
  },
  {
    value: 4.9,
    format: (n: number) => `${n.toFixed(1)} / 5.0`,
    label: "Rating Kepuasan Pelanggan",
    sub: "Berdasarkan 1.847 ulasan terverifikasi",
  },
  {
    value: 98,
    format: (n: number) => `${Math.round(n)}%`,
    label: "Pelanggan Kembali Memesan",
    sub: "Karena kualitas yang konsisten",
  },
];

export default function SocialProof() {
  return (
    <section className="noise-dark relative overflow-hidden bg-navy py-24 md:py-36">
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-glacier/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-mint/10 blur-[120px]" />

      <div className="relative z-[2] mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <Eyebrow dark>Dipercaya Ribuan Keluarga</Eyebrow>
        </Reveal>

        {/* Stats */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className={"relative px-2 text-center md:px-10"}>
              <Counter
                value={s.value}
                format={s.format}
                className="display block text-[clamp(2.6rem,5vw,4.2rem)] font-extrabold text-white"
              />
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.18em] text-sky">{s.label}</p>
              <p className="mt-1.5 text-[12.5px] text-white/45">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
