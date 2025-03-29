import React from "react";

const ClientCard = ({ ClientName, src }) => {
  return (
    <div className="rounded-xl  shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] col-span-4 flex flex-col justify-center items-center">
      <img src={src} alt="" className=" size-32 object-contain m-6" />
      <a
        href="#"
        className="block border-t-2 text-md  p-6 w-full text-center border-gray-100"
      >
        {ClientName}
      </a>
    </div>
  );
};

export default ClientCard;
