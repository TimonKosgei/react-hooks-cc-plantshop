import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants,setAllPlants]  = useState([])
  const[plants, setPlants] = useState([])


  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res=> res.json())
    .then(data => {
      setAllPlants(data)
      setPlants(data)
    })
  },[])

  function searchPlants(searchQuery){
    console.log(searchQuery)
    if(searchQuery.trim() === ""){
      setPlants(allPlants)
    }else{
    const filteredData = allPlants.filter((plant) =>{
      return plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    setPlants(filteredData)
  }
  }
  function addNewPlant(formData){

fetch('http://localhost:6001/plants', {
  method: "POST",
  headers: {
    "Content-Type": "application/json", 
  },
  body: JSON.stringify(formData)}
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); 
  })
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error); 
  });

fetch('http://localhost:6001/plants')
    .then(res=> res.json())
    .then(data => {
      setAllPlants(data)
      setPlants(data)
    })
  }
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchPlants={searchPlants}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
