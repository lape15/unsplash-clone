import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Searchbox from "./components/searchbox";
import { fetchPhotos } from "./slices";

function App() {
  const dispatch: Function = useDispatch();
  useEffect(() => dispatch(fetchPhotos()), []);
  return (
    <div className="App">
      <Searchbox />
    </div>
  );
}

export default App;
