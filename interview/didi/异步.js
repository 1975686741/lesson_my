
// generator  生成器  yield
// 如何改成并行  Promise.all
async () => {
    await p1;
    await p2;
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 200);
})

const func = async () => {
    var result = await Promise.all([p1, p2])
    console.log(result);
}

func();