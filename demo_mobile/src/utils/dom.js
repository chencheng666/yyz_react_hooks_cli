/**
 * @description: 函数节流
 * @param {type} 
 * @return {type} 
 */  
let run = true
export const throttle = (fn, interval = 500) => {
    return function (){
        if(!run){
            return false
        }
        run = false
        fn.apply(this, arguments)
        setTimeout(() => {
            run = true
        }, interval)
    }
}
/**
 * @description: 函数防抖
 * @param {type} 
 * @return {type} 
 */    
export const debounce = (fn, interval = 500) => {
    let timeout = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, interval)
    }
}

export default{
    throttle,
    debounce,
}