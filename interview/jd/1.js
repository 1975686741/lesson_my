const obj1 = {a:1, b:2}
const obj2 = {c:1, b:2}

const mergeobj = Object.assign({}, obj1, obj2)

console.log(mergeobj);