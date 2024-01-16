export default function UpgradeOne({
  upgradeOneCost,
  handleUpgradeOneCost,
  upgradeOneQuantity,
  handleUpgradeOneQuantity,
  handleMetalsPerSecond,
  metalCounter,
}) {
  return (
    <div
      id="upgradeSection"
      title="+1 Metals Per Second (MPS) per upgrade level"
      className={metalCounter >= upgradeOneCost ? "" : "notAvailable"}
      onClick={() => {
        handleUpgradeOneCost();
        handleUpgradeOneQuantity();
        handleMetalsPerSecond();
      }}>
      <div className="upgradeImgTitle">
        <img
          src="./assets/spaceship.png"
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
