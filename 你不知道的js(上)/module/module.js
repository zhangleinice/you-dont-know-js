// 模块加载器
const myModule = (function manager() {
  const modules = {};
  //   const cbList = [];
  function define(name, deps, cb) {
    // 向deps中添加模块回调
    for (let i = 0; i < deps.length; i++) {
      //   cbList.push(modules[deps[i]]);
      //   deps 存储一个回调list
      deps[i] = modules[deps[i]];
    }
    console.log("deps", deps);
    // 将定义的module存储在变量中
    modules[name] = cb.apply(cb, deps);
  }
  function get(name) {
    return modules[name];
  }
  return {
    define,
    get,
  };
})();

myModule.define("bar", [], function () {
  function hello(who) {
    return `hello ${who}`;
  }
  return { hello };
});

myModule.define("foo", ["bar"], function (bar) {
  let hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return { awesome };
});

let bar = myModule.get("bar");
let foo = myModule.get("foo");

console.log(bar.hello("hippo"));
foo.awesome();
