import React, { Component } from 'react';
import './lennyComponent.css'

class Lenny extends Component {
    constructor(props) {
        super(props);
    }
    copyToClipboard = () ={

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

