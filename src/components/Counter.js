import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../redux/features/counter/counterSlice";
import {
  selectCount,
  selectShowCounter,
} from "../redux/features/counter/counterSlice";
import { selectAuthenticated } from "../redux/features/authenticate/authenticateSlice";
import classes from "./Counter.module.css";
import { useState } from "react";
import React from "react";
export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("5");

  const incrementValue = Number(incrementAmount) || 5;

  const showCounter = useSelector(selectShowCounter);

  const isAuthenticated = useSelector(selectAuthenticated);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.incrementByAmount(incrementValue));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <React.Fragment>
      {isAuthenticated && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {showCounter && <div className={classes.value}>{count}</div>}
          <div>
            {/* <input value={incrementAmount}></input> */}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
    </React.Fragment>
  );
};

export default Counter;
