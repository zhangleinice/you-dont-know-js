/**
 *
 * 就是个闭包而已
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "../src/index";

let state;

export const useState = (initialState) => {
  state = state === undefined ? initialState : state;
  function setState(newState) {
    state = newState;
    // console.log("state", state);
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  return [state, setState];
};
