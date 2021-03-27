import {observable, action} from 'mobx'

class UserStore {
    @observable userInfo = {}

    /**
     * @description: 更新用户信息
     * @param {Object} data
     * @return {type} 
     */    
    @action setUserInfo(data) {
        this.userInfo = Object.assign(this.userInfo,data)
    }
}

export default new UserStore()