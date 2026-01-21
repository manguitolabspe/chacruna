
import React, { useState } from 'react';
import { FAQ_DATA, BUSINESS_INFO, TOUR_POINTS } from '../constants';
import { PreFilledBooking } from '../types';
import Calendar from './ui/Calendar';

interface ChatBotProps {
  onStartBooking: (data: PreFilledBooking) => void;
}

type ChatState = 'menu' | 'faq-categories' | 'faq-questions' | 'faq-answer' | 'booking-tour' | 'booking-pax' | 'booking-date' | 'booking-name' | 'success';

const ChatBot: React.FC<ChatBotProps> = ({ onStartBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ChatState>('menu');
  
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<{q: string, a: string} | null>(null);
  const [bookingData, setBookingData] = useState<PreFilledBooking>({});

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.telefono.replace(/\s/g, '')}?text=Hola Chacruna, tengo una consulta personalizada que no encontré en el chat.`;

  const resetChat = () => {
    setState('menu');
    setActiveCategoryIndex(null);
    setActiveQuestion(null);
    setBookingData({});
  };

  const startBooking = (initialTour?: string) => {
    if (initialTour) setBookingData({ tour: initialTour });
    setState('booking-tour');
  };

  const finishBooking = (finalData: PreFilledBooking) => {
    onStartBooking(finalData);
    setIsOpen(false);
    setTimeout(resetChat, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[150]">
      {isOpen && (
        <div className="bg-white w-[90vw] md:w-96 h-[620px] mb-4 rounded-[3rem] shadow-[0_30px_90px_rgba(0,0,0,0.25)] flex flex-col border border-stone-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          
          <div className="bg-stone-900 p-7 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-stone-900 font-serif font-black italic shadow-lg">C</div>
              <div className="text-left">
                <p className="font-serif font-bold text-sm leading-none mb-1 text-white">Guía Chacruna</p>
                <p className="text-[8px] uppercase tracking-[0.2em] text-yellow-500/80 font-black">Asistente de Viajes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-2">
              <i className="fa-solid fa-xmark text-lg opacity-40 hover:opacity-100 text-white"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 bg-stone-50/50">
            {state === 'menu' && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                <h3 className="text-xl font-serif font-bold italic text-stone-900 mb-2 text-left">¡Hola!</h3>
                <p className="text-stone-500 text-sm mb-8 leading-relaxed italic text-left">"Soy el espíritu de Lobitos. ¿Cómo deseas iniciar tu viaje hoy?"</p>
                <div className="space-y-4">
                  <button onClick={() => startBooking()} className="w-full bg-yellow-500 text-stone-900 p-6 rounded-3xl flex items-center justify-between shadow-xl shadow-yellow-500/20 hover:scale-[1.02] transition-all font-black text-[10px] uppercase tracking-[0.2em]">
                    <span>⚡ Reservar Ahora</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <button onClick={() => setState('faq-categories')} className="w-full bg-white border border-stone-100 p-6 rounded-3xl flex items-center justify-between hover:border-yellow-500 transition-all font-bold text-[10px] text-stone-700 uppercase tracking-widest">
                    <span>❓ Consultas Frecuentes</span>
                    <i className="fa-solid fa-chevron-right text-stone-300"></i>
                  </button>
                  <a href={whatsappUrl} target="_blank" className="w-full bg-stone-900 text-white p-6 rounded-3xl flex items-center justify-between font-bold text-[10px] uppercase tracking-widest">
                    <span>💬 Duda Personalizada</span>
                    <i className="fa-brands fa-whatsapp text-green-400"></i>
                  </a>
                </div>
              </div>
            )}

            {state === 'faq-categories' && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <button onClick={() => setState('menu')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Volver</button>
                <h4 className="text-lg font-serif font-bold italic mb-6 text-left">¿Qué te gustaría saber?</h4>
                <div className="space-y-3">
                  {FAQ_DATA.map((cat, i) => (
                    <button key={i} onClick={() => { setActiveCategoryIndex(i); setState('faq-questions'); }} className="w-full bg-white p-5 rounded-2xl border border-stone-100 flex items-center gap-4 hover:border-yellow-500 transition-all text-left">
                      <i className={`${cat.icon} text-stone-300`}></i>
                      <span className="text-xs font-bold text-stone-700">{cat.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state === 'faq-questions' && activeCategoryIndex !== null && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <button onClick={() => setState('faq-categories')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Otras Categorías</button>
                <h4 className="text-lg font-serif font-bold italic mb-6 text-left">{FAQ_DATA[activeCategoryIndex].category}</h4>
                <div className="space-y-3">
                  {FAQ_DATA[activeCategoryIndex].questions.map((q, i) => (
                    <button key={i} onClick={() => { setActiveQuestion(q); setState('faq-answer'); }} className="w-full bg-white p-5 rounded-2xl border border-stone-100 text-left text-xs font-medium text-stone-600 hover:border-yellow-500 transition-all shadow-sm">{q.q}</button>
                  ))}
                </div>
              </div>
            )}

            {state === 'faq-answer' && activeQuestion && (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                <button onClick={() => setState('faq-questions')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Otras Preguntas</button>
                <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm">
                  <p className="font-bold text-stone-900 mb-6 text-sm text-left">{activeQuestion.q}</p>
                  <p className="text-stone-500 text-sm leading-relaxed mb-10 italic text-left">"{activeQuestion.a}"</p>
                  <div className="space-y-3 border-t border-stone-50 pt-8">
                    <button onClick={() => startBooking()} className="w-full bg-yellow-500 text-stone-900 p-4 rounded-2xl font-black text-[9px] uppercase tracking-widest shadow-lg shadow-yellow-500/10">Entendido, ¡Quiero Reservar!</button>
                  </div>
                </div>
              </div>
            )}

            {state === 'booking-tour' && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <button onClick={() => setState('menu')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Cancelar</button>
                <h4 className="text-lg font-serif font-bold italic mb-6 text-left">Paso 1: ¿Qué ruta exploramos?</h4>
                <div className="grid grid-cols-1 gap-3">
                  {TOUR_POINTS.map(t => (
                    <button key={t.id} onClick={() => { setBookingData({ ...bookingData, tour: t.title }); setState('booking-pax'); }} className="w-full bg-white p-5 rounded-2xl border border-stone-100 text-left hover:border-yellow-500 transition-all group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-black text-yellow-600 uppercase tracking-widest">{t.category}</span>
                        <span className="text-[9px] font-bold text-stone-300">{t.price}</span>
                      </div>
                      <span className="text-xs font-bold text-stone-800 group-hover:text-stone-900">{t.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state === 'booking-pax' && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <button onClick={() => setState('booking-tour')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Cambiar Ruta</button>
                <h4 className="text-lg font-serif font-bold italic mb-6 text-left">Paso 2: ¿Cuántos viajeros?</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[1, 2, 4, 6].map(n => (
                    <button key={n} onClick={() => { setBookingData({ ...bookingData, personas: n }); setState('booking-date'); }} className="bg-white p-6 rounded-2xl border border-stone-100 font-bold text-stone-800 hover:border-yellow-500 hover:bg-yellow-50 transition-all">{n} {n === 1 ? 'Viajero' : 'Viajeros'}</button>
                  ))}
                </div>
                <input type="number" placeholder="Otra cantidad..." className="w-full bg-white border border-stone-100 p-5 rounded-2xl text-xs outline-none focus:border-yellow-500" onBlur={(e) => { if(e.target.value) { setBookingData({...bookingData, personas: parseInt(e.target.value)}); setState('booking-date'); } }} />
              </div>
            )}

            {state === 'booking-date' && (
              <div className="animate-in fade-in slide-in-from-right-4 h-full flex flex-col">
                <button onClick={() => setState('booking-pax')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-4 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Cambiar Personas</button>
                <h4 className="text-lg font-serif font-bold italic mb-4 text-left">Paso 3: ¿En qué fecha?</h4>
                <Calendar 
                  selectedDate={bookingData.fecha || null} 
                  onSelect={(date) => { setBookingData({ ...bookingData, fecha: date }); setState('booking-name'); }} 
                />
                <p className="text-[9px] text-stone-400 mt-6 text-center leading-relaxed italic px-4">
                  "La energía de Lobitos es eterna, pero nuestros guías tienen cupos limitados. Elige tu día sagrado."
                </p>
              </div>
            )}

            {state === 'booking-name' && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <button onClick={() => setState('booking-date')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2"><i className="fa-solid fa-arrow-left"></i> Cambiar Fecha</button>
                <h4 className="text-lg font-serif font-bold italic mb-6 text-left">Paso 4: ¿A quién esperamos?</h4>
                <div className="space-y-6">
                  <input type="text" placeholder="Escribe tu nombre completo" className="w-full bg-white border border-stone-100 p-6 rounded-2xl text-sm font-bold text-stone-800 outline-none focus:ring-2 focus:ring-yellow-500/20 shadow-sm" onBlur={(e) => setBookingData({ ...bookingData, nombre: e.target.value })} autoFocus />
                  <button onClick={() => finishBooking(bookingData)} className="w-full bg-stone-900 text-white p-6 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-yellow-500 hover:text-stone-900 transition-all active:scale-95">Confirmar Datos →</button>
                </div>
              </div>
            )}

          </div>

          <div className="p-5 bg-white border-t border-stone-50 text-center">
            <button onClick={resetChat} className="text-[8px] font-black text-stone-300 uppercase tracking-[0.3em] hover:text-yellow-600 transition-colors">Reiniciar Conversación</button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className={`w-16 h-16 bg-yellow-500 text-stone-900 rounded-full shadow-[0_15px_50px_rgba(234,179,8,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 ${isOpen ? 'rotate-90' : 'animate-bounce-subtle'}`}>
        {isOpen ? <i className="fa-solid fa-chevron-down text-xl"></i> : <div className="relative"><i className="fa-solid fa-message text-2xl"></i><span className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">1</span></div>}
      </button>
    </div>
  );
};

export default ChatBot;
