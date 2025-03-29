import React, { useState, useEffect } from "react";

const SkillLoader = ({ skillLevel }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (skillLevel > 0) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 5, skillLevel));
      }, 20);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [skillLevel]);

  return (
    <svg className="absolute h-28 w-28" viewBox="0 0 42 42">
      <circle
        className="stroke-gray-300"
        cx="21"
        cy="21"
        r="15.9155"
        strokeWidth="4"
        fill="transparent"
      />
      <circle
        className="stroke-amber-500 p-6"
        cx="21"
        cy="21"
        r="15.9155"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray="100"
        strokeDashoffset={100 - progress}
        style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-white font-bold text-lg "
      >
        {progress}%
      </text>
    </svg>
  );
};

export default SkillLoader;
