/**
 * LetAllDoGood : ResponseFactory.
 * @author raunak, Mindstix Software Labs.
 *
 * @desc Service Factory : Instantiates available services during application's bootstrap.
 */
// Dependencies
var log4js = require('log4js');
var path = require('path');
var _ = require('underscore');

 /* Logger */
var logger = log4js.getLogger('ResponseFactory');

var error = "Something went wrong";
// variable to send a failure response
var responseFailure = {
    "payload": {"status": "500", "message": error}
};
// variable to send a success response
var responseSuccess = {
    "payload": {"status": "200", "response": {}}
};

/**
 * Factory method to return a Express middleware method. This 'closure' pattern
 * helps us access the validationRule within the express middleware at runtime.
 */

/**
 * Response Helper : send
 * @description Send generic response with status and message.
 * @param res : Object
 * @param statusCode : Integer
 * @param data : JSON
 */
function send(res, statusCode,  data) {

    if (statusCode == null) {

        responseSuccess.payload.response = data;
        res.send(responseSuccess);
        return
    }

    responseSuccess.payload.status = statusCode;
    responseSuccess.payload.response = data;

    res.send(statusCode, responseSuccess);
    return;
}

/**
 * Response Helper : send
 * @description Send generic response with status and message.
 * @param res : Object
 * @param statusCode : Integer
 * @param data : JSON
 */
function sendSuccess(res,  data) {
    send(res, 200, data);
    return;
}
/**
 * Response Helper : sendError
 * @description Send Error Specific response
 * @param res : Object
 * @param statusCode : Integer
 * @param errData : String
 */
function sendError( res, statusCode,  errData ) {

    responseFailure.payload.status = statusCode;
    responseFailure.payload.message = errData;

    res.send(statusCode, errData);
    return;
}

/**
 * Response Helper : sendBadRequest
 * @description Send Bad request - response
 * @param res : Object
 * @param errData : String
 */
function sendBadRequest( res,  errMsg ) {

    sendError(res, 400, errMsg);
    return;
}
/**
* Response Helper : sendUnauthorizedRequest
* @description Send unauthorized  - response
* @param res : Object
* @param errData : String
*/
function sendUnauthorizedRequest( res,  errMsg ) {
    sendError(res, 401, errMsg);
    return;
}
/**
 * Response Helper : sendNotFound
 * @description Send Not Found - response
 * @param res : Object
 * @param errData : String
 */
function sendNotFound( res,  errMsg ) {
    sendError(res,  404,  errMsg);
    return;
}

/**
 * Response Helper : sendServerError
 * @description Send Internal Server Error - response
 * @param res : Object
 * @param errData : String
 */
function sendServerError( res,  errMsg ) {
    sendError(res,  500,  errMsg);
    return;
}

module.exports = {
//    send : send,
    sendSuccess: sendSuccess,
    sendError:sendError,
    sendBadRequest:sendBadRequest,
    sendUnauthorizedRequest:sendUnauthorizedRequest,
    sendNotFound :sendNotFound,
    sendServerError :sendServerError
}