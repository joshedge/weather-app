import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { nanoid } from "nanoid";
import WeatherBoxList from "./components/WeatherBoxList";

// const api = {
//   key: "165edf014cf0d3b498e21539e1b03eca",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

const App = () => {
  const [locations, setLocations] = useState([]);

  //const locations = ["Vancouver", "Toronto"];

  useEffect(() => {
    const savedLocations = JSON.parse(
      localStorage.getItem("react-weather-app-data")
    );

    if (savedLocations) {
      setLocations(savedLocations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-weather-app-data", JSON.stringify(locations));
  }, [locations]);

  const addLocation = (text) => {
    const newLocation = {
      id: nanoid(),
      text: text,
    };
    const newLocations = [...locations, newLocation];
    setLocations(newLocations);
  };

  const deleteLocation = (id) => {
    const newLocations = locations.filter((location) => location.id !== id);
    setLocations(newLocations);
  };

  return (
    <div className="container">
      <main>
        <WeatherBoxList
          locations={locations}
          handleAddLocation={addLocation}
          handleDeleteLocation={deleteLocation}
        />
      </main>
    </div>
  );
};

export default App;
