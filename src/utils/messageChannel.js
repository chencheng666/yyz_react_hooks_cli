import configStore from '@/store/config'

let handlers = {},
    {mobilePortalHost = '*'} = configStore.config

window.addEventListener('message', receiveMessage, false)

function receiveMessage(event = {}){
    let msg = '',
        {data = '', origin = ''} = event
    if(origin !==  mobilePortalHost){
        return false
    }
    try{
        msg = JSON.parse(data)
        emit(msg.action, msg.data)
    } catch(e){
        //
    }
}

/**
 * @description: 事件添加方法，参数有事件名和事件方法
 * @param {type} 
 * @return {type} 
 */
function on(type = '', fn = () => {}){
    if(!(type in handlers)){
        handlers[type] = []
    }
    handlers[type].push(fn)
}

/**
 * @description: 触发事件，参数有事件名和事件方法
 * @param {type} 
 * @return {type} 
 */
function emit(type = '', data = {}){
    if(!(type in handlers)){
        return new Error('未注册该事件')
    }
    handlers[type].forEach((fn) => {
        fn(data)
    })
}

/**
 * @description: 删除事件
 * @param {type} 
 * @return {type} 
 */
function off(type = '', fn = () => {}){
    if(!(type in handlers)){
        return new Error('无效事件')
    }
    if(!fn){
        delete handlers[type]
    } else{
        let idx = handlers[type].findIndex((ele) => {
            ele === fn
        })
        if(idx === -1){
            return new Error('无该绑定事件')
        }
        handlers[type].splice(idx, 1)
        if(handlers[type].length === 0){
            delete handlers[type]
        }
    }
}

/**
 * @description: 向 web 端门户设计器界面发送数据
 * @param {type} 
 * @return {type} 
 */
function sendMessage(data = {}){
    let msg = ''
    try{
        msg = JSON.stringify(data)
    } catch(e){
        //
    }
    document.querySelector('#js-desinger-iframe')?.contentWindow?.postMessage(msg, mobilePortalHost)
}

/**
 * @description: 可以按照指定长度和基数生成唯一的UUID
 * @param {int} len 生成长度 
 * @param {int} radix 基数
 * @param {string} suffix 统一前缀
 * @return: {String} UUID
 * DEMO：uuid()、uuid(10)、uuid(10, 16)
 */
function uuid(len, radix, suffix='Yzone-') {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if(len){
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else{
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for(i = 0; i < 36; i++){
            if(!uuid[i]){
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return suffix + uuid.join('');
}

export default {
    on,
    off,
    emit,
    sendMessage,
    uuid
}