'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

type TripType = 'Car Hire' | 'Day Trip' | 'Family' | 'Couple' | 'Corporate' | 'Group';

export default function TravelInquiryBar() {
  const [tripType, setTripType] = useState<TripType>('Day Trip');
  const [travelDate, setTravelDate] = useState('');
  const [guests, setGuests] = useState(1);

  const tripTypes: TripType[] = ['Car Hire', 'Day Trip', 'Family', 'Couple', 'Corporate', 'Group'];

  const handleCheckAvailability = () => {
    if (!travelDate) {
      alert('Please select a travel date');
      return;
    }

    const message = encodeURIComponent(
      `I'd like to inquire about a ${tripType} for ${guests} guest${guests > 1 ? 's' : ''} on ${travelDate}. Please send me available options.`
    );
    const whatsappUrl = `https://wa.me/9036576977?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full rounded-2xl border border-white/60 bg-[#fffcf7]/95 p-5 shadow-[0_24px_60px_rgba(0,0,0,.2)] backdrop-blur-md md:p-7">
      <h3 className="text-lg md:text-xl font-semibold text-malnad-green-900 mb-5">
        Plan your perfect escape
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Trip Type Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-charcoal">
            Trip Type
          </label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal"
          >
            {tripTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Travel Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-charcoal">
            Travel Date
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal"
          />
        </div>

        {/* Number of Guests */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-charcoal">
            Number of Guests
          </label>
          <input
            type="number"
            min={1}
            max={99}
            value={guests}
            onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-malnad-green-700 bg-white text-charcoal"
          />
        </div>

        {/* Submit Button */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-charcoal opacity-0 pointer-events-none">
            Action
          </label>
          <button
            onClick={handleCheckAvailability}
            className="w-full rounded-lg bg-malnad-green-700 px-4 py-3 font-semibold text-white transition hover:bg-malnad-green-800 flex items-center justify-center gap-2 h-[48px]"
          >
            <Search size={18} />
            <span>Check Availability</span>
          </button>
        </div>
      </div>

      <p className="text-xs text-malnad-green-600 mt-4">
        No pressure, no booking fee—just local guidance on WhatsApp.
      </p>
    </div>
  );
}
