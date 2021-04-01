// new 实现
function myNew() {
  let obj = new Object();
  // 取得构造函数
  let constructor = [].shift.call(arguments);

  obj.prototype = constructor.prototype;

  let ret = constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

// __proto__跟toString()等一样在Object.prototype上
// __proto__实现，getter和setter

Object.defineProperty(Object.prototype, "__proto__", {
  get: function () {
    return Object.getPrototypeOf(this);
  },
  set: function (o) {
    Object.setPrototypeOf(this, o);
    return o;
  },
});

// Object.create 源码

Object.create = function (o) {
  function F() {}
  F.prototype = o;
  return new F();
};
