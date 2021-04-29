import {observable} from 'mobx'
import config from '@/config/config'

class ConfigStore {
    @observable config = config[__ENV__]
}

export default new ConfigStore()