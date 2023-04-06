const isPermutationExisted = (s, inputStr) => {
    const permutation = (str) => {
        let ans = []    // 任何排列结果放这个数组里面就可以了
        str = str.split('').sort((a, b) => {
            return a > b ? 1 : -1
        }).join('')
        // console.log(str);
        // 深度优先搜索
    
        // 递归
        // curr 当前已选择字符，store 待选择的字符
        const dfs = (curr, store) => {
            // 先写退出条件
            if (!store.length) {
                return ans.push(curr)
            }
            for (let i = 0; i < store.length; i++) {
                // store里面选择时，排除重复的内容
                if (i > 0 && store[i] === store[i-1]) continue
                dfs(curr + store[i], store.slice(0, i) + store.slice(i+1))
            }
        }
    
        dfs('', str)   //当时的状态 开始 是空字符串，可选的是整个字符串
        return ans
    }
    const res = permutation(s)
    return res.includes(inputStr)
}

// permutation('alibaba')
// console.log(permutation('bac'));
console.log(isPermutationExisted('dubia','baidu'));

