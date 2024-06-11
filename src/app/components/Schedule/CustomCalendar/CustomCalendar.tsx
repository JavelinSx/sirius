'use client';
import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';
import CalendarCells from './CalendarCells/CalendarCells';
import EventForm from './EventForm/EventForm';
import ModalWindow from '../../ui/ModalWindow/ModalWindow';
import { format } from 'date-fns';
import styles from './styles.module.scss';

type Events = {
  [date: string]: { time: string; type: string }[];
};

const CustomCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<Events>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addEvent = (date: Date, event: { time: string; type: string }) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    setEvents((prev) => ({
      ...prev,
      [formattedDate]: [...(prev[formattedDate] || []), event],
    }));
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CalendarHeader locale='ru' currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <div className={styles.calendar}>
        <CalendarDays locale='ru' currentMonth={currentMonth} />
        <CalendarCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          events={events}
          handleDayClick={handleDayClick}
        />
        <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <EventForm onAddEvent={(event) => addEvent(selectedDate, event)} onClose={closeModal} />
        </ModalWindow>
      </div>
    </>
  );
};

export default CustomCalendar;
