var express = require('express'); // import express
var router = express.Router(); //initiation express router

/**
* Route /portofolio Method GET
*/
router.get('/', function(req, res, next) {
    res.render('subpage/portofolio/index', {
      title: 'Portofolio | PDM-11',
      layout: "layouts/custom-layout" //set layout using custom layout
    });
 });

router.get('/index', function(req, res, next) {
res.redirect('/');
});

module.exports = router;