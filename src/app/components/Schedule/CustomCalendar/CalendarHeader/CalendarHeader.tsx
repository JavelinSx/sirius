import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import arrowRight from '@/public/icon/arrow-right.svg';
import Image from 'next/image';

interface CalendarHeaderProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  locale: 'en' | 'ru';
}

const monthNamesRu = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const monthNamesEn = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentMonth, setCurrentMonth, locale }) => {
  const monthNames = locale === 'ru' ? monthNamesRu : monthNamesEn;

  return (
    <div className='flex justify-between items-center py-2 w-[190px]'>
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        <Image src={arrowRight} alt='arrow-icon' className='rotate-180'></Image>
      </button>
      <span className='text-base font-bold pl-4 pr-4'>
        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </span>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        <Image src={arrowRight} alt='arrow-icon'></Image>
      </button>
    </div>
  );
};

export default CalendarHeader;
