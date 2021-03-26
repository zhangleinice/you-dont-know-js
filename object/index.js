//  es6可计算属性名 [] 包裹的表达式
let prefix = "pre";
let obj = {
  [prefix + "name"]: "rocky",
  [prefix + "hobby"]: "study",
};
// console.log("obj", obj);

// 对象复制
function aFn() {}

let aObj = {
  c: true,
};

let aArray = [];

let myObj = {
  a: 2,
  b: aObj,
  c: aArray,
  d: aFn,
};

aArray.push(aObj, myObj);

let uObj = {
  a: 2,
  b: aObj,
  c: aArray,
  d: aFn,
};

let x = myObj;
// 指向同一个对象
console.log(x === myObj); // true
// 不指向同一个对象
console.log(myObj === uObj); // false
