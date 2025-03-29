import React from "react";
import { motion } from "framer-motion";
import { BiSolidQuoteRight } from "react-icons/bi";
import ResumeCard from "../../../../components/ResumeCard";
import { MoveLeft, MoveRight } from "lucide-react";

const TestimonialCard = ({
  testimonial,
  handleNext,
  handlePrev,
  direction,
}) => {
  return (
    <motion.div
      key={testimonial.id}
      className="max-w-5xl grid grid-cols-12 gap-5"
      initial={{ opacity: 0.5, x: direction === "right" ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="p-7 bg-gray-200 rounded-xl col-span-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-64 hover:scale-105 transition-all duration-300 rounded-lg object-cover"
        />
        <div className="mt-5">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-1">
            {testimonial.title}
          </p>
          <p className="text-2xl capitalize">{testimonial.name}</p>
          <p className="text-sm mt-2 text-slate-500">{testimonial.position}</p>
        </div>
      </div>

      <div className="col-span-7">
        <div className="flex justify-between items-start">
          <BiSolidQuoteRight className="h-20 w-20 text-yellow-500" />
          <div className="flex justify-between items-start gap-8">
            <button
              onClick={() => handlePrev("left")}
              className=" bg-yellow-200 py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300"
            >
              <MoveLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleNext("right")}
              className=" bg-yellow-200 py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300"
            >
              <MoveRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <ResumeCard
          eduactionPlaceAndYear={testimonial.date}
          educationTitle={testimonial.title}
          educationDescriptionText={testimonial.feedback}
          rating={testimonial.rating}
        />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
