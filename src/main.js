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
import {browser} from '@util/index'
//引入 Antd UI库
import 'antd/dist/antd.less'
import en from 'antd/es/locale/en_US'
import zh_cn from 'antd/es/locale/zh_CN'
import zh_tw from 'antd/es/locale/zh_TW'
import { ConfigProvider } from 'antd'
//引入全局样式
import './assets/style/reset.css'
import './assets/style/common.css'
//引入入口文件
import App from './App'
//引入字体图标库
import './assets/icomoon/style.css'

// 引入平台SDK
const HEAD = document.getElementsByTagName('head')[0];
const jDiworkScript = document.createElement('script');
jDiworkScript.type = 'text/javascript';
jDiworkScript.src = 'https://cdn.yonyoucloud.com/pro/diwork/download/jDiwork.js';
jDiworkScript.onload = () => {
    if (window.jDiwork) {
        initDesigner()
    } else {
        setTimeout(() => {
            initDesigner()
        }, 100);
    }
}
HEAD.appendChild(jDiworkScript);

// 初始化门户设计器
const initDesigner =  async () => {
    let langObj = { en, zh_cn, zh_tw };
    let LANG =  await browser.getLanguage();
    window.locale = LANG || 'zh_cn';
    
    //多语配置
    i18n.use(initReactI18next).init({
        resources,
        lng: LANG,
        fallbackLng: 'zh_cn',
        interpolation: {
            escapeValue: false
        }
    })

    ReactDom.render(
        <ConfigProvider locale={langObj[window.locale]}>
            <Provider {...stores}>
                <App />
            </Provider>
        </ConfigProvider>,
        document.querySelector('#app')
    )
}