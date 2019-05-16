import React, { Component } from "react";

class Square extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleClick = marker => {
    this.setState({
      value: marker
    });
  };
  render() {
    return (
      <button onClick={() => this.handleClick()} className="square">
        {this.state.value}
      </button>
    );
  }
}

export default Square;
