export default function UpgradeOne({
  upgradeOneCost,
  handleUpgradeOneCost,
  upgradeOneQuantity,
  handleUpgradeOneQuantity,
  handleMetalsPerSecond,
  showAvailability,
}) {
  return (
    <div
      id="upgradeSection"
      className={showAvailability ? "" : "notAvailable"}
      onClick={() => {
        handleUpgradeOneCost();
        handleUpgradeOneQuantity();
        handleMetalsPerSecond();
      }}>
      <div className="upgradeImgTitle">
        <img
          src="./src/assets/spaceship.png"
          alt="A cartoon image of a spaceship"
        />
        <p>Ship Miner</p>
      </div>

      <div className="upgradeInfo">
        <div className="cost">
          <p>Cost: {upgradeOneCost}</p>
        </div>
        <div className="quantity">
          <p>Quantity: {upgradeOneQuantity}</p>
        </div>
      </div>
    </div>
  );
}
