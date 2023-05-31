import React from "react";
import useCounter from "./custom_hooks/useCounter";

const CounterThree = () => {
  console.log(useCounter);
  const [count, handleIncrement, handleReset, handleDecrement] = useCounter(
    0,
    10
  );
  return (
    <div className="counter">
      <h3>Counter Three: {count}</h3>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
export default CounterThree;
