function factorial(num) {
    let result=1;
let i=num;
    while (i>=1) {
      console.log(i);
      result= result*i;
      i--;  
      
    }
    return result;
}
let seven=7;
let fct=factorial(seven);
console.log('factorial of',seven,'is',fct);