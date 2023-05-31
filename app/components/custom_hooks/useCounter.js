import React,{useState} from "react";
function useCounter(initialValue, val) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((prevState) => prevState + val);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - val);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return [count, handleIncrement, handleReset, handleDecrement];
}

export default useCounter;
