import "../css/UpgradesPanel.css";
import UpgradeOne from "./UpgradeOne";
import UpgradeTwo from "./UpgradeTwo";
import UpgradeThree from "./UpgradeThree";

export default function UpgradesPanel({
  upgradeOneCost,
  handleUpgradeOneCost,
  upgradeOneQuantity,
  handleUpgradeOneQuantity,
  metalsPerSecond,
  handleMetalsPerSecond,
  metalCounter,
  upgradeTwoCost,
  handleUpgradeTwoCost,
  upgradeTwoQuantity,
  handleUpgradeTwoQuantity,
  handleUpgradeTwoClick,
  upgradeThreeCost,
  handleUpgradeThreeCost,
  upgradeThreeQuantity,
  handleUpgradeThreeQuantity,
  handleUpgradeThreeMultiplier,
  // handleTempMultiplier,
  handleAsteroidClick,
}) {
  return (
    <div className="upgradesPanel">
      <h3>Upgrades</h3>
      <UpgradeOne
        metalCounter={metalCounter}
        upgradeOneCost={upgradeOneCost}
        handleUpgradeOneCost={handleUpgradeOneCost}
        upgradeOneQuantity={upgradeOneQuantity}
        handleUpgradeOneQuantity={handleUpgradeOneQuantity}
        metalsPerSecond={metalsPerSecond}
        handleMetalsPerSecond={handleMetalsPerSecond}
      />
      <div className="upgradesKey">
        <p>Gain +1 Metals per Second (MpS) per upgrade level.</p>
      </div>
      <UpgradeTwo
        metalCounter={metalCounter}
        upgradeTwoCost={upgradeTwoCost}
        handleUpgradeTwoCost={handleUpgradeTwoCost}
        upgradeTwoQuantity={upgradeTwoQuantity}
        handleUpgradeTwoQuantity={handleUpgradeTwoQuantity}
        handleUpgradeTwoClick={handleUpgradeTwoClick}
      />
      <div className="upgradesKey">
        <p>Gain +5 Metals per Click (MpC) per upgrade level.</p>
      </div>
      <UpgradeThree
        metalCounter={metalCounter}
        upgradeThreeCost={upgradeThreeCost}
        handleUpgradeThreeCost={handleUpgradeThreeCost}
        upgradeThreeQuantity={upgradeThreeQuantity}
        handleUpgradeThreeQuantity={handleUpgradeThreeQuantity}
        handleUpgradeThreeMultiplier={handleUpgradeThreeMultiplier}
        handleAsteroidClick={handleAsteroidClick}
      />
      <div className="upgradesKey">
        <p>Gain x2 MpC for 5 Seconds.</p>
      </div>
    </div>
  );
}
