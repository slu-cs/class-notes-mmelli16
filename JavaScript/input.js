//Syntax for console and file input

//Asynchronous Call (dont wait for the result, move on and hndle result when it arrives)
const readline = require('readline');
const fs= require('fs');


const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//console output
user.question('Filename: ', function(filename) {
  //file configuration
  const file= readline.createInterface({
    input: fs.createReadStream(filename)
  })

  //Assyincronous Line by line input
  file.on('line', function(line) {
    console.log(line);
  })

  //End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  })
})
