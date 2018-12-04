// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {        // Note 2
         throw err;
       })
       .on('response', function (response, message, headers) {
         console.log('Downloading image...')    // Note 3
         console.log('Response Status Code: ', response.statusCode,
          'Response Status Message: ', response.statusMessage,
          'Response Headers: ', response.headers['content-type']);
       })

       .on('end', function() {
          console.log('Download complete.')
       })

       .pipe(fs.createWriteStream('./future.jpg'))

       // {
       //    stream.on('end', callback) =>
       //    console.log('Downloading image...');
       //    stream.on('finish', callback) =>
       //    console.log('Download complete.')
       // }   // Note 4


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?

// stream.on('data', callback) => Invoked when a chunk of data becomes available
// stream.on('error', callback) => Invoked if there is an error reading or writing data
// stream.on('end', callback) => Invoked when no more data is available (the end of the readable stream)
// stream.on('finish', callback