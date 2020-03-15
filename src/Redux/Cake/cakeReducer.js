import { BUY_CAKE } from "./cakeType"

const initialState = {
    noc: 20
}

const Cakereducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noc: state.noc - 1
            }
        default: return state
    }
}

export default Cakereducer