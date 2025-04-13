import React from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  name: string;
  disabled?: boolean
};

const Button: React.FC<Props> = ({ type = "button", name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-blue-400 dark:disabled:bg-blue-500 cursor-pointer disabled:cursor-not-allowed"
    >
      {name}
    </button>
  );
};

export default Button;
