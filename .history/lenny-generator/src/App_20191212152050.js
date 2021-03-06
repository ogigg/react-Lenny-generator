import React, { Component } from "react";
import Button from "@material-ui/core/Button"
import './App.css';
import {renderLenny} from './lennyComponent'
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
      <renderLenny lenny={this.state.lennyFace}/>
      {/* <Button variant="contained" color="primary">
      {this.state.lennyFace}
      </Button> */}
    </div>

  );
  }
}

export default App;
