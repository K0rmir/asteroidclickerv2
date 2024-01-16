import {useState, useEffect} from "react";
import "./index.css";
import Asteroid from "./components/Asteroid";
import RareMetalCounter from "./components/RareMetalCounter";
import UpgradesPanel from "./components/UpgradesPanel";
import Astronaut from "./components/Astronaut";

export default function App() {
  localStorage.clear();
  let savedValues = JSON.parse(localStorage.getItem("storageObj"));
  if (savedValues === null) {
    savedValues = {
      asteroidClick: 1,
      metalCounter: 0,
      metalsPerSecond: 0,
      upgradeOneCost: 25,
      upgradeOneQuantity: 0,
      upgradeTwoCost: 100,
      upgradeTwoQuantity: 0,
      upgradeTwoStep: 5,
      upgradeThreeCost: 1000,
      upgradeThreeQuantity: 0,
    };
  }

  const [asteroidClick, setAsteroidClick] = useState(savedValues.asteroidClick);
  const [metalCounter, setMetalCounter] = useState(savedValues.metalCounter);
  const [metalsPerSecond, setMetalsPerSecond] = useState(
    savedValues.metalsPerSecond
  );
  const [upgradeOneCost, setUpgradeOneCost] = useState(
    savedValues.upgradeOneCost
  );
  const [upgradeOneQuantity, setUpgradeOneQuantity] = useState(
    savedValues.upgradeOneQuantity
  );
  const [upgradeTwoCost, setUpgradeTwoCost] = useState(
    savedValues.upgradeTwoCost
  );
  const [upgradeTwoQuantity, setUpgradeTwoQuantity] = useState(
    savedValues.upgradeTwoQuantity
  );
  const [upgradeTwoStep, setUpgradeTwoStep] = useState(
    savedValues.upgradeTwoStep
  );
  const [upgradeThreeCost, setUpgradeThreeCost] = useState(
    savedValues.upgradeThreeCost
  );
  const [upgradeThreeQuantity, setUpgradeThreeQuantity] = useState(
    savedValues.upgradeThreeQuantity
  );
  const [isMultiplierActive, setIsMultiplierActive] = useState(false);
  const [preMultiplierValue, setPreMultiplierValue] = useState(asteroidClick);
  const [isAstronautActive, setIsAstronautActive] = useState(false);
  const [isAstronautClicked, setIsAstronautClicked] = useState(false);

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
  const handleUpgradeThreeMultiplier = () => {
    setPreMultiplierValue(asteroidClick);
    setIsMultiplierActive(true);
    setIsAstronautActive(false);
    setIsAstronautClicked(false);
    handleTempMultiplier();

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setIsMultiplierActive(false);
      setAsteroidClick(asteroidClick);
    }, 5000);
  };

  const handleTempMultiplier = () => {
    newValue = isMultiplierActive ? preMultiplierValue * 2 : asteroidClick;
    setAsteroidClick(newValue);
  };

  // -------------------------------------------------------------------- //
  // Local Storage //

  useEffect(() => {
    const storageObj = {
      asteroidClick: asteroidClick,
      metalsPerSecond: metalsPerSecond,
      metalCounter: metalCounter,
      upgradeOneCost: upgradeOneCost,
      upgradeOneQuantity: upgradeOneQuantity,
      upgradeTwoCost: upgradeTwoCost,
      upgradeTwoQuantity: upgradeTwoQuantity,
      upgradeTwoStep: upgradeTwoStep,
      upgradeThreeCost: upgradeThreeCost,
      upgradeThreeQuantity: upgradeThreeQuantity,
    };
    localStorage.setItem("storageObj", JSON.stringify(storageObj));

    if (metalCounter % 50 === 0 && metalCounter !== 0) {
      setIsAstronautActive(true);
    }
  }, [metalCounter]);
  // -------------------------------------------------------------------------- //
  return (
    <>
      <Asteroid
        asteroidClick={asteroidClick}
        handleAsteroidClick={handleAsteroidClick}
        isMultiplierActive={isMultiplierActive}
        isAstronautClicked={isAstronautClicked}
        isAstronautActive={isAstronautActive}
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
      <Astronaut
        metalCounter={metalCounter}
        setMetalCounter={setMetalCounter}
        isAstronautActive={isAstronautActive}
        isAstronautClicked={isAstronautClicked}
        setIsAstronautClicked={setIsAstronautClicked}
      />
    </>
  );
}
