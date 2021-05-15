import React, { useEffect } from "react";
import react from "../hooks/usestate";

const { useState } = react;

function Effect() {
  const [num, setNum] = useState(0);

  return <div>{num}</div>;
}

export default Effect;
