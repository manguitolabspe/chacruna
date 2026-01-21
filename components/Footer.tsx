
import React from 'react';

interface FooterProps {
  onOpenReclamos: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenReclamos }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 pt-40 pb-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
          <div className="max-w-xl">
            <h3 className="text-4xl font-serif font-black italic mb-10">CHACRUNA <span className="text-yellow-500 uppercase">Tours</span></h3>
            <p className="text-white/40 mb-12 text-xl">Guardianes del patrimonio místico e histórico de Lobitos.</p>
            <button 
              onClick={onOpenReclamos} 
              className="bg-white/5 hover:bg-white/10 px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest border border-white/10 transition-all"
            >
              Libro de Reclamaciones
            </button>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="fa-brands fa-tiktok"></i></a>
            <a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-2xl hover:text-yellow-500 transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 text-center space-y-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">
            © {currentYear} Chacruna Eco Tours EIRL • Lobitos, Piura
          </p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/10 font-medium">
            Desarrollado por <span className="text-yellow-500/50 hover:text-yellow-500 transition-colors cursor-pointer">Manguito Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
