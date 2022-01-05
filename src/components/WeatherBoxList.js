import WeatherBox from "./WeatherBox";
import AddLocation from "./AddLocation";
import "../styles/WeatherBoxList.css";

const WeatherBoxList = ({
  locations,
  handleAddLocation,
  handleDeleteLocation,
}) => {
  return (
    <div className="weather-list">
      {locations.map((location) => (
        <WeatherBox
          id={location.id}
          text={location.text}
          handleDeleteLocation={handleDeleteLocation}
        />
      ))}
      <AddLocation handleAddLocation={handleAddLocation} />
    </div>
  );
};

export default WeatherBoxList;
