var myName = 'Tahia';

var friends=['abul','tabul','chabul','kabul']

var my3rdFrnd=friends[2];

console.log(my3rdFrnd);
friends[2]='Nujaima';
console.log(friends);

if (friends.length<2) {
   console.log('fokir'); 
} else {
    console.log('borolox');  
}

// var i=0;
// while (i<10) {
//     console.log(i);
//     i++;
//     // console.log(i);
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    }

    function isMoonUp(time){
        if (time>7) {
            return 'uthse moon';
        } else {
           return 'uthe nai'; 
        }
    }

    console.log(isMoonUp(10));

// object

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let age =26;
  const countryName = 'Bangladesh';

  countryName = 'Mishor';

  console.log(countryName);
