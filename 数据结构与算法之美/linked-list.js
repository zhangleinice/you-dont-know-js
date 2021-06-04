/**
 * 判断一个整数是否是回文数
 * @param {number} x
 * @return {boolean}
 *
 * 1. 转换成字符串反转比较
 * 2. 数字反转比较，只需要反转一半
 */
const isPalindrome = function (x) {
  if (x < 0) return false;
  const s = String(x);
  const y = s.split("").reverse().join("");
  return s === y;
};

const isPalindrome2 = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = (x % 10) + reverseNum * 10;
    x = Math.floor(x / 10);
  }
  return x === reverseNum || x === Math.floor(reverseNum / 10);
};

/**
 * LRU 缓存机制
 *
 * Map 中的元素会保持其插入时的顺序
 *
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // delete first value
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};

const map = new Map();
map.set(1, 2);
map.set(2, 3);
console.log("map", map.get(2));
