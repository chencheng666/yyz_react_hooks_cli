import {observable, action} from 'mobx'

class PortalStore {
    @observable category = [] //所属领域列表
    @observable portalGlobal = {} //门户基本信息
    /**
     * @description: 更新用户信息
     * @param {Object} data
     * @return {type} 
     */ 
    @action setCategory(data = []) {
        this.category = data
    }
    /**
     * @description: 存储用户配置的门户全局属性
     * @param {type} 
     * @return {type} 
     */ 
    @action setPortalGlobal(data = {}) {
        const _this = this
        _this.portalGlobal = Object.assign(_this.portalGlobal,data)
    }   
}

export default new PortalStore()