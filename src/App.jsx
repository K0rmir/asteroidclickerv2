import { useState, useEffect } from "react";
import "./index.css"
import Asteroid from "./components/Asteroid";
import RareMetalCounter from "./components/RareMetalCounter";
import UpgradesPanel from "./components/UpgradesPanel";

export default function App() {
  const [metalCounter, setMetalCounter] = useState(0);
  const [upgradeOneCost, setUpgradeOneCost] = useState(10);
  const [upgradeOneQuantity, setUpgradeOneQuantity] = useState(0);

  function handleAsteroidClick() {
    setMetalCounter(metalCounter +1);
  }

  function handleUpgradeOneCost() {
    setUpgradeOneCost(Math.floor(upgradeOneCost * 1.5));
  }

  function handleUpgradeOneQuantity() {
    setUpgradeOneQuantity(upgradeOneQuantity +1);
  }

  return (
    <>
    <Asteroid handleAsteroidClick={handleAsteroidClick}/>
    <RareMetalCounter metalCounter={metalCounter}/>
    <UpgradesPanel upgradeOneCost={upgradeOneCost} handleUpgradeOneCost={handleUpgradeOneCost} upgradeOneQuantity={upgradeOneQuantity} handleUpgradeOneQuantity={handleUpgradeOneQuantity}/>
    </>

  )

}

