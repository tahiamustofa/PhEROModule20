// function isLeapyear(years) {
//  const remainder=years %4;
//  if (remainder===0) {
//     return 'its leap year'+' '+ years;
//  } else {
//     return 'not a leap year'+' '+ years;
//  }   
// }

// console.log(isLeapyear(1955));
// console.log(isLeapyear(1960));

function isLeapyear(years) {
    const remainder=years %4;
    if (remainder===0) {
       return true;
    } else {
       return false;
    }   
   }
   let MyGivenPera=isLeapyear(1955);
   console.log('my year not',MyGivenPera);
   var ano=isLeapyear(1960);
   console.log('leap year',ano);