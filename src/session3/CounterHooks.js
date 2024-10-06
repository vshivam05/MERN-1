import { useState } from "react";
// import "./styles.css";

function CounterHooks(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + props.diff);
  };

  const decreaseCount = () => {
    setCount(count + -props.diff);
  };

  return (
    <div>
      <h1 className="counter-display">{count}</h1>
      <button onClick={increaseCount}>+{props.diff}</button>
      <button onClick={decreaseCount}>-{props.diff}</button>
    </div>
  );
}

export default CounterHooks;
