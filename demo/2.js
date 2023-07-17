function flattenArray(array) {
  let res = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      res = res.concat(flattenArray(element));
    } else {
      res.push(element);
    }
  });

  return res;
}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8]];
const result = flattenArray(arr);

console.log(result); 
