/**
 * 查找多个元素
 * @param {*} selector
 * @param {*} context
 */
function $$(selector, context) {
  context = context || document;
  const elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements)[0];
}

/**
 * 查看css属性是否存在，并添加到class上
 * @param {*} property
 */
function testProperty(property) {
  const root = document.documentElement;

  if (property in root.style) {
    root.classList.add(property.toLowerCase());
    return true;
  }

  root.classList.add("no-" + property.toLowerCase());
}
