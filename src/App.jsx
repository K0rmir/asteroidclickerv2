import {useState, useEffect} from "react";
import "./index.css";
import Asteroid from "./components/Asteroid";
import RareMetalCounter from "./components/RareMetalCounter";
import UpgradesPanel from "./components/UpgradesPanel";

export default function App() {
  const [metalCounter, setMetalCounter] = useState(0);
  const [upgradeOneCost, setUpgradeOneCost] = useState(10);
  const [upgradeOneQuantity, setUpgradeOneQuantity] = useState(0);
  const [metalsPerSecond, setMetalsPerSecond] = useState(0);
  const [showAvailability, setShowAvailability] = useState(false);

  // Functions for overall, global Metal Count & Metals Per Second (MPS) //
  function handleAsteroidClick() {
    setMetalCounter(metalCounter + 1);
  }

  function handleMetalsPerSecond() {
    setMetalsPerSecond(metalsPerSecond + 1);
  }
  // ------------------------------------------------------------------ //
  // Functions for handling Upgrade One Cost, Quantity & MPS //
  // Upgrade One Cost //
  function handleUpgradeOneCost() {
    setMetalCounter(metalCounter - upgradeOneCost);
    setUpgradeOneCost(Math.floor(upgradeOneCost * 1.2));
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
  // Interval to check availability of upgrades //
  useEffect(() => {
    const checkAvailability = setInterval(() => {
      if (metalCounter >= upgradeOneCost) {
        setShowAvailability(true);
      } else {
        setShowAvailability(false);
      }
    }, 100);

    return () => {
      clearInterval(checkAvailability);
    };
  }, [metalCounter]);

  // ------------------------------------------------------------ //

  return (
    <>
      <Asteroid handleAsteroidClick={handleAsteroidClick} />
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
        showAvailability={showAvailability}
      />
    </>
  );
}
