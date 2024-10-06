import React, { Component } from "react";

class Captcha extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    console.log("Captcha.js - constructor()");
  }

  componentDidMount() {
    console.log("Captcha.js - componentDidMount()");
  }

  componentDidUpdate() {
    console.log("Captcha.js - componentDidUpdate()");
  }
  render() {
    console.log("Captcha.js - render()");
    return (
      <div
        style={{ border: "1px dotted green", padding: "2px", margin: "5px" }}
      >
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={(e) => {
            this.setState({ checked: e.target.checked });
          }}
        />{" "}
        I confirm that the details are accurate to my belief.
      </div>
    );
  }
}

export default Captcha;
