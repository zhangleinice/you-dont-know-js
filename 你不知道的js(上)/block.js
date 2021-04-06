/**
 * 块级作用域的替代方案 try catch中的catch
 */

{
  let a = 2;
  console.log(a);
}

// console.log(a); // ReferenceError

{
  try {
    throw undefined;
  } catch (a) {
    a = 3;
    console.log(a);
  }
  //   console.log("a", a);  // ReferenceError
}
