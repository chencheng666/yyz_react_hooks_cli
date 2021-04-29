import instance from '@/config/axios'

/**
 * @description: 获取用户信息 wiki: https://wiki-ec.diwork.com/pages/viewpage.action?pageId=9047022
 * @param {Object} params 参数对象 
 * @return:
 */
export const getUserInfo = (params = {}) => {
    return instance.get('[javaHost]/portal-designer/api/v1/session/info', {params: params})
}