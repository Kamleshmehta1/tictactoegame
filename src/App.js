import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Game from "./Components/Game";

function App() {
  const setValue = useSelector((state) => state.setValue);
  const boardData = useSelector((state) => state.boardData);
  const dispatch = useDispatch();
  
  const handleEvent = () => {
    console.log(setValue);
    dispatch({
      type: "SET_VALUE",
      setValue: !setValue,
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleEvent}>counter</button>
      </div>
      <Game />
    </div>
  );
}

export default App;
