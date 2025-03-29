import React from "react";
import HeadingText from "../../../components/HeadingText";
import PortfolioCard from "./PortfolioCard";

const PorfolioSection = () => {
  return (
    <section
      id="portfolio"
      className=" min-h-screen md:px-8 px-4 md:py-16 py-8"
    >
      <div className="flex flex-col justify-center items-center mb-8 ">
        <p className="uppercase text-md mb-4 tracking-widest">
          Visit my portfolio and Keep your feedbacks
        </p>
        <HeadingText textForHeading={"My Portfolio"} />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <PortfolioCard
          projectHeading="Application"
          projectImage={"/assets/project.jpg"}
        />
        <PortfolioCard
          projectHeading="Health App"
          projectImage={"/assets/project.jpg"}
        />
        <PortfolioCard
          projectHeading="web App"
          projectImage={"/assets/project.jpg"}
        />
        <PortfolioCard
          projectHeading="ecommerce app"
          projectImage={"/assets/project.jpg"}
        />
        <PortfolioCard
          projectHeading="LMS"
          projectImage={"/assets/project.jpg"}
        />
        <PortfolioCard
          projectHeading="Google Background"
          projectImage={"/assets/project.jpg"}
        />
      </div>
    </section>
  );
};

export default PorfolioSection;
