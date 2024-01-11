import "../css/Asteroid.css"



export default function Asteroid({handleAsteroidClick}) {
    return (
        <div id="asteroid">
            <img onClick={() => {
                handleAsteroidClick();
            }}  src="./src/assets/asteroid.png" alt="An image of a cartoon asteroid" />

        </div>
    )

}