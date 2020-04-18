const Koa = require('koa')
const json = require('koa-json')
const KoaRouter = require('koa-router')
const path = require('path')
const render = require('koa-ejs')
const bodyParser = require('koa-parser')

const app = new Koa()
const router = new KoaRouter()

// Json Prettier Middleware
app.use(json())
app.use(bodyParser())

app.context.user = 'James'
router.get('/test', (ctx) => (ctx.body = `hello ${ctx.user}`))
router.get('/test2/:name', (ctx) => (ctx.body = `Hello ${ctx.params.name}`))
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false,
})

const things = ['gaming', 'playing', 'fucing']
// Index
router.get('/', async (ctx) => {
  await ctx.render('index', {
    things,
    title: 'MY love',
  })
})

const index = async (ctx) => {
  await ctx.render('index', {
    title: 'my fixk',
    things,
  })
}
const showAdd = async (ctx) => {
  await ctx.render('add')
}
const add = async (ctx) => {
  const body = ctx.request.body
  things.push(body.thing)
  ctx.redirect('/')
}
router.get('/', index)
router.get('/add', showAdd)
router.post('/add', add)

// add
// Simple Middleware Example
// app.use(async (ctx) => (ctx.body = { msg: 'Hello World' }))

// Router Middleware
router.get('/test', (ctx) => (ctx.body = 'Hello'))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('Server Started...'))
