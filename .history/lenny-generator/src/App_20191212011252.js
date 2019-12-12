import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </div>

  );
}

export default App;
