function factorial(num){
    let result=1;
  for (let index = num; index >= 1; index--) {
    console.log(index);
    result = result*index;
     }  
 return result;
}
let shonkha =6;
let fact = factorial(shonkha);
console.log('factorial of', shonkha,(fact));

