
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , alumnos = require('./routes/alumnos');


var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var session = require('express-session');
var uuid = require('node-uuid');

// Configuration
var app = express.createServer();
app.use(cookieParser());
//app.use(session({
//  genid: function(req) {
//    return uuid.v1(); // use UUIDs for session IDs
//  },
//  secret: 'gestion_tfg',
//  key: 'tfg'
//}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(csrf(({ cookie: true })));
//app.use(function (req, res, next) {
//  res.cookie('XSRF-TOKEN', req.csrfToken());
//  res.locals.csrftoken = req.csrfToken();
//  console.log(res.locals.csrftoken);
//  next();
//});
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/public'));
});
app.use(app.router);
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get('/alumnos', alumnos.alumnos_get);
app.post('/alumnos', alumnos.insert_alumno);
app.post('/alumnos/delete', alumnos.insert_alumno);
app.post('/alumnos/update', alumnos.insert_alumno);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
