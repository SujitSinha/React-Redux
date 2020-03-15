import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from "./Redux/Cake/cakeStore"
import Cakeapp from './Cakeapp';
import CakeappHooks from './CakeappHooks'
import Icecreamapp from './Icecreamapp'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeappHooks/>
      <Icecreamapp/>
    </div>
    </Provider>
  );
}


export default App;
