/* eslint-disable */
import CONFIG from '@/config/config'


const alphaHexMap = {
    '1.00':'FF',
    '0.99':'FC',
    '0.98':'FA',
    '0.97':'F7',
    '0.96':'F5',
    '0.95':'F2',
    '0.94':'F0',
    '0.93':'ED',
    '0.92':'EB',
    '0.91':'E8',
    '0.90':'E6',
    '0.89':'E3',
    '0.88':'E0',
    '0.87':'DE',
    '0.86':'DB',
    '0.85':'D9',
    '0.84':'D6',
    '0.83':'D4',
    '0.82':'D1',
    '0.81':'CF',
    '0.80':'CC',
    '0.79':'C9',
    '0.78':'C7',
    '0.77':'C4',
    '0.76':'C2',
    '0.75':'BF',
    '0.74':'BD',
    '0.73':'BA',
    '0.72':'B8',
    '0.71':'B5',
    '0.70':'B3',
    '0.69':'B0',
    '0.68':'AD',
    '0.67':'AB',
    '0.66':'A8',
    '0.65':'A6',
    '0.64':'A3',
    '0.63':'A1',
    '0.62':'9E',
    '0.61':'9C',
    '0.60':'99',
    '0.59':'96',
    '0.58':'94',
    '0.57':'91',
    '0.56':'8F',
    '0.55':'8C',
    '0.54':'8A',
    '0.53':'87',
    '0.52':'85',
    '0.51':'82',
    '0.50':'80',
    '0.49':'7D',
    '0.48':'7A',
    '0.47':'78',
    '0.46':'75',
    '0.45':'73',
    '0.44':'70',
    '0.43':'6E',
    '0.42':'6B',
    '0.41':'69',
    '0.40':'66',
    '0.39':'63',
    '0.38':'61',
    '0.37':'5E',
    '0.36':'5C',
    '0.35':'59',
    '0.34':'57',
    '0.33':'54',
    '0.32':'52',
    '0.31':'4F',
    '0.30':'4D',
    '0.29':'4A',
    '0.28':'47',
    '0.27':'45',
    '0.26':'42',
    '0.25':'40',
    '0.24':'3D',
    '0.23':'3B',
    '0.22':'38',
    '0.21':'36',
    '0.20':'33',
    '0.19':'30',
    '0.18':'2E',
    '0.17':'2B',
    '0.16':'29',
    '0.15':'26',
    '0.14':'24',
    '0.13':'21',
    '0.12':'1F',
    '0.11':'1C',
    '0.10':'1A',
    '0.09':'17',
    '0.08':'14',
    '0.07':'12',
    '0.06':'0F',
    '0.05':'0D',
    '0.04':'0A',
    '0.03':'08',
    '0.02':'05',
    '0.01':'03',
    '0.00':'00',
}
export const getHexWithAlpha = ({ hex, rgb =  {a: 1} }) => {
    return (hex.indexOf('#') !== -1 ? hex.substr(1, hex.length -1) : hex)?.toUpperCase() + alphaHexMap[rgb?.a?.toFixed(2)]
}
/**
 * @description: 设置style-config
 * @param {obj} :notNeed ['title','content','border','margin','padding'] 不需要属性去除
 * @return {obj} style对象
 */
export const setStyleConfig = (notNeed) => {
    const style = {
        '--title-textColor': '#111111FF',
        '--title-bgColor': '#FFFFFF',
        '--title-bgImg': '',
        '--title-bgSize': '100%',
        '--title-bgRepeat': 'no-repeat',
        '--content-textColor': '#555',
        '--content-bgColor': '#FFFFFF',
        '--content-bgImg': '',
        '--content-bgSize': '100%',
        '--content-bgRepeat': 'no-repeat',
        '--borderBottomRightRadius': '12px',
        '--borderTopRightRadius': '12px',
        '--borderBottomLeftRadius': '12px',
        '--borderTopLeftRadius': '12px',
        '--marginTop': '9px',
        '--marginBottom': '9px',
        '--marginLeft': '18px',
        '--marginRight': '18px',
    }
    notNeed && notNeed.forEach(item => {
        Object.keys(style).forEach((key) => {
            if (key.slice(2).split('-')[0] === item) {
                delete style[key]
            }
        })
    })
    return style
}
/**
 * @description: 处理rgba
 * @param {obj,string} :rgba||color参数,color转rgba对象  rgba对象时转color色值
 * @return {obj} 返回一个{r,g,b,a} 对象 || rgba()颜色
 */
export const transRgba = (data) => {
    let obj = null
    if ((typeof (data) === 'string') && (data.indexOf('rgba') === -1)) {
        return data;
    } else if (Object.prototype.toString.call(data) === '[object String]') {
        let arr = data.match(/\(([^)]*)\)/)[1].split(',')
        obj = {
            r: Number(arr[0]),
            g: Number(arr[1]),
            b: Number(arr[2]),
            a: Number(arr[3])
        }
    } else {
        let { r, g, b, a } = data
        obj = `rgba(${r},${g},${b},${a})`
    }
    return obj
}
/**
 * @description: rgba转hex
 * @param {type}
 * @return {type}
 */
export const getHexColor = (color) => {
    var values = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',')
    var a = parseFloat(values[3] || 1),
        r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
        g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
        b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
    return '#' +
        ('0' + r.toString(16)).slice(-2) +
        ('0' + g.toString(16)).slice(-2) +
        ('0' + b.toString(16)).slice(-2)
}
/**
 * @description: hex转rgba
 * @param {type} 
 * @return {type} 
 */
export const getRgba = (sHex) => {
    // 十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/
    /* 16进制颜色转为RGB格式 */
    var sColor = sHex.toLowerCase()
    var alpha = 1
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4 || sColor.length === 5) {
            var sColorNew = '#'
            for (var i = 1; i < sColor.length; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
            }
            sColor = sColorNew
        }
        // 如果有透明度再执行
        if (sColor.length === 9) {
            alpha = (parseInt('0x' + sColor.slice(7, 9)) / 255).toFixed(2)
        }
        //  处理六位的颜色值
        var sColorChange = []
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
        }
        return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
    } else {
        return sColor
    }
}
/**
 * @description: 删除||添加 前缀
 * @param {type} 
 * @return {type} 
 */
export const addReduceSymbol = (obj, symbol) => {
    var newObj
    if (Object.prototype.toString.call(obj) === "[object Object]") {
        newObj = {}
        Object.keys(obj).forEach((key) => {
            if (key.indexOf(symbol) === 0) {
                newObj[key.slice(symbol.length)] = obj[key]
            } else {
                newObj[symbol + key] = obj[key]
            }
        })
    }
    return newObj
}
/**
 * @description: 重置样式单位 追加,删除px 等 自己扩展
 * @param {obj} 
 * @return {obj} 
 */
export const resetStyle = (obj={},type='add',unit='px') => {
    let newObj = obj
    Object.keys(newObj).forEach((key) => {
        switch(type){
            case "add":
                if (typeof (newObj[key]) === 'number') {
                    newObj[key] = newObj[key] + unit
                }
            break;
            case "remove":
                if(newObj[key].indexOf(unit)!==-1){
                    newObj[key] = Number(newObj[key].replace(unit,''))
                }
            break;
        }
    })
    return newObj
}

export const getQuery = (url, name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.substr(url.indexOf("\?") + 1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}

export const getAbsoluteUrl = (url)=>{//处理url(${staticHost})图片地址
    let env = CONFIG[process.env.NODE_ENV]
    let rUrl = ''
    if(url.match(/url\(\{\$staticHost\}(\S*)\)/)){
        rUrl = url && env?.staticHost + url.match(/url\(\{\$staticHost\}(\S*)\)/)[1]
    }
    return rUrl
}
/**
 * @description: 数据去重  目前支持数组去重（支持内部对象形式），对象去重自己扩展
 * @param {type} :data-数组,key-过滤用的唯一key
 * @return {type} 
 */
export const deduplication = (data,key) =>{
    let obj = []
    try{
        obj =  JSON.parse(JSON.stringify(data))
    }catch(e){
        obj = []
    }
    let newData = null
    if(Array.isArray(obj)){
        let arr = []
        newData = []
        obj.forEach((item)=>{
            if(arr.indexOf(item[key])===-1){
                arr.push(item[key])
                newData.push(item)
            }
        })
    }
    return newData
}
export default {
    transRgba,
    setStyleConfig,
    getQuery,
    resetStyle,
    getAbsoluteUrl
}