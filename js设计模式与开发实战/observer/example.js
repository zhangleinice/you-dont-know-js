/**
 * login之后要更新 header，nav，cart等等
 */

login.succ(function (data) {
  header.set(...data);
  nav.set(...data);
  cart.refresh();
  //  ...
});

/**
 * 优化
 * 用发布订阅改写
 */

// 发布消息
$.ajax("www.baidu.com", (data) => {
  login.trigger("loginSuccess", data);
});

let header = (function () {
  // 订阅消息
  login.listen("loginSuccess", function (data) {
    header.set(...data);
  });
  return {
    set: (data) => {
      console.log("set头像" + data);
    },
  };
})();
