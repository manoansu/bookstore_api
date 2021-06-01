const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://my-new-bookstore-api.herokuapp.com/',
        secure: false,
        loglevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];
module.experts = PROXY_CONFIG;