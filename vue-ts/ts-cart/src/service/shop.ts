// vscode就是用ts写的
// js中如何提升数据的完整性？
// const num : Number = 23

// 接口
// JS是弱类型语言，很多错误在运行时才会发现，没有interface  js有太多的糟粕
// 自定义的接口，检查数据，如果有错误代码在运行之前就报错，静态检测机制
export interface IProduct {
    id: number;
    title: string;
    price: number;
    inventory: number
}

const _products: IProduct[] = [
    {
        id: 1,
        title: 'ipadmini',
        price: 500.75,
        inventory: 4
    },
    {
        id: 2,
        title: 'huawei14promax1TB',
        price: 400.75,
        inventory: 9
    }
]

export const getProducts = async () => {
    // 延迟加载
    await wait(1000);
    return _products;
}

export const butProducts =async () => {
    await wait(1000);
    return Math.random() > 0.5
}

function wait(delay: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);  
    })
}

