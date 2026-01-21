
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const LibroReclamaciones: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    email: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSend = () => {
    const newErrors = [];
    if (!formData.nombre) newErrors.push('nombre');
    if (!formData.dni) newErrors.push('dni');
    if (!formData.email) newErrors.push('email');
    if (!formData.mensaje) newErrors.push('mensaje');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      onSubmit("Por favor, completa todos los campos del formulario.", 'error');
      return;
    }

    onSubmit("Reclamo enviado satisfactoriamente. Se le enviará una copia a su correo.", 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="bg-stone-100 p-6 flex justify-between items-center border-b">
          <div className="flex items-center space-x-3">
            <img src="https://www.indecopi.gob.pe/image/layout_icon?img_id=20101&t=1708453483984" alt="Libro Reclamaciones" className="h-10" />
            <div>
              <h2 className="text-xl font-bold text-stone-800 uppercase text-xs tracking-tighter">Libro de Reclamaciones Virtual</h2>
              <p className="text-[10px] text-stone-500 uppercase">{BUSINESS_INFO.razonSocial} | RUC: {BUSINESS_INFO.ruc}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Nombres y Apellidos" 
              className={`w-full bg-stone-50 border rounded-xl px-4 py-3 outline-none ${errors.includes('nombre') ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-yellow-500'}`}
              onChange={(e) => { setFormData({...formData, nombre: e.target.value}); setErrors(errors.filter(err => err !== 'nombre')); }}
            />
            <input 
              type="text" 
              placeholder="DNI / CE" 
              className={`w-full bg-stone-50 border rounded-xl px-4 py-3 outline-none ${errors.includes('dni') ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-yellow-500'}`}
              onChange={(e) => { setFormData({...formData, dni: e.target.value}); setErrors(errors.filter(err => err !== 'dni')); }}
            />
            <input 
              type="email" 
              placeholder="Correo Electrónico" 
              className={`w-full bg-stone-50 border rounded-xl px-4 py-3 outline-none ${errors.includes('email') ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-yellow-500'}`}
              onChange={(e) => { setFormData({...formData, email: e.target.value}); setErrors(errors.filter(err => err !== 'email')); }}
            />
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-bold text-stone-700">Detalle de la Queja o Reclamo</p>
            <textarea 
              className={`w-full bg-stone-50 border rounded-xl px-4 py-3 h-32 outline-none ${errors.includes('mensaje') ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-yellow-500'}`}
              placeholder="Describa los hechos..."
              onChange={(e) => { setFormData({...formData, mensaje: e.target.value}); setErrors(errors.filter(err => err !== 'mensaje')); }}
            ></textarea>
          </div>
        </div>

        <div className="p-6 bg-stone-50 border-t flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-[10px] text-stone-400 max-w-sm">La formulación del reclamo no impide acudir a otras vías de solución.</p>
          <button 
            onClick={handleSend}
            className="bg-stone-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-stone-800 w-full md:w-auto transition-all"
          >
            Enviar Reclamo
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibroReclamaciones;
