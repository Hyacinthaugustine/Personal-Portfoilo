import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeadingText from "../../../components/HeadingText";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    image: "/assets/profile-picture.jpg",
    name: "John Doe",
    position: "CEO, Company A",
    feedback:
      "Great experience! The work was done professionally and exceeded expectations.",
    date: "Upwork - Jan 10, 2022",
    title: "Web Development",
    rating: "★★★★★",
  },
  {
    id: 2,
    image: "/assets/profile-picture.jpg",
    name: "Jane Smith",
    position: "Founder, Startup B",
    feedback:
      "Exceptional service and great communication throughout the project.",
    date: "Freelancer - Mar 15, 2023",
    title: "Mobile App Development",
    rating: "★★★★",
  },
  {
    id: 3,
    image: "/assets/profile-picture.jpg",
    name: "Alice Johnson",
    position: "Marketing Manager",
    feedback: "The best developer we've worked with. Highly recommended!",
    date: "Fiverr - June 5, 2021",
    title: "E-commerce Website",
    rating: "★★★★★",
  },

  {
    id: 4,
    image: "/assets/profile-picture.jpg",
    name: "Robert Brown",
    position: "Tech Lead, Software Co.",
    feedback:
      "orem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium, a dignissimos magnam ullam enim ipsum porro minus, perferendis ex soluta quas voluptatum, illum quo itaque amet aspernatur nisi earum.",
    date: "LinkedIn - Dec 8, 2020",
    title: "Custom Software Development",
    rating: "★★★★★",
  },
  {
    id: 5,
    image: "/assets/profile-picture.jpg",
    name: "Emily White",
    position: "Business Owner",
    feedback:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam fuga rem non sint, facere numquam aspernatur quae animi itaque eligendi, reiciendis vero.",
    date: "Direct Contract - Sep 12, 2019",
    title: "UI/UX Design",
    rating: "★★★★★",
  },
];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = (dir) => {
    setDirection(dir);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (dir) => {
    setDirection(dir);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonial" className="w-full py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <p className="uppercase text-md mb-4 tracking-widest">
          What clients say
        </p>
        <HeadingText textForHeading={"Testimonials"} />
      </div>

      <div className="flex w-full justify-center items-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={testimonials[currentIndex].id}
            testimonial={testimonials[currentIndex]}
            handleNext={handleNext}
            handlePrev={handlePrev}
            direction={direction}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ClientsSection;
