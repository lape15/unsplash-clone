import { useState } from "react";
import "./index.css";
const Searchbox = () => {
  const [value, setValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="input"
        placeholder="Search for photos"
      />
    </div>
  );
};

export default Searchbox;
