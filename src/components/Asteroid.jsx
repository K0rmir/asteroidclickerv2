import "../css/Asteroid.css";
import "../css/MultiplierText.css";

export default function Asteroid({
  asteroidClick,
  handleAsteroidClick,
  isMultiplierActive,
}) {
  return (
    <>
      <div id="asteroid">
        <img
          onClick={() => {
            handleAsteroidClick();
          }}
          src="./src/assets/asteroid.png"
          alt="An image of a cartoon asteroid"
        />
      </div>
      {isMultiplierActive && (
        <p id="multiplierText" className="flash-text">
          x2 Click Multiplier Activated!
        </p>
      )}
    </>
  );
}
