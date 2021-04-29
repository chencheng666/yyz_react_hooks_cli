import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
//引入全局状态管理
import stores from './store/index'
//引入多语插件
import resources from './lang'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//引入工具函数
import {browser} from '@utils/index'
//引入全局样式
import '@assets/style/reset'
import '@assets/style/common'
import '@assets/fonts/icomoon/style'
//引入Brige
const YYEsnBridge = require('@assets/sdk/Yzone_jsBridge/esn.min.js')
//引入入口文件
import App from './App'


window.YYEsnBridge = YYEsnBridge

if(!window.URLSearchParams){ //兼容低版本
    window.URLSearchParams = require('url-search-params')
}

//多语配置
let lang = browser.getLanguage()
i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'zh_cn',
    lng: lang, //当前语言
    interpolation: {
        escapeValue: false
    }
})
document.documentElement.setAttribute('lang', lang)


ReactDom.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.querySelector('#app')
)