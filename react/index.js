function equar(a, b) {}

function useCallback(fn, deps) {
  let instance = null;
  return function () {
    if (!instance) {
      return (instance = fn.apply(this, arguments));
    }
    return instance;
  };
}

function foo(a, b) {
  console.log(a + b);
}

let a = 1,
  b = 2;

const xfoo = useCallback(foo, [a, b]);
