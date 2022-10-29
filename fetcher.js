const request = require('request');
const fs = require('fs');
const readline = require('readline');


const args = process.argv;
const params = args.slice(2);

const url = params[0];
const path = params[1];

request(url, (error, response, body) => {
  fs.writeFile(path, body, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  }); 
  process.exit();
});

var stats = fs.statSync(path);
var fileSizeInBytes = stats.size;

console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${path}.`)