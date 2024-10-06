import React from "react";

export class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}

export class TextField extends React.Component {
  render() {
    return <input type="text" placeholder={this.props.placeholder} />;
  }
}
