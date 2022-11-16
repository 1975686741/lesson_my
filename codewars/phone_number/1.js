function createPhoneNumber (numbers) {
    const nums = numbers.join('');
    const a = nums.substring(0,3);
    const b = nums.substring(3,6);
    const c = nums.substring(6,10);
    console.log('(' +a+ ')' +' '   +b+'-'+c);
    //字符串(123) 456-7890  numbers[0]
    //字符串拼接
    // return   '(' + numbers[0] + numbers[1] + numbers[2] + ')' + '&nbsp' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] +  numbers[7] +  numbers[8] +  numbers[9];

    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`  
}

// (123) 456-7890
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

let name = '胡毅辉'
//字符串模板
let word = `hello, ${name}。`
console.log(word);