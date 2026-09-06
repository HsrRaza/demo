'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Send } from 'lucide-react';

type Service = 'Car Hire' | 'Day Trip' | 'Family' | 'Couple' | 'Corporate' | 'Group' | 'Hotels & Homestays' | 'Curated Tours';

interface FormData {
  name: string;
  phone: string;
  service: Service;
  notes: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: 'Day Trip',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services: Service[] = [
    'Car Hire',
    'Day Trip',
    'Family',
    'Couple',
    'Corporate',
    'Group',
    'Hotels & Homestays',
    'Curated Tours',
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit WhatsApp number');
      return;
    }

    if (!formData.service) {
      alert('Please select a service');
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct WhatsApp message
      const message = `Hello! I'm interested in ${formData.service}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\n${formData.notes ? `Additional Notes: ${formData.notes}` : ''}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/9036576977?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: 'Day Trip',
        notes: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-cream-100">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-malnad-green-700 mb-4">
              Instant WhatsApp Inquiry
            </h2>
            <p className="text-lg text-charcoal">
              Send us your details, and we&apos;ll get back to you within minutes on WhatsApp.
            </p>
          </div>

          {/* Form Card */}
          <div className="card-base">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                  WhatsApp Number (10 digits) *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal"
                  required
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal"
                  required
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes Textarea */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-charcoal mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Tell us about your travel dates, preferences, or any special requests&hellip;"
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-bronze flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span>
                  {isSubmitting ? 'Sending...' : 'Send WhatsApp Inquiry'}
                </span>
              </button>

              {/* Trust Note */}
              <p className="text-xs text-malnad-green-600 text-center">
                ✓ Direct connection to WhatsApp | ✓ Instant reply from our team | ✓ 24/7 availability
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
