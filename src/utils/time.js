/**
 * @description: 时间日期格式化
 * @param {Date} 
 * @return {String} 
 */
function formatDate(date, mask) {
    var _this = date;

    var zeroize = function(value, length) {
        if (!length) length = 2;
        value = String(value);
        for (var i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }
        return zeros + value;
    };

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function($0) {
        switch ($0) {
        case 'd':
            return _this.getDate();
        case 'dd':
            return zeroize(_this.getDate());
        case 'ddd':
            return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][_this.getDay()];
        case 'dddd':
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][_this.getDay()];
        case 'M':
            return _this.getMonth() + 1;
        case 'MM':
            return zeroize(_this.getMonth() + 1);
        case 'MMM':
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][_this.getMonth()];
        case 'MMMM':
            return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][_this.getMonth()];
        case 'yy':
            return String(_this.getFullYear()).substr(2);
        case 'yyyy':
            return _this.getFullYear();
        case 'h':
            return _this.getHours() % 12 || 12;
        case 'hh':
            return zeroize(_this.getHours() % 12 || 12);
        case 'H':
            return _this.getHours();
        case 'HH':
            return zeroize(_this.getHours());
        case 'm':
            return _this.getMinutes();
        case 'mm':
            return zeroize(_this.getMinutes());
        case 's':
            return _this.getSeconds();
        case 'ss':
            return zeroize(_this.getSeconds());
        case 'l':
            return zeroize(_this.getMilliseconds(), 3);
        case 'L':
            var m = _this.getMilliseconds();
            if (m > 99) m = Math.round(m / 10);
            return zeroize(m);
        case 'tt':
            return _this.getHours() < 12 ? 'am' : 'pm';
        case 'TT':
            return _this.getHours() < 12 ? 'AM' : 'PM';
        case 'Z':
            return _this.toUTCString().match(/[A-Z]+$/);
            // Return quoted strings with the surrounding quotes removed
        default:
            return $0.substr(1, $0.length - 2);
        }
    })
}

export default formatDate;