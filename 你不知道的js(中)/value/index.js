// 类数组

function foo() {
  arr1 = Array.prototype.slice.call(arguments);
  //   console.log("arr1", arr1);
}

foo(1, 2, 3);

// 字符串
let a = "foo";
let b = ["f", "o", "o"];

console.log(a.concat("x"));

// 借用数组的方法来处理字符串

let c = Array.prototype.join.call(a, "-");
console.log("c", c);

// 字符串反转
// error, 字符串是不可变的
// let d = Array.prototype.reverse.call(a);
// console.log("d", d);

let f = a.split("").reverse().join("");
console.log("f", f);

console.log(b.join("h"));
console.log("b", b);

// 机器精度,最小误差范围
if (!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52);
}

const x = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(0.1 + 0.2 === 0.3); // false
console.log("x", x); // true

// 范围
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// 整数检测
console.log(Number.isInteger(1.0));

if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num === "number" && num % 1 === 0;
  };
}

console.log(Number.isInteger(2.0));

Number.isSafeInteger(11111111);

const k = 2 / "foo";
console.log("k", k);
console.log(typeof x === "number");

/**
 * 判断NaN
 *
 *
 *
 */
// Number.isNaN()

if (!Number.isNaN) {
  Number.isNaN = function (num) {
    return typeof num === "number" && window.isNaN(num);
  };

  Number.isNaN = function (n) {
    return n !== n;
  };
}
