/**
 *
 * js中的原生函数
 */

// new String返回的不是基本类型,而是基本类型的封装对象
const s = new String("hello world");

console.log(typeof s); // object

console.log("s", s); // String {0: 'h', 1: 'e', ...}

console.log("s", s.toString()); // "hello world"

// 可以使用valueOf 得到封装对象的基本属性
console.log("s", s.valueOf()); // "hello world"

// symbol
const mysym = Symbol("my own symbol");
console.log("mysym", mysym);
console.log("mysym", mysym.toString());
