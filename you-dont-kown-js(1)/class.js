// es5

function Widget(height, width) {
  this.height = height;
  this.width = width;
  this.$elem = null;
}

Widget.prototype.render = function ($where) {
  if (this.$elem) {
    this.$elem
      .css({
        width: this.width + "px",
        height: this.height + "px",
      })
      .appendTo($where);
  }
};

function Button(height, width, label) {
  Widget.call(this, height, width);
  this.label = label;
  this.$elem = $("button").text(this.label);
}

let obj = {
  a: 1,
  b() {
    console.log("b");
  },
  c: function () {
    console.log("this", this);
    this.b();
  },
};

obj.c();

console.log("------------------------");

function Foo() {}
Foo.prototype = {};

function Bar() {}
Bar.prototype = Object.create(Foo.prototype);

let b1 = new Bar();

console.log(Bar instanceof Foo); // false
console.log(Bar.prototype instanceof Foo); // true
console.log(b1 instanceof Bar);
