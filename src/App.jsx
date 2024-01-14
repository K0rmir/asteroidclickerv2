import {useState, useEffect} from "react";
import "./index.css";
import Asteroid from "./components/Asteroid";
import RareMetalCounter from "./components/RareMetalCounter";
import UpgradesPanel from "./components/UpgradesPanel";
import Astronaut from "./components/Astronaut";

export default function App() {
  const [asteroidClick, setAsteroidClick] = useState(1);
  const [metalCounter, setMetalCounter] = useState(0);
  const [metalsPerSecond, setMetalsPerSecond] = useState(0);
  const [upgradeOneCost, setUpgradeOneCost] = useState(25);
  const [upgradeOneQuantity, setUpgradeOneQuantity] = useState(0);
  const [upgradeTwoCost, setUpgradeTwoCost] = useState(10);
  const [upgradeTwoQuantity, setUpgradeTwoQuantity] = useState(0);
  const [upgradeTwoStep, setUpgradeTwoStep] = useState(5);
  const [upgradeThreeCost, setUpgradeThreeCost] = useState(10);
  const [upgradeThreeQuantity, setUpgradeThreeQuantity] = useState(0);
  const [isMultiplierActive, setIsMultiplierActive] = useState(false);
  const [preMultiplierValue, setPreMultiplierValue] = useState(asteroidClick);

  // Functions for overall, global Metal Count & Metals Per Second (MPS) //
  function handleAsteroidClick() {
    setMetalCounter(metalCounter + asteroidClick);
    if (isMultiplierActive) {
      handleTempMultiplier();
    }
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
    setUpgradeTwoStep(upgradeTwoStep + 5);
    setAsteroidClick(upgradeTwoStep);
    // setMetalsPerClick(asteroidClick);
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
    setUpgradeThreeQuantity(upgradeThreeQuantity + 1);
  }
  // Upgrade Three functionality to apply temporary click multiplier  //
  let timeoutId;
  let newValue;
  console.log(isMultiplierActive);
  const handleUpgradeThreeMultiplier = () => {
    console.log("5 Seconds Start");
    console.log(isMultiplierActive);
    setPreMultiplierValue(asteroidClick);
    setIsMultiplierActive(true);
    handleTempMultiplier();

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setIsMultiplierActive(false);
      console.log("5 Seconds End");
      setAsteroidClick(asteroidClick);
    }, 5000);
  };

  const handleTempMultiplier = () => {
    newValue = isMultiplierActive ? preMultiplierValue * 2 : asteroidClick;
    setAsteroidClick(newValue);
    console.log(newValue);
  };

  console.log(asteroidClick);
  // -------------------------------------------------------------------- //
  // Local Storage //

  useEffect(() => {
    localStorage.setItem("asteroidClick", asteroidClick);
    localStorage.setItem("metalsPerSecond", metalsPerSecond);
    localStorage.setItem("metalCounter", metalCounter);
    localStorage.setItem("upgradeOneCost", upgradeOneCost);
    localStorage.setItem("upgradeOneQuantity", upgradeOneQuantity);
    localStorage.setItem("upgradeTwoCost", upgradeTwoCost);
    localStorage.setItem("upgradeTwoQuantity", upgradeTwoQuantity);
    localStorage.setItem("upgradeThreeCost", upgradeThreeCost);
    localStorage.setItem("upgradeThreeQuantity", upgradeThreeQuantity);
  }, [
    asteroidClick,
    metalsPerSecond,
    metalCounter,
    upgradeOneCost,
    upgradeOneQuantity,
    upgradeTwoCost,
    upgradeTwoQuantity,
    upgradeThreeCost,
    upgradeThreeQuantity,
  ]);

  return (
    <>
      <Asteroid
        asteroidClick={asteroidClick}
        handleAsteroidClick={handleAsteroidClick}
        isMultiplierActive={isMultiplierActive}
      />
      <RareMetalCounter
        metalCounter={metalCounter}
        metalsPerSecond={metalsPerSecond}
        asteroidClick={asteroidClick}
        isMultiplierActive={isMultiplierActive}
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
        handleUpgradeThreeMultiplier={handleUpgradeThreeMultiplier}
      />
      <Astronaut></Astronaut>
    </>
  );
}
