/**
 * example proxy
 */
const proxy = require('http-proxy-middleware')
module.exports = (app) => {
  app.use(proxy('/api/testr', {
    target: 'http://test.dev.com/',
    changeOrigin: true,
      pathRewrite: {
        '^/api/test': ''
      }
  }))
}