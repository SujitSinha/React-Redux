import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Buycake } from './Redux/Cake/cakeAction'

function CakeappHooks() {
    const noc = useSelector(state => state.cake.noc);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cake by hooks-{noc}</h2>
            <button onClick={() => dispatch(Buycake())}>Buy cake</button>

        </div>
    )
}

export default CakeappHooks
