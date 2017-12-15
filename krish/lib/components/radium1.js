import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {StyleRoot} from 'radium';


function clickio() {
  console.log('button clicked');
}


var divStyle = {

      backi: {
        color: 'red',
        display:"block",
        width: '25%',
        cursor: "pointer",
      }

};

var divMedia = {

  backi: {
    backgroundColor: 'pink',
    color: 'green',
    curosr: 'pointer',
  },

  backim: {
    '@media screen and (max-width: 420px) and (min-width: 220px)': {
      color: 'red',
      backgroundColor: 'maroon',

    },


    '@media screen and (max-width: 1120px) and (min-width: 620px)': {
      color: 'white',
      backgroundColor: 'pink',
      position: 'absolute',
      left: '50px',
      cursor: "pointer",

    },
  }

};

console.log("raduim page");

const Mediaques = () => (
  <StyleRoot>
    <div onClick={() => console.log("login clicked")} style={divMedia.backim}>Login

    </div>
  </StyleRoot>
);

class Radium1 extends React.Component {
  render() {
    return (

        <div style={divStyle.backi}>
        <p>Hello</p>
        <p>krish again</p>

         </div>

    );
  }
}

class app extends React.Component {
  render() {
    return (


          <div>
          <div><Radium1 /></div>
          <div><Mediaques /></div>
          </div>

    );
  }
}


  const Component = Radium(app);
  export default Component;