export default {
    /**
     * @description: 函数节流
     * @param {type} 
     * @return {type} 
     */    
    throttle(fn, interval = 500){
        let run = true
        return () => {
            if(!run){
                return false
            }
            run = false
            setTimeout(() => {
                fn.apply(this, arguments)
                run = true
            }, interval)
        }
    },
    /**
     * @description: 函数防抖
     * @param {type} 
     * @return {type} 
     */    
    debounce(fn, interval = 500){
        let timeout = null
        return () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fn.apply(this, arguments)
            }, interval)
        }
    },
}