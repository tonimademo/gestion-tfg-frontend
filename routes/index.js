
/*
 * GET home page.
 */

exports.index = function(req, res){

  var request = require('request');
  console.log("Llamada a 'inicio'");
  //response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("Hola Inicio");
  //response.end();
  request('http://127.0.0.1:8000/ejemplo', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    res.render('index', { url_back:'http://127.0.0.1:8000/ejemplo', title: body })

  });
};