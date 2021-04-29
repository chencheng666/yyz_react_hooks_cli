import React, { useState, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { inject } from 'mobx-react'
import PropTypes from 'prop-types'
import routes from './router/index'
import { getUserInfo } from '@models/user/index'
import { browser } from '@utils'

App.propTypes = {
    props: PropTypes.object
}

function App(props){
    let {userStore = {}} = props
    const YY_ESN_BRIDGE = window.YYEsnBridge
    
    /**
     * @description: 初始化用户信息
     * @param {*}
     * @return {*}
     */    
    const initUserInfo = async () => {
        let userInfo = {},
            str = browser.getYzoneVersion(),
            tmp = str.split('-'),
            version = (tmp?.[1] ?? '').replace(/\./g, '').padEnd(6, '0') ?? 0
        if( __ENV__ !== 'development' && version > 611000){ //非本地开发环境 && 友空间APP版本 > 6.1.1
            let {userName = '', tenant_id = '', yht_userid = ''} = await getUserInfoFromApp()
            userInfo = {
                userName,                                                   //当前用户名
                yhtUserId: yht_userid,                                      //友互通用户ID
                tenantId: tenant_id,                                        //租户ID
            }
        } else{
            try{
                let {code = -1, data = {}} = await getUserInfo()
                if(code === 200){
                    userInfo = {
                        userName: data?.esnUser?.name ?? '',                //当前用户名
                        yhtUserId: data?.yhtUser?.userId ?? '',             //友互通用户ID
                        tenantId: data?.invocationInfo?.tenantId ?? '',     //租户ID
                    }
                }
            } catch(e){
                //
            }
        }
        userStore?.setUserInfo(userInfo)
    }

    /**
     * @description: 通过调用 原生bridge 获取当前用户信息
     * @param {*}
     * @return {Promise} 用户信息
     */    
    const getUserInfoFromApp = () => {
        return new Promise((resolve) => {
            YY_ESN_BRIDGE.ready(() => {
                YY_ESN_BRIDGE.do('getUserYHTInfo', {
                    data: {
                        force: true,
                    },
                    success: (res) => {
                        resolve(res)
                    },
                })
            })
            
        })
    }

    /**
     * @description: 获取当前设备的外观模式
     * @param {*}
     * @return {*}
     */    
    const getAppearanceMode = () => {
        YY_ESN_BRIDGE.ready(() => {
            //获取当前的模式
            YY_ESN_BRIDGE.do('appearanceMode', {
                success: ({mode = 'light'}) => {
                    setAppearanceMode(mode)
                },
            })
            // 监听模式变化
            YY_ESN_BRIDGE.registerHandler({
                appearanceModeChangeEvent: ({mode = 0}) => { // mode: 0 - 浅色模式，1 - 深色模式
                    let arr = ['light', 'dark']
                    setAppearanceMode(arr[mode])
                }
            })
            // 
            YY_ESN_BRIDGE.do('onAppearanceModeChange', {
                callback: 'appearanceModeChangeEvent',
            })
        })
    }

    /**
     * @description: 设置当前的 外观模式，light - 浅色模式, dark - 深色模式
     * @param {*}
     * @return {*}
     */    
    const setAppearanceMode = (mode = 'light') => {
        userStore.setAppearance(mode)
        document.documentElement.dataset.appearance = mode
    }

    useEffect(() => {
        let getUserInfo = async () => {
            await initUserInfo()
        }
        getUserInfo()
        getAppearanceMode()
    }, [])

    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
}
export default inject('userStore')(App)