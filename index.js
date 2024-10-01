const nums =[10, 3, 100, 70, 8, 55, 88]
const users = [
    {
        name: 'bob',
        age: 99
    },
    {
        name:'jim',
        age: 25
    },
    {
        name: 'sarah',
        age: 40
    }
];


const students = [
    {
      name: 'Roman',
      average: 99
    },
    {
      name: 'Matt',
      average: 80
    },
    {
      name: 'Izzy',
      average: 95
    },
    {
      name: 'Kandyce',
      average: 90
    }
  ]

  const sum = nums.reduce((output, num) => {
    return output + num
  }, 0)
 
// this was around 12:10pm 10/1/24
const overallAverage = students.reduce((output, studentObj, index, arr) => {
    if (index === arr.length - 1)
        return (output + studentObj.average) / arr.length;
    // if we are on tha last student, retuern the output divided by the array length.

    // otherwise return output + the studentObj average
    return output + studentObj.average;
}, 0)


const studentInfo = students.reduce((output, studentObj, index, arr) => {
    output.overallAverage += studentObj.average;

    if (index === arr.length - 1) {
        output.overallAverage = output.overallAverage / arr.length;

    }

    output.studentCount = arr.length;

    return output;
}, {
    overallAverage: 0,
    studentCount: 0

});

console.log(studentInfo)

//reduce array (0 is intial output)
// const sum = nums.reduce((output, num) => {
//     return output + num 
// }, 0)
//  console.log(sum);














//
const evenArray = nums.map((num) => {
    if ((num % 2) ===0 ) {
        return `${num} is even`
    } else {
        return `${num} is odd`
    }
    return num % 2
});

console.log(evenArray)










// for (const num of nums) { 

//     console.log(num);
// }
    

// // New loop (higher order function - a fucntion that takes in another function)
// // this function goes through each item in your Array
// nums.forEach((num, index) => {
// console.log(index);
// });
// // one downside of this loop, i cant break it. It will go through each time and will not stop. if break is needed. use standard for loop
// // and for of loop













 // Filtering out values/items
const filteredNums = nums.filter((num) => {
    if (num > 10) {
        return true;
    }
});

const filteredUsers = users.filter((userObj) => {
    if (userObj.age > 30) {
        return true;
    }
        
})

console.log(filteredUsers);


console.log(filteredNums);















// // Algorithm challenge - Write a function that orders the array numbers from lowests to highest
//  const sorted = nums.sort((currentNum, nextNum) => {
//     return nextNum - currentNum;
//  });

//  // Create a var that stores a sorted userArray. In your callback function, return thr different between the current objects age and the next object age.

// const sortedUsers = users.sort((currentObj, nextObj) => {
//     return currentObj.age - nextObj.age;
// })


// // Create a var that stores the sorted users array and sorts the okjects by name. hint(all letter characters have a number that you can pull wih JS)

//  console.log(sorted)
//  console.log(sortedUsers)


