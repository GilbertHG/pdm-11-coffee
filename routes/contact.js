var express = require('express'); // import express
var router = express.Router(); //initiation express router

/**
* Route /contact Method GET
*/
router.get('/', function(req, res, next) {
    res.render('subpage/contact/index', {
      title: 'Contact | PDM-11',
      layout: "layouts/custom-layout" //set layout using custom layout
    });
 });

router.get('/index', function(req, res, next) {
res.redirect('/');
});

module.exports = router;