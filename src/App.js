import React, { Component } from 'react';
import {connect} from 'substate-connect';

import Counter from './Counter';
import Light from './Light';
import appState from './substate';

const AddToCounter = ()=>{
  const c = (appState.getProp('count') + 1);
  appState.emit('UPDATE_STATE', {count: c, isMultiple: (c%7 === 0? true: false)});
}

const WiredCounter = connect(appState, {count: 'count'})(Counter);
const WiredLight = connect(appState, {on: 'isMultiple'})(Light);

class App extends Component {
  componentWillMount(){
    appState.on('STATE_UPDATED', (newState)=>this.setState(newState));
  }

  render() {
    return (
      <div className="App">
        <h1>
          substate demo
        </h1>
        <p>
          When the counter is a multiple of 7, the "light" will go on.
        </p>
        <WiredCounter clickHandler={AddToCounter}/>
        <WiredLight/>
      </div>
    );
  }
}

export default App;
