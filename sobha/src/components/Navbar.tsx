'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Experiences', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Plan a trip', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/9036576977?text=Hello%20Sobha%20Tours!%20I%20would%20like%20to%20know%20more%20about%20your%20services.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/15 bg-malnad-green-900/30 text-white backdrop-blur-md">
      <nav className="container-max px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Sobha Tours & Travels
            </h1>
            <p className="text-xs md:text-sm text-white/65">
              Chikmagalur, Karnataka
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center gap-2 rounded-full bg-[#d5ae5a] px-5 py-2.5 text-sm font-bold text-malnad-green-900 transition hover:bg-[#ebcb85]"
          >
            <Phone size={18} />
            <span className="text-sm">WhatsApp Quote</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-xl border border-white/10 bg-malnad-green-900/95 p-3 space-y-1 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-white/85 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full rounded-lg bg-[#d5ae5a] px-5 py-3 text-malnad-green-900 flex items-center justify-center gap-2 font-bold"
            >
              <Phone size={18} />
              <span>WhatsApp Quote</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
