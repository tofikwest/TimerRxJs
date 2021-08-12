import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    hours: 0,
    minuts: 0,
    seconds: 0,
  };

  start = () => {
    return setInterval(() => {
      if (this.state.minuts === 60) {
        this.setState((prevState) => {
          return {
            hours: prevState.hours + 1,
          };
        });
        this.setState({ minuts: 0 });
      }
      if (this.state.s === 60) {
        this.setState((prevState) => {
          return {
            minuts: prevState.minuts + 1,
          };
        });
        this.setState({ seconds: 0 });
      }
    }, 10);
  };
  render() {
    return (
      <>
        <section>
          <span>
            {this.state.hours >= 10 ? this.state.hours : "0" + this.state.hours}
            :
          </span>
          <span>
            {this.state.minuts >= 10
              ? this.state.minuts
              : "0" + this.state.minuts}
            :
          </span>
          <span>
            {this.state.seconds >= 10
              ? this.state.seconds
              : "0" + this.state.seconds}
          </span>

          <button onClick={this.start}>Start</button>
          <button>Wait</button>
          <button>Reset</button>
        </section>
      </>
    );
  }
}

export default Stopwatch;
