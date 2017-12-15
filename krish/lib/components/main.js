import React from 'react';
import ReactDOM from 'react-dom';

import divStyle from './divStyle';

import console from './console';



// var divStyle = {
//       backi: {
//         backgroundColor: 'red'
//       }

// };

console.log("from main.js only in main page");

class HelloMessage extends React.Component {
  render() {
    return (
      <div style={divStyle.backi}>
        <p>Hello {this.props.name}</p>
        <p>krish again</p>

      </div>

    );
  }
}

export default HelloMessage;