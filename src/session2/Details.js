import { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    };
    console.log("Details.js - constructor()");
  }

  componentDidMount() {
    console.log("Details.js - componentDidMount()");
  }
  componentDidUpdate() {
    console.log("Details.js - componentDidUpdate()");
  }

  render() {
    console.log("Details.js - render()");
    return (
      <div style={{ border: "1px dotted blue", padding: "2px", margin: "5px" }}>
        <h2>Welcome, {this.props.name}</h2>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default Details;
