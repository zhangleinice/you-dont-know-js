import React from "react";
import react from "../hooks/usestate";

const Home = () => {
  const [count, setCount] = react.useState(0);
  // setCount(20);
  console.log(count);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </React.Fragment>
  );
};

export default Home;
