import React from "react";
import react from "../hooks/usestate";

/**
 * 需要多次调用
 */
// const foo = react();

const Home = () => {
  const [count, setCount] = react.useState(0);
  const [num, setNum] = react.useState(1);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>

      <div>{num}</div>
      <button onClick={() => setNum(num * 2)}>x2</button>
      <button onClick={() => setNum(num / 2)}>/2</button>
    </React.Fragment>
  );
};

export default Home;
