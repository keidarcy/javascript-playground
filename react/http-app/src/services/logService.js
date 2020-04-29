import * as Sentry from '@sentry/browser'
function init() {
  Sentry.init({
    dsn: 'https://b73b7fa6e212415481f1be8f6189b6cb@o384536.ingest.sentry.io/5215904'
  })
}

export default {
  init
}
