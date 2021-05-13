import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.js";
import Test from "./test";

const rootElement = document.getElementById("root");

function App() {
  return (
    <React.Fragment>
      <Home />
      <Test />
    </React.Fragment>
  );
}

export default App;

ReactDOM.render(<App />, rootElement);
