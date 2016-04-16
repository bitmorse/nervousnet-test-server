var NDDB = require('NDDB').NDDB;
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var db = new NDDB();

app.use(bodyParser.json());

app.get('/', function(req, res){
    var db_data = db.select('*', 'iLIKE', '%e%').fetch();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(db_data));
});

app.post('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    try {
    	db.insert(req.body);
      db.save('db.json', function() {
          res.end('{"result": "OK"}');
      });
    }
    catch (e) {
      console.log(e);
      res.end('{"result": "Couldn\'t insert that item into DB."}');
    }
});

port = 3000;
db.load('db.json', function() {
  console.log("Loaded json file into database");
  app.listen(port);
  console.log('Listening at http://localhost:' + port)
});
