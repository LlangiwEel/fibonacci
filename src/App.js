import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xNumber: 0,
      yNumber: 0,
      divEquals: {
        display: 'hidden',
        height: 0,
        width: 0,
      },
      divPlusOne: {
        display: 'hidden',
        height: 0,
        width: 0,
        zIndex: -1
      },
      divMinusOne: {
        display: 'hidden',
        height: 0,
        width: 0,
        zIndex: 1
      }
    }
    this.changeRatio = this.changeRatio.bind(this);
    this.changeY = this.changeY.bind(this);
    this.changeX = this.changeX.bind(this);
  }

  changeX(event){
    this.setState({
      xNumber: event.target.value
    })
  }

  changeY(event){
    this.setState({
      yNumber: event.target.value
    })
  }

  changeRatio() {
    this.setState({
        divEquals: {
          height: this.state.yNumber*1,
          width: this.state.xNumber*1,
          backgroundColor: "#aaaaaa",
          zIndex: 1,
        },
        divPlusOne: {
          height: Math.floor(this.state.yNumber*1.61803398875),
          width: Math.floor(this.state.xNumber*1.61803398875),
          backgroundColor: "blue",
          zIndex: -1,
        },
        divMinusOne: {
          height: Math.floor(this.state.yNumber/1.61803398875),
          width: Math.floor(this.state.xNumber/1.61803398875),
          backgroundColor: "red",
          zIndex: 2,
        }
      })
      console.log(this.state.nNumber)
    }


  render() {
    return (
      <div className="App">
        <input className="x" onChange={this.changeX}/>
        <input className="y" onChange={this.changeY}/>
        <button onClick={this.changeRatio}>Create</button>
        <div className="rectangle" id="divEquals" style={this.state.divEquals}><p>{this.state.divEquals.width}pixels x {this.state.divEquals.height}pixels</p></div>
        <div className="rectangle" id="divPlusOne" style={this.state.divPlusOne}><p>{this.state.divPlusOne.width}pixels x {this.state.divPlusOne.height}pixels</p></div>
        <div className="rectangle" id="divMinusOne" style={this.state.divMinusOne}><p>{this.state.divMinusOne.width}pixels x {this.state.divMinusOne.height}pixels</p></div>
      </div>
    );
  }
}

export default App;
