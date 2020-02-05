//Syntax for console and file input

//Asynchronous Call (dont wait for the result, move on and hndle result when it arrives)
const readline = require('readline');

const user = readline.createinterface({
  input: process.stdin,
  output: process.stdout
});

//console output
user.question('Filename: ', function(filename) {
  console.log(filename);
})
