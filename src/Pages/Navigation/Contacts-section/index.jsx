import React from "react";
import HeadingText from "../../../components/HeadingText";
import { Link } from "react-router-dom";
import ContactVaiCall from "./ContactVaiCall";
import ContactForm from "./ContactForm";
const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="py-22 border-t-2 border-b-2 border-gray-100"
    >
      <div className="flex flex-col justify-center items-center mb-8 ">
        <p className="uppercase text-md mb-4 tracking-widest">Contact</p>
        <HeadingText textForHeading="Connect with me" />
      </div>

      <div className="grid grid-cols-12 max-w-5xl mx-auto mt-16 gap-10">
        <ContactVaiCall
          contactImage={"/assets/contact1.png"}
          ContactEmail={"augustinehyacinth3@gmail.com"}
          ContactPhoneNumber={"+234 9122503121"}
          contactMediaManager={"Nevine Acotanza"}
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactsSection;
