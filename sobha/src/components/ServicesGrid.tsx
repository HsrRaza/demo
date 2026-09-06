import {
  Zap,
  Briefcase,
  Heart,
  Clock,
  Users,
  Home,
  Map,
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Car Hire',
    description:
      'Premium sedans, rugged SUVs, and 4x4 off-road jeeps for mountain adventures.',
    tags: ['Sedans', 'SUVs', '4x4 Off-Road'],
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Corporate Trips',
    description:
      'Estate offsites, team outbound training, and conference retreats tailored to your vision.',
    tags: ['Offsites', 'Team Building', 'Retreats'],
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Couple Trips',
    description:
      'Private coffee cottages, scenic viewpoints, and candle-lit dinner setups for romance.',
    tags: ['Romance', 'Privacy', 'Scenic Views'],
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Day Trips',
    description:
      'Express sightseeing: Mullayanagiri peak, Hebbe Falls, Z Point, and temple trails.',
    tags: ['Quick Getaway', 'Sightseeing', 'Same-Day'],
    icon: <Clock className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Family Trips',
    description:
      'Kid-friendly pacing, comfortable estate villas, and safe local transit for all ages.',
    tags: ['Kid-Friendly', 'Safe', 'Comfort'],
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Group Travel',
    description:
      'College trips, trekking groups, and bonfire arrangements with 12–24 seater coaches.',
    tags: ['Large Groups', 'Trekking', 'Bonfire'],
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 7,
    title: 'Hotels & Homestays',
    description:
      'Handpicked heritage coffee estates and luxury mountain resorts for authentic stays.',
    tags: ['Heritage', 'Luxury', 'Verified'],
    icon: <Home className="w-8 h-8" />,
  },
  {
    id: 8,
    title: 'Curated Tours',
    description:
      'End-to-end guided multi-day Malnad packages with dedicated drivers and local insights.',
    tags: ['Guided', 'Multi-Day', 'All-Inclusive'],
    icon: <Map className="w-8 h-8" />,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-cream-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-warm-bronze-700">Made for your kind of getaway</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-malnad-green-700 mb-4">
            Travel, made personal.
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Whether you&apos;re planning a quiet getaway or an adventurous group expedition, we have the perfect itinerary for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-base card-hover group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-malnad-green-700 text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-warm-bronze-500 transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-malnad-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-charcoal mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-cream-100 text-malnad-green-700 text-xs font-medium rounded-full border border-malnad-green-700 border-opacity-20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
