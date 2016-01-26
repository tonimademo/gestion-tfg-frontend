
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , alumnos = require('./routes/alumnos');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.csrf());
  app.use(express.favicon());
  app.use(express.cookieParser());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get('/alumnos', alumnos.alumnos_get);
app.post('/alumnos', csrf, alumnos.alumnos_post);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
