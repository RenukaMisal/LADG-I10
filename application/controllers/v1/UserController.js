 /**
  * LetAllDoGood : UserController.
  * @author raunak, Mindstix Software Labs.
  */

/* Dependencies*/
var log4js = require('log4js'); 
var path = require('path');
var util = require('util');

/* Logger */
var logger = log4js.getLogger('UserController');

/* Service Dependencies*/
var userService = global.app.services.getService("User");

/*Response Handler*/
var resHandler =  global.app.resHandler;

/**
 * REST API to Create User
 * */
function createUser(req, res) {

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
			resHandler.sendServerError(res, Failed);
			return;
		}
		logger.info("User created successfully. User Id :", user);
//		res.send("Success");
		resHandler.sendSuccess(res, "Success");
	});
}

/* Interface */
module.exports = {
	"createUser":createUser
}