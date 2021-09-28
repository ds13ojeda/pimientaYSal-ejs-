var express = require('express');
var router = express.Router();
var detailController = require("../controllers/detailController")

/* GET product detail */
router.get("/:id", detailController.detail)
  
  module.exports = router;