/**
 * useState其实也是利用闭包缓存了状态
 *
 * 知识点：闭包，模块，单例
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "../src/index";

/**
 *
 * 缺点：会创建全局变量
 */

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
 * 模块模式,将变量隐藏到函数内部起来
 *
 * 缺点： IIFE会公用一个state
 * 这样写：多个地方的数据会一起修改
 *
 * 当只需要一个实例时，可以用IIFE实现单例模式
 */
// const react = (function () {
//   let state;

//   function useState(initialState) {
//     state = state || initialState;

//     function setState(newState) {
//       state = newState;
//       ReactDOM.render(<App />, document.getElementById("root"));
//     }

//     return [state, setState];
//   }

//   return {
//     useState,
//   };
// })();

/**
 *
 * 需要多次调用：每次重新调用一次
 * 有多个实例时，多个地方调用；每调用一个都会创建一个新的实例
 */
// const react = function () {
//   let state;

//   function useState(initialState) {
//     state = state || initialState;

//     function setState(newState) {
//       state = newState;
//       ReactDOM.render(<App />, document.getElementById("root"));
//     }

//     return [state, setState];
//   }

//   return {
//     useState,
//   };
// };

// export default react;

/**
 * 使用Array + Cursor保存多个state
 */

const react = (function () {
  // state
  let state = [];
  let curr = 0;
  // effect
  let allDeps = [];
  let cursor = 0;

  // 只执行一次
  function useState(initialState) {
    const current = curr;
    state[current] = state[current] || initialState;
    curr++;

    // 多次执行
    function setState(newState) {
      state[current] = newState;
      // render
      ReactDOM.render(<App />, document.getElementById("root"));
      curr = 0;
      cursor = 0;
    }
    // 分别记录了各自的current，保证setState的时候更改对应的state
    return [state[current], setState];
  }

  function useEffect(cb, deps) {
    if (!allDeps[cursor]) {
      // 初次渲染
      allDeps[cursor] = deps;
      ++cursor;
      cb();
      return;
    }

    const currentCursor = cursor;
    const rawDeps = allDeps[currentCursor];

    // 检查deps是否改变
    const isChange = rawDeps.some((dep, idx) => {
      return dep !== deps[idx];
    });

    if (isChange) {
      cb();
      allDeps[currentCursor] = deps;
    }

    ++cursor;
  }

  return {
    useState,
    useEffect,
  };
})();

export default react;
