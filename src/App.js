import React, { Component } from 'react';
import {connect} from 'substate-connect';

import Counter from './Counter';
import appState from './substate';

const AddToCounter = ()=>{
  appState.emit('UPDATE_STATE', {count: (appState.getProp('count') + 1)});
}

const WiredCounter = connect(appState, {count: 'count'})(Counter);

class App extends Component {
  componentWillMount(){
    appState.on('STATE_UPDATED', (newState)=>this.setState(newState));
  }

  render() {
    return (
      <div className="App">
        <WiredCounter clickHandler={AddToCounter}/>
        counter, multiplier light, number to check for
        This light will go onwhen the number is a multiple of 7
      </div>
    );
  }
}

export default App;
