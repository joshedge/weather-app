import DateAndTime from "./DateAndTime";
import CurrentLocation from "./CurrentLocation";
import Weather from "./Weather";
import React, { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import "../styles/WeatherBox.css";
import "../styles/icons.css";

const api = {
  key: "165edf014cf0d3b498e21539e1b03eca",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherBox = ({ id, text, handleDeleteLocation }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}weather?q=${text}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  }, [text]);

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
          onClick={() => handleDeleteLocation(id)}
          className="delete-icon"
          size="3em"
        />
      </div>
    </div>
  );
};

export default WeatherBox;
