const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

module.exports = function (app) {
    app.use(cors())
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.REACT_APP_SERVER_URL || 'http://localhost:8080',
            changeOrigin: true
        })
    )
}