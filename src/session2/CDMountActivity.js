import axios from "axios";
import React, { Component } from "react";

class CDMountActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async componentDidMount() {
    let id = 1;
    let res = await axios.get(`https://reqres.in/api/users/${id}`);
    let email = res.data.data.email;
    console.log(email);
    this.setState({ email: email });
  }

  render() {
    return (
      <div>
        {/* <ul>
          {this.state.emailsList.map((email) => (
            <li>{email}</li>
          ))}
        </ul> */}
        <p>{this.state.email}</p>
      </div>
    );
  }
}

export default CDMountActivity;
