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
        src="./dist/assets/astronaut.png"
        alt="A cartoon image of a spaceman"
        onClick={() => {
          if (isAstronautClicked === false) {
            setMetalCounter(metalCounter + 201);
            setIsAstronautClicked((isAstronautClicked = true));
          }
        }}
      />
    </>
  );
}
