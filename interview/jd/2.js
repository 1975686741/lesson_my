// 如何查找字符串中存在指定的某一部分？  还有includes  indexOf
/**
 * 1. 定义一个正则  /[a-z]{3, 6}/ig
 * 2. test 方法
 */
const str = "Hello, world!";
const search = "world";

// 使用正则表达式创建一个模式，其中包含要查找的字符串
const pattern = new RegExp(search);

// 使用 test() 方法测试字符串是否匹配模式
const found = pattern.test(str);

// 如果返回值为 true，则表示找到了指定的部分
if (found) {
  console.log(`"${search}" found in the string`);
} else {
  console.log(`"${search}" not found in the string`);
}


const str2 = "Hello, world!";
const search2 = "world";

// 使用 includes() 方法查找字符串中是否包含指定的部分
const found2 = str.includes(search);

// 如果返回值为 true，则表示找到了指定的部分
if (found) {
  console.log(`"${search2}" found in the string`);
} else {
  console.log(`"${search2}" not found in the string`);
}