import react from "../hooks/react";
import React from "react";

const { useState, useEffect } = react;

function Effect() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(num + 1);
    });
  }, []);

  return (
    <div>
      <div>num: {num}</div>
      <div>
        <button onClick={() => setNum(num + 1)}>加 1</button>
        <button onClick={() => setNum(num - 1)}>减 1</button>
      </div>
    </div>
  );
}

export default Effect;
