let p = new Promise(function (resolve) {
  resolve(1);
});

// is thenable：不能准确判断promise
if (
  null !== p &&
  (typeof p === "object" || typeof p === "function") &&
  typeof p.then === "function"
) {
  console.log("这是一个thenable");
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

delay(500)
  .then(() => {
    console.log("delay 500ms");
    return delay(1000);
  })
  .then(() => {
    console.log("在延迟1000ms");
  });

// resolve代表决议，结果可能完成或拒绝
const rej = new Promise(function (resolve) {
  resolve(Promise.reject("错误"));
});
rej.then(
  // 走不到这里
  () => {},
  (err) => {
    console.log(err);
  }
);

// try catch 无法捕捉异步错误
function foo() {
  setTimeout(function () {
    throw new Error("异步错误");
  }, 100);
  //   throw new Error("同步错误");
}

// try {
//   foo();
// } catch (error) {
//   console.log("捕获到了error", error);
// }

// Promise.prototype.done = function () {
//   console.log("finish");
// };
// console.log("promise", Object.getPrototypeOf(Promise));

if (!Promise.observer) {
  Promise.observer = function (pr, cb) {
    // 观察promise决议
    pr.then(
      function fulfilled(msg) {
        Promise.resolve(msg).then(cb);
      },
      function rejected(msg) {
        Promise.reject(msg).then(cb);
      }
    );
    return pr;
  };
}

if (!Promise.map) {
  Promise.map = (vals, cb) =>
    Promise.all(
      vals.map((val) => {
        return new Promise((resolve) => cb(val, resolve));
      })
    );
}

let p1 = Promise.resolve(2);
let p2 = Promise.resolve(4);
// let p3 = Promise.reject("oops");

Promise.map([p1, p2], (pr, cb) => {
  // 每个值 *2
  return Promise.resolve(pr);
}).then((vals) => {
  console.log("vals", vals);
});
