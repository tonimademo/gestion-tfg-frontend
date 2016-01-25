/*
 * GET home page.
 */
exports.index = function(req, res){

  var request = require('request');

  console.log("Llamada a 'inicio'");
  //response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("Hola Inicio");
  //response.end();
  request({
    url:'http://127.0.0.1:8000/alumnos', //URL to hit
    qs: {tfg_titulo: 'titulo'}, //Query string data
    method: 'GET', //TODO:El metodo POST devuelve un 500 sin llegar al back, revisar
    headers: { //We can define headers too
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    }
  },function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    res.render('index', { url_back:'http://127.0.0.1:8000/alumnos', title: body })

  });
};