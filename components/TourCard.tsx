
import React from 'react';
import { TourPoint } from '../types';
import { BUSINESS_INFO } from '../constants';

interface TourCardProps {
  point: TourPoint;
}

const TourCard: React.FC<TourCardProps> = ({ point }) => {
  return (
    <div className="group relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-stone-900 shadow-2xl aspect-[4/5] cursor-pointer">
      <img 
        src={point.image} 
        alt={point.title} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105"
      />
      
      {/* Sello de Verificación / Vive Talara */}
      <div className="absolute top-6 left-6 z-30 flex gap-2">
        <span className="bg-yellow-500 text-stone-900 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
          {point.difficulty}
        </span>
      </div>

      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-20">
        <div className="flex justify-between items-end mb-4">
          <div className="space-y-1">
             <span className="text-yellow-500 text-[9px] font-black uppercase tracking-[0.3em]">
              {point.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold italic leading-tight tracking-tighter">
              {point.title}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-white/40 uppercase">Desde</p>
            <p className="text-2xl font-serif font-bold text-yellow-500">{point.price}</p>
          </div>
        </div>
        
        <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 border-t border-white/10 pt-6">
          <p className="text-sm text-white/60 mb-6 italic line-clamp-2">
            {point.description}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-[10px] font-black text-white/80 uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {point.duration}
            </span>
            <span className="text-yellow-500 text-xs font-black uppercase tracking-widest flex items-center gap-2">
              RESERVAR <span className="text-xl">→</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent z-10"></div>
    </div>
  );
};

export default TourCard;
