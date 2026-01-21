
import React from 'react';
import { HISTORIC_POINTS } from '../../constants';

const HistoricTimeline: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left max-w-4xl">
          <span className="text-yellow-600 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">DESCUBRIMIENTO PATRIMONIAL</span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-stone-900 tracking-tighter italic leading-none">Bitácora de los <br className="hidden md:block"/> 10 Hitos del Siglo XX</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {HISTORIC_POINTS.map((point) => (
            <div key={point.id} className="relative bg-white p-10 rounded-[3rem] border border-stone-100 hover:border-yellow-500 transition-all group hover:-translate-y-3 cursor-default shadow-sm hover:shadow-2xl hover:shadow-yellow-500/10 overflow-hidden">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-stone-50 group-hover:bg-yellow-500 transition-colors rounded-full flex items-center justify-center -rotate-12 border-4 border-white z-0 opacity-20 group-hover:opacity-100">
                  <span className="text-3xl font-serif font-black italic text-stone-300 group-hover:text-stone-900">{point.id}</span>
              </div>
              <div className="relative z-10 mb-8 w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-stone-900 transition-all duration-500 group-hover:rotate-6">
                  <i className={`${point.icon} text-2xl text-stone-400 group-hover:text-stone-900 transition-colors`}></i>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-yellow-600 transition-colors leading-tight">{point.name}</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed uppercase font-black tracking-widest opacity-80 group-hover:opacity-100">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoricTimeline;
