import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 }); //Updating state
  };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: this.state.count });
  // };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.count)}
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
  }
}

export default Counter;
