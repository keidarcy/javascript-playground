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

  c() {
    const res = this.b.c();
    console.log('res:', res);

    return res;
  }
}

exports.A = A;
