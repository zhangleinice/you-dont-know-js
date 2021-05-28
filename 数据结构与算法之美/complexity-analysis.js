/**
 *
 * 最好：O(1)
 * 最坏：O(n)
 * 均摊
 */
function findIdx(arr = [], x) {
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      pos = i;
      // 找到则跳出循环
      break;
    }
  }
  return pos;
}

let idx = findIdx([1, 2, 3, 4, 5], 3);
console.log("idx", idx);
