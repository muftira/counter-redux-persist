import logo from './logo.svg';
import './App.css';
import { incrementValue, decrementValue } from "./redux/action/index";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const {count} = useSelector(state => state.counter)
  return (
    <div className="App">
      <button onClick={() => dispatch(incrementValue())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrementValue())}>-</button>
    </div>
  );
}

export default App;
