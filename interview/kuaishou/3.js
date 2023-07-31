// 闭包     自由变量
function createRepeat(fn, repeat, interval) {
    let counter = 0;
    const intervalID = setInterval(() => {
        fn('hello')
        counter++;
        if (counter === repeat) {
            clearInterval(intervalID)
        }
    }, interval) 
}

const fn = createRepeat(console.log, 3, 2000)