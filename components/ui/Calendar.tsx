
import React, { useState } from 'react';

interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  minDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelect, minDate = new Date() }) => {
  const [viewDate, setViewDate] = useState(selectedDate || new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const changeMonth = (offset: number) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
  };

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);
  const today = new Date();
  today.setHours(0,0,0,0);

  return (
    <div className="bg-white rounded-[2rem] border border-stone-100 overflow-hidden shadow-sm flex flex-col">
      <div className="bg-stone-50 p-4 flex justify-between items-center border-b border-stone-100">
        <button type="button" onClick={() => changeMonth(-1)} className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <p className="font-serif font-bold italic text-stone-900">{monthNames[month]} {year}</p>
        <button type="button" onClick={() => changeMonth(1)} className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="p-4 bg-white">
        <div className="grid grid-cols-7 mb-2">
          {weekDays.map(d => <div key={d} className="text-[8px] font-black text-stone-300 text-center uppercase py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="h-8 md:h-9"></div>
          ))}
          {Array.from({ length: totalDays }).map((_, i) => {
            const day = i + 1;
            const date = new Date(year, month, day);
            const isPast = date < today;
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const isToday = today.toDateString() === date.toDateString();

            return (
              <button
                key={day}
                type="button"
                disabled={isPast}
                onClick={() => onSelect(date)}
                className={`h-8 md:h-9 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all relative
                  ${isPast ? 'text-stone-200 cursor-not-allowed' : 'text-stone-600 hover:bg-yellow-500 hover:text-stone-900'}
                  ${isSelected ? 'bg-yellow-500 text-stone-900' : ''}
                  ${isToday && !isSelected && !isPast ? 'border border-yellow-500/30' : ''}
                `}
              >
                {day}
                {isToday && !isSelected && <span className="absolute bottom-1 w-1 h-1 bg-yellow-500 rounded-full"></span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
