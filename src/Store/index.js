import { createStore } from "redux";

const initialState = {
  boardData: [],
  setValue: false,
};

const ReducerFunc = (state = initialState, action) => {
  // console.log("Actions inside Reducer File: " + JSON.stringify(action));
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        setValue: action.setValue,
      };
    case "BOARD_DATA":
      return {
        ...state,
        boardData: action.boardData,
      };
    default:
      return state;
  }
};

const store = createStore(ReducerFunc);

export default store;
