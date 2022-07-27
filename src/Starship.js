import React, { useEffect, useState } from "react";

function Starship() {
  const [starship, setStarship] = useState([]);

  async function fetchStarship() {
    const res = await fetch("https://swapi.dev/api/starships/9/");
    const json = await res.json();
    setStarship(json);
  }

  useEffect(() => {
    fetchStarship();
  }, []);
  return (
    <div className="starship">
      <h2>{starship.name}</h2>
      <h2>{starship.starship_class}</h2>
    </div>
  );
}

export default Starship;
