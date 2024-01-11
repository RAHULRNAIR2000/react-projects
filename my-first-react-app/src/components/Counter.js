import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "../states/atoms";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [counterFontSize, setCounterFontSize] = useRecoilState(fontSizeState);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const incrementFontSize = () => {
    setCounterFontSize(counterFontSize + 1);
  };
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={incrementFontSize} style={{ fontSize: counterFontSize }}>
        click to enlarge
      </button>
    </div>
  );
};

export default Counter;