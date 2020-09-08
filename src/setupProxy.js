const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors');

module.exports = function (app) {
    app.use(cors())
    app.use(
        ['/watson', '/watson?question'],
        createProxyMiddleware({
            target: process.env.SERVER_URL,
        })
    );
};