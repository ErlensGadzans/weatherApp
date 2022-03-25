import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="searchBar">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Choose the city"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="thin">Riga</p>
          </div>
          <div className="temperature">
            <h1>5 C</h1>
          </div>
          <div className="description">
            <p className="thin">Clody</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels_like">
            <p className="bold">1 C</p>
            <p className="thin">Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p className="thin">Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">5ms</p>
            <p className="thin">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
