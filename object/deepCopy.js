/**
 * 递归版本
 * 有很多缺陷，eg：没有考虑数组，只考虑了数组
 */
function deepCopy1(obj) {
  if (typeof obj === "object") {
    // eg：没有考虑数组，只考虑了object
    // let result = {};
    // 考虑上数组
    let result = Array.isArray(obj) ? [] : {};
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy1(obj[key]);
      }
    }
    return result;
  }
  return obj;
}

// 循环引用
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};

target.target = target;
// 循环

// let x = deepCopy1(target);
// console.log("x", x); // Maximum call stack size exceeded

/**
 *
 * @param {*} target copy对象
 * @param {*} map
 * 存储额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，
 * 当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，
 * 如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。
 *
 * WeakMap代替map（弱引用代替强引用，帮助释放内存）
 */
function deepCopy2(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let result = target instanceof Array ? [] : {};

    if (map.get(target)) return map.get(target);

    map.set(target, result);

    for (const k in target) {
      result[k] = deepCopy2(target[k], map);
    }

    return result;
  }
  return target;
}

let y = deepCopy2(target);
// console.log("y", y);

/**
 *
 * 性能优化
 * 1. 解决for in遍历性能低的原因
 * 2. 针对各种类型
 */
