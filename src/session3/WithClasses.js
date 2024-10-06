import React from "react";

class WithClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleCountChange = (e) => {
    this.setState({
      count: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          name="name"
          value={this.state.count}
          onChange={this.handleCountChange}
        />
      </div>
    );
  }
}
export default WithClasses;
