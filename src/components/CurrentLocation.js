import "../styles/CurrentLocation.css";

const CurrentLocation = ({ weather }) => {
  let loc = "";

  if (weather !== undefined) {
    if (Object.keys(weather).length !== 0) {
      loc = weather.name + ", " + weather.sys.country;
    }
  }

  return (
    <div>
      <div className="location">{loc}</div>
    </div>
  );
};

export default CurrentLocation;
