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
  handleTempMultiplier,
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
      <UpgradeTwo
        metalCounter={metalCounter}
        upgradeTwoCost={upgradeTwoCost}
        handleUpgradeTwoCost={handleUpgradeTwoCost}
        upgradeTwoQuantity={upgradeTwoQuantity}
        handleUpgradeTwoQuantity={handleUpgradeTwoQuantity}
        handleUpgradeTwoClick={handleUpgradeTwoClick}
      />
      <UpgradeThree
        metalCounter={metalCounter}
        upgradeThreeCost={upgradeThreeCost}
        handleUpgradeThreeCost={handleUpgradeThreeCost}
        upgradeThreeQuantity={upgradeThreeQuantity}
        handleUpgradeThreeQuantity={handleUpgradeThreeQuantity}
        handleUpgradeThreeMultiplier={handleUpgradeThreeMultiplier}
        handleAsteroidClick={handleAsteroidClick}
      />
    </div>
  );
}
