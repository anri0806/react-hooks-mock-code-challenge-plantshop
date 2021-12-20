import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onSubmitUpdate, onClickDelete }) {
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onSubmitUpdate={onSubmitUpdate}
      onClickDelete={onClickDelete}
    />
  ));
  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
