import md5 from './md5';

export default {
    getColor(str) {
        const colors = [
            '#E45D58',
            '#35C5AF',
            '#19CCE8',
            '#FFB319',
            '#7465C6',
        ]

        str = str || ''
        let char = md5(str).charAt(0).toLowerCase()
        return colors['abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(char) % colors.length]
    }
}