import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button onClick={() => console.log("clicked")} className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Square;
