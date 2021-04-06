/**
 *
 * main方： 售楼处
 *
 * sub方： 买房人
 */

// // 定义售楼处
// let salesOffices = {};

// // 存放订阅者的回调函数
// salesOffices.clientList = [];

// // 增加订阅者
// salesOffices.listen = function (fn) {
//   this.clientList.push(fn);
// };

// // 发布消息
// salesOffices.trigger = function () {
//   const that = this;
//   this.clientList.forEach((cb) => cb && cb.apply(that, arguments));
// };

// // 订阅1
// salesOffices.listen((price, area) => {
//   console.log("price" + price, "area" + area);
// });
// // 订阅2
// salesOffices.listen((price, area) => {
//   console.log("price" + price, "area" + area);
// });

// // 发布
// salesOffices.trigger(20000, 20);

// 添加唯一标识key
// 定义售楼处
// let salesOffices = {};

// // 存放订阅者的回调函数
// /**
//  *  {
//  *      key1: [...cb],
//  *      key2: [...cb]
//  *  }
//  */
// salesOffices.clientList = {};

// // 增加订阅者
// salesOffices.listen = function (key, fn) {
//   if (!this.clientList[key]) {
//     this.clientList[key] = [];
//   }
//   this.clientList[key].push(fn);
// };

// // 发布消息
// salesOffices.trigger = function () {
//   const that = this;
//   const key = Array.prototype.shift.call(arguments);
//   this.clientList[key].forEach((cb) => cb && cb.apply(that, arguments));
// };

// // 订阅1
// salesOffices.listen("area110", (price) => {
//   console.log("price" + price);
// });
// // 订阅2
// salesOffices.listen("area88", (price) => {
//   console.log("price" + price);
// });

// // 发布
// salesOffices.trigger("area88", 20000);
// salesOffices.trigger("area110", 30000);

// 发布-订阅通用实现
// let event = {
//   // 存放订阅者的回调函数
//   clientList: {},
//   // 增加订阅者
//   listen: function (key, fn) {
//     if (!this.clientList[key]) {
//       this.clientList[key] = [];
//     }
//     this.clientList[key].push(fn);
//   },
//   // 发布消息
//   trigger: function () {
//     const that = this;
//     const key = Array.prototype.shift.call(arguments);
//     this.clientList[key].forEach((cb) => cb && cb.apply(that, arguments));
//   },
//   // 取消订阅
//   remove: function (key, fn) {
//     const fns = this.clientList[key];
//     if (!fns) {
//       return false;
//     }
//     if (!fn) {
//       // 如果没有传递fn，则表示取消key对应的所有订阅
//       // 清空数组
//       return (fns.listen = 0);
//     }
//     // 判断函数相等，并移除
//     for (let l = fns.listen - 1; l >= 0; l--) {
//       let _fn = fns[l];
//       if (fn === _fn) {
//         fns.splice(l, 1);
//       }
//     }
//   },
// };

// let installEvent = function (obj) {
//   for (let i in event) {
//     obj[i] = event[i];
//   }
// };

// // test
// let salesOffices = {};
// installEvent(salesOffices);

// // 订阅1
// salesOffices.listen("area110", (price) => {
//   console.log("price" + price);
// });
// // 订阅2
// salesOffices.listen("area88", (price) => {
//   console.log("price" + price);
// });

// // 发布
// salesOffices.trigger("area88", 20000);
// salesOffices.trigger("area110", 30000);

// 优化
function observer() {
  class Observer {
    constructor() {
      this.clientList = {};
    }
    listen(key, fn) {
      if (!this.clientList[key]) {
        this.clientList[key] = [];
      }
      this.clientList[key].push(fn);
    }
    // 发布消息
    trigger() {
      const that = this;
      const key = Array.prototype.shift.call(arguments);
      this.clientList[key].forEach((cb) => cb && cb.apply(that, arguments));
    }
    // 取消订阅
    remove(key, fn) {
      const fns = this.clientList[key];
      if (!fns) {
        return false;
      }
      if (!fn) {
        // 如果没有传递fn，则表示取消key对应的所有订阅
        // 清空数组
        return (fns.listen = 0);
      }
      // 判断函数相等，并移除
      for (let l = fns.listen - 1; l >= 0; l--) {
        let _fn = fns[l];
        if (fn === _fn) {
          fns.splice(l, 1);
        }
      }
    }
  }

  // 单例
  function use() {
    return new Observer();
  }

  return {
    use,
  };
}

let sales = observer().use();
// 订阅1
sales.listen("area110", (price) => {
  console.log("price" + price);
});
// 订阅2
sales.listen("area88", (price) => {
  console.log("price" + price);
});

sales.trigger("area88", 20000);
sales.trigger("area110", 30000);
