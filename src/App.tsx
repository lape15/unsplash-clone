import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPhotos } from "./slices";

function App() {
  const dispatch: Function = useDispatch();
  useEffect(() => dispatch(fetchPhotos()), []);
  return <div className="App">Unsplash api comes here</div>;
}

export default App;
