function inicio(response) {
  console.log("Llamada a 'inicio'");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Inicio");
  response.end();
}

function subir(response) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

exports.inicio = inicio;
exports.subir = subir;