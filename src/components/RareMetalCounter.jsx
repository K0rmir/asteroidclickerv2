import "../css/Counter.css";

export default function RareMetalCounter({
  metalCounter,
  metalsPerSecond,
  asteroidClick,
  // isMultiplierActive,
  // newValue,
}) {
  return (
    <div id="counter">
      <p>Rare Metals: {metalCounter} </p>
      <p>Metals Per Second: {metalsPerSecond} </p>
      <p>Metals Per Click: {asteroidClick} </p>
    </div>
  );
}
