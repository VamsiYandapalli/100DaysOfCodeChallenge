console.log("Hello World!");

//FUNCTIONS
//Function Declaration - HOISTED
function addTwoNum(num1, num2) {
  return num1 + num2;
}

let total = addTwoNum(10, 11);
console.log(total);

//using function as a variable
console.log("The total of 20 and 20 is " + addTwoNum(20, 20));

//Function Expression -Not HOISTED
let multiplyNum = function (num1, num2) {
  return num1 * num2;
};

console.log(multiplyNum(2, 3));

//Arrow Functions -
let greet = (name) => `Hello, How are you ${name}`;
console.log(greet("Vamsi"));

//Anonymous Functions
setTimeout(function () {
  console.log("This function executed after 4 seconds");
}, 4000);

//Immediatly Invoked Function - Invokes immediatly
(function () {
  console.log("This is an IIFE");
})();
//Control Structures
//if
let n = 10;
if (n != 10) {
  console.log("n is not equals to 10");
}

//if-else
let personAge = 16;
if (personAge > 18) {
  console.log("Major");
} else {
  console.log("Minor");
}

//else-if
let time = 5;
if (time < 12) {
  console.log("Morning");
} else if (time == 12) {
  console.log("Noon");
} else {
  console.log("Evening or Night");
}

// Switch Statement
let dayNum = 2;
switch (dayNum) {
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
  // day = "Tuesday";
  // console.log(day);
  // break;
  case 3:
    day = "Tuesday,Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break;
  default:
    day = "Sunday";
    console.log(day);
    break;
}

//for loop - executes untill the condition becomes false
for (let i = 1; i < 22; i++) {
  console.log(i);
}

// while loop - executes untill the condition becomes false
let i = 1;
while (i < 22) {
  console.log(i);
  i++;
}

//do-while loop
// let number;
// do {
//   number = parseInt(prompt("Enter a number less than 21."));
//   if (number > 21) {
//     alert(`You entered ${number}, please enter number less than 21`);
//   }
// } while (number >= 21 || isNaN(number));

// console.log("You entered ", number);

//Operators
//Arithmatic Operators
let a = 10,
  b = 11;
let c = a + b; //21
c = b - a; //1
c = a * b; //110;
c = a / 2; //
c = a ** 2; //100 //Exponentiation (ES2016)
c = a % 3; //1 //Modulus (Division Remainder)
c = --a; //9 //Pre-Decrement
c = ++a; //10 //Pre-Increment
console.log(c);

//Assignment Operators
let g = 10;
g += 11; //21 //Addition Assignment Operator
g -= 1; //20; //Substration Assignment Operator
// *=,/=, %= and **= Assignment Operators
console.log(g);

//Comparision Operators
let d = 20;
let e = 25;

let equalsTo = d == e; //false
let equalValueandType = d === e; //false
let greaterThan = e > d; //True
let lessThan = d < e; //True
let notEqualsTo = d != e; //True
//Similiarly there are >=,<= greaterthan or equalts to and Lessthan on Equals to
let ternaryOp = d < e ? "D is less than E" : "E is less than D"; //Ternary Operator
console.log(ternaryOp);

let text1 = "A";
let text2 = "B";
console.log(text1 < text2);
console.log(text1 > text2);
console.log(text1 + text2); //Concatenation
console.log(5 + 5 + text1); //10A
console.log("5" + text2); //5B

//Logical Operators - &&-Logical AND, ||-Logical OR and !- Logical NOT
let employed = true;
let married = true;

employed && married
  ? console.log("Issue Credit Card")
  : console.log("No Credit card");

//Types of Variables and Data Types

let socialMedia; //Value is 'Undefined';

var fName = "John"; //Only use if you must support older browsers
let lName = "Cena"; //Only use if you can't use CONST
const age = 45; //Only use if you don't want to change the VALUE or the DATA TYPE of a variable

//One Statement, Many Variables
let country = "America",
  states = 50;
president = "Donald J Trump";

//Cannot re-Declare the variables declared with 'let' and 'const' unlike 'var' which can be re-Declared;

// let lName;  //Error - Cannot redeclare block-scoped valriable 'lName'
// const age;  //Error - Cannot redeclare block-scoped valriable 'age'

var x = 3;
// let x = 10; //Identifier 'x' has already been declared.

//Hoisting
movie = "The Silence of the Lambs"; //VAR variables are Hoisted and Initialized, can use before declaration
var movie;

// tvShow = "Breaking Bad"; //Reference Error.//LET is hoisted but not Initialized,cannot use before declaration
let tvShow;

// const totalEpisodes;    //Error. //CONST declarations must be Initialized

//Use CONST for Arrays and Objects
const cars = ["BMW", "Audi", "Skoda", "Ferrari"];

//Allowed
console.log(cars[1]);
cars.push("McLaren");
console.log(cars);

//Not Allowed
// cars = ["Suzuki", "Toyota", "VolksWagon"];  //TypeError: Assignment to constant variable

const person = {
  fname: "Peter",
  lname: "Jackson",
  age: 25,
  job: "Software Developer",
};

console.log(person);

person.age = 24;
console.log(person.age);

// person = { fname: "Harry", lname: "Potter", age: 14, job: "Wizard" }; //Error

//Data Types
let player = "Yashashwi Jaiswal"; //String
let score = 200,
  overs = 19.5; //Numbers   //All JavaScript Numbers are stored in 64-bit floating point
let out = false; //Boolean
let wickets; //Undefined
let bigNum = BigInt("12343535464576574554234423432");
let emptyVal;
console.log(typeof emptyVal); // It shows Object as Data Type though its a NULL
