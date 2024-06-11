import React from 'react';

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-4 rounded shadow-lg max-w-md w-full'>
        <button onClick={onClose} className='mb-4 bg-red-500 text-white p-2 rounded'>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
