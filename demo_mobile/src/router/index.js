import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@components/common/loading'

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Loadable({
            loader: () => import('@pages/home'),
            loading(){
                return <Loading />
            },
        }),
    },
    {
        path: '/detail',
        exact: true,
        name: 'Detail',
        component: Loadable({
            loader: () => import('@pages/detail'),
            loading(){
                return <Loading />
            },
        }),
    },
]

export default routes