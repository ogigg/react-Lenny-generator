import React, { Component } from "react";
import Button from "@material-ui/core"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lennyFace : "( ͡° ͜ʖ ͡°)"
    };
  }
  render(){
  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary">
      {this.state.lennyFace}
      </Button>
    </div>

  );
  }
}

export default App;
