import { useState, useEffect } from "react";
import React from "react";

const HeadingText = ({ textForHeading, nameText, occupations = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(occupations[0] || "");
  const [deleting, setDeleting] = useState(true);
  const [index, setIndex] = useState(occupations[0]?.length || 0);

  useEffect(() => {
    if (occupations.length === 0) return;

    const timeout = setTimeout(() => {
      if (deleting) {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % occupations.length);
          setIndex(0);
        }
      } else {
        const currentOccupation = occupations[currentIndex];
        if (index < currentOccupation.length) {
          setDisplayText(currentOccupation.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), 500);
        }
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [index, deleting, currentIndex, occupations]);

  return (
    <h1 className="md:text-6xl text-3xl font-bold mb- capitalize">
      {textForHeading}
      <span className="text-red-400">
        {nameText || displayText}
        {!nameText && <span className="animate-blink ">|</span>}
      </span>
    </h1>
  );
};

export default HeadingText;
