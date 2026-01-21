
import React from 'react';
import { BUSINESS_INFO } from '../../constants';

const AboutUs: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Nosotros */}
      <section className="pt-40 pb-20 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img 
              src="https://i.postimg.cc/qB1r6WTb/Gemini-Generated-Image-m5j10km5j10km5j1.png" 
              className="w-full h-full object-cover" 
              alt="Historia de Lobitos" 
            />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-yellow-500 font-black text-[10px] uppercase tracking-[0.5em] block mb-6">NUESTRA IDENTIDAD</span>
          <h2 className="text-6xl md:text-9xl font-serif font-black italic tracking-tighter leading-none mb-8">Nuestra <br/> Esencia</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-medium leading-relaxed italic">
            "En la selva, la Chacruna brinda la visión. En Lobitos, nosotros brindamos la claridad para ver el pasado que otros olvidaron."
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-yellow-500/10 rounded-[3rem] group-hover:bg-yellow-500/20 transition-all duration-700 rotate-2"></div>
               <img 
                 src="https://i.postimg.cc/NML4JyKG/Gemini-Generated-Image-d1avdwd1avdwd1av.png" 
                 className="relative rounded-[3rem] shadow-2xl z-10 grayscale group-hover:grayscale-0 transition-all duration-700 w-full object-cover"
                 alt="Guía en Lobitos - Guardianes de la Memoria"
               />
            </div>
            <div className="space-y-8">
               <h3 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 tracking-tight italic">Guardianes de la Memoria</h3>
               <p className="text-stone-600 leading-relaxed text-lg">
                 Somos un colectivo de guías oficiales nacidos y crecidos bajo el viento de Talara. Nuestra misión no es solo mostrar rutas, sino preservar los relatos de la era británica y la sabiduría ancestral de las Capullanas que habitan en cada rincón de este desierto místico.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-8">
                 <div>
                    <p className="text-3xl font-serif font-black italic text-yellow-500 mb-1">08+</p>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Años de experiencia</p>
                 </div>
                 <div>
                    <p className="text-3xl font-serif font-black italic text-yellow-500 mb-1">100%</p>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Guías Certificados</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sello de Alianza Estratégica & Promoción Vive Talara */}
      <section className="py-24 bg-stone-50 border-y border-stone-100">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
               <div className="inline-flex items-center gap-4 mb-10 px-6 py-2 bg-white rounded-full border border-stone-100 shadow-sm animate-bounce-subtle">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Operador Recomendado por Vive Talara</span>
               </div>
               
               <img 
                 src={BUSINESS_INFO.partnerLogo} 
                 className="h-24 md:h-32 mb-10 transition-all hover:scale-105" 
                 alt="Vive Talara Logo" 
               />
               
               <div className="space-y-6">
                  <h4 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 italic">Descubre toda la provincia</h4>
                  <p className="text-stone-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium italic">
                    Chacruna Eco Tours es un operador verificado dentro de <strong>Vive Talara</strong>, la guía turística digital más completa de nuestra provincia. 
                  </p>
                  <p className="text-stone-400 text-sm max-w-2xl mx-auto leading-relaxed">
                    A través de esta alianza estratégica, promovemos un turismo integrado y de calidad. Te invitamos a explorar la guía digital oficial para descubrir hoteles, restaurantes y más rutas increíbles en toda la provincia de Talara.
                  </p>
               </div>

               <a 
                 href={BUSINESS_INFO.partnerUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-12 bg-stone-900 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-yellow-500 hover:text-stone-900 transition-all flex items-center gap-4 shadow-xl"
               >
                 EXPLORAR LA GUÍA DIGITAL <i className="fa-solid fa-up-right-from-square text-[8px]"></i>
               </a>
               
               <div className="mt-20 pt-10 border-t border-stone-200/50 w-full grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
                  <div className="flex flex-col items-center">
                    <i className="fa-solid fa-map text-stone-400 text-xl mb-3"></i>
                    <span className="text-[8px] font-black uppercase tracking-widest">Toda la Provincia</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="fa-solid fa-mobile-screen text-stone-400 text-xl mb-3"></i>
                    <span className="text-[8px] font-black uppercase tracking-widest">App Guía Digital</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="fa-solid fa-circle-check text-stone-400 text-xl mb-3"></i>
                    <span className="text-[8px] font-black uppercase tracking-widest">Operadores Verificados</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutUs;
