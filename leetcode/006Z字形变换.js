
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s
    let strObj = Array(numRows).fill('') // 创建numRows个空数组
    let point = 0
    let direction = true // 正向
    for ( let i = 0; i < s.length ; i++) {
        strObj[point] = strObj[point] + s[i]
        // 更新指针
        if( direction && point < numRows-1 ) {
            point++
        } else if ( !direction && point > 0 ) {
            point--
        } else {
            direction = !direction
            point == 0 ? point++ : point--
        }
    }
    return strObj.join('')
};