const prompt = require('prompt-sync')();
let date = prompt("Enter a date: ");
let month = prompt("Enter a month: ");

if ((month <= 6 && month >= 3) && (date <= 20)) {
    console.log("True");
} else if ((month >= 3 && month < 6) && (date > 20)) {
    console.log("True");
} else {
    console.log("False");
}

