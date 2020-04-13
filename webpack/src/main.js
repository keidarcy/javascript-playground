import notify from './Notification'
notify('hello webpack')
require('./main.css')

class Form {
  constructor() {
    let numbers = [5, 10, 2].map((num) => num * 2)
    console.log(numbers)
  }
}

new Form()
