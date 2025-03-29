import React from "react";

const TimeLine = ({ StartingDate, FinishingDate, ExperienceTitle }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <small className="text-red-600 text-xl">
        <span>{StartingDate}</span> - <span>{FinishingDate}</span>
      </small>

      <h2 className="text-4xl capitalize font-bold text-gray-800 leading-1.5">
        {ExperienceTitle}
      </h2>
    </div>
  );
};

export default TimeLine;
