import React from "react";
import react from "../hooks/react";

/**
 * 需要多次调用
 */

// let tag = true

const Home = () => {
  const [count, setCount] = react.useState(0);
  const [num, setNum] = react.useState(1);

  /**
   * 由于 useState 是基于 Array+Cursor 来实现的
   * 不能在为什么不能在循环、判断内部使用 Hook
   */
  // if(tag) {
  //   const [x, setX] = useState(1);
  //   tag = false;
  // }

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
