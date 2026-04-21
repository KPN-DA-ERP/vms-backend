const express = require("express");
const route = express.Router();
const controller = require("../controllers/ApiController");
const apiAuth = require("../middleware/apiAuth");

route.post("/vendor/list", apiAuth, controller.getData);

module.exports = route;
