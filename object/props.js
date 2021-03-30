//属性描述符号
let myObj = {
  a: 2,
};
console.log(Object.getOwnPropertyDescriptor(myObj, "a"));

let obj1 = {};
Object.defineProperty(obj1, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(obj1.a);

// 不变性

let obj2 = {};
// 不可修改和重定义，但是可以添加
Object.defineProperty(obj2, "a", {
  value: 2,
  writable: false,
  configurable: false,
  enumerable: true,
});

obj2.b = 3;
console.log("obj2", obj2); //  { a: 2, b: 3 }

let obj3 = { a: 2 };

// 不可扩展，添加属性
Object.preventExtensions(obj3);
obj3.b = 4;
obj3.a = 3;

console.log("obj3", obj3); // obj3 { a: 3 }

// 密封，
// 会调用Object.preventExtensions()和configurable: false,
Object.seal(obj3);

// 冻结(最高级别的不可变性)
// 会调用Object.seal()和writable: false,
Object.freeze(obj3);

// Getter和Setter

let obj4 = {
  // 给a设置一个getter
  get a() {
    return 2;
  },
};
Object.defineProperty(obj4, "b", {
  // 给b设置一个getter
  get: function () {
    return this.a * 2;
  },
  enumerable: true,
});

console.log("obj4", obj4);
console.log("obj4.a", obj4.a); // 2
console.log("obj4.b", obj4.b); // 4

let obj5 = {
  get a() {
    return this._a;
  },
  set a(val) {
    return (this._a = val * 2);
  },
};

obj5.a = 2;

console.log("obj5.a", obj5.a); // 4

obj5.hasOwnProperty("a");

Object.create(null);

obj5.propertyIsEnumerable();

Object.getOwnPropertyNames(obj5);

// 迭代器
let obj6 = {
  a: 2,
  b: 3,
};

Object.defineProperty(obj6, Symbol.iterator, {
  enumerable: false,
  configurable: true,
  writable: false,
  value: function () {
    let o = this;
    let idx = 0;
    let keys = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[keys[idx++]],
          done: idx > keys.length,
        };
      },
    };
  },
});

let it = obj6[Symbol.iterator]();
it.next();
it.next();
it.next();

for (let val of obj6) {
  console.log("val", val);
}
