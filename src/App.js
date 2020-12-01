import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: [],
    colors: []
  };
  addName = (name) => {
    var newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  addColor = (color) => {
    var newColors = [color, ...this.state.colors];
    this.setState({ colors: newColors });
  };

  removeName = (clickedIndex) => {
    var filterCallback = (_, index) => index !== clickedIndex;
    var newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  componentDidUpdate() {
    var savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
  }

  componentDidMount() {
    var savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      var savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} addColor={this.addColor} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
