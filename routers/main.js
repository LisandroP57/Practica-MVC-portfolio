const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController.js");

router.get("/", controller.main);
router.get("/home", controller.main);
module.exports = router;