const program = require('commander')
const check = require('../commands/check')
require('colors')

program
  .command('price')
  .description('Check price of coins')
  .option(
    '--coin <type>',
    'Add specific coin types in csv format',
    'BTC,ETH,XRP'
  )
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => check.price(cmd))

program.parse(process.argv)
