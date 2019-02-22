var https   = require("https");
var fs      = require("fs");

//
/// Setup the demo client web server

var express = require('express'),
  path = require('path'),
  app = express(),
  port = parseInt(process.env.PORT);

app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/');
app.use(express.static(__dirname + '/assets'));
//app.use(express.static(__dirname + '/node_modules/symple-client/src'));
//app.use(express.static(__dirname + '/node_modules/symple-client-player/src'));

app.get('/', function (req, res) {

  var user = req.query.user || 'star-trainee';
  var name = req.query.name || 'STAR Trainee';
  var group = req.query.group || 'public';
  var autoconnectto = req.query.autoconnectto || 'star-mentor';

  var videoenabled = req.query.video || 'true';
  if (videoenabled === 'false') {
    videoenabled = false;
  } else {
    videoenabled = true;
  }

  var audioenabled = req.query.audio || 'false';
  if (audioenabled === 'false') {
    audioenabled = false;
  } else {
    audioenabled = true;
  }

  res.render('index', {
    peer: {
      user: user,
      name: name,
      group: group,
      autoconnectto: autoconnectto,
    },
    videoenabled: videoenabled,
    audioenabled: audioenabled
  });
});

app.listen(app.get('port'), function () {
  console.log('Web server listening on port ' + app.get('port'));
});
