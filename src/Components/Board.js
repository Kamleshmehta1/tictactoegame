import React from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";

function Board() {
  const setValue = useSelector((state) => state.setValue);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let checker = false;
    let checkEachRow = () => {
      for (let i = 0; i < 9; i += 3) {
        checker = 
      }
    };

    let checkEachColumn = () => {
      for (let i = 0; i < 9; i += 3) {}
    };

    setValue ? (e.target.innerText = "X") : (e.target.innerText = "O");
    dispatch({
      type: "SET_VALUE",
      setValue: !setValue,
    });
  };
  return (
    <div>
      <div className="container">
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
        <div className="small-container" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Board;
