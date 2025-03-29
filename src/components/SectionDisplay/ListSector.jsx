import React, { useState } from "react";

const ListSelector = ({ items, onSelect, selectedItem, displayComponent }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 h-full ">
        <ul className="flex justify-between flex-col bg-gray-200 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden items-center sticky top-7 ">
          {items.map((item) => (
            <li
              key={item.key}
              onClick={() => onSelect(item.key)}
              className="bg-[#edede9] px-12 w-full text-center py-6 text-lg text-teal-400 flex-1 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)]"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {displayComponent}
    </div>
  );
};

export default ListSelector;
