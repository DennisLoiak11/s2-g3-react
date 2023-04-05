import { Container } from "react-bootstrap";
import DragonBall from "./DragonBall";
import Spiderman from "./Spiderman";
import Harry from "./HarryPotterFilm";

function Main() {
    return (
        <>
            <h5 className="text-white fs-2 ms-3 px-2">Dragon-Ball</h5>
            <Container>

                <DragonBall />

            </Container>
            
            <h5 className="text-white fs-2 ms-3 px-2">Spider-man</h5>
            <Container>
                
                <Spiderman />

            </Container>
            
            <h5 className="text-white fs-2 ms-3 px-2">Harry Potter</h5>
            <Container>

                <Harry />

            </Container>
        </>
    )
}

export default Main;