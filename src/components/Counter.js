import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../redux/features/counter/counterSlice";
import classes from "./Counter.module.css";
import { useState } from "react";
export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("5");

  const incrementValue = Number(incrementAmount) || 5;

  
  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = ()=>{
    dispatch(incrementByAmount(5))
  }
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        {/* <input value={incrementAmount}></input> */}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
