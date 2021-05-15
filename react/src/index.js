import React from "react";
import ReactDOM from "react-dom";
import State from "./state.js";
import Test from "./test";
import Effect from "./effect";

const rootElement = document.getElementById("root");

function App() {
  return (
    <React.Fragment>
      <State />
      <Effect />
      <Test />
    </React.Fragment>
  );
}

export default App;

ReactDOM.render(<App />, rootElement);
