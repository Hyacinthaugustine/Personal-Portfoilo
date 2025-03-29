import React, { useState } from "react";
import Input from "./Input";
// import Button from "../../../components/Button";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      number: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-gray-200 flex flex-col justify-start gap-5 col-span-7 rounded-2xl shadow-2xl"
    >
      <div className="flex justify-between items-center gap-4 mb-3">
        <div className="flex-1">
          <Input
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div className="flex-1">
          <Input
            label="Phone Number"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="07036262738"
          />
        </div>
      </div>

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example34@gmail.com"
      />
      <Input
        label="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="purpose of writing"
      />
      <div className="flex flex-col gap-4">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 text-gray-600 border-gray-400  border-2 h-32 p-2 rounded-md   resize-none"
        />
      </div>
      <button
        className="bg-red-400 p-4 rounded-md text-center flex justify-center items-center gap-1"
        type="submit"
      >
        Send Message
        <ArrowRight />
      </button>
    </form>
  );
};

export default ContactForm;
