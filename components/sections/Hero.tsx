
import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRoutes: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRoutes }) => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/RZdSV2qL/Gemini-Generated-Image-mn0l91mn0l91mn0l.png" 
          className="w-full h-full object-cover scale-105 opacity-60"
          alt="Lobitos Místico - Chacruna Eco Tours"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-32 md:pb-40 text-center md:text-left">
        <div className="max-w-5xl">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6 animate-in slide-in-from-left-8 duration-700">
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 font-black text-[10px] md:text-[12px] uppercase tracking-[0.5em]">
              EXPERIENCIAS CERTIFICADAS • LOBITOS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-serif font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
            EL LADO <span className="italic text-yellow-500">MÍSTICO</span> <br className="hidden sm:block"/> 
            DE TALARA.
          </h1>
          
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto md:mx-0 mb-12 font-medium leading-relaxed drop-shadow-md">
            Descubre la historia del primer campamento petrolero y la energía ancestral de las Capullanas con guías oficiales de la zona.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
            <button 
              onClick={onOpenBooking} 
              className="bg-yellow-500 text-stone-900 px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl active:scale-95 text-center shadow-yellow-500/20"
            >
              COTIZAR AVENTURA →
            </button>
            <button 
              onClick={onExploreRoutes}
              className="border border-white/40 text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-center backdrop-blur-md"
            >
              EXPLORAR RUTAS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
