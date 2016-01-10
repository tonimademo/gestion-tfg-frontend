var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/inicio"] = requestHandlers.inicio;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);