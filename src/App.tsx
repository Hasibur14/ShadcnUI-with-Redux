import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <div className="text-4xl">
      <h2>BASIC REDUX</h2>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <button onClick={() => handleIncrement(5)}>Increment by 1</button>
      <button>{count}</button>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
    </div>
  );
}

export default App;
