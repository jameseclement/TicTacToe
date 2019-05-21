import React, { Component } from "react";
import Board from "./board";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      history: [
        {
          squares: [null, null, null, null, null, null, null, null, null]
        }
      ]
    };
  }

  switchTurn = () => {
    this.state.turn === "X"
      ? this.setState({ turn: "O" })
      : this.setState({ turn: "X" });
  };

  handleClick = i => {
    const history = this.state.history;
    const board = history[history.length - 1];
    const squares = board.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    } else {
      squares[i] = this.props.turn;
      this.setState({
        squares: squares
      });
      this.props.switch();
    }
  };

  calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  render() {
    const history = this.state.history;
    const board = history[history.length - 1];
    const winner = this.calculateWinner(board);
    let status;
    if (winner) {
      status = `${winner} is the Winner!`;
    } else {
      status = `Next player: ${this.props.turn}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            turn={this.state.turn}
            switch={this.switchTurn}
            board={board}
            handleClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol />
        </div>
      </div>
    );
  }
}

export default Game;
