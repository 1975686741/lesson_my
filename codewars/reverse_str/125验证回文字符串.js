/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/\s/g ,'').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();   //替换掉所有空格，替换掉所有非字母和数字，字符串全部转换为小写
    return s === [...s].reverse().join('');  //将字符串转化成数组，用reverse()颠倒元素顺序，再用join()将其转换成字符串于原字符串进行对比
};