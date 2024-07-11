//  4! =4*3*2*1

function factorial(numbers) {
    result=1;
    for (let index = 1; index <= numbers; index++) {
        const element = index;
        result = result * index;
    }
    return result;
}
console.log(factorial(9));




function fact(num) {
    let result = 1;
    for (let index = num; index > 0; index--) {
        const element = index;
        result = result * index;
    }
    return result;
}
console.log(fact(9));



