import { Reveal } from "./ui";

export default function SubHeadline() {
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="display text-[clamp(1.45rem,3vw,2.15rem)] font-semibold leading-snug text-navy">
            AC kotor bukan hanya membuat ruangan terasa pengap — tapi juga menjadi{" "}
            <span className="whitespace-nowrap text-glacier">sarang debu, bakteri, dan kuman</span>{" "}
            yang dihirup seluruh keluargamu setiap hari.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-slatebody">
            ARKTIS HOME SERVICE hadir dengan teknisi bersertifikat, peralatan
            profesional, dan standar kebersihan tertinggi — untuk memastikan setiap
            napas di rumahmu segar, bersih, dan menyehatkan.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
