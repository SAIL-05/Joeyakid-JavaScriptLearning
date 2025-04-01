console.log(200);

let myAge = 34;
console.log(myAge)
console.log("testing")




//PRIMITIVE DATA TYPES
var saltContainer = "salt"
let sugarContainer = "sugar"
const maggiContainer = "maggi"; //string
const numberOfDays = 20; //number
let isValid = true //boolean
let check  //undefined
let see = null   //null


//NON-PRIMITIVE DATA TYPES
let box = ["brush", "pencil", 354, true,
    {name: "John"}, [2,4,6]
] //array of strings
let evenNumbers = [2,4,6,8,10] //array of numbers
const person = {firstName:"Joy", lastName:"Yakubu",
    skinColor:"fair"} //objects of strings
let total = 5/2
let cal = 4%2

let plus = 2 
plus++

sugarContainer = "pomo"
// maggiContainer = "beef"

console.log(saltContainer)
console.log(sugarContainer)
console.log(maggiContainer)
console.log(check)
console.log(total)
console.log(cal)
console.log(plus)
console.log(see)
console.log(box)
console.log(box[4])

//OPERATORS IN JAVASCRIPT
//Arithemetic operators
let a = 34;
let b = 56;

const sum = a + b;       //Addition
console.log(sum);

const sub = a - b;
console.log(sub);        //subtraction

const divi = b/a;
console.log(divi)       //division

const multi = a*b;
console.log(multi)       //multiplication

const mod = b%a;
console.log(mod);        //modulus



//Assignment operator
let x = 39;
// +=
// -=

//Comparism operators... used to compare two values and return a boolean result
const y = 45
const z = 67
const g = "45"

console.log(y == z);
console.log(z>y);
console.log(z<y);
console.log(y <= z);
console.log(y>=z);       //grater than or euals to
console.log(z!=y);      //not euals to
console.log(y === g)   //strictly equals to


//Logical Operators...
// logical OR    
// logical NOT   !
// logical AND   &
const fee = true;
const uniform = false;
const textbooks = false;
const id = true;

const checkOR = fee || uniform || id || textbooks;
console.log(checkOR);
const checkAND = fee && textbooks && uniform && id;
console.log(checkAND)
const checkAyo = (fee && id) || uniform
console.log(checkAyo)


//Uniary Operator
//Increment ++
//Decrement --
let k = 3;
k++;
console.log(k)
k--;
console.log(k)


//Tenary Operator.... compares two expressions and give a result on how you want to modify it
//(condition) ? "" : ""
const tenTest = 23 > 45 ? "Yes, this is true" : "No, this is quite wrong";
console.log(tenTest);

//write a program that tells if a user is legible to vote
let age = 30;
let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote"
console.log(voting)

//CONDITIONAL STATEMENT

//if statement     - returns true or only works if only the condition given to it is true :
// if(condition){expression}
let s = 25;
let p = 59;
if(s < p){
    console.log("The Second value is the greatest")
}


//if else statement    -It display if the condition is true and else display false when the condition is false
if(s > p){
    console.log("The second value is the greatest");
} else {
    console.log("The second value is the lowest")
}

let DBpass = "sam12345";
let password = "sam2334";
if (password === DBpass){
    console.log("Logged in sucessfully");
}else{
    console.log("Incorrect password");
}
//prompt
let name = prompt("enter your name");
console.log(name);
//alert
alert(`Welcome! ${name}`)

const test = 100;
console.log(`Your lucky number is ${test}`)

let valueOne = parseInt(prompt("Your first number"));
let valueTwo = parseInt(prompt("Your second number abeg"));
let ans = valueOne + valueTwo;
alert(ans);



//if else if statement     -Allows you set more than 1 condition




//Exercise List
//write a program that determines whether a given number is positive or negative
// let number = parseInt(prompt("Enter a Number"));
// if (number > 0) {
//     alert(``)
// }

//write a program that checks if a number is even or odd
let number = parseInt(prompt("Enter a number"));
if (number % 2 == 0){
    alert("Your number is even")
} else {
    alert("Your number is odd")
}