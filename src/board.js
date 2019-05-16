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
        handleClick={this.handleSquareClick}
        value={this.state.squares[i]}
      />
    );
  }

  handleSquareClick = i => {
    console.log(`Square ${i} was clicked`);
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({
      squares: squares
    });
  };

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
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
