/*
 * GET alumnos page.
 */
exports.alumnos_get = function(req, res){

  var request = require('request');

  console.log("Llamada a '/alumnos'");
  //response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("Hola Inicio");
  //response.end();
  request({
    url:'http://127.0.0.1:8000/alumnos', //URL to hit
    //qs: {tfg_titulo: 'titulo'}, //Query string data
    method: 'GET',
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
        body = JSON.parse(body)
        res.render('alumnos', { url_back:'http://127.0.0.1:8000/alumnos', alums: body })

  });
};


/*
 * POST alumnos page.
 */
exports.alumnos_post = function(req, res){

  var request = require('request');

  console.log("Llamada a '/alumnos'");
  //response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("Hola Inicio");
  //response.end();
  request.post({
    url:'http://127.0.0.1:8000/alumnos', //URL to hit
    form: req.body
  },function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
        body = JSON.parse(body);
        res.render('alumnos', { url_back:'http://127.0.0.1:8000/alumnos', alums: body })

  });
};