function numSum(numbers) {
    let sum=0;
for (let index = 0; index <= numbers; index++) {
    const element = index;
    
    sum=sum+index;
    // console.log(element,sum);
}
 return sum;   
}

console.log(numSum(7));