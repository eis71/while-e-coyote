const prompt = require('prompt-sync')({sigint: true});

/*
- prompt synce: get input from the user
- while loop: allow user to input multiple numbers
- print out the sum at the end
- variable to hold the sum
- += to add to our sum
- reprompt inside the while loop
*/

let userInput = Number(prompt("Enter some numbers (type 0 when complete): "));

let sum = 0;

while(userInput > 0){
    sum += userInput;
    userInput = Number(prompt("> "));
}

console.log(sum);