const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.

  router.get('/test', product_controller.test);
router.get('/create', product_controller.test2);

module.exports = router;
//.post('/cate', product_controller.product_create);
