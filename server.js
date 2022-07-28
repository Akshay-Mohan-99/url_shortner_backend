const express = require('express');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
const {getAllData,deleteOneURL,redirectLongURL,addNewURL} = require('./support-functions/mongoAction');
app.use(cors())
var jsonParser = bodyParser.json()



app.post('/shortURL', jsonParser,(req,res) => {

  const longURL = req.body.longUrl;
  addNewURL(longURL,res);

})

app.post('/deleteURL', jsonParser,(req,res) => {

  const smallUrl = req.body.smallUrl;
  deleteOneURL(smallUrl,res);

})

app.get('/getAllData', jsonParser,(req,res) => {

  getAllData(res);

})

app.get('/:sURL', jsonParser,(req,res) => {

  const shortURL = req.params.sURL;
  redirectLongURL(shortURL,res);

})



app.listen( 8000,() => console.log('Listening port 8000'));