/**
 * 立即执行函数
 */

const a = 1;
// nodejs环境模拟
const window = "window";
// 传递外部任何参数进去
(function IIFE(params) {
  console.log("params", params);
})(a);

(function IIFE(global) {
  console.log("global", global);
})(window);

// 倒置代码执行顺序
(function foo(fn) {
  fn();
})(function fn() {
  console.log("倒置代码");
});
