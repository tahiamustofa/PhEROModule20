function getSum(numbers) {
    let sum=0;
    
    for (let index = 0; index < numbers.length; index++) {
    
        // var getIndex =index;
        var element = numbers[index];
        sum= sum + element;
      
        // console.log(index,'and',element,sum);
        
    }
   return sum;
    }
function getOddNumberOfArray(numbers) {
    const oddNumbers=[];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
       
        if (element%2 !== 0) {
            // console.log(index,element)
            oddNumbers.push(element);
             console.log(index,element)
        }
        // console.log(index,element);
    }
    return oddNumbers;
}
const numbersArray=[12,65,45,78,32,45,91];
const result = getOddNumberOfArray(numbersArray);
console.log(result);
getSum(numbersArray);
const final = getSum(result);
// console.log(final);

console.log('odd number of sum','=',final);
