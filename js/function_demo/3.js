
// 变量的作用域
var name = '龙'  // 全局  window
// this 指向    调用方式
// JS 变量属于 作用域（运行的环境）
function func() {
     y = 2;  //不加var  全局， 不太推荐
    var name = 'Summer'  // func 内部  局部变量
    {
        let x = 1;  //
        var z = 3;  // es5  不支持块级作用域
        let name = '涛'  //块级作用域
    }
    // console.log(y,x);
    console.log(y,z);
}
func();
console.log(y);