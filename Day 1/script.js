console.log("Hello World!");

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
