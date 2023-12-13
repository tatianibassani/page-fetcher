const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node fetcher.js <URL> <localFilePath>');
  process.exit(1);
}

const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error downloading the file:', error);
  } else {
    fs.writeFile(path, body, function (err) {
      if (err) {
        return console.error('Error writing to the local file:', err);
      }

      var stats = fs.statSync(path);
      var fileSizeInBytes = stats.size;

      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${path}.`);
    });
  }
});


