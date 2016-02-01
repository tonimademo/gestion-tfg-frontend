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
    method: 'GET'
  },function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        console.log('Invalid Status Code Returned:', response.statusCode);
        body = JSON.parse(body);
        res.render('alumnos', {url_back: 'http://127.0.0.1:8000/alumnos', error: body.message})
    }else {
        console.log('Correct:', response.statusCode);
        body = JSON.parse(body);
        res.render('alumnos', {url_back: 'http://127.0.0.1:8000/alumnos', alums: body})
    }
  });
};


/*
 * POST alumnos page.
 */
exports.alumnos_post = function(req, res){

  var request = require('request');

  console.log("Llamada a '/alumnos'");
  request({
    url: 'http://127.0.0.1:8000/alumnos/', //URL to hit
    method: 'POST',
    form: req.body,
  },function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    body = JSON.parse(body);
    if(body.status !== true){
        res.render('alumnos', { url_back:'http://127.0.0.1:8000/alumnos', error: body.message })
    }
    else {
        res.redirect('http://127.0.0.1:3000/alumnos')
    }

  });
};