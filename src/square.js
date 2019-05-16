import React from "react";

const Square = props => {
  return (
    <button onClick={() => props.handleClick()} className="square">
      {props.value}
    </button>
  );
};

export default Square;
