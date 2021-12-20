import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddItem(newItem) {
    setPlants([newItem, ...plants]);
  }

  function handleSubmitUpdate(updatedItem) {
    const updated = plants.map((plant) =>
      plant.id === updatedItem.id ? updatedItem : plant
    );

    setPlants(updated);
  }

  function handleDeleteItem(deletedItem) {
    const updatedItems = plants.filter((plant) => plant.id !== deletedItem.id);

    setPlants(updatedItems)
  }

  const filteredItems = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onSubmitAdd={handleAddItem} />
      <Search search={search} onChangeSearch={setSearch} />
      <PlantList plants={filteredItems} onSubmitUpdate={handleSubmitUpdate} onClickDelete={handleDeleteItem} />
    </main>
  );
}

export default PlantPage;
