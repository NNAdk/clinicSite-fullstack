import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import DoctorsCarousel from '@/components/DoctorsCarousel';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onBookAppointment={openModal} />
        <Services onBookAppointment={openModal} />
        <About />
        <DoctorsCarousel />
      </main>
      <Footer />
      
      {/* Global Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}