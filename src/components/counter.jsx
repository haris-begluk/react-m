import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //return count === 0 ? <h1>Zero</h1> : count;
    //const zero = <h1>Zero</h1>;
  }
}

export default Counter;
/* 
First Way: 
return (
      <div className="m-5">
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>
    );
Second Way: 
return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    ); 


  Multi cursor editing: 
  select tag and ctrl + d
*/
