import "../css/Astronaut.css";

export default function Astronaut({
  metalCounter,
  setMetalCounter,
  isAstronautActive,
  isAstronautClicked,
  setIsAstronautClicked,
}) {
  return (
    <>
      <img
        id="astronaut"
        className={isAstronautActive ? "astronautMove" : ""}
        src="./src/assets/astronaut.png"
        alt="A cartoon image of a spaceman"
        onClick={() => {
          if (isAstronautClicked === false) {
            setMetalCounter(metalCounter + 1000);
            setIsAstronautClicked((isAstronautClicked = true));
            console.log(isAstronautClicked);
          }
        }}
      />
    </>
  );
}
