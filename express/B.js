const { setInterval, setTimeout } = require('timers');
const { promisify } = require('util');

const timer = promisify(setTimeout);

class B {
  name;
  constructor(name) {
    this.name = name;
    console.log(name);
  }

  async a() {
    console.log('name:', this.name);
    setInterval(this.printName.bind(this), 1000);
  }

  b() {
    this.name = 'second';
  }

  c() {
    const num = Math.random() * 10;
    return num;
  }

  async asyncD() {
    await timer(1000);
    return 1;
  }

  printName() {
    console.log('name:', this.name);
  }
}

exports.B = B;
