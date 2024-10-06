import axios from "axios";
import React, { Component } from "react";

class CDUpdateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  updateEmail = async () => {
    let res = await axios.get(
      `https://reqres.in/api/users/${this.props.userId}`
    );
    let email = res.data.data.email;
    console.log(email);
    this.setState({ email: email });
  };

  async componentDidMount() {
    await this.updateEmail();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      await this.updateEmail();
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.email}</p>
      </div>
    );
  }
}

export default CDUpdateActivity;
