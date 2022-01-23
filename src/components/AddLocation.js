import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const AddLocation = ({ handleAddLocation }) => {
  const [locationText, setLocationText] = useState("");
  const characterLimit = 30;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0)
      setLocationText(event.target.value);
  };

  const handleAddClick = () => {
    if (locationText.trim().length > 0) {
      handleAddLocation(locationText);
      setLocationText("");
    }
  };

  return (
    <div className="mt-12 h-[15vh] flex flex-col justify-around text-center items-center text-shadow-sm">
      <input
        className="relative my-2.5 mx-auto bg-white rounded-2xl p-0.5 text-xl font-black text-center shadow-md shadow-gray-300 text-gray-500"
        placeholder="Type to add location..."
        value={locationText}
        onChange={handleChange}
      ></input>
      <div className="items-center justify-between">
        <MdAddCircleOutline
          onClick={handleAddClick}
          className="add-icon"
          size="3em"
        />
      </div>
    </div>
  );
};

export default AddLocation;
