module.exports = {
    development: { //本地开发
        ezoneHost: 'https://ezone-u8c-daily.yyuap.com',                             //java 接口域名
        webPortalHost: 'http://test.yyuap.com:8080',                                //web端门户设计器地址
        mobilePortalHost: 'http://test.yyuap.com:5555',                             //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        chartHost: 'https://v-daily.yyuap.com',                                      //分析报表数结构域名
        phpHost: 'https://dwweb-api-u8c-daily.yyuap.com'                            //php获取组织接口
    },
    test: { //测试环境
        ezoneHost: 'https://ezone-u8c-daily.yyuap.com',                             //java 接口域名
        webPortalHost: 'https://ec-u8c-daily.yyuap.com',                            //web端门户设计器地址
        mobilePortalHost: 'https://mz-u8c-daily.yyuap.com',                         //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        chartHost: 'https://v-daily.yyuap.com',                                      //分析报表数结构域名
        phpHost: 'https://dwweb-api-u8c-daily.yyuap.com'                            //php获取组织接口
    },
    daily: { //u8cdaily环境
        ezoneHost: 'https://ezone-u8c-daily.yyuap.com',                             //java 接口域名
        webPortalHost: 'https://ec-u8c-daily.yyuap.com',                            //web端门户设计器地址
        mobilePortalHost: 'https://mz-u8c-daily.yyuap.com',                         //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        chartHost: 'https://v-daily.yyuap.com',                                      //分析报表数结构域名
        phpHost: 'https://dwweb-api-u8c-daily.yyuap.com'                            //php获取组织接口
    },
    yonsuite: { //yonbip-pre环境
        ezoneHost: 'https://ezone-yonsuite-pre.diwork.com',                         //java 接口域名
        webPortalHost: 'https://ec-yonsuite-pre.diwork.com',                        //web端门户设计器地址
        mobilePortalHost: 'https://mz-yonsuite-pre.diwork.com',                     //手机端门户设计器地址
        staticHost: 'https://ykj-esn-test.obs.cn-north-4.myhuaweicloud.com',        //静态资源域名
        chartHost: 'https://v-pre.diwork.com',                                       //分析报表数结构域名
        phpHost: 'https://dwweb-api.diwork.com'                            //php获取组织接口
    },
    pre: { //预发布环境
        ezoneHost: 'https://ezone-pre.diwork.com',                                  //java 接口域名
        webPortalHost: 'https://ec-pre.diwork.com',                                 //web端门户设计器地址
        mobilePortalHost: 'https://m-pre.diwork.com',                               //手机端门户设计器地址
        staticHost: 'https://static.diwork.com',                                    //静态资源域名
        chartHost: 'https://v-pre.diwork.com',                                       //分析报表数结构域名
        phpHost: 'https://dwweb-api.diwork.com'                            //php获取组织接口
    },
    prod: { //线上环境
        ezoneHost: 'https://ezone.diwork.com',                                      //java 接口域名
        webPortalHost: 'https://ec.diwork.com',                                     //web端门户设计器地址
        mobilePortalHost: 'https://mz.diwork.com',                                  //手机端门户设计器地址
        staticHost: 'https://static.diwork.com',                                    //静态资源域名
        chartHost: 'https://intelliv.diwork.com',                                    //分析报表数结构域名
        phpHost: 'https://dwweb-api.diwork.com'                            //php获取组织接口
    },
}