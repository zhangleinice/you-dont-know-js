/**
 *
 *  缓存接口数据，优化containner组件中展示型组件重复请求的问题
 *
 *  sub: 监听数据变化
 *  waterWheel.use('get_list')
 *
 *  main：trigger发送数据
 *  waterWheel.use('get_list')
 *
 *  name_map: {
 *      interface_name: {
 *          data: null,
 *          event_map: {
 *              'data_change': []
 *                  ...支持自定义事件...
 *          }
 *      }
 *  }
 */

let waterWheel = (function () {
  const name_map = {};

  class WaterWheelClass {
    constructor(name) {
      this.name = name;
      if (!name_map[name]) {
        name_map[name] = {
          data: null,
          event_map: {
            data_change: [],
            // ....
          },
        };
      }
      return this;
    }

    // 自动触发 data_change 事件
    sendData(data) {
      if (typeof data === undefined) return;
      name_map[this.name].data = data;
      this.trigger("data_change");
    }

    // 触发事件，发布; 支持自定义事件
    trigger(event) {
      if (!event) return;

      let cb_list = name_map[this.name].event_map[event];

      if (cb_list && cb_list.length) {
        cb_list.forEach((cb) => {
          cb && cb(name_map[this.name].data);
        });
      }
    }

    // 监听事件，订阅,添加订阅者事件回调
    on(event, fn) {
      if (!event || typeof fn !== "function") {
        return;
      }

      const { data, event_map } = name_map[this.name];

      if (event_map[event]) {
        event_map[event].push(fn);
      } else {
        event_map[event] = [fn];
      }

      if (data !== null) {
        cb(data);
      }
    }
  }

  function use(name) {
    return new WaterWheelClass(name);
  }

  return {
    use,
  };
})();

module.exports = waterWheel;
