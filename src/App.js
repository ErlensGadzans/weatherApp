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
      setLocation("");
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
            <p className="thin">{data.name}</p>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp} °C</h1> : null}
          </div>
          <div className="description">
            {data.main ? <p className="thin">{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels_like">
            {data.main ? (
              <p className="bold">{data.main.feels_like} °C</p>
            ) : null}
            <p className="thin">Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
            <p className="thin">Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p className="bold">{data.wind.speed} SPEED</p> : null}
            <p className="thin">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
