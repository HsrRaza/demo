import { Shield, MapPin, Sliders, Clock } from 'lucide-react';

interface Metric {
  icon: React.ReactNode;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    label: 'Local Drivers & 4x4 Masters',
    description: 'Safe mountain & rough terrain navigation',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    label: '50+ Verified Coffee Estates',
    description: 'No surprise stay qualities, only premium picks',
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    label: 'Customizable Daily Itineraries',
    description: 'Flexible pacing, zero rush, 100% your pace',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    label: '24/7 Ground Assistance',
    description: 'Local office support right inside Chikmagalur',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-cream-100">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-warm-bronze-700">The Sobha difference</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-malnad-green-700 mb-4">
            Your time in the hills, well looked after.
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Trusted by thousands of travelers. Local expertise, premium stays, and unmatched support.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="card-base text-center hover:shadow-card-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-malnad-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {metric.icon}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-malnad-green-700 mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-charcoal">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white border border-warm-bronze-500 rounded-2xl px-8 py-6">
            <p className="text-charcoal text-center">
              <span className="text-warm-bronze-500 font-bold text-lg">5,000+</span> satisfied travelers
              <br />
              <span className="text-malnad-green-700 font-bold text-lg">15+</span> years of local expertise
              <br />
              <span className="text-warm-bronze-500 font-bold text-lg">100%</span> verified stays & drivers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
