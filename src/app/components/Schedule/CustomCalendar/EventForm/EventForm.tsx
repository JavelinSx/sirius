import React, { useState } from 'react';

interface EventFormProps {
  onAddEvent: (event: { time: string; type: string }) => void;
  onClose: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent, onClose }) => {
  const [eventTime, setEventTime] = useState('13:00-13:45');
  const [eventType, setEventType] = useState('Программирование');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent({ time: eventTime, type: eventType });
    setEventTime('13:00-13:45');
    setEventType('Программирование');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input
        type='text'
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        placeholder='Enter time (e.g., 13:00-13:45)'
        className='mb-2 p-2 border rounded'
      />
      <select value={eventType} onChange={(e) => setEventType(e.target.value)} className='mb-2 p-2 border rounded'>
        <option value='Программирование'>Программирование</option>
        <option value='Ментальная арифметика'>Ментальная арифметика</option>
        <option value='Скорочтение'>Скорочтение</option>
      </select>
      <button type='submit' className='bg-blue-500 p-2 rounded'>
        Добавить
      </button>
    </form>
  );
};

export default EventForm;
