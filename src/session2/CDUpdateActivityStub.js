import axios from "axios";
import React, { Component } from "react";

class CDUpdateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    // TODO - Add logic to make API call if userId prop changed
  }

  render() {
    return <div></div>;
  }
}

export default CDUpdateActivity;
