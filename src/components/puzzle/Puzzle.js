import Image from "next/image";
import StyledPuzzle from './puzzle.styled';

const Puzzle = ()=> {

	return (
		<>
		<StyledPuzzle>
        <div className="puzzle"> 
                <div className= "puzzle__upside">
                    <div className="puzzle__one"><Image src="/puzzle/puzzle1.svg" width={75} height={75} ></Image></div>
                    <div className="puzzle__two"><Image src="/puzzle/puzzle2.svg" width={75} height={75} ></Image></div>
                </div>
                <div className= "puzzle__downside">
                   <div className="puzzle__three"><Image src="/puzzle/puzzle3.svg" width={75} height={75} ></Image></div>
                   <div className="puzzle__four"><Image src="/puzzle/puzzle4.svg" width={75} height={75} ></Image></div>
                </div>
         </div>
        </StyledPuzzle>
        </>
		);

}



export default Puzzle; 