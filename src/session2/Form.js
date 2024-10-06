import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            onSubmit={(e) => this.handleSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

export default Form;
