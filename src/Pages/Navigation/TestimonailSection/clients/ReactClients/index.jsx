import React from "react";
import ClientCard from "../JavascriptClients/ClientCard";

const index = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <ClientCard
        ClientName="Jeffery Jonathan"
        src="./assets/Brands/brand-03.png"
      />
      <ClientCard ClientName="Sally Dixre" src="./assets/Brands/brand-05.png" />

      <ClientCard
        ClientName="Steven Grinder"
        src="./assets/Brands/brand-05.png"
      />

      <ClientCard
        ClientName="Frankin Picasso"
        src="./assets/Brands/brand-05.png"
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
        ClientName="Pablo Escober"
        src="./assets/Brands/brand-05.png"
      />
    </div>
  );
};

export default index;
