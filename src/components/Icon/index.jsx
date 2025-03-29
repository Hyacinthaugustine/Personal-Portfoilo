import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";

const Icon = ({ icon, color, social_link }) => {
  return (
    <Link to={social_link || "#"}>
      <IonIcon
        icon={icon}
        className={`${color} w-8 h-8 p-4 border-2 rounded-2xl`}
      />
    </Link>
  );
};

export default Icon;
