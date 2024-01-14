export default function UpgradeTwo({
  upgradeTwoCost,
  handleUpgradeTwoCost,
  upgradeTwoQuantity,
  handleUpgradeTwoQuantity,
  handleUpgradeTwoClick,
  metalCounter,
}) {
  return (
    <div
      id="upgradeSection"
      className={metalCounter >= upgradeTwoCost ? "" : "notAvailable"}
      onClick={() => {
        handleUpgradeTwoCost();
        handleUpgradeTwoQuantity();
        handleUpgradeTwoClick();
      }}>
      <div className="upgradeImgTitle">
        <img
          src="./src/assets/miningblastertran.png"
          alt="A cartoon image of a laser gun"
        />
        <p>Mining Blaster</p>
      </div>

      <div className="upgradeInfo">
        <div className="cost">
          <p>Cost: {upgradeTwoCost}</p>
        </div>
        <div className="quantity">
          <p>Quantity: {upgradeTwoQuantity}</p>
        </div>
      </div>
    </div>
  );
}
