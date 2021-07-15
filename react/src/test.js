import React from "react";
import react from "../hooks/react";

// const foo = react();

const Test = () => {
  const [num, setNum] = react.useState(5);

  return (
    <React.Fragment>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>+1</button>
    </React.Fragment>
  );
};

export default Test;
