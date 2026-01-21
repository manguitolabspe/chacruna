
import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';
import { PreFilledBooking } from '../types';
import Calendar from './ui/Calendar';

interface BookingModalProps {
  isOpen: boolean;
  initialData?: PreFilledBooking | null;
  onClose: () => void;
  onConfirm: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, initialData, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    nombre: '',
    personas: 1,
    tour: 'Ruta Patrimonial (Cine & Muelle)'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nombre: initialData.nombre || '',
        personas: initialData.personas || 1,
        tour: initialData.tour || 'Ruta Patrimonial (Cine & Muelle)'
      });
      if (initialData.fecha) setSelectedDate(initialData.fecha);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: string[] = [];
    if (!formData.nombre.trim()) newErrors.push('nombre');
    if (!selectedDate) newErrors.push('fecha');
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onConfirm("Por favor, completa los campos resaltados.", 'error');
      return;
    }

    setIsRedirecting(true);
    const fechaStr = selectedDate!.toLocaleDateString('es-ES', { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

    const mensaje = `Hola *Chacruna Eco Tours*! 👋%0A%0AMe gustaría confirmar una reserva para la siguiente aventura:%0A%0A` +
      `📌 *Tour:* ${formData.tour}%0A` +
      `👤 *Nombre:* ${formData.nombre}%0A` +
      `👥 *Pasajeros:* ${formData.personas}%0A` +
      `📅 *Fecha:* ${fechaStr}%0A%0A` +
      `Quedo a la espera de las instrucciones para el abono del 50%. ¡Gracias! ✨`;

    const cleanPhone = BUSINESS_INFO.telefono.replace(/\s/g, '');
    const whatsappUrl = `https://wa.me/51${cleanPhone}?text=${mensaje}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onConfirm(`¡Redirigiendo a WhatsApp para finalizar!`, 'success');
      setIsRedirecting(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95">
        
        <div className="bg-stone-950 p-10 relative flex justify-between items-center text-white shrink-0 overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1544551763-47a0159f9234?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Lobitos" />
           </div>
           <div className="relative z-10 text-left">
              <h2 className="text-2xl font-serif font-black italic">RESERVA</h2>
              <p className="text-[9px] uppercase tracking-[0.4em] text-yellow-500 font-black">Finaliza en WhatsApp</p>
           </div>
           <button onClick={onClose} className="relative z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
             <i className="fa-solid fa-xmark"></i>
           </button>
        </div>

        <div className="flex-grow overflow-y-auto p-10 space-y-6">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest block text-left">Nombre del Explorador</label>
              <input 
                type="text" 
                value={formData.nombre}
                onChange={(e) => {
                  setFormData({...formData, nombre: e.target.value});
                  setErrors(errors.filter(err => err !== 'nombre'));
                }}
                placeholder="Ej. Juan Pérez" 
                className={`w-full bg-stone-50 border rounded-2xl px-6 py-4 text-sm outline-none transition-all ${errors.includes('nombre') ? 'border-red-500 bg-red-50 animate-shake' : 'border-stone-100 focus:ring-2 focus:ring-yellow-500'}`} 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest block text-left">Experiencia Elegida</label>
              <select 
                value={formData.tour}
                onChange={(e) => setFormData({...formData, tour: e.target.value})}
                className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 text-sm outline-none cursor-pointer hover:bg-white transition-colors"
              >
                <option>Ruta Patrimonial (Cine & Muelle)</option>
                <option>Cueva Capullana (Místico)</option>
                <option>Mirador La Bola (Naturaleza)</option>
                <option>Sichez & Sabores</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest block text-left">Pasajeros</label>
                  <input 
                    type="number" 
                    min="1"
                    value={formData.personas}
                    onChange={(e) => setFormData({...formData, personas: parseInt(e.target.value) || 1})}
                    className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 text-sm outline-none" 
                  />
               </div>
               <div className="space-y-2 relative">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest block text-left">Fecha del Tour</label>
                  <button 
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className={`w-full bg-stone-50 border rounded-2xl px-6 py-4 text-sm text-left truncate transition-all ${errors.includes('fecha') ? 'border-red-500 bg-red-50' : 'border-stone-100'} ${selectedDate ? 'border-yellow-500 text-stone-900 font-bold' : ''}`}
                  >
                    {selectedDate ? selectedDate.toLocaleDateString() : 'Elegir Día'}
                  </button>

                  {showCalendar && (
                    <div className="absolute bottom-full mb-2 right-0 z-50 w-[280px] animate-in slide-in-from-bottom-4">
                       <Calendar 
                        selectedDate={selectedDate} 
                        onSelect={(date) => { setSelectedDate(date); setShowCalendar(false); setErrors(errors.filter(e => e !== 'fecha')); }} 
                       />
                    </div>
                  )}
               </div>
            </div>

            <button 
              type="submit" 
              disabled={isRedirecting}
              className={`w-full bg-yellow-500 text-stone-900 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-stone-900 hover:text-white transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3 ${isRedirecting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isRedirecting ? (
                <>REDIRECCIONANDO... <i className="fa-solid fa-spinner animate-spin"></i></>
              ) : (
                <>ENVIAR POR WHATSAPP <i className="fa-brands fa-whatsapp text-lg"></i></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
