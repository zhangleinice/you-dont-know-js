/**
 *  模块模式两个条件
 *  1. 必须有外部封闭函数，函数至少被调用一次（每次调用都产生一个新的实例）
 *  2. 封闭函数必须至少返回一个内部函数，这样才能形成闭包，并且可以访问或修改内部状态
 *  匿名函数变单例模式
 */
const x = (function coolModule() {
  let something = "cool";
  let another = [1, 2, 3];
  function doSomething(name) {
    console.log("module" + name, something);
  }
  function doAnother(name) {
    console.log("module" + name, another.join("-"));
  }
  // 返回值看作是模块的公共api
  return {
    doSomething,
    doAnother,
  };
})();

module.exports = x;
