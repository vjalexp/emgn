const express = require('express');
const multer  = require('multer');
let upload = multer(); 
const app = express();

app.post('/api/measures', upload.fields([]), (req, res) => { 
  console.log(req.body);
  let LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  localStorage.setItem('healthRecord_' + Date.now(), JSON.stringify(req.body));
  console.log(localStorage);
  res.sendStatus(200); 
}); 
  
app.listen(3000, function () {
  console.log('Listen port 3000');
});