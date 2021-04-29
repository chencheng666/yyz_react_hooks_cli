module.exports = {
    development: { //本地开发
        phpHost: 'https://h5-api-u8c-daily.yyuap.com',                              //php后端接口地址
        javaHost: 'https://ezone-u8c-daily.yyuap.com',                              //java后端接口域名
        approveHost: 'https://ys-u8c-daily.yyuap.com',                              //审批接口地址
        webPortalHost: 'http://test.yyuap.com:8080',                                //web端门户设计器地址
        mobilePortalHost: 'http://test.yyuap.com:5555',                             //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名,
        chartHost: 'https://v-daily.yyuap.com'                                     //分析报表数结构域名
    },
    test: { //测试环境
        phpHost: 'http://h5.api.chaoke.com:6062',                                   //php后端接口地址
        javaHost: 'http://172.20.1.177:6058',                                       //java后端接口域名
        webPortalHost: 'http://web.chaoke.com',                                     //web端门户设计器地址
        mobilePortalHost: 'http://172.20.1.177:93',                                 //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        chartHost: 'https://v-daily.yyuap.com'                                     //分析报表数结构域名
    },
    daily: { //u8cdaily环境
        phpHost: 'https://h5-api-u8c-daily.yyuap.com',                              //php后端接口地址
        javaHost: 'https://ezone-u8c-daily.yyuap.com',                              //java后端接口域名
        approveHost: 'https://ys-u8c-daily.yyuap.com',                              //审批接口地址
        webPortalHost: 'https://ec-u8c-daily.yyuap.com',                            //web端门户设计器地址
        mobilePortalHost: 'https://mz-u8c-daily.yyuap.com',                         //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        chartHost: 'https://v-daily.yyuap.com'                                     //分析报表数结构域名
    },
    pre: { //预发布环境
        phpHost: 'https://h5-api-pre.diwork.com',                                   //php后端接口地址
        javaHost: 'https://ezone-pre.diwork.com',                                   //java后端接口域名
        approveHost: 'https://ys-pre.diwork.com',                                   //审批接口地址
        webPortalHost: 'https://ec-pre.diwork.com',                                 //web端门户设计器地址
        mobilePortalHost: 'https://m-pre.diwork.com',                               //手机端门户设计器地址
        staticHost: 'https://static.diwork.com',                                    //静态资源域名
        chartHost: 'https://v-pre.diwork.com'                                     //分析报表数结构域名
    },
    production: { //线上环境
        phpHost: 'https://h5-api.diwork.com',                                       //php后端接口地址
        javaHost: 'https://ezone.diwork.com',                                       //java后端接口域名
        approveHost: 'https://ys.diwork.com',                                       //审批接口地址
        webPortalHost: 'https://ec.diwork.com',                                      //web端门户设计器地址
        mobilePortalHost: 'https://mz.diwork.com',                                  //手机端门户设计器地址
        staticHost: 'https://static.diwork.com',                                    //静态资源域名
        chartHost: 'https://intelliv.diwork.com'                                     //分析报表数结构域名
    },
}