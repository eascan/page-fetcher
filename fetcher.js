const request = require('request');
const input = process.argv.slice(2);
const fs = require('fs')

let requestedContent = {};
console.log(input[1])
request('http://www.example.edu/', (error, response, body) => {
  requestedContent.error = ('error: ', error); // Print the error if one occurred
  requestedContent.statusCode = ('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  requestedContent.body = ('body:', body); // Print the HTML for the Google homepage.

  //write conent to file
  fs.writeFile(input[1], (requestedContent.error + requestedContent.statusCode + requestedContent.body), function (error) {
    if (error) {
      console.log('There was an error');
    };
    
    console.log(`Downloaded content to ${input[1]}`);
  })
});
