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

let age = 30;
let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote"
console.log(voting)