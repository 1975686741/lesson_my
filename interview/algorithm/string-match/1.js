const WordDicitionary = function() {
    this.words = {}  // O(1)  时间复杂度
}

// 索引
WordDicitionary.prototype.addWord = function (word) {
    if (this.words[word.length]) {
        this.words[word.length].push(word)
    } else {
        this.words[word.length] = [word]
    }
}
WordDicitionary.prototype.search = function (word) {
    if (!this.words[word.length]) {
        return false
    }
    // 缓存长度
    const len = word.length
    if (!word.includes('.')) {
        return this.words[len].includes(word)
    }
    
    const reg = new RegExp(word)
    return this.words[len].some((item) => {
        return reg.test(item)
    })
}