import React, { Component } from 'react';
import './lennyComponent.css'

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
        this.copyToClipboard();
        this.setState({open: true,...newState });
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
        <div className="lenny-wrapper">
            <div className="lenny" onClick={this.handleClick}>
                
                {this.props.lenny}
            </div>
        </div>
    );
  }
}




export default Lenny; // Don’t forget to use export default!

