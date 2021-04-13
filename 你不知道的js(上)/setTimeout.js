function show() {
  console.log("name");
}

let timer = setTimeout(show, 2000);

console.log(timer);

/**
 * timeout实现
 * @param {*} fn
 * @param {*} timeout
 * @param  {...any} args
 */
function mySetTimeOut(fn, timeout, ...args) {
  const start = +new Date();
  let timer, now;
  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    now = +new Date();
    if (now - start >= timeout) {
      fn.apply(this, args);
      window.cancelAnimationFrame(timer);
    }
  };
  window.requestAnimationFrame(loop);
}

mySetTimeOut(show, 3000);
