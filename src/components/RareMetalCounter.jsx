import "../css/Counter.css";

export default function RareMetalCounter({metalCounter, metalsPerSecond}) {
  return (
    <div id="counter">
      <p>Rare Metals: {metalCounter} </p>
      <p>Metals Per Second: {metalsPerSecond} </p>
    </div>
  );
}
