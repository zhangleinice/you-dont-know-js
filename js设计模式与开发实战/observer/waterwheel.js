/**
 *
 * 临时解决方案
 * 缓存接口数据，优化父组件中props变化导致子组件中重复请求的问题
 *
 * 最终方案
 * 把子组件中的请求放到父组件
 * 
 *  定义缓存数据结构
 *  name_map: {
 *      name: {
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
 *    已经sendData，有数据时；不在需要重新 发布，直接在监听中补偿执行;
 *    没数据时候，由trigger触发监听回调函数执行；
 * 2. 为啥要加开关？
 *    筛选有效通知;
 *    便于撤销通知操作，在主题中，我们可以打开很多次开关，但是在最后由于某种原因需要取消通知，我们可以使用关闭开关轻松解决问题。
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

const waterwheel = (function () {
  let name_map = {};

  class WaterWheel {
    constructor(name) {
      this.name = name;
      if (!name_map[name]) {
        name_map[name] = {
          data: null,
          is_on: false,
          event_map: {
            data_change: [],
          },
        };
      }
    }

    sendData(data) {
      if (this.checkSwitch()) {
        this.trigger("data_change", data);
      }
    }

    // 发布,触发事件; 支持自定义事件
    trigger(event, data) {
      if (!event || typeof data === "undefined") {
        return;
      }

      name_map[this.name].data = data;

      const cb_list = name_map[this.name].event_map[event];

      if (cb_list && cb_list.length) {
        cb_list.forEach((cb) => {
          cb && cb(data);
        });
      }
    }

    // 订阅，监听事件
    on(event, cb) {
      if (!event || typeof cb !== "function") {
        return;
      }

      const { data, event_map, is_on } = name_map[this.name];

      if (!event_map[event]) {
        event_map[event] = [];
      } else {
        event_map[event].push(cb);
      }

      // 如果已有数据，则补偿执行
      // 判断时，把常量放到左边是一种良好的编程习惯；防止手误写成赋值
      if (is_on && null !== data) {
        cb(data);
      }
    }

    checkSwitch() {
      return name_map[this.name].is_on;
    }

    switchOn() {
      name_map[this.name].is_on = true;
    }

    switchOff() {
      name_map[this.name].is_on = false;
    }
  }

  function use(name) {
    return new WaterWheel(name);
  }

  return {
    use,
  };
})();

module.exports = waterWheel;
