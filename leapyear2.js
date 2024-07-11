// function findLeapYear(years) {
//     let leapYears = [];
//     for (let i = 0; i < years.length; i++) {
//         let year = years[i];
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             leapYears.push(year);
//         }
//     }
//     console.log('Leap years:', leapYears);
// }

// const years = [2023, 2024, 2025, 2028, 2030];
// findLeapYear(years);


function findLeapYear(years) {
    let leapYears = [];
    for (let index = 0; index < years.length; index++) {
        const element = years[index];
        if ((element % 4 === 0 && element % 100 !== 0)|| (element % 400 === 0) ) {
            leapYears.push(element);
        } 
       
    }
    console.log('Leap Years are:',leapYears);
}
 
const years = [2023, 2024, 2025, 2028, 2030];
findLeapYear(years);
