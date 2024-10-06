import React, { Component } from "react";

class BoxSize extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 100 };
    this.boxRef = React.createRef();
  }

  componentDidUpdate(prevState, prevProps) {
    // react to update and change the HTML element's height
    this.boxRef.current.style.height = `${this.state.height}px`;
  }

  render() {
    return (
      <div>
        Box height
        <input
          type="number"
          value={this.state.height}
          onChange={(e) => this.setState({ height: e.target.value })}
        />
        <div
          ref={this.boxRef}
          style={{ height: "100px", border: "1px solid black" }}
        >
          Sample text
        </div>
      </div>
    );
  }
}

export default BoxSize;
