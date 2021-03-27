import React from 'react';
import Loadable from 'react-loadable'
import Loading from '@components/common/loading'

//路由懒加载
const PortalList = Loadable({
    loader: () => import('../pages/portalList'),
    loading() {
        return <Loading />
    },
})

//路由懒加载
const Designer = Loadable({
    loader: () => import('../pages/designer'),
    loading() {
        return <Loading />
    },
})

const routes = [
    {
        name: 'portalList',
        path: '/',
        exact: true,
        component: PortalList,
    },
    {
        name: 'designer',
        path: '/designer',
        component: Designer,
    },
];

export default routes