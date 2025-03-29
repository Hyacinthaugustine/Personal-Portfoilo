import {
  menu,
  appsOutline,
  laptopOutline,
  phoneLandscape,
  phonePortraitOutline,
  logoSlack,
  codeSlash,
  bookOutline,
  chatboxOutline,
} from "ionicons/icons";

import FeatureCard from "../../../components/FeaturesCard";
import HeadingText from "../../../components/HeadingText";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="min-h-screen md:px-8 px-4 md:pb-22 md:pt-12 py-8 border-b-1 border-gray-50"
    >
      <h2 className="text-amber-100 text-xl font-semibold mb-2">Features</h2>
      <HeadingText
        textForHeading="What I Do For "
        occupations={["Companies", "Individuals", "Small businesses"]}
      />

      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 md:grid-flow-col gap-8 mt-16">
        <FeatureCard icon={menu} />
        <FeatureCard icon={bookOutline} />
        <FeatureCard icon={appsOutline} />
        <FeatureCard icon={laptopOutline} />
        <FeatureCard icon={phoneLandscape} />
        <FeatureCard icon={phonePortraitOutline} />
        <FeatureCard icon={logoSlack} />
        <FeatureCard icon={codeSlash} />
        <FeatureCard icon={chatboxOutline} />
      </div>
    </section>
  );
};

export default FeaturesSection;
