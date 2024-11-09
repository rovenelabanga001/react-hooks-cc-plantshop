import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onClickDelete }) {
  const plantsToDisplay = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} onClickDelete={onClickDelete}/>;
  });
  return <ul className="cards">{plantsToDisplay}</ul>;
}

export default PlantList;
