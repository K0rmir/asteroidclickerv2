export default function UpgradeThree({
    upgradeThreeCost,
    handleUpgradeThreeCost,
    upgradeThreeQuantity,
    handleUpgradeThreeQuantity,
    handleMetalsPerSecond,
    metalCounter,
  }) {
    return (
      <div
        id="upgradeSection"
        className={metalCounter >= upgradeThreeCost ? "" : "notAvailable"}
        onClick={() => {
          handleUpgradeThreeCost();
          handleUpgradeThreeQuantity();
          handleMetalsPerSecond();

        }}>
        <div className="upgradeImgTitle">
          <img
            src="./src/assets/spaceship.png"
            alt="A cartoon image of a spaceship"
          />
          <p>Mining Blaster</p>
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