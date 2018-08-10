import React, { Component } from 'react';
import './box.css';

function BoxMaker(props) {
  return (
    props.boxes.map((box, i) => {return <span key={i}>{box+1}</span>})
  )
}

//creating a BoxBuilder Class Component
class BoxBuilder extends Component {
  constructor(props){
    super(props);
    //added count as state property with 0 as default value
    this.state = { 
      count: 0,
      boxStack: []
    }
    //binding addBox and removeBox methods
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

    // addBox method updates the count variable by 1 whenever called
  addBox(){
    this.setState((currentState) => {
      return {
      count: currentState.count + 1,
      boxStack: currentState.boxStack.concat(this.state.count)
    }})
  }
  // removeBox method updates the count variable by -1 whenever called
  removeBox(){
    this.state.boxStack.pop();
    if(this.state.count > 0){
    this.setState((currentState) => {return {
      count: currentState.count - 1,  
    }})
  }
  }
  render() {
    //destructuring the state properties
    const { boxStack, count } = this.state;
    //UI with heading and buttons
    //box stack and counter
    return (
      <div className="container">
        <h1>Box Builder</h1>
        <h4>Start Building</h4>
        <div className="button-inline">
          <button className="add-btn" onClick={this.addBox}>Add Box</button> &nbsp;
          <button className="remove-btn" onClick={this.removeBox}>Remove Box</button>
        </div>
        <div className="boxes" >{count === 0 ? <p>No boxes</p> : <BoxMaker boxes={boxStack}/>}</div>
      <p className="count-size" style={{fontSize: `${count}vh`, marginTop: 0}}>{count}</p>
      </div>
    );
  }
}

export default BoxBuilder;
