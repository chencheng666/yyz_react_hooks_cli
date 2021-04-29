import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.less'

function Loading(){
    let result = (
        <Fragment>
            <div className={styles.loadingBox}>
                <div className={styles.innerBox}>
                    <div className={styles.loading}></div>
                </div>
            </div>
        </Fragment>
    )

    return (
        ReactDOM.createPortal(result, document.body)
    )
}

export default Loading