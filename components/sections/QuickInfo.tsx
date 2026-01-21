
import React from 'react';

const QuickInfo: React.FC = () => {
  const items = [
    { label: 'GUÍAS', val: 'Oficiales de la Zona', icon: 'fa-solid fa-user-check' },
    { label: 'PAGO', val: 'Transferencia/Yape', icon: 'fa-solid fa-mobile-screen-button' },
    { label: 'GUÍA DIGITAL', val: 'En Vive Talara App', icon: 'fa-solid fa-mobile-button' },
    { label: 'MULTIMEDIA', val: 'Fotos Incluidas', icon: 'fa-solid fa-camera' }
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-b border-stone-100">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center md:flex-row md:items-start gap-4 px-4 group">
            <div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-yellow-50 transition-colors w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <i className={`${item.icon} text-xl md:text-2xl text-yellow-500`}></i>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-sm md:text-base font-bold text-stone-900 leading-tight">{item.val}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfo;
