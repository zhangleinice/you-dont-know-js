// 判断变量是否是函数
const isFunction = (fn) => typeof fn === "function";

// 定义Bromise的三种状态
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class Bromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error("Bromie must accept a function as a params");
    }
    // 初始化状态
    this._status = PENDING;
    this._value = undefined;
    // 完成，拒绝函数队列
    this._fulfilledQueues = [];
    this._rejectedQueues = [];
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }
  // 决议
  _resolve(val) {
    if (this._status !== PENDING) return;
    function run() {
      const runFulfilled = (val) => {
        this._fulfilledQueues.shift()(val);
      };
    }
  }
  then(onFulfilled, onRejected) {}
  _reject(err) {}
  catch(onRejected) {}
  static resolve(val) {}
  static reject(err) {}
  static all(list) {}
  static race(list) {}
  finally(cb) {}
}

export default Bromise;

// 思考
// Promise 中为什么要引入微任务？
// Promise 中是如何实现回调函数返回值穿透的？
// Promise 出错后，是怎么通过“冒泡”传递给最后那个捕获异常的函数？
