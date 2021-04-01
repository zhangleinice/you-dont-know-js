/**
 * 浅拷贝
 */

// 1
function shallowCopy(obj) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") return;
  let result = {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 2. Object.assign();

// 3. lodash_.clone

// 4.   es6...

// 5. 数组的slice，concat等不改变原数组的方法
