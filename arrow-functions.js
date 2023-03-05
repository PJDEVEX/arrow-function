/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers (a, b) {
//     // code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);
// Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(6,4);
console.log(sum2);


// Implicit Returns
//  (if only one parameter is used, no need to use even the first paranthesis, ref below)
const saySomething = message => console.log(message);
saySomething("Hello World!");
// if no parameter used, use a blank paranthesis to indicate that a fuction is to be run
const sayHello = () => console.log("Hello")
sayHello();


// Returning Multiple Lines
const retunMulitipleLines = () => (
    `<p>
    This is a multiple line strng!
    </p>`
)
console.log(retunMulitipleLines());

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let subjectItems = 0;
    for (let item of arr) {
        if (subject in item.results){
            allPoints += item.results[subject];
            subjectItems +=1;
        }
    }
    return allPoints/subjectItems;
}

let avargeMarks = averagePoints(students, 'english');
console.log(avargeMarks)
