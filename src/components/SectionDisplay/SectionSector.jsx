import React, { useState } from "react";

const SectionSelector = ({
  sections,
  onSelect,
  selectedSection,
  displayComponent,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <nav className="flex md:flex-row flex-col justify-center gap-2 mb-3 rounded-xl overflow-hidden">
        {sections.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelect(item.key)}
            className={`px-8 py-5 text-lg text-gray-700 rounded-2xl hover:text-black shadow-2xl ${
              selectedSection === item.key ? "bg-green-300 font-bold" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {displayComponent}
    </div>
  );
};

export default SectionSelector;
