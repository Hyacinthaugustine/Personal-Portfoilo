import {
  logoFacebook,
  logoTwitter,
  logoLinkedin,
  logoHtml5,
  logoJavascript,
  logoReact,
} from "ionicons/icons";
import IconGroup from "../../../components/IconGroup";

import HeroImage from "../../../components/Hero-image";
import HeadingText from "../../../components/HeadingText";
import ParagraphText from "../../../components/ParagraphText";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="md:px-16 px-4 md:py-16 py-8 border-b-2 border-gray-100"
    >
      <div className="flex gap-9 flex-col md:flex-row">
        <HeroImage />
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-3">
            <HeadingText textForHeading="Hi, I am " nameText="Hyacinth A." />
            <HeadingText
              textForHeading="a "
              occupations={[
                "Frontend Developer",
                "Tech Blogger",
                "UI/UX Designer",
                "Open Source Cont",
              ]}
            />
            <ParagraphText pText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quas natus! Quos magnam ad accusantium voluptates eius, quasi nemo tempora ducimus laboriosam quam accusamus temporibus vel molestias dignissimos, aut quae nesciunt, dicta distinctio facere praesentium laborum perferendis atque error. Nobis!" />
          </div>

          <div className="flex space-x-4 mt-6 justify-between flex-col md:flex-row">
            <IconGroup
              title="Find me on"
              icons={[
                { icon: logoLinkedin, link: "https://www.google.com" },
                { icon: logoFacebook, color: "text-blue-700" },
                { icon: logoTwitter, color: "text-blue-400" },
              ]}
            />

            <IconGroup
              title="Best Skills in"
              icons={[
                {
                  icon: logoHtml5,
                  color: "text-yellow-700",
                  link: "https://www.google.com",
                },
                { icon: logoJavascript, color: "text-yellow-300 " },
                { icon: logoReact, color: "text-blue-400" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
