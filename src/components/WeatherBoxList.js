import WeatherBox from "./WeatherBox";
import AddLocation from "./AddLocation";
import React, { useState } from "react";
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
      });
  }

  const addLocation = (text) => {
    addQueryLocation(text);
  };

  return (
    <div className="grid grid-cols-3 p-6 border-solid border-4 rounded-2xl border-gray-400">
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
