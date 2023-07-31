let arr = [1,2,3,3,4,5,5];

let uniqueArr = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);