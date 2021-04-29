module.exports = {
    development: { //本地开发
        phpHost: 'https://h5-api-u8c-daily.yyuap.com',                              //php后端接口地址
        javaHost: 'https://ezone-u8c-daily.yyuap.com',                              //java后端接口域名
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        multiLangHost: 'https://u8c3ec-daily.yyuap.com',                            //多语服务的域名
    },
    daily: { //u8cdaily环境
        phpHost: 'https://h5-api-u8c-daily.yyuap.com',                              //php后端接口地址
        javaHost: 'https://ezone-u8c-daily.yyuap.com',                              //java后端接口域名
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        multiLangHost: 'https://u8c3ec-daily.yyuap.com',                            //多语服务的域名
    },
    pre: { //预发布环境
        phpHost: 'https://h5-api-pre.diwork.com',                                   //php后端接口地址
        javaHost: 'https://ezone-pre.diwork.com',                                   //java后端接口域名
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        multiLangHost: 'https://3ec-y3me-pre.diwork.com',                           //多语服务的域名
    },
    production: { //线上环境
        phpHost: '//dwweb-api.diwork.com',                                          //php后端接口地址
        javaHost: '//ezone.diwork.com',                                             //java后端接口域名
        staticHost: '//static.diwork.com',                                          //静态资源域名
        multiLangHost: 'https://3ec-y3me-pre.diwork.com',                           //多语服务的域名
    },
}