import React, { Component } from "react";

class UserInput extends Component {
  state = {
    nameAndColor: ""
  };

  updateNameAndColor = (event) =>
    this.setState({ nameAndColor: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.state.nameAndColor.split(" ")[0]);
    this.props.addColor(this.state.nameAndColor.split(" ")[1]);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name, color pair here..."
          value={this.state.nameAndColor}
          onChange={this.updateNameAndColor}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
