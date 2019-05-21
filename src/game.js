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
      squares[i] = this.state.turn;
      this.setState({
        history: [...history, { squares: squares }]
      });
      this.switchTurn();
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
    const winner = this.calculateWinner(board.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li>
          <button key={move} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = `${winner} is the Winner!`;
    } else {
      status = `Next player: ${this.state.turn}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            turn={this.state.turn}
            switch={this.switchTurn}
            squares={board.squares}
            handleClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
