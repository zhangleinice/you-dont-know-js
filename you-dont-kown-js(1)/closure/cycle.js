/**
 * 闭包与循环
 */

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

/**
 * for循环头部的let声明，在循环的时候，不止被声明一次，每次迭代都会被声明。
 * 每次迭代都会使用上一次迭代结束时来初始化这个变量
 */
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  })(i);
}

for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function () {
      console.log(j);
    }, 0);
  })();
}
