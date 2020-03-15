import React from 'react'
//import {Provider} from 'react-redux';
import './App.css';
//import store from "./Redux/Cake/cakeStore"
//import Cakeapp from './Cakeapp';
import { connect } from 'react-redux'
import { Buycake } from './Redux/Cake/cakeAction'

function Cakeapp(props) {
    return (
        <div>
            <h2>Cake Order App</h2>
            <h3>Number Of Cakes-{props.noc}</h3>
            <button onClick={props.Buycake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noc: state.noc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Buycake: () => dispatch(Buycake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cakeapp)
