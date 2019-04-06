const Product = require('../models/product.model');
/*exports.test2 = function (req, res) {
res.send('Greetings from the Test controller2 check!');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Mongo").collection("Products");
  console.log(req.body.name + req.body.price)
    collection.insertOne({ name:req.body.name  ,price:req.body.price  });
      client.close();
});
};
*/





//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
     console.log(req.body.name + req.body.price)
      //  collection.insertOne({ name:req.body.name ,price:req.body.price });
      let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
        );
//Modified .save request
      product.save()
        .then((data)=> {
            res.send('Product Created successfully');
            console.log(data);
          })
        .catch((err)=> {
          console.log(err);
        })
/*  product.save(function (err) {
      console.log('entered inside save function');
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    });*/
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product updated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
/*exports.test2 = function (req, res) {
    res.send('Greetings from the Test controller2 check!');
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("Mongo").collection("Products");
      collection.insertOne({ id: 1, username: 'Steve' });
        collection.insertOne({ id: 1, username: 'Mac'});
      // perform actions on the collection object
      //var query = { firstName: /^P/ };
  //collection.find(query).toArray(function(err, result) {
  //  if (err) throw err;
    //console.log(result);
      client.close();
    //``});*/




  /*  const mongoose = require('mongoose');
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://rishabh:ajita@productapp-vz3rq.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      if (err) throw err});
    const collection = client.db("Mongo").collection("Products");
        */
