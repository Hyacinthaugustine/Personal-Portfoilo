import React, { useState } from "react";
import { HeartIcon } from "lucide-react";

const Hearth = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleLike = (className) => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setCounter(counter - 1);
      className = "";
    } else {
      setCounter(counter + 1);
      className = "bg-red-500";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <HeartIcon className="" onClick={handleLike} />
      <span>{counter}</span>
    </div>
  );
};

export default Hearth;
