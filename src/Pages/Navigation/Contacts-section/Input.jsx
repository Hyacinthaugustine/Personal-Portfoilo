import React from "react";

const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="uppercase text-md font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        className="px-5 py-4 rounded-md border-2 text-lg text-gray-600 border-gray-400 bg-gray-50"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
