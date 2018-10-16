var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');


function accept(req, res) {
  if (req.url.includes('/lessons/vote',0)) {
//      console.log(req.url);
      if(req.url.includes('?','/lessons/vote'.length-1))
          {
              var paramsArray = 
                req.url.substring('/lessons/vote'.length+1,
                               req.url.length).split('&');
              console.log(paramsArray);
              var errorLog = 'true';
              if (paramsArray[0] != 'int')
                  errorLog+='1';
              if (paramsArray[1] != 'float')
                  errorLog+='2';
              if (paramsArray[2] != 'double')
                  errorLog+='3';
              if (paramsArray[3] != 'char')
                  errorLog+='4';
              if (paramsArray[4] != 'bool')
                  errorLog+='5';
              console.log(errorLog);
              res.end(errorLog);
          }
  } else {
    file.serve(req, res); // (если он есть)
  }
}

// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}

console.log("Server started on port 8080");