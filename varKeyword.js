var firstName = "Bhuvanesh" 
var firstName = "Gomathi"//declaration
// using var keyword to declare a variable 
// 1. with same variable name , another variable can be decalred ? yes
console.log(firstName)
firstName ="Vijaya" // reassignment
console.log(firstName)
// NOT DECLARED NOT INITIALIZED
console.log(lastName)
//  DECLARED AND  INITIALIZED HERE
var lastName ="A";  // Hoisting 
var genderFlage ="male"

greet(genderFlage)
// scope Restriction
// function is similar to method in java or within which we write reuseable business logics
function greet(gender){ // function scope
var age =18
if(gender=="male"){// if block scope
let color ="blue" // previously  var color ="blue"
console.log("Male gender is flagged as "+color)
}
else{ // else block scope
    console.log("Female gender flag is pink")
}
console.log(color)//ReferenceError: color is not defined
console.log(age)
}
//console.log(age) //ReferenceError: age is not defined