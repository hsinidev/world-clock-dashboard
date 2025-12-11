
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto m-4 p-6 border border-purple-500/50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-purple-400">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-3xl transition-colors"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="prose prose-invert max-w-none">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
