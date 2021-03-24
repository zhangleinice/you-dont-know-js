/**
 *  修改了foo函数的词法作用域
 */

function foo(str, a) {
  eval(str);
  console.log("ab", a, b);
}

var b = 2;
foo("var b = 3;", 1); // 1, 3
