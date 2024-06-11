import React from 'react';

interface CalendarDaysProps {
  currentMonth: Date;
  locale: 'en' | 'ru';
}

const CalendarDays: React.FC<CalendarDaysProps> = ({ currentMonth, locale }) => {
  const daysOfWeekEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysOfWeekRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const daysOfWeek = locale === 'en' ? daysOfWeekEn : daysOfWeekRu;

  return (
    <div className='grid grid-cols-7'>
      {daysOfWeek.map((day, index) => (
        <div key={index} className='text-right pr-[2px] text-gray-600 text-[15px]'>
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
