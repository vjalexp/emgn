const express = require('express');
const app = express();
app.use(express.static(__dirname + '/client'));
const sqlite3 = require('sqlite3').verbose();
const multer  = require('multer');
let record = multer(); 
let db = new sqlite3.Database('db/emgn.db');

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.post('/api/measures', record.fields([]), (req, res) => { 
  console.log(req.body);
  db.run(`INSERT INTO measures VALUES(?,?,?)`, [req.body.sys, req.body.dia, req.body.pulse], function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
  res.sendStatus(200); 
}); 

app.get('/api/measures', function(req, res) {  
  var records = [];
  db.serialize(function() {
      db.each("SELECT * FROM measures", function(err, row) {
          records.push({sys: row.sys, dia: row.dia, pulse: row.pulse})
      }, function() {
          res.send(records);
      })
  })
});
  
app.listen(3000, function () {
  console.log('Listen port 3000');
});
