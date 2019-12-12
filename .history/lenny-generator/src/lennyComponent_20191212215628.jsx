import React, { Component } from 'react';
import './lennyComponent.css'

class Lenny extends Component {
    constructor(props) {
        super(props);
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
            <div className="lenny" onClick={this.copyToClipboard}>
                
                {this.props.lenny}
            </div>
        </div>
    );
  }
}




export default Lenny; // Don’t forget to use export default!

