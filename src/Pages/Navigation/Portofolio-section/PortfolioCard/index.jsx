import React from "react";
import Hearth from "./Hearth";
import { ArrowUpRight } from "lucide-react";

const PortfolioCard = ({ projectImage, projectHeading }) => {
  return (
    <div className="md:col-span-6 group rounded-2xl overflow-hidden lg:col-span-4 col-span-12 p-8 bg-gray-200 shadow-xl  ">
      <div className="w-full rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-in-out">
        <img src={projectImage} className="h-56 w-full " />
      </div>
      <div className="mt-2 p-2 bg-green-500">
        <div className="flex justify-between items-center mb-2">
          <span className="capitalize text-md text-gray-800  hover:text-gray-900">
            {projectHeading}
          </span>
          <Hearth />
        </div>

        <div className=" text-2xl leading-6 first-letter:capitalize text-gray-800">
          the service provider for design
          <ArrowUpRight className=" h-8 group-hover:block duration-500 ease-in-out inline" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
