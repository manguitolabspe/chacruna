
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../constants';

interface ContactProps {
  onSuccess: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const Contact: React.FC<ContactProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors = [];
    if (!formData.nombre) newErrors.push('nombre');
    if (!formData.email) newErrors.push('email');
    if (!formData.mensaje) newErrors.push('mensaje');
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onSuccess("Completa todos los campos para enviarnos tu mensaje.", 'error');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      onSuccess("¡Mensaje enviado! Nos pondremos en contacto muy pronto.", 'success');
      setFormData({ nombre: '', email: '', mensaje: '' });
      setIsSending(false);
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-40 pb-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Info de contacto */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.5em] block">HABLEMOS</span>
                <h2 className="text-6xl md:text-8xl font-serif font-black italic tracking-tighter leading-none text-stone-900">Tu aventura <br/> empieza aquí.</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-500 shadow-sm border border-stone-100">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">WhatsApp de Reservas</p>
                    <p className="text-xl font-bold text-stone-900 font-serif italic">+51 {BUSINESS_INFO.telefono}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-500 shadow-sm border border-stone-100">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Correo Electrónico</p>
                    <p className="text-xl font-bold text-stone-900 font-serif italic">{BUSINESS_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-500 shadow-sm border border-stone-100">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Nuestra Base</p>
                    <p className="text-xl font-bold text-stone-900 font-serif italic">{BUSINESS_INFO.direccion}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-stone-50">
              <form onSubmit={handleSend} noValidate className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-2">Nombre</label>
                  <input 
                    type="text" 
                    value={formData.nombre}
                    onChange={(e) => { setFormData({...formData, nombre: e.target.value}); setErrors(errors.filter(err => err !== 'nombre')); }}
                    placeholder="Tu nombre completo"
                    className={`w-full bg-stone-50 border rounded-2xl px-6 py-4 text-sm outline-none transition-all ${errors.includes('nombre') ? 'border-red-500 bg-red-50 animate-shake' : 'border-stone-100 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500'}`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => { setFormData({...formData, email: e.target.value}); setErrors(errors.filter(err => err !== 'email')); }}
                    placeholder="hola@ejemplo.com"
                    className={`w-full bg-stone-50 border rounded-2xl px-6 py-4 text-sm outline-none transition-all ${errors.includes('email') ? 'border-red-500 bg-red-50 animate-shake' : 'border-stone-100 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500'}`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-2">Mensaje</label>
                  <textarea 
                    value={formData.mensaje}
                    onChange={(e) => { setFormData({...formData, mensaje: e.target.value}); setErrors(errors.filter(err => err !== 'mensaje')); }}
                    placeholder="¿Cómo podemos ayudarte?"
                    className={`w-full bg-stone-50 border rounded-2xl px-6 py-4 text-sm h-32 outline-none transition-all resize-none ${errors.includes('mensaje') ? 'border-red-500 bg-red-50 animate-shake' : 'border-stone-100 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500'}`}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-stone-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-yellow-500 hover:text-stone-900 transition-all flex items-center justify-center gap-3"
                >
                  {isSending ? (
                    <>ENVIANDO... <i className="fa-solid fa-spinner animate-spin"></i></>
                  ) : (
                    <>ENVIAR MENSAJE <i className="fa-solid fa-paper-plane text-xs"></i></>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
