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
    const squares = this.state.squares.slice();
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
  render() {
    const history = this.state.history;
    const board = history[history.length - 1];
    const winner = this.calculateWinner(this.board);
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
