/**
 * 插入,删除元素不保证顺序时  O(1)
 * 把插入和删除的元素和最后一个交换位置，不用搬移数组
 */
let arr = [1, 3, 2, 7, 6, 5];
arr[arr.length] = arr[3];
arr[3] = 10;

console.log("insert", arr); // [1, 3, 2, 10, 6, 5,7]

arr[3] = arr[arr.length - 1];
arr.length = arr.length - 1;

console.log("delete", arr); // [1, 3, 2, 7, 6, 5]
