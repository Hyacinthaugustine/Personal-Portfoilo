import React from "react";
import IconGroup from "../../../components/IconGroup";
import { logoFacebook, logoTwitter, logoLinkedin } from "ionicons/icons";

const ContactVaiCall = ({
  contactImage,
  ContactEmail,
  ContactPhoneNumber,
  contactMediaManager,
}) => {
  return (
    <div className="col-span-5 bg-gray-200 rounded-2xl pb-6 shadow-2xl ">
      <div className="p-6 overflow-hidden rounded-xl">
        <img
          src={contactImage}
          alt="Connect with me is how we get to build and new work together"
          className="w-full rounded-xl hover:scale-105"
        />
      </div>

      <div className="px-6 text-gray-900 text-md flex flex-col gap-5">
        <div>
          <h2 className="text-xl uppercase font-bold">{contactMediaManager}</h2>
          <p>Chief Operating Officer</p>
        </div>

        <p>
          I am available for freelance and remote work. Connect with me via and
          call in to my account.
        </p>

        <div className="flex justify-center  flex-col items-start gap-1">
          <span>
            Phone:
            <a
              href="tel:09122503121"
              className="hover:underline hover:underline-offset-1 hover:text-red-500"
            >
              {ContactPhoneNumber}
            </a>
          </span>

          <span>
            Phone:
            <a
              href="mailto:augustinehyacinth3@gmail.com"
              className="hover:underline hover:underline-offset-1 hover:text-red-500"
            >
              {ContactEmail}
            </a>
          </span>
        </div>

        <IconGroup
          title="Find me on"
          icons={[
            { icon: logoLinkedin, link: "https://www.google.com" },
            { icon: logoFacebook, color: "text-blue-700" },
            { icon: logoTwitter, color: "text-blue-400" },
          ]}
        />
      </div>
    </div>
  );
};

export default ContactVaiCall;
