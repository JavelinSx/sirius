import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './styles.module.scss';

interface CalendarCellsProps {
  currentMonth: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  events: { [date: string]: { time: string; type: string }[] };
  handleDayClick: (date: Date) => void;
}

const CalendarCells: React.FC<CalendarCellsProps> = ({
  currentMonth,
  selectedDate,
  setSelectedDate,
  events,
  handleDayClick,
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { locale: ru });
  const endDate = endOfWeek(monthEnd, { locale: ru });

  const renderDay = (day: Date, formattedDate: string, cloneDay: Date) => (
    <div
      key={day.toString()}
      className={`scrollbar text-[12px] ${styles.dayCell} ${
        !isSameMonth(day, monthStart) ? 'text-gray-400' : isSameDay(day, selectedDate) ? 'bg-violet-400 text-white' : ''
      }`}
      onClick={() => {
        setSelectedDate(cloneDay);
        handleDayClick(cloneDay);
      }}
    >
      <span>{format(day, 'd', { locale: ru })}</span>
      {events[formattedDate] &&
        events[formattedDate].map((event, index) => (
          <div
            key={index}
            className='bg-violet-200 border p-1 rounded-md mt-1 self-start w-full text-blue-800 flex flex-col items-start'
          >
            <p className='text-[12px]'>{event.time}</p>
            <p className='text-[10px]'>{event.type}</p>
          </div>
        ))}
    </div>
  );

  const renderWeek = (startDay: Date) => {
    const days = [];
    let day = startDay;

    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, 'yyyy-MM-dd', { locale: ru });
      const cloneDay = day;
      days.push(renderDay(day, formattedDate, cloneDay));
      day = addDays(day, 1);
    }
    return (
      <div key={day.toString()} className='grid grid-cols-7'>
        {days}
      </div>
    );
  };

  const renderCells = () => {
    const rows = [];
    let day = startDate;

    while (day <= endDate) {
      rows.push(renderWeek(day));
      day = addDays(day, 7);
    }
    return <div>{rows}</div>;
  };

  return <div>{renderCells()}</div>;
};

export default CalendarCells;
