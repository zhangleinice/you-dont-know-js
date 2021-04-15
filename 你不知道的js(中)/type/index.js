let a = null;

function foo(a, b) {}
console.log(foo.length); // 2

console.log(Object.getOwnPropertyNames(foo));

// x is undeclared, but typeof x is undefined
console.log(typeof x);

// 这样会抛出错误
// if (x) {
//   console.log(x);
// }

// 这样是安全的
if (typeof x !== "undefined") {
  console.log(x);
}

// 这样是安全的
if (globalThis.x) {
  console.log(globalThis.x);
}

// 依赖注入 dependency injection  当成函数参数
