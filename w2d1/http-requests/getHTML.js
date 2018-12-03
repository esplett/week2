var https = require('https');


function getHTML (options, callback) {

  var buffer = "";
  https.get(requestOptions, function (response) {
  // set encoding of received data to UTF-8
  response.setEncoding('utf8');
  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    buffer += data;
  });
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    callback(buffer)
  });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);


// The function definition will now accept a callback as a
// second parameter.
// The function body will invoke (call) the callback when the
// data is fully received, in place of the original
// console.log.
// To simplify things for the moment, the callback function
// printHTML will be defined below. You just need to ensure
// it gets passed as an argument when you call getHTML.