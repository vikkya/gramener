import React, { Component } from 'react';
import './App.css';

function BoxMaker(props){
  return(
    <span>{props.count}</span>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      boxStack: []
    }
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(){
    this.setState((currentState) => {return {
      count: currentState.count + 1,
      boxStack: currentState.boxStack.concat(<BoxMaker count={this.state.count}/>)
    }})
  }
  removeBox(){
    this.setState((currentState) => {return {
      count: currentState.count - 1,
      boxStack: currentState.boxStack.pop()
    }})
  }
  render() {
    const { boxStack, count } = this.state;
    // console.log(boxStack.length)
    // const boxes = boxStack.map((box) => {return (<span key={Date.now()}>{box}</span>)})
    return (
      <div className="App">
        <h2>Box Builder</h2>
        <div className="button-inline">
          <button className="add-btn" onClick={this.addBox}>Add Box</button> &nbsp;
          <button className="remove-btn" onClick={this.removeBox}>Remove Box</button>
        </div>
        <div className="boxes">{boxStack.length > 1 ? boxStack : 'No Boxes'}</div>
      <p className="count-size" style={{fontSize: `${count}vh`}}>{count}</p>
      </div>
    );
  }
}

export default App;
