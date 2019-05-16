import React, { Component } from "react";
import Board from "./board";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X"
    };
  }

  switchTurn = () => {
    this.state.turn === "X"
      ? this.setState({ turn: "O" })
      : this.setState({ turn: "X" });
  };
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board turn={this.state.turn} switch={this.switchTurn} />
        </div>
        <div className="game-info">
          <div />
          <ol />
        </div>
      </div>
    );
  }
}

export default Game;
