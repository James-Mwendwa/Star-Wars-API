import React, { useEffect, useState } from "react";
import "./Films.css";

function Films() {
  const [films, setFilms] = useState([]);

  async function fetchFilms() {
    const response = await fetch("https://swapi.dev/api/films/1/");
    const json = await response.json();

    setFilms(json);
  }
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <div className="films">
      <h2>{films.title}</h2>
      <h2>{films.opening_crawl}</h2>
      <h2>{films.director}</h2>
    </div>
  );
}

export default Films;
