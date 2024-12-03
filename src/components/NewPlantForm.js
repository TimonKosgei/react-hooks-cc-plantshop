import React from "react";

function NewPlantForm({addNewPlant}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form  >
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit" onClick={(event)=>{
        event.preventDefault()
        const formData = {
          name: event.target.name.value,
          image: event.target.image.value,
          price:event.target.price.value
        }
        addNewPlant(formData)
      }}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
