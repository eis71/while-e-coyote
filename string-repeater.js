const prompt = require('prompt-sync')({sigint: true});

let userInput = String(prompt("Enter a string: "));

let output = String();

while(output.length <= 10){
    output = output + userInput;
    console.log(output);
} 