export default {
    /**
     * @description: 获取当前语言
     * @param {type} 
     * @return: 
     */    
    getLanguage(){
        let locale = 'zh_cn'
        return new Promise((resolve) => {
            let language = new URLSearchParams(location.hash).get('language');
            if (language) {
                resolve(language)
                return;
            }
            if (window.jDiwork && window.jDiwork.getContext) {
                let timer = setTimeout(() => { // 防止本地环境 jDiwork不通信
                    resolve(locale)
                    clearTimeout(timer)
                }, 500)

                window.jDiwork.getContext((res) => { // 获取jDiwork 多语言环境
                    if (res && res.locale) {
                        res.locale = res.locale.toLowerCase()
                        if(res.locale.indexOf('en') >= 0){
                            res.locale = 'en'
                        } else if(res.locale.indexOf('zh_tw') >= 0){
                            res.locale = 'zh_tw'
                        }
                        resolve(res.locale)
                    } else {
                        resolve(locale)
                    }
                    clearTimeout(timer)
                })
                
            } else {
                resolve(locale)
            }
        })
    },
}