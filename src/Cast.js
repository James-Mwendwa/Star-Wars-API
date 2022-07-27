import React, { useState, useEffect } from "react";

function Cast() {
  const [people, setPeople] = useState([]);

  async function fetchPeople() {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const json = await response.json();
    console.log(json);
    setPeople(json);
  }
  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <div className="people">
      <h2>{people.name}</h2>
      <h2>{people.height}</h2>
      <h2>{people.hair_color}</h2>
    </div>
  );
}

export default Cast;
