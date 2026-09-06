import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import TravelInquiryBar from './TravelInquiryBar';

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden px-4 pb-16 pt-28 md:min-h-[780px] md:px-6 md:pt-36 lg:px-8">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/malnad-hero.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,25,16,.87)_0%,rgba(9,35,22,.63)_48%,rgba(8,22,14,.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-malnad-green-900/70 to-transparent" />

      <div className="container-max relative">
        <div className="max-w-4xl text-center mx-auto mb-10 md:mb-14">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <MapPin size={14} className="text-warm-bronze-400" /> Chikmagalur, Karnataka
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white md:text-6xl lg:text-7xl">
            Find your calm in the <span className="text-[#e8c98b]">coffee hills.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
            Thoughtfully planned Chikmagalur escapes—private drives, estate stays, and local trails shaped around your pace.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <TravelInquiryBar />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">
          <span className="inline-flex items-center gap-2"><Sparkles size={15} className="text-[#e8c98b]" /> 5,000+ happy travellers</span>
          <span className="hidden sm:block text-white/40">•</span>
          <span>15 years of local knowledge</span>
          <span className="hidden sm:block text-white/40">•</span>
          <span>Always-on WhatsApp support</span>
        </div>
        <a href="#services" className="mx-auto mt-10 flex w-fit items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white">
          Explore journeys <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
