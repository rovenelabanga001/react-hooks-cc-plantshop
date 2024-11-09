import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  const onAddItem = (newItem) => {
    setPlants([...plants, newItem]);
  };

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDeletedPlant = (id) => {
    const updatedPlants = plants.filter((plant) => {
      return plant.id !== id;
    });
    setPlants(updatedPlants);
  };
  return (
    <main>
      <NewPlantForm onAddItem={onAddItem} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} onClickDelete={handleDeletedPlant}/>
    </main>
  );
}

export default PlantPage;
