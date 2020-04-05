const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/KeyManager')
const { isRequired } = require('../utils/validation')

const key = {
  async set() {
    const keyManager = new KeyManager()
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API key '.green + 'https://nomics.com',
        validate: isRequired,
      },
    ])
    const key = keyManager.setKey(input.key)

    if (key) {
      console.log('AOI key set'.blue)
    }
  },
  show() {
    try {
      const keyManager = new KeyManager()
      const key = keyManager.getKey()
      console.log('Current API key: ', key.yellow)
    } catch (err) {
      console.log(err.message)
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager()
      keyManager.deleteKey()
      console.log('Current API key was removed'.red)
    } catch (err) {
      console.log(err.message)
    }
  },
}

module.exports = key
