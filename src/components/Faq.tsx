import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE, Reveal, SectionHead, WaLink } from "./ui";

const FAQS = [
  {
    q: "Seberapa sering AC harus dicuci?",
    a: "Idealnya setiap 2–3 bulan sekali untuk AC yang digunakan sehari-hari. Jika ada hewan peliharaan di rumah atau lingkungan berdebu, direkomendasikan setiap 1–2 bulan sekali.",
  },
  {
    q: "Berapa lama proses cuci AC biasanya?",
    a: "Cuci AC standard membutuhkan sekitar 45 menit per unit, sedangkan deep cleaning 60–90 menit. Kami memberikan estimasi waktu yang akurat saat konfirmasi booking.",
  },
  {
    q: "Apakah teknisi ARKTIS membawa peralatan sendiri?",
    a: "Ya, 100%. Teknisi kami datang lengkap dengan semua peralatan dan bahan pembersih yang diperlukan. Kamu tidak perlu menyediakan apapun selain akses ke unit AC.",
  },
  {
    q: "Bagaimana jika AC saya butuh spare part baru?",
    a: "Teknisi akan menginformasikan kebutuhan spare part beserta estimasi harganya sebelum pekerjaan dimulai. Kamu bebas menentukan apakah ingin lanjut atau tidak — tanpa tekanan apapun.",
  },
  {
    q: "Apakah ada biaya tambahan di luar harga yang tertera?",
    a: "Tidak ada. Harga yang tertera adalah harga final. Satu-satunya kemungkinan biaya tambahan adalah jika dibutuhkan spare part pengganti — dan itu pun selalu dikonfirmasi terlebih dahulu denganmu.",
  },
  {
    q: "Bagaimana cara membatalkan atau mengubah jadwal?",
    a: "Kamu bisa membatalkan atau reschedule hingga 2 jam sebelum jadwal tanpa biaya apapun. Cukup hubungi kami via WhatsApp dan kami bantu atur ulang jadwalmu.",
  },
  {
    q: "Apakah ARKTIS melayani area saya?",
    a: "Saat ini ARKTIS melayani seluruh area Jabodetabek, Bandung, Surabaya, dan Semarang. Masukkan nama kecamatanmu saat booking untuk cek ketersediaan di areamu.",
  },
  {
    q: "Bagaimana jika saya tidak puas dengan hasil servis?",
    a: "Hubungi kami dalam 30 hari dan kami akan kembali memperbaiki tanpa biaya tambahan. Jika kamu masih tidak puas, kami kembalikan uangmu penuh. Kepuasanmu adalah prioritas kami.",
  },
];

function Item({ q, a, i, open, onToggle }: { q: string; a: string; i: number; open: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl transition-colors duration-300 ${open ? "bg-white shadow-card ring-1 ring-arctic/[0.06]" : "hover:bg-white/60"}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-5 px-6 py-5 text-left md:px-7"
        aria-expanded={open}
      >
        <span className={`text-[11px] font-extrabold tracking-[0.18em] ${open ? "text-flame" : "text-glacier/60"}`}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 text-[15px] font-bold tracking-tight md:text-[16px] ${open ? "text-arctic" : "text-navy/85"}`}>
          {q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-400 ${
            open ? "rotate-180 bg-arctic text-white" : "bg-ice text-glacier"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pl-[3.7rem] pr-8 text-[13.5px] leading-relaxed text-slatebody md:px-7 md:pl-[4.2rem]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative bg-ice py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHead
          eyebrow="Punya Pertanyaan?"
          title={
            <>
              Pertanyaan yang{" "}
              <em className="font-serif font-normal italic text-glacier">Sering Diajukan</em>
            </>
          }
          sub="Kami jawab semuanya, sejujur-jujurnya."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 space-y-2.5">
            {FAQS.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 flex items-center justify-center gap-2 text-[13px] font-semibold text-slatebody">
            Masih ada pertanyaan lain?
            <WaLink>Chat dengan kami</WaLink>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
