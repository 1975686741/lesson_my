let str = 'How are you doing today';
// console.log(str.split(','), str);
// console.log(str.split('',3), str);
console.log(Math.min(...str.split(" ").map(item => item.length)));