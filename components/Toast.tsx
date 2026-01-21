
import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'info' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const config = {
    success: {
      bg: 'bg-stone-900',
      border: 'border-green-500/30',
      icon: 'fa-check-circle',
      iconCol: 'text-green-500'
    },
    error: {
      bg: 'bg-stone-900',
      border: 'border-red-500/30',
      icon: 'fa-circle-exclamation',
      iconCol: 'text-red-500'
    },
    info: {
      bg: 'bg-stone-900',
      border: 'border-yellow-500/30',
      icon: 'fa-circle-info',
      iconCol: 'text-yellow-500'
    }
  };

  const style = config[type];

  return (
    <div className="fixed top-24 right-6 z-[300] animate-in slide-in-from-right-10 fade-in duration-500">
      <div className={`${style.bg} ${style.border} border backdrop-blur-xl px-8 py-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center space-x-4 min-w-[300px]`}>
        <div className={`${style.iconCol} text-xl`}>
          <i className={`fa-solid ${style.icon}`}></i>
        </div>
        <div>
          <p className="text-white font-bold text-xs uppercase tracking-widest leading-none mb-1">
            Notificación
          </p>
          <p className="text-white/60 text-[11px] font-medium italic">
            {message}
          </p>
        </div>
        <button onClick={onClose} className="ml-4 text-white/20 hover:text-white transition-colors">
          <i className="fa-solid fa-xmark text-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default Toast;
