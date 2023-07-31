// 在浏览器中，如何缓存数据

// - cookie 4kb 每次都会带上 影响http性能
    // 缺点 容易受到 xss  跨站脚本攻击   可设置http only
// - localStorage/sessionStorage 5MB 
// - indexedDB  前端数据库 更大  支持复杂操作  事务
// - Service worker离线存储  不联网也能打开