'use strict';

const 
    express = require('express'),
    router = express.Router(),
    bibliotecas = require('../db.json');

router.get("/", function(req,res){
    res.render('index',{
        data: bibliotecas
    });
  });

router.get("/coropletas", function(req,res){
    res.render('coropletas',{
        data: bibliotecas
    });
  });

module.exports = router;