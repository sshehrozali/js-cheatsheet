// This is a JavaScript Cheatsheet formatted nicely to help people learn JS easily.
// Written By Syed Shehroz Ali
// GitHub: github.com/sshehrozali

// To see the output please inspect the page source and goto console to see the output.

// Console in JS is basically like a terminal of any other programming language because JS runs under 
// browser window only that's why console operates like a terminal for JS.

// Console API (To interact with console - developers tools/inspect elements)
console.warn("This is a warning message!");
console.error("This is an error message!");
console.assert(10 == (5+6));











// To print
// document.write("Hello World!");
// console.log("Hello World!");
// alert("Welcome to my JS tutorial website!");








/*
// Variables
var // Something old style or old syntax. Used in old JS
let // Temporary scope. Good memory management. It has scope under only {}
cont // Declares a constant variable whose value cannot be altered
*/








// Data types (Primitive)
console.log("\n\n\n---| DATA TYPES (Primitive) |---")
// String
var str = "I am a String";
console.log(str);

// Number
var num = 56;    
var deci = 99.99;
console.log(num, deci);

// Boolean
var val1 = true;
var val2 = false;
console.log(val1, val2);

// Undefined
var undf = undefined;    // Declaring explictly
var undF;
console.log(undf, undF);

// NULL
var n = null;
console.log(n);

// Symbol (High level JavaScript)
// Symbol('')











// Data types (Reference)
console.log("\n\n\n---| DATA TYPES (Reference) |---")
// Array
var arr = [1, 2.2, "I Love You"]
console.log("\nARRAY")
console.log(arr, arr[2])

// Object
var phonebook = {
    "Shehroz": 123, 
    "Saad": 789,
    "Sameer": 456
}
console.log("\nOBJECT")
console.log(phonebook);









// Operators
console.log("\n\n---| OPERATORS |---")
// Arthmetic Operators
var a = 99.9;
var b = 56.56;
console.log("\nARTHMETIC OPERATORS")
console.log("The value of a + b is", a + b);
console.log("The value of a - b is", a - b);
console.log("The value of a * b is", a * b);
console.log("The value of a / b is", a / b);

// Assignment Operators
console.log("\nASSIGNMENT OPERATORS")
var c = a;
c += b;
c -= b;
c *= b;
c /= b;
console.log(c);

// Comparison operators
console.log("\nCOMPARISON OPERATORS")
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a != b);

// Logical Operators
console.log("\nLOGICAL OPERATORS")
console.log("\nAND OPERATOR")
console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log("\nOR OPERATOR")
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log("\nNOT OPERATOR")
console.log(!false)
console.log(!true)










// Functions
function avg(a, b) {
    ans = (a + b) / 2
    return ans
}

c = avg(3, 5)
console.log("\n\n\n---| FUNCTIONS |---")
console.log("Average of 3 and 5 is", c)











// Conditions
console.log("\n\n\n---| CONDITIONS |---")
var a = 10;
var b = 10;
console.log("\nValue of a is", a, "\nValue of b is", b, "\nAnswer is ")

if (a == b){
    console.log("Both values are equal!")
}

else{
    console.log("Both values are not equal!")
}

if (a < b){
    console.log("Yes! a is less than b");

    if (b > a){
        console.log("Obviously! b is greater than a");
    }
}

else if (a > b){
    console.log("No a is greater than b")
}










console.log("\n\n\n---| LOOPS |---")
var names = [
    "shehroz", "saad", "sameer"
]

// For Loop
console.log("For Loop\n");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// While Loop
console.log("\nWhile Loop\n");
let j = 0;
while (j < names.length) {
    console.log(names[j]);
    j = j + 1
}

// Do while Loop
console.log("\nDo While Loop\n");
let k = 0;
do {
    console.log(names[k]);
    k++;
}
while (k < names.length);








/*
// Misc
break // To terminate the whole loop
continue // To skip an iteration
*/








/*
// Array methods
MyArr = [1, 2, 3];
MyArr.length;   // Check length of the array
MyArr.shift()   // Removes first element from the array
MyArr.pop();    // Removes last item from the array
MyArr.push(4);  // Adds new item to the array
MyArr.unshift(0); // Adds new item at first index of an array
MyArr.sort() // Sorts an array (sorts an array alphabetically)
MyArr.toString()  // Returns an array as a complete string

// There are several many other methods for array. You can search through internet to explore more methods.

// This is not just an end. There are many other methods in JS which you need to explore on your own.
// There is rightly said that, there is no end to learn a language completely. Good Luck! 
// Syed Shehroz Ali ©
*/