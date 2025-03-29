import React from "react";
import Profile from "../../components/Profile";

const Footer = () => {
  return (
    <div className="py-16 flex flex-col justify-start items-center gap-2">
      <Profile
        className="flex flex-col"
        profileName="HYC.DEV"
        profilePicture={"/assets/profile-picture.jpg"}
      />
      Lorem ipsum, dolor sit amet consectetur adipisicing aut ullam, eligendi,
      doloribus quod possimus minima facere officia a vero architecto at!
    </div>
  );
};

export default Footer;
