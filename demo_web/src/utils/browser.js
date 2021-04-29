export default {
    /**
     * @description: 获取当前语言（优先从友空间APP的userAgent里取，再次从地址栏里取，最后根据浏览器语言取）
     * @param {type} 
     * @return: {String} 返回当前语言
     */
    getLanguage(){
        let {userAgent, language} = window.navigator,
            lang = userAgent.split("youZoneLanguage=")[1],
            urlSearchParams = new URLSearchParams(window.location.href)
        if(!lang){
            lang = urlSearchParams.get('language') || language
        }
        lang = lang.toLocaleLowerCase()
        if(/^en/.test(lang)){
            lang = "en"
        } else if(/tw$/i.test(lang)){
            lang = "zh_tw"
        } else{
            lang = "zh_cn"
        }
        return lang
    },
}