const prompt = require('prompt-sync')({sigint: true});

let userInput = Number(prompt("Enter a number for x variable: "));
let userInput2 = Number(prompt("Enter a number for variable y: "));
let output = Number();

output = userInput % userInput2;

while(output != 0){
    userInput++;
    console.log(userInput);
    output = userInput % userInput2;
} 
console.log(`${userInput} is divisable by ${userInput2}.`);