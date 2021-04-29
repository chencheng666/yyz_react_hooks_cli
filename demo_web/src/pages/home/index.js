import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.less'
import { Button, Panel } from 'tinper-bee'

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
    let style = classnames({
        [styles.home]: true,
    })

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className={style}>
            <h2 onClick={(event) => {openDetailPage(event, props)}}>
                {lang.template('P_YS_FED_EXAMP_0000019871')}
            </h2>
            <div>
                <Panel>hello world</Panel>
                <Button colors="secondary">次按钮</Button>
            </div>
        </div>
    )
}

export default inject('userStore')(observer(Main))