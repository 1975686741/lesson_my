/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 如何判断s[i]到s[j]为回文子串？
    // 答：s[i + 1]到s[j - 1]是回文串，且s[i] = s[j]
    // dp[i][j]判断i到j是否为回文串
    // dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
    /** len为s长度 */
    const len = s.length;
    // s长度为1直接返回
    if (len === 1) {
        return s;
    }
    // 构建dp二维数组，初始默认为false
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
    // 当子串长度为1，都是回文子串，设置为true
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    // 返回值
    let ans = s[0];
    // 子串长度
    let childLen = 2;
    // 从长度为2的子串开始构建状态转移方程
    for (; childLen <= len; childLen++) {
        // 子串右边界为i
        for (let i = 0; i < len; i++) {
            // 子串左边界为j
            j = i + childLen - 1;
            // 当j越界时，跳出当前循环
            if (j >= len) {
                break;
            }
            // 子串长度为2时，不能使用dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            // 比如i = 0, j = 1; dp[i + 1][j - 1]为dp[1][0]，但我们并没有初始化dp[1][0]
            if (childLen === 2) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            }
            // 更新ans
            if (dp[i][j] && childLen > ans.length) {
                ans = s.slice(i, j + 1);
            }
        }
    }
    return ans;
};