const { B } = require('./B.js');

class A {
  b;
  constructor(name) {
    this.b = new B(name);
  }

  async a() {
    await this.b.a();
  }

  change() {
    this.b.b();
  }
}

exports.A = A;
