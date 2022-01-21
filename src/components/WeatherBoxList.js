import WeatherBox from "./WeatherBox";
import AddLocation from "./AddLocation";
import React, { useState } from "react";
import "../styles/WeatherBoxList.css";
import { nanoid } from "nanoid";

const WeatherBoxList = ({
  locations,
  handleDeleteLocation,
  handleSetLocations,
}) => {
  const api = {
    key: "165edf014cf0d3b498e21539e1b03eca",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  async function addQueryLocation(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Location not found.");
      })
      .then((result) => {
        console.log(result);
        if (
          locations.filter(
            (l) =>
              l.name !== result.main.name || l.country !== result.sys.country
          )
        ) {
          const newLocation = {
            key: nanoid(),
            city: result.name,
            country: result.sys.country,
          };
          const newLocations = [...locations, newLocation];
          handleSetLocations(newLocations);
        } else {
          console.log("location panel already exists!");
        }

        //console.log(result);
        // weather = result;
        // console.log(weather);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  const addLocation = (text) => {
    //console.log(text);
    addQueryLocation(text);
    //console.log(weath);
    // const newLocation = {
    //   key: nanoid(),
    //   text: text,
    // };
    // const newLocations = [...locations, newLocation];
    // handleSetLocations(newLocations);
  };

  return (
    <div className="weather-list">
      {locations.length > 0 && (
        <div>
          {locations.map((location) => (
            <WeatherBox
              key={location.key}
              city={location.city}
              country={location.country}
              handleDeleteLocation={handleDeleteLocation}
            />
          ))}
        </div>
      )}
      <AddLocation handleAddLocation={addLocation} />
    </div>
  );
};

export default WeatherBoxList;
