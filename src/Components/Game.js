import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "./Board.js"

function Game() {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.setValue);

  const handleReset = () => {
    dispatch({
      type: "SET_VALUE",
    });
  };
  return (
    <div>
      <h1>TIC-TAC-TOE BOARD</h1>
      <button onClick={handleReset}>RESET THE BOARD</button>
      <Board />
    </div>
  );
}

export default Game;
