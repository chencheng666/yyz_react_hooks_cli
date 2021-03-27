import {observable} from 'mobx'
import config from '@/config/config'

class ConfigStore {
    @observable config = config[process.env.NODE_ENV]
}

export default new ConfigStore()