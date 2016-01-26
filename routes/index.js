/*
 * GET home page.
 */
exports.index = function(req, res){

    var request = require('request');
    console.log("Llamada a 'inicio'");
    res.render('index', { url_back:'http://127.0.0.1:8000/index' })

};
