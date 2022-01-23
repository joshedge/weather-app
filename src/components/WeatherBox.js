import DateAndTime from "./DateAndTime";
import CurrentLocation from "./CurrentLocation";
import Weather from "./Weather";
import React, { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

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
    <div className="display-flex flex-col justify-between text-center items-center max-w-[90%] h-[65vh] p-6 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-600">
      <div className="display-flex flex-col justify-start text-center p-6">
        <div>
          <CurrentLocation weather={weather} />
          <DateAndTime timezone={weather.timezone} />
        </div>
        <Weather weather={weather} />
      </div>
      <div>
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
