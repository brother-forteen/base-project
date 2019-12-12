/**
 * @createDate: 2019/12/11
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/

/**
 * @description: 时间格式化
 * @param time [Number|String] 时间
 * @param formatter [String] 格式化
 * @param isFormatter [Boolean] 是否需要格式化
 * @param dateDelimiter [String] 日期分隔符
 * @param timeDelimiter [String] 时间分隔符
 * **/
let timeLinear = (time, formatter, isFormatter, dateDelimiter = '-', timeDelimiter = ':') => {
    let date = new Date(time);
    let dateParams = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        min: date.getMinutes(),
        s: date.getSeconds()
    };

    if(isFormatter){
        dateParams = {
            y: String(date.getFullYear()).padStart(2, '0'),
            m: String(date.getMonth() + 1).padStart(2, '0'),
            d: String(date.getDate()).padStart(2, '0'),
            h: String(date.getHours()).padStart(2, '0'),
            min: String(date.getMinutes()).padStart(2, '0'),
            s: String(date.getSeconds()).padStart(2, '0')
        };
    }

    let returnDate = '';
    switch (formatter) {
        case 'YYYY-MM-DD':
            returnDate = `${dateParams.y}${dateDelimiter}${dateParams.m}${dateDelimiter}${dateParams.d}`;
            break;

        case 'YYYY-MM':
            returnDate = `${dateParams.y}${dateDelimiter}${dateParams.m}`;
            break;

        case 'HH:mm:ss':
            returnDate = `${dateParams.h}${timeDelimiter}${dateParams.min}${timeDelimiter}${dateParams.s}`;
            break;

        case 'YYYY-MM-DD HH:mm:ss':
            returnDate = `${dateParams.y}${timeDelimiter}${dateParams.m}${timeDelimiter}${dateParams.d} ${dateParams.h}${timeDelimiter}${dateParams.min}${timeDelimiter}${dateParams.s}`;
            break;

        case 'YYYY-MM-DD HH:mm':
            returnDate = `${dateParams.y}${timeDelimiter}${dateParams.m}${timeDelimiter}${dateParams.d} ${dateParams.h}${timeDelimiter}${dateParams.min}`;
            break;

        case 'YYYYMMDD':
            returnDate = `${dateParams.y}${dateParams.m}${dateParams.d}`;
            break;

        default:
            returnDate = `${dateParams.y}${timeDelimiter}${dateParams.m}${timeDelimiter}${dateParams.d} ${dateParams.h}${timeDelimiter}${dateParams.min}${timeDelimiter}${dateParams.s}`;
            break;
    }

    return returnDate;
};

export default timeLinear;
