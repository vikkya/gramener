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
    console.log('old',this.state.count)
    this.setState((prevState) => {
      return {
      count: prevState.count + 1,
      // boxStack: currentState.boxStack.concat(currentState.count)
    }})
    console.log('new', this.state.count)
    this.setState((prevState) => {
      return {
        boxStack: prevState.boxStack.concat(prevState.count)
      }
    })
  }
  removeBox(){
    this.state.boxStack.pop()
    this.setState((currentState) => {return {
      count: currentState.count - 1,  
    }})
  }
  render() {
    const { boxStack, count } = this.state;
    // console.log(boxStack)
    // const boxes = boxStack.map((box) => {return (<span key={Date.now()}>{box}</span>)})
    return (
      <div className="App">
        <h1>Box Builder</h1>
        <h4>Start Building</h4>
        <div className="button-inline">
          <button className="add-btn" onClick={this.addBox}>Add Box</button> &nbsp;
          <button className="remove-btn" onClick={this.removeBox}>Remove Box</button>
        </div>
        <div className="boxes">{boxStack.length === 0 ? boxStack : 'No Boxes'}</div>
      <p className="count-size" style={{fontSize: `${count}vh`, marginTop: 0}}>{count}</p>
      </div>
    );
  }
}

export default App;
