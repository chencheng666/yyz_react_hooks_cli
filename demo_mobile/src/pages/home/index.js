import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.less'
import { useTranslation } from 'react-i18next'

Main.propTypes = {
    props: PropTypes.object,
}

/**
 * @description: 初始化数据
 * @param {type}
 * @return {type}
 */
async function init(props){
    
}

/**
 * @description: 获取详情信息
 * @param {*}
 * @return {*}
 */
async function getInfo(){
    // await 
}

/**
 * @description: 打开详情页面
 * @param {Object} ev
 * @param {Object} props
 * @return {*}
 */
function openDetailPage(ev, props){
    props.history.push('/detail')
}

/**
 * @description: 主入口
 * @param {type}
 * @return {type}
 */
function Main(props){
    init(props)
    let { t } = useTranslation()
    let style = classnames({
        [styles.home]: true,
    })

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className={style}>
            <h2 onClick={(event) => {openDetailPage(event, props)}}>
                {t('home.index')}
            </h2>
        </div>
    )
}

export default inject('userStore')(observer(Main))