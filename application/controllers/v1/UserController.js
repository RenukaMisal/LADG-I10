//
// User Controller
//

// Dependencies
var log4js = require('log4js'); 
var express = require("express");
var path = require('path');
var util = require('util');
var Joi = require('joi');

// Logger
var logger = log4js.getLogger('UserController');

// Service Dependencies
var userService = global.app.services.getService("User");

// Exposed Routes
//var router = express.Router();
//router.post("/user", this.createUser);

/**
 * REST API to Create User
 * */
function createUser(req, res, next) {

	/*Request Trace*/
	logger.debug("Req UUID: " + req.uuid);
	logger.debug("Device Type" + JSON.stringify(req.device));
	logger.debug("Cookies: " + util.inspect(req.cookies));
	logger.debug("Body: " + util.inspect(req.body));

	/*Validate required field*/
	var userObject = req.body;
	userService.createUser(userObject, function(err, user){
		if(err){
			logger.error("Error while creating user", err);
			res.send("Failed");
			return;
		}
		logger.info("User created successfully. User Id :", user);
		res.send("Success");
	});
}

//
// REST API: Fetch All Users
//
function fetchAllUsers(req, res, next) {

	// Request Trace
	logger.debug("Sign Up: Req UUID: " + req.uuid);
	logger.debug("Sign Up: Device Type" + JSON.stringify(req.device));
	logger.debug("Cookies: " + util.inspect(req.cookies));
	logger.debug("Body: " + util.inspect(req.body));

	// Delegate to Service
	userService.fetchAllUsers(function cb(users){

		// Generate REST Response
		res.json(users);
		return;		

	});

}

//
// Render View: All Users
//
function renderAllUsers(req, res, next) {

	// Request Trace
	logger.debug("Sign Up: Req UUID: " + req.uuid);
	logger.debug("Sign Up: Device Type" + JSON.stringify(req.device));
	logger.debug("Cookies: " + util.inspect(req.cookies));
	logger.debug("Body: " + util.inspect(req.body));

	// Delegate to Service
	userService.fetchAllUsers(function cb(users) {

		// Render view
		res.render("users", {"userList": users});
		return;		

	});

}

// Interface
//module.exports = router;
module.exports = {
	"createUser":createUser
}