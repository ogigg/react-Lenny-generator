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
      lennyEyes: [' ͡°',' ͡°'],
      lennyHands: ['\\','/'],
      lennyOuter: ['(',')']
    };
  }

  lennyMouthList = [' ഌ',' ͜ʖ','  ͟ʖ','v',' ෴','o','_']
  lennyEyesList = [' ഌ',' ͜ʖ','  ͟ʖ','v',' ෴','o','_']
  lennyHandsList = [['\\','/'],['-','-'],['>=','=<'],['~','~']]
  lennyOuterList = [['[',']'],['q','p'],['(',')'],['<','>'],['!','!']]

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
            <Grid item xs={1}>
              <Paper>Usta</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  // value={this.state.lennyMouth}
                  onChange={this.handleChange}
                  // input={<BootstrapInput />}
                >
                {this.MenuItemList(this.lennyMouthList)}
                </Select>
              </Paper>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={1}>
              <Paper>Oczy</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper>Oczy</Paper>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={1}>
              <Paper>Uszy</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper>Uszy</Paper>
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={1}>
              <Paper>Ręce</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper>Ręce</Paper>
            </Grid>
          </Grid>
        </Grid> 
      </div>
    </div>

  );
  }
}

export default App;
