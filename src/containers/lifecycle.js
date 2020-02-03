import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button type="submit" onClick={this.increment}>
          Increment
        </button>
        <button type="submit" onClick={this.decrement}>
          Decrement
        </button>
        <div> counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default LifeCycle;
