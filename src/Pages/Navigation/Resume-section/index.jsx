import React from "react";
import HeadingText from "../../../components/HeadingText";
import ResumeNav from "./ResumeNav";

const ResumeSection = () => {
  return (
    <section id="resume" className="md:px-8 px-4 md:py-16 py-8">
      <div className="flex flex-col justify-center items-center mb-8 ">
        <p className="uppercase text-md mb-4 tracking-widest">
          1+ years of experience
        </p>
        <HeadingText textForHeading={"My Resume"} />
      </div>

      <ResumeNav />
    </section>
  );
};

export default ResumeSection;
