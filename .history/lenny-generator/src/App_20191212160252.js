import React, { Component } from "react";
import Button from "@material-ui/core/Button"
import './App.css';
import Lenny from './lennyComponent'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >xs=6</Paper>
          </Grid>
        </Grid> 
      </div>
    </div>

  );
  }
}

export default App;
