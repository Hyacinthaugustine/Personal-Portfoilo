import React from "react";
import HeadingText from "../../../components/HeadingText";
import Clients from "./clients";

const Testimonial = () => {
  return (
    <section id="clients" className="py-16 p-6">
      <div className=" mb-8 ">
        <p className="uppercase text-md mb-4 tracking-widest">
          Popular Clients
        </p>
        <HeadingText textForHeading={"awesome clients"} />
      </div>

      <Clients />
    </section>
  );
};

export default Testimonial;
