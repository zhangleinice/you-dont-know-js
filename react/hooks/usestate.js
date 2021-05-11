/**
 * useState其实也是利用闭包缓存了状态
 *
 * 知识点：闭包，模块
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "../src/index";

// let state;

// export const useState = (initialState) => {
//   state = state || initialState;
//   function setState(newState) {
//     state = newState;
//     // console.log("state", state);
//     ReactDOM.render(<App />, document.getElementById("root"));
//   }

//   return [state, setState];
// };

/**
 * 模块模式,将变量隐藏起来
 */
const react = (function () {
  let state;

  function useState(initialState) {
    state = state || initialState;

    function setState(newState) {
      state = newState;
      ReactDOM.render(<App />, document.getElementById("root"));
    }

    return [state, setState];
  }
  return {
    useState,
  };
})();

export default react;
