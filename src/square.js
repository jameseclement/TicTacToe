import React, { Component } from "react";

class Square extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <button
        onClick={() => this.props.handleClick(this.props.value)}
        className="square"
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
