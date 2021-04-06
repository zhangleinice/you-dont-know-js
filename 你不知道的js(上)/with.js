/**
 * with创建了一个全局变量
 */
var obj = {
  a: 1,
};

with (obj) {
  a = 2;
  // 如果没有b属性，会创建一个全局变量b
  b = 3;
}

console.log(obj);
console.log(b); // 3
