import React from "react";
import TimeLine from "../TimeLine";
import { IoLogoReact } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaHtml5, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import SkillItem from "./SkilledItem";
// import SkillItem from "./SkillItem.jsx";

const skills = [
  {
    icon: <FaHtml5 />,
    skillLevel: 70,
    className: "bg-gray-100",
    iconClassName: "text-black w-28 h-28 group-hover:bg-red-500",
  },
  {
    icon: <IoLogoCss3 />,
    skillLevel: 80,
    className: "bg-gray-100",
    iconClassName: "w-28 h-28",
  },
  {
    icon: <DiJavascript />,
    skillLevel: 85,
    className: "bg-black",
    iconClassName: "h-28 w-28 text-yellow-400",
  },
  {
    icon: <IoLogoReact />,
    skillLevel: 90,
    className: "bg-gray-800",
    iconClassName: "w-28 h-28 text-sky-500",
  },
  {
    icon: <RiTailwindCssFill />,
    skillLevel: 75,
    className:
      "col-span-3 col-start-2 bg-gray-100 flex justify-center items-center h-32 rounded-xl",
    iconClassName: "w-28 h-28",
  },
  {
    icon: <FaNodeJs />,
    skillLevel: 80,
    className: "bg-sky-500",
    iconClassName: "text-white w-28 h-28",
  },
  {
    icon: <FaGithub />,
    skillLevel: 65,
    className: "bg-gray-100",
    iconClassName: "w-28 h-28",
  },
  {
    icon: <SiTypescript />,
    skillLevel: 70,
    className: "bg-gray-100",
    iconClassName: "w-28 h-28",
  },
  {
    icon: <DiResponsive />,
    skillLevel: 60,
    className: "bg-gray-100",
    iconClassName: "w-28 h-28",
  },
];

const ProfessionalSkills = () => {
  return (
    <div>
      <TimeLine StartingDate={"features"} ExperienceTitle={"Developer"} />

      <div className="grid grid-cols-12   gap-6">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            icon={skill.icon}
            skillLevel={skill.skillLevel}
            className={skill.className}
            iconClassName={skill.iconClassName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSkills;
