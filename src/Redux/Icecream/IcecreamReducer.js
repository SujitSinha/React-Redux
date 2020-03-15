import { BUY_ICECREAM } from "./IcecreamType"

const initialState = {
    noi: 10
}

const Icecreamreducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noi: state.noi - 1
            }
        default: return state
    }
}

export default Icecreamreducer