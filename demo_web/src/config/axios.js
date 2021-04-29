import axios from 'axios'
import CONFIG from './config'

/**
 * @description: 获取请求的绝对链接地址
 * @param {type} 
 * @return: 
 */
function getUrl(url = ''){
    let env = CONFIG[__ENV__]
    if (!/[http|https]:\/\//gi.test(url)) {
        url = url.replace(/^\[(\w+)\]?/g, (reg, key) => {
            return env[key] || ''
        })
    }
    return url
}

/**
 * @description: 获取请求的配置信息
 * @param {type} 
 * @return: 
 */
async function getConfig(config){
    config.url = getUrl(config?.url ?? '')
    config.params = config?.params ?? {}
    return new Promise((resolve) => {
        resolve(config)
    })
}

//axios请求实例
const instance = axios.create({
    timeout: 5000,
    withCredentials: true,
})

// 添加请求拦截器
instance.interceptors.request.use(
    async (config) => {
        return await getConfig(config)
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    (res) => {
        let {data = {}, status = 0} = res
        if(status === 200){
            return data ?? {}
        } else{
            return Promise.reject(res)
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance