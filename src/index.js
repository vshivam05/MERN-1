import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

/* Checkpoint 1 - Render UI with React */
import "./styles.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>0</h1>
//         <button>+1</button>
//         <button>-1</button>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));

/* Checkpoint 2 - Adding logic/functionality - state + events
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  decreaseCount = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increaseCount()}>+1</button>
        <button onClick={this.decreaseCount}>-1</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
 */

/* Checkpoint 3 - Reusing logic + UI
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
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
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increaseCount()}>+{this.props.diff}</button>
        <button onClick={this.decreaseCount}>-{this.props.diff}</button>
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
*/

/* Imports/exports - Starter code
class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <input type="text" placeholder="Custom text field" />
        <button>My custom button</button>
        <button>
          <a href="https://www.google.com">Visit google.com</a>
        </button>
      </div>
    );
  }
}
 */

// ReactDOM.render(<App />, document.querySelector("#root"));
