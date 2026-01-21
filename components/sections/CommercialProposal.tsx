
import React from 'react';

interface CommercialProposalProps {
  onBack: () => void;
}

const CommercialProposal: React.FC<CommercialProposalProps> = ({ onBack }) => {
  const whatsappManguito = "https://wa.me/51961360935?text=Hola%20Manguito%20Labs%2C%20quiero%20adquirir%20el%20servicio%20de%20desarrollo%20web%20para%20Chacruna%20Eco%20Tours.%20Acepto%20la%20propuesta%20de%20S%2F%201%2C000.";

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans animate-in fade-in duration-500">
      {/* Header Local de la Propuesta - Sin botón de volver */}
      <nav className="py-6 border-b border-stone-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-yellow-500 font-bold">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <span className="font-bold tracking-tighter uppercase text-xs">Propuesta de Desarrollo</span>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-widest bg-stone-100 px-6 py-3 rounded-full text-stone-500 italic">
              Propuesta Técnica Exclusiva para Chacruna
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="text-yellow-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">TRANSFORMACIÓN DIGITAL 2026</span>
          <h1 className="text-5xl md:text-7xl font-serif font-black italic tracking-tighter leading-none mb-8">
            Una plataforma diseñada para <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">vender experiencias.</span>
          </h1>
          <p className="text-stone-500 text-lg md:text-xl leading-relaxed font-medium italic mb-12">
            "No es solo una página web; es un sistema de reserva optimizado para convertir curiosos en exploradores confirmados."
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-2 bg-stone-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-500">Fast Loading</div>
            <div className="px-6 py-2 bg-stone-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-500">Mobile First</div>
            <div className="px-6 py-2 bg-stone-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-500">Sales Focused</div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 bg-stone-900 text-white rounded-t-[5rem]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="space-y-6 p-8 border border-white/5 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-stone-900 text-2xl">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold italic">Automatización WhatsApp</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Sistema que pre-llena los datos de reserva (tour, fecha, pasajeros). El dueño recibe el pedido listo para confirmar, ahorrando 15 min de chat por cliente.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-stone-900 text-2xl">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold italic">Velocidad de Carga SPA</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Navegación instantánea sin recargas de página. Ideal para turistas con señal inestable en Lobitos que necesitan información rápida.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-stone-900 text-2xl">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold italic">Bitácora Patrimonial</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Sección educativa con los 10 hitos históricos. Posiciona a Chacruna como expertos y guardianes de la memoria, no solo como transporte.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-stone-900 text-2xl">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold italic">Formalidad y Confianza</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Incluye Libro de Reclamaciones Virtual y sellos de Mincetur. Fundamental para captar turistas extranjeros que buscan seguridad legal.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-stone-900 text-2xl">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold italic">Experiencia Mobile-First</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Diseñada específicamente para smartphones. Botones grandes y legibilidad perfecta para reservas "al paso" o desde la playa.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 rounded-[3rem] bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-stone-900 text-2xl">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold italic">Alianza Vive Talara</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Integración visual con la guía oficial de la provincia, otorgando "Prueba Social" y respaldo institucional de inmediato.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 italic">¿Por qué esta solución es diferente?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-100 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="p-10 bg-stone-50 border-r border-stone-100 text-left">
              <h4 className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-6">Web Tradicional / Facebook</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-xs text-stone-500 italic"><i className="fa-solid fa-xmark text-red-500"></i> Desorden de información.</li>
                <li className="flex gap-3 text-xs text-stone-500 italic"><i className="fa-solid fa-xmark text-red-500"></i> El cliente pregunta 20 veces lo mismo.</li>
                <li className="flex gap-3 text-xs text-stone-500 italic"><i className="fa-solid fa-xmark text-red-500"></i> Carga lenta en el desierto.</li>
                <li className="flex gap-3 text-xs text-stone-500 italic"><i className="fa-solid fa-xmark text-red-500"></i> Imagen de negocio informal.</li>
              </ul>
            </div>
            <div className="p-10 bg-stone-900 text-white text-left">
              <h4 className="text-yellow-500 font-black text-[10px] uppercase tracking-widest mb-6">Esta Webapp</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-xs italic"><i className="fa-solid fa-check text-yellow-500"></i> Rutas claras y precios a la vista.</li>
                <li className="flex gap-3 text-xs italic"><i className="fa-solid fa-check text-yellow-500"></i> Datos de reserva llegan listos al WA.</li>
                <li className="flex gap-3 text-xs italic"><i class="fa-solid fa-check text-yellow-500"></i> Carga instantánea (Ultra ligera).</li>
                <li className="flex gap-3 text-xs italic"><i className="fa-solid fa-check text-yellow-500"></i> Estatus de Operador Premium.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="py-24 bg-yellow-500 rounded-b-[5rem]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl font-serif font-black italic text-stone-900 mb-8 tracking-tighter">Propuesta de Inversión</h2>
          <div className="bg-stone-900 p-12 rounded-[4rem] shadow-2xl text-white">
            <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">DESARROLLO COMPLETO</p>
            <div className="mb-6">
              <p className="text-stone-500 text-lg line-through decoration-red-500/50 decoration-2 font-serif italic mb-1">S/ 2,500 PEN</p>
              <p className="text-6xl font-serif font-black italic mb-2">S/ 1,000 <span className="text-sm uppercase tracking-widest text-white/40">PEN</span></p>
              <div className="inline-block bg-yellow-500 text-stone-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Impulso al Turismo Local -60%
              </div>
            </div>
            <p className="text-white/50 text-[11px] leading-relaxed italic mb-8 max-w-xs mx-auto">
              "Precio especial por lanzamiento y alianza estratégica para digitalizar los operadores de Lobitos."
            </p>
            
            <div className="border-t border-white/10 pt-8 space-y-4 text-left">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span className="text-white/60">Entrega Estimada</span>
                <span className="text-yellow-500">10 Días Útiles</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className="text-white/60">Hosting & Dominio Anual</span>
                <div className="text-right">
                    <span className="text-green-400 block">1er Año GRATIS</span>
                    <span className="text-white/20 text-[8px] lowercase">(S/ 350 desde 2do año)</span>
                </div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span className="text-white/60">Soporte Técnico</span>
                <span className="text-yellow-500">Incluido (1 mes)</span>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <a 
                href={whatsappManguito}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-stone-900 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:scale-105 transition-transform shadow-2xl text-center"
              >
                ACEPTAR PROPUESTA
              </a>
              
              <button 
                onClick={onBack}
                className="block w-full border border-white/20 text-white/60 py-4 rounded-3xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 hover:text-white transition-all"
              >
                VER DEMO EN VIVO <i className="fa-solid fa-eye ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Propuesta elaborada por Manguito Labs</p>
        </div>
      </footer>
    </div>
  );
};

export default CommercialProposal;
