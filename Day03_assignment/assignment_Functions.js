const { get } = require("node:http");

// Function Declaration
function userProfile (name)
{
    console.log (`Hello, ${name}!`); 

}

userProfile("Sathish");


// Arrow Function

let double = (num) =>
{
    return num * 2;
}

console.log(double(5));


// Anonymous Function

setTimeout( () => {console.log (`This message is delayed by 2 seconds`);}, 2000);

// Callback Function

function callback()
{   
    console.log (`This is a callback function`);

}

function getUserData (callback)
{
        setTimeout( () => 
            {console.log (`Fetching user data...`); callback();}, 3000);
}

getUserData(callback);





    