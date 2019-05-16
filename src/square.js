import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button onClick={() => this.props.handleClick()} className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Square;
