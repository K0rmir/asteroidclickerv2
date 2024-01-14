export default function UpgradeThree({
  upgradeThreeCost,
  handleUpgradeThreeCost,
  upgradeThreeQuantity,
  handleUpgradeThreeQuantity,
  metalCounter,
  handleUpgradeThreeMultiplier,
}) {
  return (
    <div
      id="upgradeSection"
      title="x2 MPC for 5 Seconds"
      className={metalCounter >= upgradeThreeCost ? "" : "notAvailable"}
      onClick={() => {
        handleUpgradeThreeCost();
        handleUpgradeThreeQuantity();
        handleUpgradeThreeMultiplier();
      }}>
      <div className="upgradeImgTitle">
        <img
          src="./src/assets/spaceship.png"
          alt="A cartoon image of a spaceship"
        />
        <p>Metal Refinery</p>
      </div>

      <div className="upgradeInfo">
        <div className="cost">
          <p>Cost: {upgradeThreeCost}</p>
        </div>
        <div className="quantity">
          <p>Quantity: {upgradeThreeQuantity}</p>
        </div>
      </div>
    </div>
  );
}
