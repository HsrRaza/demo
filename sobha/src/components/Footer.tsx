import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="section-padding">
        <div className="container-max">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-warm-bronze-400">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <MapPin size={20} className="text-warm-bronze-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Chikmagalur, Karnataka</p>
                    <p className="text-sm text-gray-300">Coffee Country Hub</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone size={20} className="text-warm-bronze-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">+91 9036576977</p>
                    <p className="text-sm text-gray-300">WhatsApp Available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail size={20} className="text-warm-bronze-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">swaroop.c2@gmail.com</p>
                    <p className="text-sm text-gray-300">Email Support</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock size={20} className="text-warm-bronze-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">24/7 Service</p>
                    <p className="text-sm text-gray-300">Always available for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-warm-bronze-400 mb-4">
                Quick Links
              </h3>
              <nav className="space-y-2">
                <a
                  href="#services"
                  className="block text-gray-300 hover:text-warm-bronze-400 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#packages"
                  className="block text-gray-300 hover:text-warm-bronze-400 transition-colors"
                >
                  Packages
                </a>
                <a
                  href="#stays"
                  className="block text-gray-300 hover:text-warm-bronze-400 transition-colors"
                >
                  Stays
                </a>
                <a
                  href="#why-us"
                  className="block text-gray-300 hover:text-warm-bronze-400 transition-colors"
                >
                  Why Us
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-warm-bronze-400 transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Brand Info */}
            <div>
              <h3 className="text-lg font-semibold text-warm-bronze-400 mb-4">
                Sobha Tours & Travels
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Bespoke coffee land journeys crafted by local experts. Explore misty peaks, lush plantations, and hidden waterfalls with verified stays and 24/7 support.
              </p>
              <p className="text-gray-400 text-xs">
                Premium travel experiences in Chikmagalur, Karnataka
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
              <p>
                © {currentYear} Sobha Tours & Travels. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-warm-bronze-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-warm-bronze-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
