import React, { Component } from 'react';
import './lennyComponent.css'

class Lenny extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return(
        <div className="lenny">
            {this.props.lenny}
        </div>
    );
  }
}




export default Lenny; // Don’t forget to use export default!

