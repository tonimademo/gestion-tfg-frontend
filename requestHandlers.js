function inicio(response) {
  //Load the request module
  var request = require('request');
  console.log("Llamada a 'inicio'");
  //response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("Hola Inicio");
  //response.end();
  request('http://127.0.0.1:8000/ejemplo', function (error, resp, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(resp.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', resp.statusCode);
    }
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

  });

}

function subir(response) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

exports.inicio = inicio;
exports.subir = subir;