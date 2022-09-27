import { useState, useEffect } from "react";
import Form from "./form";

function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/species")
      .then((response) => response.json())
      .then((species) => {
            setSpecies(species);
          });
  }, []);

  const addSpecies = (newSingularSpecies) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setSpecies((species) => [...species, newSingularSpecies]);
  };

  return (
    <div className="species">
      <h2> List of Species </h2>
      <ul>
        {species.map((singSpecies) => (
          <li key={singSpecies.id}>
            {" "}
            {singSpecies.name} {singSpecies.type} {singSpecies.population}
          </li>
        ))}
      </ul>
      <Form addSpecies={addSpecies} />
    </div>
  );
}

export default Species;
