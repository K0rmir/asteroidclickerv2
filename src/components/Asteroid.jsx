import "../css/Asteroid.css";
import "../css/MultiplierText.css";

export default function Asteroid({
  asteroidClick,
  handleAsteroidClick,
  isMultiplierActive,
  isAstronautActive,
  isAstronautClicked,
}) {
  return (
    <>
      <div id="asteroid">
        <img
          onClick={() => {
            handleAsteroidClick();
          }}
          src="./dist/assets/asteroid.png"
          alt="An image of a cartoon asteroid"
        />
      </div>
      {isMultiplierActive && (
        <p id="multiplierText" className="flash-text">
          x2 Click Multiplier Activated!
        </p>
      )}
      {isAstronautActive && !isAstronautClicked && (
        <p id="astronautText" className="flash-text">
          Click the astronaut to gain a bonus!
        </p>
      )}
    </>
  );
}
