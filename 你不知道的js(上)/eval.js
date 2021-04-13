/**
 *  修改了foo函数的词法作用域
 */
var b = 2;

function foo(str, a) {
  eval(str);
  console.log("ab", a, b);
}

foo("var b = 3;", 1); // 1, 3

var str = "global";

function test() {
  console.log("str1", str); // global
  eval("var str='local';");
  console.log("str2", str); // local
}

test();
console.log("str3", str);

console.log("--------------------------");
