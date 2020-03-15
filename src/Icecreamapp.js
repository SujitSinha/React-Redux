import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buyicecream } from './Redux/Icecream/IcecreamAction'

function Icecreamapp() {
    const noi = useSelector(state => state.icecream.noi);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecream by hooks-{noi}</h2>
            <button onClick={() => dispatch(Buyicecream())}>Buy Icecream</button>

        </div>
    )
}

export default Icecreamapp
