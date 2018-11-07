var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');
var paramsArray = '';
var errorLog;

function accept(req, res) {
	console.log(req.url);
    
    if (req.url.includes('/lessons/input_output',0)) {
        if(req.url.includes('/lessons/input_output_1',0))
            {
                if (req.url.includes('?','/lessons/input_output_1'.length-1)) {
                    paramsArray = 
                        req.url.substring('/lessons/input_output_1'.length+1,
                               req.url.length).split('&');
                    console.log(paramsArray);
                    errorLog = 'true';
                    if (paramsArray[0] != 'iostream')
                    errorLog+='1';
                    res.end(errorLog);
                }   
            }
        }
    
    if (req.url.includes('/lessons/request',0)) {
      if (req.url.includes('/lessons/request_1',0))
      if (req.url.includes('?','/lessons/request_1'.length-1)) {
              paramsArray = 
                req.url.substring('/lessons/request_1'.length+1,
                               req.url.length).split('&');
              console.log(paramsArray);
              errorLog = 'true';
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
        
      if (req.url.includes('/lessons/request_2',0))
      if (req.url.includes('?','/lessons/request_2'.length-1)) {
          paramsArray = 
                req.url.substring('/lessons/request_2'.length+1,
                               req.url.length).split('&');
              console.log(paramsArray);
              errorLog = 'true';
              if (paramsArray[0] != '14c')
                  errorLog+='1';
              console.log(errorLog);
              res.end(errorLog);
      }
    } else {
        file.serve(req, res); // (если он есть)
    }


    if (req.url.includes('/lessons/if_else',0)) {
        if (req.url.includes('/lessons/if_else_1',0))
        if (req.url.includes('?','/lessons/if_else_1'.length-1)) {
                paramsArray = 
                  req.url.substring('/lessons/if_else_1'.length+1,
                                 req.url.length).split('&');
                console.log(paramsArray);
                errorLog = 'true';
                if (paramsArray[0] != 'if')
                    errorLog+='1';
                if (paramsArray[1] != 'else')
                    errorLog+='2';
                if (paramsArray[2] != 'true')
                    errorLog+='3';
                console.log(errorLog);
                res.end(errorLog);
            }
        } else {
            file.serve(req, res);
        }



}











// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}

console.log("Server started on port 8080");