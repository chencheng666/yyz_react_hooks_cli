import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@components/common/loading'

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Loadable({
            loader: () => import('@pages/home/index'),
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
            loader: () => import('@pages/detail/index'),
            loading(){
                return <Loading />
            },
        }),
    },
    {
        path: '*',
        exact: true,
        name: '404',
        component: Loadable({
            loader: () => import('@pages/404/index'),
            loading(){
                return <Loading />
            },
        }),
    },
]

export default routes