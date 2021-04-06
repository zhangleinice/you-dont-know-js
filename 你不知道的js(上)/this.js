// API调用的上下文context

function foo(el) {
  console.log(el, this.id);
}

let obj = {
  id: "awesome",
};

// forEach 第二个参数是 this指向，通常称为 context上下文
[1, 2, 3].forEach(foo, obj);

// new绑定

function A(a) {
  this.a = a;
}

let bar = new A(2);
// console.log(bar.a);

let x = A(3);
// console.log(x);

// 绑定例外

// 间接绑定
function c(a, b) {
  console.log(`a: ${a}`, `b: ${b}`);
}

// 产生副作用，默认绑定到全局对象
c.apply(null, [2, 3]);
c.apply(undefined, [2, 3]);
// es6可用 ...替换，避免不必要的this绑定
c(...[1, 2]);

/**
 * 可以用一个DMZ（Demilitarized zone，非军事区）对象来保护全局变量，这个DMZ对象本质上是一个“裸”对象
 * Object.create(null) 比 {} 更空，没有prototype
 */
let ø = Object.create(null);
c.apply(ø, [2, 3]);

// es6没有柯里化函数，还是需要使用bind
let f = c.bind(ø, 2);
f(3);

// 柯里化函数（currying）：只是一种函数的转换 f(a,b,c) ===> f(a)(b)(c)
const curry = (fn) => (a) => (b) => fn(a, b);

const sum = (a, b) => a + b;

let currySum = curry(sum);

let k = currySum(1)(2);

console.log("k", k);

console.log("-----------------------");

/**
 * 软绑定
 * 如果给默认绑定指定一个全局对象和undefined以外的值，那就可以实现和硬绑定相同的效果
 * 同时保留再次修改this的能力
 * 箭头函数没有arguments和this，低级失误
 */

Function.prototype.softBind = function (obj) {
  const fn = this;
  const args = [].slice.call(arguments, 1);
  const bound = function () {
    return fn.apply(!this || this === globalThis ? obj : this, [
      ...args,
      ...[...arguments],
    ]);
  };
  bound.prototype = Object.create(fn.prototype);
  return bound;
};

function y() {
  console.log("name", this.name);
}
let obj0 = { name: "obj0" },
  obj1 = { name: "obj1" },
  obj2 = { name: "obj2" };

let u = y.softBind(obj0);
u();

// 软绑定之后还能再次修改this
y.call(obj1);
y.apply(obj2);
