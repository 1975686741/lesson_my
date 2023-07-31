const { error } = require("console")

Promise
    .resolve()
    .then(function () {
        throw new Error('外部错误')
    }, function () {
        console.log('This is never called');
    })
    .catch(err => {
        console.log('捕捉到错误', err.message);
    })