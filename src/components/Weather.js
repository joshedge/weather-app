const Weather = ({ weather }) => {
  let temperature = "";
  let weatherType = "";

  if (Object.keys(weather).length !== 0) {
    temperature = Math.round(weather.main.temp);
    weatherType = weather.weather[0].main;
  }

  return (
    <div>
      <div
        className="relative inline-block my-7 mx-auto 
                    bg-gray-400 rounded-2xl py-4 px-6 
                    text-white text-8xl font-black text-center 
                    shadow-lg shadow-gray-500 text-shadow-med"
      >
        {temperature}°C
      </div>
      <div className="text-white text-5xl font-bold text-shadow-sm">
        {weatherType}
      </div>
    </div>
  );
};

export default Weather;
