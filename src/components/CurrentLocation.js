const CurrentLocation = ({ weather }) => {
  let loc = "";

  if (weather !== undefined) {
    if (Object.keys(weather).length !== 0) {
      loc = weather.name + ", " + weather.sys.country;
    }
  }

  return (
    <div>
      <div className="text-white text-4xl font-bold text-center text-shadow-sm">
        {loc}
      </div>
    </div>
  );
};

export default CurrentLocation;
