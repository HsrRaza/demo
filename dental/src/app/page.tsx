"use client";
import { useState } from "react";
import About from "@/components/About";
import AppointmentModal from "@/components/AppointmentModal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WorkingHours from "@/components/WorkingHours";
export default function Home() { const [isBookingOpen, setBookingOpen] = useState(false); return <main className="overflow-hidden"><Navbar onBook={() => setBookingOpen(true)} /><Hero onBook={() => setBookingOpen(true)} /><Services /><About /><Testimonials /><WorkingHours onBook={() => setBookingOpen(true)} /><Footer /><AppointmentModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} /></main>; }
