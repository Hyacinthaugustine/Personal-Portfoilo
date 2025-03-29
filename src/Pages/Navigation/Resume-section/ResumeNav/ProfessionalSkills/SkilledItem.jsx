import React, { useState } from "react";
import SkillLoader from "./SkillLoader";

const SkillItem = ({ icon, className, iconClassName, skillLevel = 0 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`col-span-3 flex justify-center items-center h-32 rounded-xl relative group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {iconClassName
        ? React.cloneElement(icon, { className: iconClassName })
        : icon}

      <SkillLoader skillLevel={hovered ? skillLevel : 0} />
    </div>
  );
};

export default SkillItem;
