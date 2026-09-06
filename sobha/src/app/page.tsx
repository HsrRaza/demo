import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Lead Form / Inquiry */}
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
