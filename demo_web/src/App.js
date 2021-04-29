import React, { useState, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { inject } from 'mobx-react'
import PropTypes from 'prop-types'
import routes from './router/index'
import { getUserInfo } from '@models/user/index'

App.propTypes = {
    props: PropTypes.object
}

function App(props){
    let {userStore = {}} = props

    /**
     * @description: 初始化用户信息
     * @param {*}
     * @return {*}
     */    
    const initUserInfo = async () => {
        let userInfo = {}
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
        userStore?.setUserInfo(userInfo)
    }

    useEffect(() => {
        let getUserInfo = async () => {
            await initUserInfo()
        }
        getUserInfo()
    }, [])

    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
}
export default inject('userStore')(App)