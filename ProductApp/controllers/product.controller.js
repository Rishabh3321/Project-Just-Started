const Product = require('../models/product.model');

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
