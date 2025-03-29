import React from "react";
import Button from "../Button";

const ResumeCard = ({
  eduactionPlaceAndYear,
  educationDescriptionText,
  educationTitle,
  rating,
}) => {
  return (
    <div className="relative group bg-gray-200 overflow-hidden rounded-lg shadow-2xl before:absolute before:w-10 before:h-2 before:bg-gray-200 before:top-[50px] before:left-[-18px] before:-translate-x-1/2 before:rounded-xl before:transform before:-translate-y-1/2 before:shadow-2xl group-hover:bg-red-500 group-hover:shadow-xl">
      <div className="rounded-full absolute border-4 border-gray-200  left-[-32px] top-[50px] -translate-x-1/2 -translate-y-1/2 transform bg-gray-400 p-1 group-hover:bg-red-500"></div>
      <div className="flex flex-col gap-5 p-12 group-hover:bg-red-500 text-[#3c3e41] group-hover:text-white ">
        <div className="flex justify-between items-center gap-5 mb-3">
          <div>
            <h2 className="text-3xl  text-gray-700 group-hover:text-white mb-3">
              {educationTitle}
            </h2>
            <p className="text-sm">{eduactionPlaceAndYear}</p>
          </div>

          <Button
            ButtonText={rating}
            className="text-red-500  group-hover:bg-red-600 group-hover:text-white bg-white py-2 px-4 rounded-lg"
          />
        </div>
        <hr className="text-gray-100 group-hover:text-gray-300" />

        <p className="text-lg">{educationDescriptionText}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
