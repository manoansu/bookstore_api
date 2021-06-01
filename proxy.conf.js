const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://my-new-bookstore-api.herokuapp.com/', // onde esse Url é o link onde o noso codigo de Back end esta hospedado.
        secure: false,
        loglevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];
module.experts = PROXY_CONFIG;