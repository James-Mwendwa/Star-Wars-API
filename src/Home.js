import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeInfo">
        <h2>Star Wars</h2>
        <p>All of your favorite Star Wars Movies </p>
      </div>

      <div className="homeImages">
        <img
          src="https://cdn.mos.cms.futurecdn.net/VHP3VfzxaxxfZUHbsQrYTg.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
