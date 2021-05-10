import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return <div onClick={() => setCount(count + 1)}>hello world!{count}</div>;
};

export default Home;
