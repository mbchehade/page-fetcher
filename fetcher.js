/*
1. going to get the command line arguments
  process.argv.slice(2)
2. Create a function called fetcher
3. Use the request library to get the website that was inputted
4. const fs = require('fs')
5. If there is no error then you use fs.writeFile to write the file to the pathname
6. Catch the rest of the errors 
*/


//after isntalling the libarary with " npm install request --save".
//require method to load a local, relative javascript module into a node.js application. you can simplt use the require() to just import the install package.

const request = require('request');
const fs = require('fs');



const url = process.argv[2];
const address = process.argv[3];







request(url, (error, response, body) => {
    console.log('error', error);
    console.log('statuscode:', response && response.statusCode)
  fs.writeFile((address, url, error) => {
    if (error){
      console.log('error:', error);
    }else{
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${file}`)
    }
  })
})