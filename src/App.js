import React, { useState, useEffect } from "react";
import WeatherBoxList from "./components/WeatherBoxList";

const App = () => {
  const [locations, setLocations] = useState([]);

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

  const deleteLocation = (key) => {
    const newLocations = locations.filter((location) => location.id !== key);
    setLocations(newLocations);
  };

  return (
    <div className="min-h-screen max-w-[75%] mt-10 mx-auto px-4">
      <main>
        <WeatherBoxList
          locations={locations}
          handleSetLocations={setLocations}
          handleDeleteLocation={deleteLocation}
        />
      </main>
    </div>
  );
};

export default App;
