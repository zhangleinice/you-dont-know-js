/**
 * toString
 */

console.log(Object.prototype.toString.call(() => {}));
console.log(11111111, { a: 3 }.toString());

/**
 * JSON.stringify
 *
 * JSON.stringify(value[, replacer [, space]])
 * replacer  Array | Fn  自定义处理过滤哪些参数
 * space 缩进 Number | string
 *
 *
 * 如果对象内部有toJSON方法，先执行toJSON方法
 */

const a = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
};

const x = JSON.stringify(a, ["b", "c"]);
console.log("x", x);

const m = JSON.stringify(a, (k, v) => {
  if ("c" !== k) {
    return v;
  }
});
console.log("m", m);

const k = JSON.stringify(a, null, "-----");

console.log(JSON.stringify(null));

const l = {
  val: [1, 2, 3],
  toJSON() {
    return this.val.slice(1);
  },
};

console.log(JSON.stringify(l));

console.log("--------------------");

/**
 * toNumber
 * 对象类型先转化为基本类型：valueOf和toString
 */

let f = {
  valueOf: () => 42,
};
console.log(Number(f)); // 42

let z = [3, 45];
z.toString = function () {
  return this.join("");
};

console.log("z", Number(z));
