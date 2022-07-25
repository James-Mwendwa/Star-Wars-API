import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://cdn.mos.cms.futurecdn.net/HoV9PTARj4sSSKHq8ScVFB.jpg"
          alt="Star Wars Logo"
        />
      </div>
      <div className="headerLinks">
        <Link to="/">Home</Link>
        <Link to="/films">Films</Link>
        <Link to="/cast">Cast</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/species">Species</Link>
        <Link to="/starship">Starship</Link>
      </div>
    </div>
  );
}

export default Header;
