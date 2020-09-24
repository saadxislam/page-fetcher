const request = require('request'); //request method
const fs = require('fs');           //filesystem method

const arg = process.argv.slice(2);


request(arg[0], (error, response, body) => { //taking in the URL 
  console.log('error:', error); // Print the error if one occurred
  if (error !== null || response.statusCode !== 200){             // if we get an error, or the resource is not found
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('Danger! Cuidado!');                              // say this
    process.exit();                                                // and quit the process. DONT write to file
  }
  console.log('body:', body); //                                  Print the HTML for the Example's homepage.
  fs.writeFile(arg[1], body, () => {                              //if no err/not no response, take local path(create if it doens't exist so index.html is created for us) and write the body of the URL in it
    const size = fs.statSync(arg[1]);                   //method that gives an object with stats
    // console.log('size :', size);
    console.log(`sync file data:Downloaded and saved ${size.size} bytes to ${arg[1]}`); //print the size key of that stat
  }); 
  
});

//> node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html





















