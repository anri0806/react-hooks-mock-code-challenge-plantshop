import React, { useState } from "react";

function PlantCard({ plant, onSubmitUpdate, onClickDelete }) {
  const [isInStock, setIsInStock] = useState(true);
  const [newPrice, setNewPrice] = useState("");

  function handleButton() {
    setIsInStock((isInStock) => !isInStock);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: parseInt(newPrice),
      }),
    })
      .then((res) => res.json())
      .then((updatedData) => onSubmitUpdate(updatedData));

    setNewPrice("");
  }

  function handleDelete() {
    //console.log(plant)

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onClickDelete(plant))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <form onSubmit={handleSubmit}>
        <input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          type="number"
          name="price"
          placeholder="update price here"
        />
        <input type="submit" />
      </form>
      {isInStock ? (
        <button onClick={handleButton} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleButton}>Out of Stock</button>
      )}
      <br></br>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;

//create useState to store boolean
//onClick, create function to setInStock to toggle button

//Update Price
//create state to make input controlled
//onSubmit, create func to fetch/PATCH request
//body => JSON.stringify(state)
//.then receive func and pass updatedItem
//in PlantPage, create function to .map plants.id === updatedItem.id
//setPlants(varirarble)

//Delete Item
//onClick, create funciton to fetch/DELETE request
//.then receive function from PlantPage & pass deletedPlant
//in PlantPage, create function to filter plant.id !=== deletedPlant.id
//pass above variable to setPlants
