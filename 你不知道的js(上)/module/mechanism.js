// 现代模块机制

let myModules = (function Manager() {
  let modules = {};
  function define(name, deps = [], impl) {
    // deps ['bar'], impl  fn: hello
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }

    modules[name] = impl.apply(impl, deps);
  }
  function get(name) {
    // console.log("modules1", modules);
    return modules[name];
  }
  // 拿不到modules
  //   console.log("modules", modules);
  return {
    define,
    get,
    // 不能暴露出来，防止直接被篡改
    // modules,
  };
})();

myModules.define("bar", [], function () {
  function hello(who) {
    return "hello" + who;
  }
  return {
    hello,
  };
});

myModules.define("foo", ["bar"], function () {
  let hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome,
  };
});

let bar = myModules.get("bar");
let foo = myModules.get("foo");

console.log(bar.hello("hippo"));
foo.awesome();
