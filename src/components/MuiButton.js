import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./styles.css";

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
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={this.increaseCount}>
            +{this.props.diff}
          </Button>
          <Button variant="outlined" onClick={this.decreaseCount}>
            -{this.props.diff}
          </Button>
        </Stack>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter diff={1} />
        <Counter diff={10} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
