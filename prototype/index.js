let obj = {
  a: 2,
};

let myObj = Object.create(obj);

// console.log(myObj.a);

function Foo() {}

console.log(Foo.prototype.constructor === Foo);

console.log(new Foo().constructor === Foo);

// constructor默认被挂在F1的prototype上，如果没有就向上查找
// F1.prototype = {};重写了prototype没有constructor
// 所以a.constructor === F1  返回false

function F1() {}

F1.prototype = {};

let a = new F1();

console.log(a.constructor === F1); // false

console.log(a.constructor === Object); // true

// 可以重写constructor，但是要保证是不可枚举的，用defineProperty写

Object.defineProperty(F1.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: F1,
});

console.log(a.constructor === F1); // true

// 继承

function F2(name) {
  this.name = name;
}

F2.prototype.myname = function () {
  return this.name;
};

function F3(name, label) {
  // 构造函数继承
  F2.call(this, name);
  this.label = label;
}

// 构造函数继承

// 创建一个新的F3对象，并把它关联到F2.prototype上
F3.prototype = Object.create(F2.prototype);

// 当调用F3.prototype.mylabel时，会修改F2的prototype
// F3.prototype = F2.prototype

// 会产生副作用：创建了一个新对象，并关联；但是调用了构造函数，多了一次构造函数调用，会有副作用
// F3.prototype = new F2()

// es6新语法
// Object.setPrototypeOf(F3.prototype, F2.prototype)

F3.prototype.mylabel = function () {
  return this.label;
};

let f3 = new F3("f2", "f3");
console.log(f3.myname()); // f2
console.log(f3.mylabel()); // f3

// 在f3的整条原型链中是否出现过F3.prototype
console.log(F3.prototype.isPrototypeOf(f3)); // true
console.log(Object.prototype.isPrototypeOf(f3)); // true

// 获取一个对象的原型链
console.log(Object.getPrototypeOf(f3));

console.log(Object.getPrototypeOf(f3) === F3.prototype); // true
