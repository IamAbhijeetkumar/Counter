import React,{useState} from 'react';
import "./Style.css"

const Counter = () => {
const [mynum, setMynum] = useState(0)

    return (
        <>
            <div class="main-div">
                <p class="head" id="counter">{mynum}</p>
                <button id="increase" class="btn" onClick={() => setMynum(mynum+1)}>Increase</button>
                <button id="reset" class="btn" onClick={() => setMynum(0)}>Reset</button>
                <button id="decrease" class="btn" onClick={() => setMynum(mynum > 0 ? mynum-1 : 0)}>Decrease</button>
            </div>

        </>
    )
}

export default Counter
