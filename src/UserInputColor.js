import React, { Component } from "react";

class UserInputColor extends Component {
  state = {
    name: "",
    color: ""
  };

  updateColor = (event) =>
    this.setState({ name: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addColor(this.state.color);
    //this.props.addColor(this.state.color);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="add a color"
          value={this.state.name}
          onChange={this.updateColor}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInputColor;
