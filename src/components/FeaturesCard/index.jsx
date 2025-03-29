import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

const FeatureCard = ({ icon }) => {
  return (
    <a
      href="https://google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative grid-rows-2 md:grid-rows-4 shadow-xl bg-[#E9EEE7] hover:bg-[#c7a27c] group rounded-xl p-8 block transition duration-[300ms]"
    >
      <IonIcon
        icon={icon}
        className="size-14 mb-3 mt-5  text-red-400 group-hover:text-[#0a0909] group-hover:mt-0 duration-300"
      />
      <p className="mb-6 group-hover:text-[#0a0909] group-hover:mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at
        provident excepturi modi maiores repellat ea sit officiis sunt dolore,
        corporis, vero exercitationem? Explicabo dolore omnis minus nemo modi
        maiores.
      </p>

      <IonIcon
        icon={arrowForwardOutline}
        className="size-8 absolute bottom-8 left-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white"
      />
    </a>
  );
};

export default FeatureCard;
