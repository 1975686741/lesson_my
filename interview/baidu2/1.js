function isPromise(obj) {
    return Promise.resolve(obj) === obj
}
const p = new Promise((resolve, reject) => {
    resolve('success');
});
console.log(isPromise(p));  // true