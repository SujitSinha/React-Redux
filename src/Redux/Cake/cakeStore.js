import {createStore} from "redux"
//import Cakereducer from "./cakeReducer"
import rootReducer from "../Rootreducer";

const store = createStore(rootReducer);

export default store