function factorial(params) {
    let result=1;
    let i=1;
    while (i<=params) {
        console.log(i);
        result=result*i;
      i++;  
    }
    return result; 
}
console.log(factorial(7))