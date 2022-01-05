import "../styles/Weather.css";

const Weather = ({ weather }) => {
  let temperature = "";
  let weatherType = "";

  if (Object.keys(weather).length !== 0) {
    temperature = Math.round(weather.main.temp);
    weatherType = weather.weather[0].main;
  }

  return (
    <div>
      <div className="temperature">{temperature}°C</div>
      <div className="weather-type">{weatherType}</div>
    </div>
  );
};

export default Weather;
