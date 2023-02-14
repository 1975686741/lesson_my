// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    if(s.length === 1){
        return 1
    }
    let sArr =  s.split('')  //遍历字符串s 每遍历一个 就存一个 str 每次存的时候判断一下 在不在str里 如果在的话 就把当前字符串长度先存起来resArr 然后判断出一样的在str里的哪个位置 然后当前位置以及之前的截取掉 新的接着添加 循环完之后 也push一下 避免最后的字符串没存进去
    let str = ''
    let resArr = []
    sArr.forEach(el =>{
        if(str.includes(el)){
            resArr.push(str.length)
            let index = str.split('').findIndex(i => i === el)
            str = str.slice(index+1)
        }
        str+=el
    })
    resArr.push(str.length)
    return resArr.sort((a,b) => a-b).pop()
};