import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]
    };
  }
  renderSquare(i) {
    return (
      <Square
        handleClick={() => this.props.handleClick(i)}
        value={this.state.squares[i]}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
