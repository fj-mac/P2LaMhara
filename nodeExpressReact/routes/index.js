var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/productos", function(req, res, next) {

  const productos=[
    {id:1, nombre:"Cartera", precio:"40000"},
    {id:2, nombre:"Cartera", precio:"40000"},
    {id:3, nombre:"Cartera", precio:"40000"},
    {id:4, nombre:"Cartera", precio:"40000"},
    {id:5, nombre:"Cartera", precio:"40000"},
    {id:6, nombre:"Cartera", precio:"40000"},

  ];

  res.json(productos);
});

module.exports = router;
