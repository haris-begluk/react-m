import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  // constructor() {
  //   super();
  //   //console.log("constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this); // first way binding this keyword of the function
  // }

  handleIncrement = () => {
    //Second way to bind this key word is using arrow functions
    // console.log("Increment clicked", this); //this undefined
    console.log("Increment clicked", this);
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <ul className="list-group col-md-4 offset-md-4">
          {this.state.tags.map(tag => (
            <li className="list-group-item" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
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
          //    imageUrl: "http://picsum.photos/200"
          //<img src={this.state.imageUrl} alt="ot loaded" /> 

============================================================= 
style = {
    fontSize: 30,
    fontWight: "bold"
  }; 
 <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
</span> 

or 

<span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
</span> 
=================================================================== 
<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
<button className="btn btn-secondary btn-sm">Increment</button> 
=================================================================== 
=================================================================== 
=================================================================== 
=================================================================== 
=================================================================== 
=================================================================== 
=================================================================== 

*/
