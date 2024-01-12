import "../css/UpgradesPanel.css";
import UpgradeOne from "./UpgradeOne";

export default function UpgradesPanel({
  upgradeOneCost,
  handleUpgradeOneCost,
  upgradeOneQuantity,
  handleUpgradeOneQuantity,
  metalsPerSecond,
  handleMetalsPerSecond,
  showAvailability,
}) {
  return (
    <div className="upgradesPanel">
      <h3>Upgrades</h3>
      <UpgradeOne
        upgradeOneCost={upgradeOneCost}
        handleUpgradeOneCost={handleUpgradeOneCost}
        upgradeOneQuantity={upgradeOneQuantity}
        handleUpgradeOneQuantity={handleUpgradeOneQuantity}
        metalsPerSecond={metalsPerSecond}
        handleMetalsPerSecond={handleMetalsPerSecond}
        showAvailability={showAvailability}
      />
    </div>
  );
}
