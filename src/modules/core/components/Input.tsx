import React from "react";

const Input: React.FC<Props> = ({
  name,
  value,
  label,
  type = "text",
  placeholder = "",
  error= "",
  required = false,
  disabled = false,
  onChange,
  onBlur
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 outline-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {
        error && (
       <p className="mt-2 text-sm text-red-600 dark:text-red-500">
         {error}
        </p>
        )
      }
    </div>
  );
};

type Props = {
  name: string;
  value: string,
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string
  required?: boolean
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
};

export default Input;
