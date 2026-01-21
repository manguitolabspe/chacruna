
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Rutas', id: 'ruta' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (id: Page) => {
    onPageChange(id);
    setIsMenuOpen(false);
  };

  const isSolid = isScrolled || isMenuOpen || currentPage !== 'inicio';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isSolid ? 'bg-stone-900/95 py-3 md:py-4 backdrop-blur-xl shadow-xl' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo - Tamaño reducido en pantallas pequeñas/medianas */}
          <button onClick={() => handleNavClick('inicio')} className="flex items-center space-x-2 md:space-x-3 group z-[110] flex-shrink-0">
            <div className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center font-serif text-lg md:text-xl lg:text-2xl text-stone-900 shadow-2xl group-hover:rotate-12 transition-transform">C</div>
            <span className="text-lg md:text-xl lg:text-2xl font-serif font-bold tracking-tighter text-white whitespace-nowrap">CHACRUNA</span>
          </button>
          
          {/* Desktop/Tablet Menu - Ajuste de espaciado y fuentes para evitar colisión */}
          <div className="hidden lg:flex items-center lg:space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-yellow-500 ${
                  currentPage === item.id ? 'text-yellow-500' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={onOpenBooking}
              className="bg-yellow-500 hover:bg-white text-stone-900 px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap"
            >
              Reservar Ahora
            </button>
          </div>

          {/* Tablet/Mobile Menu Toggle - Cambia a hamburguesa antes (en md) para evitar solapamiento en pantallas estrechas */}
          <div className="flex items-center lg:hidden z-[110] space-x-4">
            {/* Botón de reserva siempre visible pero pequeño en tablet */}
            <button 
              onClick={onOpenBooking}
              className="hidden sm:block bg-yellow-500 text-stone-900 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg"
            >
              Reservar
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-stone-950 transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 p-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-3xl md:text-4xl font-serif font-black uppercase tracking-tighter transition-all ${
                currentPage === item.id ? 'text-yellow-500 scale-110' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { onOpenBooking(); setIsMenuOpen(false); }}
            className="bg-yellow-500 text-stone-900 px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl transform hover:scale-105 active:scale-95"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
