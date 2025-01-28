import React from 'react';
import Timerone from './Timer/TimerOne';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: false
    };
  }

  handleMount=()=>{
    this.setState((prevState) => ({
      isMounted: !prevState.isMounted
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleMount}>
          {this.state.isMounted ? 'Un-mount' : 'Mount'}
        </button>
        {this.state.isMounted ? <Timerone  timerOn={this.state.isMounted}/> : null}
      </>
    );
  }
}
export default App;
