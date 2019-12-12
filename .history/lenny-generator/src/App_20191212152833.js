import React, { Component } from "react";
import Button from "@material-ui/core/Button"
import './App.css';
import Lenny from './lennyComponent'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lennyFace : "( ͡° ͜ʖ ͡°)"
    };
  }
  render(){
  return (
    <div>  
    <Lenny lenny={this.state.lennyFace}/>
    <div className="menu-wrapper">
      
      {/* <Button variant="contained" color="primary">
      {this.state.lennyFace}
      </Button> */}
    </div>
    </div>

  );
  }
}

export default App;
