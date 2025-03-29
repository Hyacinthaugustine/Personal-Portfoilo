import React, { useState } from "react";
import JavascriptClients from "./JavascriptClients";
import WordPressClients from "./WordPressClients";
import ReactClients from "./ReactClients";
import CleintsDisplay from "./CleintsDisplay";
import ListSelector from "../../../../components/SectionDisplay/LIstSector";

const ClientCategories = () => {
  const [selectedClients, setSelectedClients] = useState("JavaScript");

  const renderedClients = () => {
    switch (selectedClients) {
      case "JavaScript":
        return <JavascriptClients />;
      case "WordPress":
        return <WordPressClients />;
      case "React":
        return <ReactClients />;
      default:
        return <JavascriptClients />;
    }
  };

  const clientItems = [
    { key: "JavaScript", label: "JavaScript" },
    { key: "WordPress", label: "WordPress" },
    { key: "React", label: "React" },
    { key: "Node", label: "Node" },
    { key: "Typescript", label: "Typescript" },
  ];

  return (
    <ListSelector
      items={clientItems}
      onSelect={setSelectedClients}
      selectedItem={selectedClients}
      displayComponent={<CleintsDisplay>{renderedClients()}</CleintsDisplay>}
    />
  );
};

export default ClientCategories;
