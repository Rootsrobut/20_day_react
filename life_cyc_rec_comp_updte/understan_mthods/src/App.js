import React from 'react';
import Timerone from './Timer/TimerOne';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timeOn: false
    };
  }

  handleTimeOn = () => {
    this.setState((prevState) => ({
      timeOn: !prevState.timeOn
    }));
  }

  render() {
    return (
      <>
        <Timerone timerOn={this.state.timeOn} />
        <button onClick={this.handleTimeOn}>
          {this.state.timeOn ? "STOP" : "START"}
        </button>
      </>
    );
  }
}

export default App;

