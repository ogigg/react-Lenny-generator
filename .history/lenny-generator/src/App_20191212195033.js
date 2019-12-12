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

  lennyMouthList = [' ഌ',' ͜ʖ','  ͟ʖ','v',' ෴','o','_','-,-','+','*']
  lennyEyesList = [['*','*'],[' ͡°',' ͡°'],['°','°'],['~','~'],['⩺','⩹'],['￣','￣']]
  lennyHandsList = [['',''],['\\','/'],['-','-'],['>=','=<'],['~','~'],['/','/']]
  lennyOuterList = [['[',']'],['q','p'],['(',')'],['<','>'],['!','!']]


  handleChange = (event) =>{
    this.setState({lennyMouth: event.target.value},this.updateLenny);
  }

  updateLenny = () =>{
    this.setState({
      lennyFace: this.state.lennyHands[0] + 
      this.state.lennyOuter[0]+
      this.state.lennyEyes[0]+
      this.state.lennyMouth+
      this.state.lennyEyes[1]+
      this.state.lennyOuter[1]+
      this.state.lennyHands[1]
    })
  }
  MenuItemList = (list) =>{
    return(
      list.map((item) =>
      <MenuItem value={item.join()}>
        {item.join()}
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
                  // labelId="demo-customized-select-label"
                  id="lennyMouth"
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
              <Paper>Oczy</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper>
                <Select
                  // labelId="demo-customized-select-label"
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
            <Grid item xs={5}>
              <Paper>
                <Select
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
            <Grid item xs={5}>
              <Paper>
                <Select
                  // labelId="demo-customized-select-label"
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
