
const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
try{
    let dev_db_url = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
    mongoose.connect(dev_db_url, {dbName: 'Mongo'},{ useNewUrlParser: true });
    }
    catch(err){
      console.log(err);
    }
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
