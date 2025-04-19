import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";

type Props = {
  message: string;
  duration?: number;
  onClose: () => void;
  type?: 'success' | 'error'
};

const Toast: React.FC<Props> = ({ message, duration = 5000, onClose, type = 'success' }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed w-full top-5 max-w-xs right-5">
      <div className="flex items-center p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800">
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8">
          {
            type === 'success' ? <FaCheckCircle className="text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" /> : <IoMdCloseCircle className=" text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200" />
          } 
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          onClick={onClose}
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <MdClose className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
