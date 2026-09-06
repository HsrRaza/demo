# Sobha Tours & Travels - Modern Landing Page

A premium, high-converting, fully responsive landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS** for a Chikmagalur-based travel agency.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation & Setup

```bash
# Navigate to project directory
cd /home/hassanraza/demo-fre/sobha

# Install dependencies (with legacy-peer-deps for React 19 compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
sobha/
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind theme & extensions
├── postcss.config.js                 # PostCSS for Tailwind
├── .eslintrc.json                    # ESLint configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (fonts + meta tags)
│   │   ├── page.tsx                  # Main landing page composition
│   │   └── globals.css               # Tailwind directives + custom classes
│   └── components/
│       ├── Navbar.tsx                # Header with mobile menu (Client)
│       ├── HeroSection.tsx           # Hero + Travel Inquiry Bar
│       ├── TravelInquiryBar.tsx      # Interactive inquiry form (Client)
│       ├── ServicesGrid.tsx          # 8-service offerings grid
│       ├── WhyChooseUs.tsx           # Trust badges section
│       ├── LeadForm.tsx              # WhatsApp lead capture (Client)
│       └── Footer.tsx                # Footer with contact details
```

---

## 🎨 Design & Theme

### Color Palette
- **Primary Green**: `#1B3B2B` (Malnad forest) — Accent & CTA elements
- **Warm Bronze**: `#C59B27` (Coffee estate amber) — Highlights & buttons
- **Off-White**: `#FAF8F5` (Cream) — Backgrounds & cards
- **Charcoal**: `#1F2421` — Body text (high contrast readability)

### Typography
- **Headers**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (serif) — Premium, elegant
- **Body/UI**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (sans-serif) — Modern, clean

### Key Design Elements
- Soft card borders (`border-stone-200`)
- Modern rounded corners (`rounded-2xl`)
- Subtle backdrop blurs & gradients
- Smooth hover micro-transitions
- Responsive layout (mobile-first)

---

## ✨ Page Sections

### 1. **Navbar** (Sticky Header)
- Brand: "Sobha Tours & Travels" + "Chikmagalur, Karnataka" subtitle
- Navigation links: Services, Packages, Stays, Why Us, Contact
- Mobile hamburger menu with smooth drawer
- WhatsApp CTA button → `https://wa.me/9036576977`

### 2. **Hero Section**
- Headline: "Bespoke Coffee Land Journeys Crafted by Local Experts"
- Subtitle: Compelling value proposition
- **Travel Inquiry Bar** (Interactive):
  - Trip Type selector (Day Trip, Family, Couple, Corporate, Group, Car Hire)
  - Travel Date picker
  - Number of Guests input
  - "Check Availability" button → Pre-filled WhatsApp message

### 3. **Services Grid** (8 Offerings)
1. Car Hire (Sedans, SUVs, 4x4 off-road)
2. Corporate Trips (Offsites, team building, retreats)
3. Couple Trips (Private cottages, scenic views)
4. Day Trips (Mullayanagiri, Hebbe Falls, Z Point)
5. Family Trips (Kid-friendly, safe, comfortable)
6. Group Travel (College trips, trekking, bonfire)
7. Hotels & Homestays (Heritage estates, luxury resorts)
8. Curated Tours (Guided multi-day Malnad packages)

Each card includes:
- Lucide icon
- Short description
- Feature tags (pills)
- Hover animations

### 4. **Why Choose Us** (Trust Badges)
- ✓ Local Drivers & 4x4 Masters
- ✓ 50+ Verified Coffee Estates & Homestays
- ✓ Customizable Daily Itineraries
- ✓ 24/7 Ground Assistance

Trust statement: "5,000+ satisfied travelers | 15+ years expertise | 100% verified stays"

### 5. **Lead Form** (WhatsApp Inquiry)
- Full Name input (required)
- WhatsApp Number input (10-digit validation)
- Service Needed dropdown
- Additional Notes (textarea)
- Submit → Opens WhatsApp chat with pre-filled message

### 6. **Footer**
- Contact Info:
  - Address: Chikmagalur, Karnataka
  - Phone: +91 9036576977 (WhatsApp available)
  - Email: swaroop.c2@gmail.com
  - Hours: 24/7 Service
- Quick Links: Services, Packages, Stays, Why Us, Contact
- Privacy Policy, Terms of Service links
- Copyright © 2026 Sobha Tours & Travels

---

## 🔧 Configuration & Customization

### WhatsApp Number
Update WhatsApp number in multiple files:
```
src/components/Navbar.tsx          (line ~21)
src/components/TravelInquiryBar.tsx (line ~28)
src/components/LeadForm.tsx         (line ~85)
```

Replace `9036576977` with your WhatsApp Business Number.

### Contact Details
Update footer and header in:
```
src/components/Footer.tsx (line ~23-40)
src/components/Navbar.tsx (line ~18-21)
```

### Color Palette
Customize colors in:
```
tailwind.config.ts (lines 12-25)
```

Modify:
- `malnad-green` shades
- `warm-bronze` shades
- `cream` background tones
- `charcoal` text color

### Fonts
Change fonts in:
```
src/app/layout.tsx (lines 3-16)
```

Use any [Google Font](https://fonts.google.com) pair. Update `globals.css` import if needed.

---

## 📱 Responsive Breakpoints

| Screen | Behavior |
|--------|----------|
| **Mobile (< 768px)** | Single-column layout, hamburger menu, stacked forms |
| **Tablet (768px - 1024px)** | 2-column grids, expanded nav, 2×2 form layout |
| **Desktop (> 1024px)** | 4-column service grid, full horizontal nav, optimized spacing |

All sections and forms are fully responsive and tested.

---

## 🎯 WhatsApp Integration

All inquiry forms route to WhatsApp with pre-filled messages:
```
https://wa.me/9036576977?text={URL_ENCODED_MESSAGE}
```

### Message Format Examples:

**Travel Inquiry Bar:**
```
I'd like to inquire about a Day Trip for 2 guests on 2026-09-20. 
Please send me available options.
```

**Lead Form:**
```
Hello! I'm interested in Day Trip.

Name: John Doe
Phone: 9876543210
Additional Notes: Looking for weekend getaway
```

Messages open WhatsApp Web/App directly on user's device for instant engagement.

---

## 🚀 Deployment

### Vercel (Recommended for Next.js)
1. Push project to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy with one click
4. Set env variables for WhatsApp number if needed

### Other Platforms
The project builds to standard Next.js output (`/.next`). Deploy using:
```bash
npm run build
npm start
```

---

## ✅ Build & Lint Status

- **TypeScript**: ✓ Zero errors, strict mode enabled
- **ESLint**: ✓ Clean (no unescaped entities or unused imports)
- **Production Build**: ✓ Optimized (103KB shared JS, 3.36KB page size)
- **Mobile Responsiveness**: ✓ Fully tested

---

## 📝 SEO & Metadata

The project includes:
- ✓ Meta title & description
- ✓ Open Graph tags (OG title, description, image placeholders)
- ✓ Twitter Card tags
- ✓ Viewport meta tags for mobile
- ✓ Theme color for browser UI

**To add structured data (JSON-LD):**
Update `src/app/layout.tsx` metadata export to include structured JSON for local business.

---

## 🔐 Environment Variables (Optional)

Create `.env.local` for sensitive data:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=9036576977
NEXT_PUBLIC_EMAIL=swaroop.c2@gmail.com
NEXT_PUBLIC_PHONE=+919036576977
```

Then update components to use `process.env.NEXT_PUBLIC_*` instead of hardcoded values.

---

## 📦 Technologies Used

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router, server/client components |
| **TypeScript** | Strict type safety, better DX |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **Lucide React** | Premium SVG icon library |
| **next/font** | Google Fonts integration (no extra requests) |

---

## 🤝 Support & Maintenance

- **Local Dev**: `npm run dev` → http://localhost:3000
- **Lint Issues**: `npm run lint` to check
- **Build Test**: `npm run build` to verify production bundle
- **Dependencies**: Keep Next.js and Tailwind updated for security

---

## 📄 License & Credits

Built with ❤️ for Sobha Tours & Travels, Chikmagalur, Karnataka.

---

## 🎉 Next Steps

1. ✅ Deploy to Vercel or your hosting provider
2. ✅ Add Google Analytics or Vercel Analytics
3. ✅ Connect a CMS (Contentful, Strapi) for dynamic content
4. ✅ Set up email notifications for lead form submissions
5. ✅ Add image gallery for coffee estates & locations
6. ✅ Implement booking system (if needed)

Happy travels! 🏔️☕✨
