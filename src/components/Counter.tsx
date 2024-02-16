import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [changeBy, setChangeBy] = useState(1);
  const increment = () => {
    setCount(count + changeBy);
  };
  const decrement = () => {
    setCount(count - changeBy);
  };
  const increaseChange = () => {
    setChangeBy(changeBy + 1);
  };
  const decreaseChange = () => {
    changeBy === 1 ? setChangeBy(changeBy) : setChangeBy(changeBy - 1);
  };

  return (
    <div>
      <h2>We are changing the value by: {changeBy}</h2>
      <button onClick={increaseChange}>Change+</button>
      <button onClick={decreaseChange}>Change-</button>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
