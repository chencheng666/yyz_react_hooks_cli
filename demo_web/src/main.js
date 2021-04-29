import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
//引入全局状态管理
import stores from './store/index'
//引入多语插件
import resources from './lang'
//引入全局样式
import '@assets/style/reset'
import '@assets/style/common'
import '@assets/fonts/icomoon/style'
//平台多语包
import AcLang from "ac-lang-cn"
//tinper-bee 组件库 css 引用
import 'tinper-bee/assets/tinper-bee.css'

//引入入口文件
import App from './App'

const LANG_MODULE_CODE = 'YS_OA_XTHUATI' //话题的多语模块标识

if(!globalThis.URLSearchParams){ //兼容IE11
    globalThis.URLSearchParams = require('url-search-params')
}

//渲染函数
globalThis.render = () => {
    ReactDom.render(
        <Provider {...stores}>
            <App />
        </Provider>,
        document.querySelector('#app')
    )
}

//初始化本地多语资源
AcLang.init({
    "en": resources.en,
    "zhcn": resources.zh_cn,
    "zhtw": resources.zh_tw,
})

document.documentElement.setAttribute('lang', AcLang.lang)

//加载远程的多语资源
AcLang.jsonp(0, LANG_MODULE_CODE, stores.configStore.config.phpHost.multiLangHost ?? '', (res) => {
    window.render()
})

globalThis.render()


