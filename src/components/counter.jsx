import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 }); //Updating state
  };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: this.state.count });
  // };
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.value)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
