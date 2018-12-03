var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse (html) {
   var splitString = html.split("");
   var reverseArray = splitString.reverse();
   console.log (reverseArray.join(""));
}



getHTML(requestOptions, printReverse);
