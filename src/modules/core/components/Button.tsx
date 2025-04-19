import React from "react";
import { FaSpinner } from "react-icons/fa";

type Props = {
  type?: "button" | "submit" | "reset";
  name: string;
  disabled?: boolean
  loading?: boolean
};

const Button: React.FC<Props> = ({ type = "button", name, disabled = false, loading = false }) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-blue-400 dark:disabled:bg-blue-500 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center space-x-2"
    >
      {
        loading ?  (
          <>
            <FaSpinner className="inline w-4 h-4 me-3 text-white animate-spin" />
            Cargando...
          </>
        )  :  name
      }
    </button>
  );
};

export default Button;
