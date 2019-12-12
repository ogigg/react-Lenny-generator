import React, { Component } from 'react';


class Lenny extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return(
        <h1>
            {this.props.lenny}
        </h1>
    );
  }
}




export default Lenny; // Don’t forget to use export default!

