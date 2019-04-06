const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
//var mongoUtil = require( './Tests/server' );

//mongoUtil.connectToServer( function( err ) {
  // start the rest of your app here

const mongoose = require('mongoose');
let dev_db_url = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
//const uri = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
const mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB);
const MongoClient = require('mongodb').MongoClient;

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
  const collection = client.db("Mongod").collection("checkpro");
  console.log('Connection established with database');
  client.close();
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use('/products', product);


  let port = 1234;
  app.listen(port, () => {
    console.log('Server is up and running on port Number ' + port);
  });


  /*  const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("Mongo").collection("Products");
    console.log('Connection established with database');
    client.close();
  });*/
