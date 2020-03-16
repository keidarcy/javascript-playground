# Fire-Water

> My outstanding Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

> Universal Mode Deployment

```
heroku create

heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production

git add Procfile
git commit -a -m 'Configuration to deploy to heroku'
git push heroku master
```

> edit nuxt.config
> build part
> server part

- Universal Mode:
  The data is changing frequently

- Static Site Deployment

```
npm run generate

```

publish dist/
