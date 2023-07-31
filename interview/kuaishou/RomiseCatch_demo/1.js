const p = new Promise((resolve, reject) => {
    reject('1')
})
const p2 = new Promise((resolve, reject) => {
    reject('2')
})

p
    .then(data => {
        console.log(data);
        return p2
    })
    .then(data => {
        
    })
    .catch(err => {
        console.log(err);
    })