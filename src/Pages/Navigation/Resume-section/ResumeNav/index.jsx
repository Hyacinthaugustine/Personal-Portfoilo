import React, { useState } from "react";

import Interviews from "./InterView";
import Experience from "./Expereince";
import ProfessionalSkills from "./ProfessionalSkills";
import SectionDisplay from "./SectionDisplay";
import Education from "./Education";

const ResumeNav = () => {
  const [selectedSection, setSelectedSection] = useState("education");

  const renderSection = () => {
    switch (selectedSection) {
      case "education":
        return <Education />;
      case "professional-skills":
        return <ProfessionalSkills />;
      case "experience":
        return <Experience />;
      case "interview":
        return <Interviews />;
      default:
        return <p>Please select a section.</p>;
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="flex md:flex-row flex-col justify-center gap-2 mb-3  rounded-xl overflow-hidden">
        {[
          { key: "education", label: "Education" },
          { key: "professional-skills", label: "Professional Skills" },
          { key: "experience", label: "Experience" },
          { key: "interview", label: "Interview" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedSection(item.key)}
            className={`px-8 py-5 text-lg text-gray-700 rounded-2xl hover:text-black shadow-2xl  ${
              selectedSection === item.key ? "bg-green-300 font-bold" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <SectionDisplay>{renderSection()}</SectionDisplay>
    </div>
  );
};

export default ResumeNav;
