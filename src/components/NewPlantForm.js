import React, { useState } from "react";

function NewPlantForm({ onSubmitAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newItem => onSubmitAdd(newItem))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={formData.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={formData.price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

//Create state to make input controlled with onChange & value
//onSubmit, create function to fetch/POST request
//.then, receive callback function from PlanPage & pass postedItem
//in PlantPage, creat function to setPlants({...plants, postedItem})
