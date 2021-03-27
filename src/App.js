import React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router/index'
import { inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { getField } from '@models/portalList/index'
import { getUserBelongInfo } from '@models/userIndex/index'


const App = (props) => {
    App.propTypes = {
        portalStore: PropTypes.object,
        userStore: PropTypes.object,
    }

    /**
     * @description: 初始化门户领域列表
     * @param {type} 
     * @return {type} 
     */
    const initPortalCategory = async () => {
        let {code = -1, data = {}} = await getField()
        if(code === 200){
            props.portalStore.setCategory(data?.domains ?? [])
        }
    }
    const getUserInfoData = async() => {
        let { code , data = {} } = await getUserBelongInfo()
        if(code === 200){
            props?.userStore?.setUserInfo(data?.esnUser)
        }
    }

    initPortalCategory()
    getUserInfoData()
    return (
        <div>
            <HashRouter>
                {renderRoutes(routes)} 
            </HashRouter>
        </div>
    )
}

export default inject('portalStore','userStore')(App)