class Dep {
  constructor() {
    this.subs = [];
    this.target = null;
    return this;
  }
  add(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

function defineReactive(data, key, value) {
  const dep = new Dep();
  Object.defineProperty(data, key, {
    get: function () {
      if (Dep.target) {
        dep.add(Dep.target);
      }
      return value;
    },
    // 设置成功，通知订阅者
    set: function (val) {
      if (val !== value) {
        value = val;
        dep.notify();
      }
    },
  });
}

// 创建一个观察者
function observer(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  Object.keys(data).forEach((key) => {
    console.log("属性变化通知 Watcher 执行更新视图函数");
    defineReactive(data, key, data[key]);
  });
}

// 创建一个订阅者
class Watcher {
  constructor(vm, prop, cb) {
    this.vm = vm;
    this.prop = prop;
    this.cb = cb;
    this.value = this.get();
  }
  update() {
    const value = this.vm.$data[this.prop];
    const oldVal = this.value;
    if (oldVal !== value) {
      this.value = value;
      this.cb(value);
    }
  }
  get() {
    // 储存订阅器
    Dep.target = this;

    const value = this.vm.$data[this.prop];

    Dep.target = null;

    return value;
  }
}

function Mvue(opts, prop) {
  this.$opts = opts;
  this.data = this.$opts.data;
  this.$el = document.querySelector(opts.el);
  this.$prop = prop;
  this.init();
}
Mvue.prototype.init = function () {
  observer(this.$data);
  this.$el.textContent = this.$data[this.$prop];
  new Watcher(this, this.$prop, (value) => {
    this.$el.textContent = value;
  });
};

const obj = {
  age: 18,
};

observer(obj);
obj.age = 20;
