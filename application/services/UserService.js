//
// User Service Example
// @author Roshan
//

// Dependencies
var log4js = require('log4js'); 
var config = require('config');

// Logger
var logger= log4js.getLogger('UserService');

// Models
var USER = app.db.getModel('USER');

//
// Create New User
//
function createUser (userObj, callback) {

	//Check User Object

	logger.debug("Creating New User: %s", JSON.stringify(userObj));

	try{
		var user = new USER(userObj);
		user.save();
		callback(null,user._id);
	}catch(e){
		logger.error("Exception " , e.toString);
		callback("Exception", null);
	}

}

/**
 * Fetch user
 *
 * @param String email
 * @return User Object
 * */
function fetchUser(email, callback){
	logger.debug("Fetching user detail for "+ email);
	try{
		USER.find({email:email}).lean().exec(function(err, user){
			if(err){
				logger.error("Error while fetching user details", err);
				callback(err, null);
				return;
			}
			logger.debug("User Details ", user);
			callback(null, user);
		});
	}
	catch(e){
		logger.error("Exception", e);
		callback("Exception", null);
	}
}

//
// Fetch All Users
//
function fetchAllUsers(cb) {
	logger.debug("Fetching all users.");
	USER.find(function(err, users) {
		logger.debug("User Data: %s", JSON.stringify(users));
		cb(users);
	});
	return true;	
}

// Interface
module.exports = {
	createUser:createUser,
	fetchUser:fetchUser,
	fetchAllUsers: fetchAllUsers
}
