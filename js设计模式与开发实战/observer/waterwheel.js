/**
 *
 *  缓存接口数据，优化containner组件中展示型组件重复请求的问题
 * 
 *  定义缓存数据结构
 *  name_map: {
 *      interface_name: {
 *          data: null,
 *          is_on: false,
 *          event_map: {
 *              'data_change': []
 *                  ...支持自定义事件...
 *          }
 *      }
 *  }
 *
 * 1. 为啥要加补偿执行？
 *    已经sendData，有数据时；不在需要重新 发布，直接监听取 数据
 * 2. 为啥要加开关？
 *    发布时，开启开关；
 *    监听时，检测开关是否开启；
 * 3. 为什么要叫waterWheel这个名字？
 *
 * eg：

  // main 方
  import Waterwheel from 'common/waterwheel'
  let waterwheel = Waterwheel.use('get_list') // 设定使用名称为 get_list 的水车
  waterwheel.switchOn() 
  Actions.getList({
    __callback: (ok, data) => {
      if (ok && data) {
        waterwheel.setData(data)
      }
    }
  })
  
  // sub 方
  import Waterwheel from 'common/waterwheel'
  let waterwheel = Waterwheel.use('get_list')
  
  if (waterwheel.checkSwitch()) {
    waterwheel.on('data_change', data => {
      ...
    })
  } else {
    Actions.getList(...)
  }
 */

let waterWheel = (function () {
  const name_map = {};

  class WaterWheelClass {
    constructor(name) {
      this.name = name;
      if (!name_map[name]) {
        name_map[name] = {
          data: null,
          is_on: false,
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
    on(event, cb) {
      if (!event || typeof fn !== "function") {
        return;
      }

      const { data, event_map, is_on } = name_map[this.name];

      // 是否阻止相同函数插入？待定
      if (event_map[event]) {
        event_map[event].push(fn);
      } else {
        event_map[event] = [fn];
      }

      // 当已经有数据，则补偿执行
      if (is_on && data !== null) {
        cb(data);
      }
    }

    // 添加开关
    switchOn() {
      name_map[this.name].is_on = true;
    }

    checkSwitch() {
      return name_map[this.name].is_on;
    }

    switchOff() {
      name_map[this.name].is_on = false;
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
