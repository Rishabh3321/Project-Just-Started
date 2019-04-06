const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const library_controller = require('../controllers/library.controller');


// a simple test url to check that all of our files are communicating correctly.

router.get('/test', library_controller.test);
router.post('/:memberId/Dashboard',test.html);
//router.get('/create', product_controller.test2);
//router.post('/create', library_controller.library_create);
//router.get('/:id', library_controller.library_details);
//router.put('/:id/update', library_controller.library_update);
//router.delete('/:id/delete', library_controller.library_delete);
module.exports = router;
//.post('/cate', product_controller.product_create);
