/** 
 * js 通用函数的封装
 *  
*/

export const getLocal = (name) => {
   return localStorage.getItem(name)
}

export const setLocal = (name, value) => {
  localStorage.setItem(name, value)
}