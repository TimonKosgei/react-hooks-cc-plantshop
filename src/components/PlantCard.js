import React, { useState } from "react";


function PlantCard({plant}) {
  const [instock, setBool] = useState(true)
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {instock ? (
        <button className="primary" onClick={()=> setBool(false)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
