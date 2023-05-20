const express = require("express");
const router = express.Router();

// Import your controller or handler functions
const { helloWorld, getData, addData } = require("./app.controller");

// Define routes and their corresponding handlers
router.get("/", helloWorld);
router.get("/users", getData);
router.get("/addUsers", addData);

module.exports = router;