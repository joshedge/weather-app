import DateAndTime from "./DateAndTime";
import CurrentLocation from "./CurrentLocation";
import Weather from "./Weather";
import React, { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import "../styles/WeatherBox.css";
import "../styles/icons.css";

const WeatherBox = ({ key, city, country, handleDeleteLocation }) => {
  const api = {
    key: "165edf014cf0d3b498e21539e1b03eca",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState({});

  useEffect(() => {
    loadWeather(`${city}, ${country}`);
  }, [key]);

  async function loadWeather(query) {
    console.log(query);
    const res = await fetch(
      `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
    );
    res.json().then((data) => {
      console.log(data);
      setWeather(data);
    });
  }

  return (
    <div className="weather-box">
      <div className="weather-info">
        <div className="location-box">
          <CurrentLocation weather={weather} />
          <DateAndTime timezone={weather.timezone} />
        </div>
        <Weather weather={weather} />
      </div>
      <div className="weather-box-footer">
        <MdOutlineDeleteForever
          onClick={() => handleDeleteLocation(key)}
          className="delete-icon"
          size="3em"
        />
      </div>
    </div>
  );
};

export default WeatherBox;
