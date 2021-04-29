import { observable, action } from 'mobx'

class UserStore {
    @observable userInfo = {} //用户信息
    @observable appearance = 'light' //默认浅色模式

    /**
     * @description: 更新用户信息
     * @param {Object} data
     * @return {type} 
     */    
    @action setUserInfo(data) {
        this.userInfo = data
    }

    /**
     * @description: 设置外观模式，light - 浅色模式， dark - 深色模式
     * @param {*}
     * @return {*}
     */    
    @action setAppearance(mode = 'light'){
        this.appearance = mode
    }

    get userName(){
        return this.userInfo?.userName ?? ''
    }
}

export default new UserStore()