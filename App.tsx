
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TourCard from './components/TourCard';
import ChatBot from './components/ChatBot';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import LibroReclamaciones from './components/LibroReclamaciones';
import Hero from './components/sections/Hero';
import QuickInfo from './components/sections/QuickInfo';
import HistoricTimeline from './components/sections/HistoricTimeline';
import AboutUs from './components/sections/AboutUs';
import Contact from './components/sections/Contact';
import { TOUR_POINTS } from './constants';
import { Page, PreFilledBooking } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReclamosOpen, setIsReclamosOpen] = useState(false);
  const [preFilledData, setPreFilledData] = useState<PreFilledBooking | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'info' | 'error' } | null>(null);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (data?: PreFilledBooking) => {
    if (data) setPreFilledData(data);
    else setPreFilledData(null);
    setIsBookingOpen(true);
  };

  const showToast = (msg: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ msg, type });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <div className="animate-in fade-in duration-700">
            <Hero 
              onOpenBooking={() => handleOpenBooking()} 
              onExploreRoutes={() => handlePageChange('ruta')} 
            />
            <QuickInfo />
            <HistoricTimeline />
          </div>
        );
      case 'ruta':
        return (
          <section className="py-40 bg-stone-50 min-h-screen">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mb-24 text-center md:text-left">
                <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.5em] block mb-6">EXPLORADOR 2026</span>
                <h2 className="text-6xl md:text-9xl font-serif font-black text-stone-900 leading-[0.85] tracking-tighter italic">Nuestras <br/> Rutas</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {TOUR_POINTS.map(point => <TourCard key={point.id} point={point} />)}
              </div>
            </div>
          </section>
        );
      case 'nosotros':
        return <AboutUs />;
      case 'contacto':
        return <Contact onSuccess={showToast} />;
      default:
        return (
          <div className="py-40 text-center">
            <h2 className="text-4xl font-serif italic">Sección en desarrollo...</h2>
            <button onClick={() => handlePageChange('inicio')} className="mt-8 text-yellow-600 font-bold uppercase tracking-widest">← Volver al Inicio</button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-yellow-500 selection:text-stone-900">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} onOpenBooking={() => handleOpenBooking()} />
      
      {renderContent()}
      
      <Footer onOpenReclamos={() => setIsReclamosOpen(true)} />

      <BookingModal 
        isOpen={isBookingOpen} 
        initialData={preFilledData}
        onClose={() => { setIsBookingOpen(false); setPreFilledData(null); }} 
        onConfirm={(msg, type) => showToast(msg, type)} 
      />
      
      <LibroReclamaciones 
        isOpen={isReclamosOpen} 
        onClose={() => setIsReclamosOpen(false)} 
        onSubmit={(msg, type) => showToast(msg, type)} 
      />
      
      {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      
      <ChatBot onStartBooking={handleOpenBooking} />
    </div>
  );
};

export default App;
