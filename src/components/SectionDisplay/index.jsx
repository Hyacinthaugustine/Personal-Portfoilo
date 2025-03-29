// ResumeNav.js
import React, { useState } from "react";
import SectionSelector from "./SectionSector";
// import SectionDisplay from "./SectionDisplay";
import Interviews from "../../Pages/Navigation/Resume-section/ResumeNav/InterView";
import ProfessionalSkills from "../../Pages/Navigation/Resume-section/ResumeNav/ProfessionalSkills";
import Experience from "../../Pages/Navigation/Resume-section/ResumeNav/Expereince";
import SectionDisplay from "../../Pages/Navigation/Resume-section/ResumeNav/SectionDisplay";
import Education from "../../Pages/Navigation/Resume-section/ResumeNav/Education";

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

  const sections = [
    { key: "education", label: "Education" },
    { key: "professional-skills", label: "Professional Skills" },
    { key: "experience", label: "Experience" },
    { key: "interview", label: "Interview" },
  ];

  return (
    <SectionSelector
      sections={sections}
      onSelect={setSelectedSection}
      selectedSection={selectedSection}
      displayComponent={<SectionDisplay>{renderSection()}</SectionDisplay>}
    />
  );
};

export default ResumeNav;
