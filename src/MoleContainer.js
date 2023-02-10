
import { useState } from "react"
import EmptySlot from "./EmptySlot"
import Mole from "./Mole"


export default function MoleContainer(props) {
    const [theMole, setTheMole] = useState(false)

    const moleBop = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} moleBop={moleBop} /> : <EmptySlot toggle={setTheMole} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}