const shortenFunction = require('./shortenFunction');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const connectMongo = async() =>{
    const uri = process.env.URI;
    const client = new MongoClient(uri);
  
    try{
  
      return await client.connect();
  
    }catch(e){
      console.log(e);
    }finally{
      // client.close();
    }
  
  }
    
  
  const addNewURL = async(longURL,res) => {
    
    const client = await connectMongo();
    client.db("akshay-database").collection("CounterCollection").findOneAndUpdate(
      {_id : "autoval"},
      {"$inc":{"counter" : 1}},
      {new : true},(err,cd) => {
  
        let newSmallUrl = shortenFunction(100000000000+cd.value.counter);
        const newData = {"_id" : cd.value.counter, "longURL" : longURL, "smallURL" : newSmallUrl};
        client.db("akshay-database").collection("UrlCollection").insertOne(newData);
        
        return res.json(newData);
  
    })
  
  }
  
  const redirectLongURL = async(sURL,res) => {
    
    const client = await connectMongo();
    client.db("akshay-database").collection("UrlCollection").findOne(
      {"smallURL" : sURL},
      (err,cd) =>{
        if(cd == null){
          res.status(404);
        }
        else{
          res.redirect(cd.longURL);
        }
      }
  )}
  
  const deleteOneURL = async(smallUrl,res) => {
    
    const client = await connectMongo();
    client.db("akshay-database").collection("UrlCollection").deleteOne(
      {"smallURL" : smallUrl},
      (err,cd) =>{
        if(err){
          res.status(404);
        }
        else{
          res.json({"status" : "ok"});
        }
      }
  )}
  
  
  const getAllData = async(res) => {
    
    const client = await connectMongo();
    await client.db("akshay-database").collection("UrlCollection").find({}).toArray(function(err, result) {
      if (err) {
        res.status(404);
      }
      res.json(result);
      
    });
  }
  
  module.exports = {getAllData, deleteOneURL, redirectLongURL, addNewURL}