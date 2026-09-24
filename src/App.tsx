import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SubHeadline from "./components/SubHeadline";
import CtaOne from "./components/CtaOne";
import SocialProof from "./components/SocialProof";
import Problem from "./components/Problem";
import Offer from "./components/Offer";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Bonus from "./components/Bonus";
import FounderNote from "./components/FounderNote";
import FinalCta from "./components/FinalCta";
import Trust from "./components/Trust";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function WaFloat() {
  return (
    <motion.a
      href="https://wa.me/6281200000001"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp ARKTIS"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none translate-x-2 rounded-full bg-arctic px-4 py-2.5 text-[12px] font-bold text-white opacity-0 shadow-lift transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Butuh bantuan? Chat kami
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_14px_32px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <svg viewBox="0 0 24 24" className="relative h-6 w-6 fill-white">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.5-.6c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.7a11.6 11.6 0 0 0 4.5 4.2c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.1Z" />
        </svg>
      </span>
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <SubHeadline />
        <CtaOne />
        <SocialProof />
        <Problem />
        <Offer />
        <Features />
        <Benefits />
        <Testimonials />
        <Gallery />
        <Bonus />
        <FounderNote />
        <FinalCta />
        <Trust />
        <Faq />
      </main>
      <Footer />
      <WaFloat />
    </div>
  );
}
