import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.js";

const rootElement = document.getElementById("root");

function App() {
  return <Home />;
}

export default App;

ReactDOM.render(<App />, rootElement);
