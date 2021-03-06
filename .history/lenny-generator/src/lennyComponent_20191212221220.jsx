import React, { Component } from 'react';
import './lennyComponent.css'
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarProvider, useSnackbar } from 'notistack';


class Lenny extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            vertical: 'top',
            horizontal: 'center',
          };
    }

    handleClick=()=>{
        const { enqueueSnackbar } = useSnackbar();
        this.copyToClipboard();
        enqueueSnackbar('Skopiowano!', 'success');
    }

    copyToClipboard = () =>{
        const el = document.createElement('textarea');
        el.value = this.props.lenny;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
  render() {
    return(
        <div>
        <div className="lenny-wrapper">
            <div className="lenny" onClick={this.handleClick}>
                
                {this.props.lenny}
            </div>
        </div>
         <Snackbar
         key={`${this.state.vertical},${this.state.horizontal}`}
         open={this.state.open}
        //  onClose={handleClose}
         ContentProps={{
           'aria-describedby': 'message-id',
         }}
         message={<span id="message-id">Skopiowano!</span>}
       />
       </div>
    );
  }
}




export default Lenny; // Don’t forget to use export default!

