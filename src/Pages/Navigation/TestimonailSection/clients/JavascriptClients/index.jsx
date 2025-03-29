import React from "react";
import ClientCard from "./ClientCard";

const index = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <ClientCard
        ClientName="  Marth Smiths"
        src="./assets/Brands/brand-01.png"
      />
      <ClientCard
        ClientName="Hyacinth Augustine"
        src="./assets/Brands/brand-03.png"
      />
      <ClientCard
        ClientName="Matthew Jackson"
        src="./assets/Brands/brand-02.png"
      />
      <ClientCard ClientName="Anna Sam" src="./assets/Brands/brand-04.png" />
      <ClientCard
        ClientName="Steven Grinder"
        src="./assets/Brands/brand-05.png"
      />
      <ClientCard
        ClientName="Jeffery Jonathan"
        src="./assets/Brands/brand-03.png"
      />
      <ClientCard ClientName="Sally Dixre" src="./assets/Brands/brand-05.png" />
      <ClientCard
        ClientName="Matthew Jackson"
        src="./assets/Brands/brand-02.png"
      />
    </div>
  );
};

export default index;
