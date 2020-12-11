import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";
import UserInputColor from "./UserInputColor.js";

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
        <h1>Name Tag Generator (네임 태그 생성기!)</h1>

        {/* two input box to add card name and color */}

        <UserInput addName={this.addName} />
        <UserInputColor addColor={this.addColor} />

        <NameTagList names     ={this.state.names} 
                     color     ={this.color} 
                     removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
