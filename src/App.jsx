import { useState, useEffect } from "react";
import "./index.css"
import Asteroid from "./components/Asteroid";
import RareMetalCounter from "./components/RareMetalCounter";

export default function App() {
  const [metalCounter, setMetalCounter] = useState(0);

  function handleAsteroidClick() {
    setMetalCounter(metalCounter +1);
    console.log(metalCounter);
  }

  return (
    <>
    <Asteroid handleAsteroidClick={handleAsteroidClick}/>
    <RareMetalCounter metalCounter={metalCounter}/>
    </>

  )

}