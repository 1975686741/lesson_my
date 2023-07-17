let arr = [
         {id: 1, age :23}, 
         {id: 2, age :24},
         {id: 1, age :25},
         {id: 4, age :26}
        ];
let arr2 = arr.filter((currentValue, currentIndex, selfArr) => {
    // console.log(currentValue);
    // console.log(currentIndex);
    // console.log(selfArr);
    return selfArr.findIndex(b => b.id === currentValue.id) === currentIndex;
});
// console.log(arr2);
let res = [];
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i][1] < arr2[j][1]) {
            res.push(arr2[i])
        }
    }
}
console.log(res);