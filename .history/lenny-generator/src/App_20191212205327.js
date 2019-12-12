import React, { Component } from "react";
import Button from "@material-ui/core/Button"
import './App.css';
import Lenny from './lennyComponent'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lennyFace : "( ͡° ͜ʖ ͡°)",
      lennyMouth: ' ͜ʖ',
      lennyEyes: '*.*',
      lennyHands: '.',
      lennyOuter: '(.)'
    };
  }

  lennyMouthList = [' ഌ',' ͜ʖ','  ͟ʖ','v',' ෴','o','_','-,-','+','*']
  lennyEyesList = ['*.*',' ͡°. ͡°','°.°','ಠ.ಠ']
  lennyHandsList = ['.','\\./','-.-','>=.=<','~.~','/./','づ.づ']
  lennyOuterList = ['[.]','q.p','(.)','<.>','!.!']



  handleChange = (event) =>{
    this.setState({lennyMouth: event.target.value},this.updateLenny);
  }

  updateLenny = () =>{
    this.setState({
      lennyFace: this.state.lennyHands.split('.')[0]+
      this.state.lennyOuter.split('.')[0]+
      this.state.lennyEyes.split('.')[0]+
      this.state.lennyMouth+
      this.state.lennyEyes.split('.')[1]+
      this.state.lennyOuter.split('.')[1]+
      this.state.lennyHands.split('.')[1]
    })
  }
  MenuItemList = (list) =>{
    return(
      list.map((item) =>
      <MenuItem value={item}>
        {item}
      </MenuItem>
  ));

  }


  render(){
  return (
    <div>  
      <Lenny lenny={this.state.lennyFace}/>
      <div className="menu-wrapper">
        <Grid container spacing={3} alignItems={'center'}>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Paper>Usta</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper>
                <Select
                  className="select"
                  id="lennyMouth" autoWidth='true'
                  value={this.state.lennyMouth}
                  onChange={(event) => {this.setState({lennyMouth: event.target.value},this.updateLenny);}}
                >
                {this.MenuItemList(this.lennyMouthList)}
                </Select>
              </Paper>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={1}>
              <Paper >Oczy</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                <Select
                  className="select"
                  id="lennyEyes"
                  value={this.state.lennyEyes}
                  onChange={(event) => {this.setState({lennyEyes: event.target.value},this.updateLenny);}}
                >
                {this.MenuItemList(this.lennyEyesList)}
                </Select>
              </Paper>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={1}>
              <Paper>Uszy</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                <Select
                  className="select"
                  id="lennyOuter"
                  value={this.state.lennyOuter}
                  onChange={(event) => {this.setState({lennyOuter: event.target.value},this.updateLenny);}}
                >
                {this.MenuItemList(this.lennyOuterList)}
                </Select>
              </Paper>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={1}>
              <Paper>Ręce</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                <Select
                  className="select"
                  id="lennyHands"
                  value={this.state.lennyHands}
                  onChange={(event) => {this.setState({lennyHands: event.target.value},this.updateLenny);}}
                >
                {this.MenuItemList(this.lennyHandsList)}
                </Select>
              </Paper>
            </Grid>
          </Grid>
        </Grid> 
      </div>
    </div>

  );
  }
}

export default App;
