import {useState, useEffect} from "react";
import "./index.css";
import Asteroid from "./components/Asteroid";
import RareMetalCounter from "./components/RareMetalCounter";
import UpgradesPanel from "./components/UpgradesPanel";

export default function App() {
  const [metalCounter, setMetalCounter] = useState(0);
  const [asteroidClick, setAsteroidClick] = useState(1);
  const [upgradeOneCost, setUpgradeOneCost] = useState(10);
  const [upgradeOneQuantity, setUpgradeOneQuantity] = useState(0);
  const [metalsPerSecond, setMetalsPerSecond] = useState(0);
  const [upgradeTwoCost, setUpgradeTwoCost] = useState(100);
  const [upgradeTwoQuantity, setUpgradeTwoQuantity] = useState(0);
  const [upgradeTwoStep, setUpgradeTwoStep] = useState(10);
  const [upgradeThreeCost, setUpgradeThreeCost] = useState(20);
  const [upgradeThreeQuantity, setUpgradeThreeQuantity] = useState(0);
  const [upgradeThreeStep, setUpgradeThreeStep] = useState(5);


  // Functions for overall, global Metal Count & Metals Per Second (MPS) //
  function handleAsteroidClick() {
    setMetalCounter(metalCounter + asteroidClick);
  }

  function handleMetalsPerSecond() {
    setMetalsPerSecond(metalsPerSecond + 1);
  }
  // ------------------------------------------------------------------ //
  // Functions for handling Upgrade One Cost, Quantity & MPS //
  // Upgrade One Cost //
  function handleUpgradeOneCost() {
    setUpgradeOneCost(Math.floor(upgradeOneCost * 1.2));
    setMetalCounter(metalCounter - upgradeOneCost);
  }
  // Upgrade One Quantity //
  function handleUpgradeOneQuantity() {
    setUpgradeOneQuantity(upgradeOneQuantity + 1);
  }
  //  Upgrade One Interval to increase MPS by Upgrade One quantity. //
  useEffect(() => {
    const increaseMetalsPerSecond = setInterval(() => {
      setMetalCounter(
        (currentMetalCounter) => currentMetalCounter + upgradeOneQuantity
      );
    }, 1000);

    return () => {
      clearInterval(increaseMetalsPerSecond);
    };
  }, [metalsPerSecond]); 
  // ------------------------------------------------------------ //
  // Functions for handling Upgrade Two Cost, Quantity & Click Increase //
  // Upgrade Two Cost //
  function handleUpgradeTwoCost() {
    setUpgradeTwoCost(Math.floor(upgradeTwoCost * 1.3));
    setMetalCounter(metalCounter - upgradeTwoCost);
  }
// Upgrade Two Quantity //
  function handleUpgradeTwoQuantity() {
    setUpgradeTwoQuantity(upgradeTwoQuantity + 1);
  }
// Upgrade Two functionality to increase asteroid click by 10 //
  function handleUpgradeTwoClick() {
    setUpgradeTwoStep(upgradeTwoStep +10);
    setAsteroidClick(upgradeTwoStep);
  }
// ------------------------------------------------------------- //
// Functions for handling Upgrade Three Cost, Quantity & MPS //
// Upgrade Three Cost // 
  function handleUpgradeThreeCost() {
    setUpgradeThreeCost(Math.floor(upgradeThreeCost * 1.4));
    setMetalCounter(metalCounter - upgradeThreeCost);
  }
// Upgrade Three Quantity //
  function handleUpgradeThreeQuantity() {
    setUpgradeThreeStep(upgradeThreeStep + 5);
    setUpgradeThreeQuantity(upgradeThreeQuantity + 1);
    console.log(upgradeThreeStep);
  }
// Upgrade Three interval to increase MPS by 5 //
useEffect(() => {
  const increaseMetalsPerSecond = setInterval(() => {
    setMetalCounter(
      (currentMetalCounter) => currentMetalCounter + upgradeThreeStep
    );
    console.log(upgradeThreeStep);
  }, 1000);

  return () => {
    clearInterval(increaseMetalsPerSecond);
  };
}, [metalsPerSecond]); 


  return (
    <>
      <Asteroid asteroidClick={asteroidClick} handleAsteroidClick={handleAsteroidClick}  />
      <RareMetalCounter
        metalCounter={metalCounter}
        metalsPerSecond={metalsPerSecond}
      />
      <UpgradesPanel
        upgradeOneCost={upgradeOneCost}
        handleUpgradeOneCost={handleUpgradeOneCost}
        upgradeOneQuantity={upgradeOneQuantity}
        handleUpgradeOneQuantity={handleUpgradeOneQuantity}
        handleMetalsPerSecond={handleMetalsPerSecond}
        metalCounter={metalCounter}
        upgradeTwoCost={upgradeTwoCost}
        handleUpgradeTwoCost={handleUpgradeTwoCost}
        upgradeTwoQuantity={upgradeTwoQuantity}
        handleUpgradeTwoQuantity={handleUpgradeTwoQuantity}
        handleUpgradeTwoClick={handleUpgradeTwoClick}
        upgradeThreeCost={upgradeThreeCost}
        handleUpgradeThreeCost={handleUpgradeThreeCost}
        upgradeThreeQuantity={upgradeThreeQuantity}
        handleUpgradeThreeQuantity={handleUpgradeThreeQuantity}


      />
    </>
  );
};