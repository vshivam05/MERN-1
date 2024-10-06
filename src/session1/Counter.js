// NOTE - Uncomment styles in src/styles.css for Counter
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState((state, props) => {
      return { count: state.count + props.diff };
    });
    // this.props.diff++;
  };

  decreaseCount = () => {
    this.setState((state, props) => {
      return { count: state.count - props.diff };
    });
  };

  render() {
    return (
      <div>
        <h1 className="counter-display">{this.state.count}</h1>
        <button onClick={this.increaseCount}>+{this.props.diff}</button>
        <button onClick={this.decreaseCount}>-{this.props.diff}</button>
      </div>
    );
  }
}
export default Counter;
