import { useState } from "react";
import "./index.css";
const Searchbox = () => {
  const [value, setValue] = useState("lorr");
  const handleInputChange = (e: {
    target: HTMLInputElement | HTMLSelectElement;
  }) => {
    setValue(e.target.value);
  };
  return (
    <div className="search-wrapper">
      <input
        value={value}
        onChange={handleInputChange}
        className="input"
        type="text"
        placeholder="Search for photos"
      />
    </div>
  );
};

export default Searchbox;
