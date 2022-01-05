import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "../styles/AddLocation.css";
import "../styles/icons.css";

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
    <div className="add-location">
      <input
        className="new-location-input"
        placeholder="Type to add location..."
        value={locationText}
        onChange={handleChange}
      ></input>
      <div className="location-footer">
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
