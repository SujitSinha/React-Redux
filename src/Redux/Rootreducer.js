import {combineReducers} from 'redux'
import cakereducer from './Cake/cakeReducer'
import Icecreamreducer from './Icecream/IcecreamReducer'

const rootReducer=combineReducers({
    cake:cakereducer,
    icecream:Icecreamreducer
})

export default rootReducer